#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""One-off static audit for the ZYD signage site (D:\\外贸\\dlz).

Produces:
  audit/pages.csv    - every src/app route page with metadata/client flags
  audit/findings.json - static issues (severity/description/location)
No business code is modified.
"""
import csv
import json
import os
import re
from itertools import chain

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_APP = os.path.join(ROOT, "src", "app")
PUBLIC = os.path.join(ROOT, "public")
OUT_DIR = os.path.join(ROOT, "audit")
PAGES_CSV = os.path.join(OUT_DIR, "pages.csv")
FINDINGS_JSON = os.path.join(OUT_DIR, "findings.json")

CJK_RE = re.compile(r"[\u4e00-\u9fff]")
IMG_TAG_RE = re.compile(r"<img\b[^>]*>", re.S)
SRC_RE = re.compile(r'\bsrc=["\']([^"\']+)["\']', re.S)
HREF_RE = re.compile(r'\bhref=["\']([^"\']+)["\']')
NEXT_LINK_RE = re.compile(r'<Link\b[^>]*href=["\']([^"\']+)["\']')
NEXT_SCRIPT_RE = re.compile(r'<Script\b[^>]*src=["\']([^"\']+)["\']')
CSS_URL_RE = re.compile(r'url\(\s*["\']?([^"\')]+)["\']?\s*\)')

KNOWN_EXTERNAL_HOSTS = (
    "http://", "https://", "//", "mailto:", "tel:", "wa.me", "data:",
    "fonts.googleapis.com", "googletagmanager.com", "clarity.ms",
    "google.com", "gstatic.com",
)
# next/link accepts internal routes starting with "/" or "#", or full urls.
IMG_EXTS = (".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".avif", ".ico")


def path_to_route(rel_path):
    if rel_path == "page.tsx":
        return "/"
    return "/" + rel_path[:-len("page.tsx")].strip("/").replace(os.sep, "/")


def is_client(src):
    return bool(re.search(r"^\ufeff?(['\"])\s*use client\s*\1\s*;?\s*$", src, re.M))


def has_metadata_export(src):
    return bool(re.search(r"\bexport\s+(const|async\s+function|function)\s+(metadata|generateMetadata)\b", src))


def build_file_index():
    files = {}
    for dirpath, _dirs, filenames in os.walk(PUBLIC):
        for fn in filenames:
            full = os.path.join(dirpath, fn)
            rel = os.path.relpath(full, PUBLIC).replace(os.sep, "/")
            files["/" + rel] = True
    return files


def build_route_set():
    routes = set()
    for dirpath, _dirs, filenames in os.walk(SRC_APP):
        if "page.tsx" in filenames:
            rel = os.path.relpath(dirpath, SRC_APP).replace(os.sep, "/")
            route = "/" if rel == "." else "/" + rel
            routes.add(route)
    return routes


def findings_for_file(fpath, pub_index, route_set, pages):
    rel = os.path.relpath(fpath, ROOT).replace(os.sep, "/")
    try:
        with open(fpath, "r", encoding="utf-8") as fh:
            src = fh.read()
    except Exception as exc:  # pragma: no cover
        return [{"severity": "error", "description": f"无法读取文件: {exc}", "location": rel + ":1"}]
    out = []
    lines = src.splitlines()

    def loc_line(m):
        line_no = src[: m.start()].count("\n") + 1
        return f"{rel}:{line_no}"

    def is_external(u):
        return any(u.startswith(p) for p in KNOWN_EXTERNAL_HOSTS) or u.startswith("/api/")

    # 1) referenced static resources under /assets that do not exist in public
    seen_res = set()
    for m in re.finditer(r"[\"'`](/assets/[^\"'`)\s]+)", src):
        u = m.group(1).split("#")[0].split("?")[0]
        if not u.startswith("/assets/") or u in seen_res or "${" in u:
            # "${...}" template paths are dynamic and cannot be statically resolved
            continue
        seen_res.add(u)
        if u not in pub_index:
            out.append({
                "severity": "error",
                "description": f"资源不存在于 public: {u}",
                "location": loc_line(m),
            })

    # 2) <img> missing width/height (checked inside the tag only)
    for m in IMG_TAG_RE.finditer(src):
        tag = m.group(0)
        has_w = re.search(r"\bwidth\s*[=:]", tag)
        has_h = re.search(r"\bheight\s*[=:]", tag)
        if not (has_w and has_h):
            out.append({
                "severity": "warning",
                "description": f"<img> 缺少稳定尺寸属性 (width={bool(has_w)}, height={bool(has_h)})",
                "location": loc_line(m),
            })

    # 3) dead internal links (next/link href / <a href>) targeting nonexistent src/app routes
    for m in chain(NEXT_LINK_RE.finditer(src), HREF_RE.finditer(src)):
        u = m.group(1).split("#")[0].split("?")[0]
        if not u.startswith("/") or is_external(u) or u in ("/", ""):
            continue
        if u not in route_set:
            out.append({
                "severity": "error",
                "description": f"死链: 指向不存在的路由 {u}",
                "location": loc_line(m),
            })

    # 4) leftover TODO/placeholder/coming soon text (form placeholder="" attr excluded)
    for pat in (r"\bTODO\b", r"\bFIXME\b", r"Coming\s*Soon", r"Lorem\s+ipsum"):
        m = re.search(pat, src, re.I)
        if m:
            out.append({
                "severity": "warning",
                "description": f"残留占位/待办文本: {m.group(0)}",
                "location": loc_line(m),
            })

    # 5) non-product pages containing CJK content
    if "/products/" not in rel and "/products/page.tsx" not in rel:
        for m in re.finditer(CJK_RE, src):
            out.append({
                "severity": "warning",
                "description": "非产品页出现中文字符（残留中文）",
                "location": loc_line(m),
            })
            break

    # 6) page-level metadata coverage flag (reported once per page via pages.csv); route page
    #    missing any layout with metadata export at same or ancestor level is a finding.
    if fpath.endswith(os.sep + "page.tsx"):
        # derive layout candidates at same dir; a layout may exist in root
        route = path_to_route(os.path.relpath(fpath, SRC_APP))
        lpath = os.path.join(os.path.dirname(fpath), "layout.tsx")
        has_layout_meta = has_metadata_export(src)
        if os.path.exists(lpath):
            try:
                with open(lpath, "r", encoding="utf-8") as lh:
                    has_layout_meta = has_metadata_export(lh.read())
            except Exception:
                pass
        if not has_layout_meta:
            out.append({
                "severity": "warning",
                "description": f"页面 {route} 无 metadata/generateMetadata（SEO 覆盖缺失）",
                "location": rel + ":1",
            })

    # 7) css url() references that target public assets but don't exist
    if fpath.endswith(".css"):
        for m in CSS_URL_RE.finditer(src):
            u = m.group(1).split("#")[0].split("?")[0]
            if not u.startswith("/") or u in pub_index or not any(u.lower().endswith(e) for e in IMG_EXTS):
                continue
            out.append({
                "severity": "error",
                "description": f"CSS 引用的资源不存在: {u}",
                "location": loc_line(m),
            })

    return out


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    pub_index = build_file_index()
    route_set = build_route_set()

    # collect all page.tsx + layout.tsx + components + globals.css
    targets = []
    for dirpath, _dirs, filenames in os.walk(SRC_APP):
        for fn in filenames:
            if fn in ("page.tsx", "layout.tsx") or fn == "globals.css":
                targets.append(os.path.join(dirpath, fn))
    comp_dir = os.path.join(ROOT, "src", "components")
    if os.path.isdir(comp_dir):
        for dirpath, _dirs, filenames in os.walk(comp_dir):
            for fn in filenames:
                if fn.endswith(".tsx"):
                    targets.append(os.path.join(dirpath, fn))

    pages = []
    findings = []
    for fpath in sorted(targets):
        if fpath.endswith("page.tsx"):
            rel = os.path.relpath(fpath, SRC_APP).replace(os.sep, "/")
            route = path_to_route(rel)
            with open(fpath, "r", encoding="utf-8") as fh:
                src = fh.read()
            pages.append({
                "route": route,
                "file": os.path.relpath(fpath, ROOT).replace(os.sep, "/"),
                "is_client": is_client(src),
                "has_metadata": has_metadata_export(src),
                "layout_meta": False,
            })
        # page-level findings
        findings.extend(findings_for_file(fpath, pub_index, route_set, pages))

    # layout metadata inheritance check per page (own dir layout + ancestor layouts)
    for p in pages:
        d = os.path.dirname(os.path.join(ROOT, p["file"]))
        found = False
        while True:
            cand = os.path.join(d, "layout.tsx")
            if os.path.exists(cand):
                with open(cand, "r", encoding="utf-8") as fh:
                    if has_metadata_export(fh.read()):
                        found = True
                        break
            if d == SRC_APP:
                break
            d = os.path.dirname(d)
        p["layout_meta"] = found

    # write pages.csv
    with open(PAGES_CSV, "w", newline="", encoding="utf-8-sig") as fh:
        writer = csv.writer(fh)
        writer.writerow(["route", "file", "use_client", "has_metadata", "layout_metadata"])
        for p in sorted(pages, key=lambda x: x["route"]):
            writer.writerow([p["route"], p["file"], p["is_client"], p["has_metadata"], p["layout_meta"]])

    # write findings.json
    findings.sort(key=lambda f: ({"error": 0, "warning": 1, "info": 2}[f["severity"]], f["location"]))
    with open(FINDINGS_JSON, "w", encoding="utf-8") as fh:
        json.dump(findings, fh, ensure_ascii=False, indent=2)

    print(json.dumps({
        "pages_scanned": len(pages),
        "findings_total": len(findings),
        "by_severity": {s: sum(1 for f in findings if f["severity"] == s) for s in ("error", "warning", "info")},
        "pages_csv": PAGES_CSV,
        "findings_json": FINDINGS_JSON,
    }, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
