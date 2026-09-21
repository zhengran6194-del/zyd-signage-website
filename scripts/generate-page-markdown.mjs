/**
 * Generates the Markdown mirror of each content page, as described by the
 * llmstxt.org proposal: a clean version of the page at the same URL with
 * `index.md` appended (the form the spec gives for URLs that carry no file
 * name).
 *
 * The source is the page's own prerendered HTML, so the Markdown cannot drift
 * from what the page actually says. Run after `next build`, before anything
 * reads public/.
 */
import fs from 'node:fs';
import path from 'node:path';

const APP_DIR = '.next/server/app';
const PUBLIC_DIR = 'public';
const SITE = 'https://www.zydsign.com';

// Directories whose children are content pages. Any page added to one of these
// routes is picked up automatically.
const ROUTE_GROUPS = [
  { prefix: '/products', dir: 'products' },
  { prefix: '/guides', dir: 'guides' },
  { prefix: '/case-studies', dir: 'case-studies' },
  { prefix: '/solutions', dir: 'solutions' },
];

// Pages that sit at the top level as a single HTML file rather than in a group:
// the standing pages, plus the three listing routes.
const TOP_LEVEL_PAGES = ['/about', '/contact', '/faq', '/products', '/guides', '/projects', '/solutions'];

const VOID_TAGS = new Set(['br', 'img', 'hr', 'input', 'meta', 'link', 'source', 'area', 'base', 'col', 'embed', 'track', 'wbr']);

/* ---------------------------------------------------------------- decoding */

const ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  mdash: '—', ndash: '–', hellip: '…', bull: '•', middot: '·',
  rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', rarr: '→', amp_: '&',
};

const decode = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(Number.parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number.parseInt(d, 10)))
    .replace(/&([a-z]+);/gi, (m, name) => ENTITIES[name.toLowerCase()] ?? m);

/* ----------------------------------------------------------------- parsing */

/** Minimal HTML parser: enough for well-formed output from a React renderer. */
function parse(html) {
  const root = { tag: 'root', children: [] };
  const stack = [root];
  const re = /<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)>|([^<]+)/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const [, closing, tag, attrs, selfClose, text] = m;
    if (text !== undefined) {
      const parent = stack[stack.length - 1];
      parent.children.push({ tag: 'text', text: decode(text) });
      continue;
    }
    if (tag === undefined) continue; // comment or CDATA: nothing to render
    if (closing === '') {
      const node = { tag: tag.toLowerCase(), attrs: parseAttrs(attrs), children: [] };
      stack[stack.length - 1].children.push(node);
      if (!VOID_TAGS.has(node.tag) && selfClose !== '/') stack.push(node);
    } else {
      for (let i = stack.length - 1; i > 0; i--) {
        if (stack[i].tag === tag.toLowerCase()) {
          stack.length = i;
          break;
        }
      }
    }
  }
  return root;
}

function parseAttrs(raw = '') {
  const attrs = {};
  for (const m of raw.matchAll(/([a-zA-Z-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g)) {
    attrs[m[1].toLowerCase()] = decode(m[2] ?? m[3] ?? m[4] ?? '');
  }
  return attrs;
}

/* -------------------------------------------------------------- rendering */

const abs = (href) => (href?.startsWith('http') ? href : `${SITE}${href ?? ''}`);

/**
 * Rendered pages point <img> at the Next image optimiser. A Markdown mirror
 * should name the underlying asset instead of an internal optimiser URL.
 */
const assetUrl = (src) => {
  if (!src) return '';
  const m = /\/_next\/image\?url=([^&]*)/.exec(src);
  const clean = m ? decodeURIComponent(m[1]) : src;
  return clean.startsWith('http') ? clean : `${SITE}${clean}`;
};

// Layout wrappers contribute no meaning of their own, but their children must be
// separated or adjacent blocks run together on one line.
const BLOCK_CONTAINERS = new Set(['div', 'section', 'article', 'aside', 'header', 'footer', 'main', 'nav']);

// Card listings wrap a whole card - tag, heading, paragraph, call to action - in
// a single <a>. Flattening that to one inline link glues the runs together and
// loses the URLs an agent needs, so such links are rendered as blocks with the
// target named underneath.
const BLOCK_TAGS = new Set([...BLOCK_CONTAINERS, 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'dl', 'table', 'blockquote', 'figure', 'pre']);

const hasBlockChild = (node) =>
  node.children.some((c) => BLOCK_TAGS.has(c.tag) || (c.tag !== 'text' && hasBlockChild(c)));

function render(node, ctx = { listDepth: 0 }) {
  /**
   * Two adjacent elements carry no whitespace between them in the HTML - the
   * page separates them with a flex gap - so they run together once the tags are
   * gone. Insert a separator, but only between elements and only when neither
   * side already supplies one, so words split across spans stay intact.
   */
  const kids = () => {
    let out = '';
    let prevWasElement = false;
    for (const child of node.children) {
      const piece = render(child, ctx);
      if (piece === '') continue;
      const isElement = child.tag !== 'text';
      if (out && prevWasElement && isElement && !/\s$/.test(out) && !/^\s/.test(piece)) out += ' ';
      out += piece;
      prevWasElement = isElement;
    }
    return out;
  };
  const inline = () => node.children.map((c) => renderInline(c, ctx)).join('');

  switch (node.tag) {
    case 'root':
      return kids();
    case 'text':
      return node.text;
    case 'script':
    case 'style':
    case 'noscript':
      return '';
    case 'svg':
      return '';
    case 'h1': return `\n\n# ${inline().trim()}\n\n`;
    case 'h2': return `\n\n## ${inline().trim()}\n\n`;
    case 'h3': return `\n\n### ${inline().trim()}\n\n`;
    case 'h4': return `\n\n#### ${inline().trim()}\n\n`;
    case 'p': return `\n\n${inline().trim()}\n\n`;
    case 'br': return '\n';
    case 'strong':
    case 'b': return `**${inline().trim()}**`;
    case 'em':
    case 'i': return `*${inline().trim()}*`;
    case 'a': {
      const href = node.attrs?.href;
      if (hasBlockChild(node)) {
        const inner = kids().trim();
        return `\n\n${inner}${href ? `\n\n<${abs(href)}>` : ''}\n\n`;
      }
      const text = inline().trim();
      if (!href) return text;
      return text ? `[${text}](${abs(href)})` : `<${abs(href)}>`;
    }
    case 'img': {
      const { src, alt } = node.attrs ?? {};
      if (!src) return '';
      return `![${alt ?? ''}](${assetUrl(src)})`;
    }
    case 'ul':
      return `\n\n${node.children.filter((c) => c.tag === 'li').map((li) => renderLi(li, ctx, 'ul')).join('')}\n\n`;
    case 'ol': {
      const items = node.children.filter((c) => c.tag === 'li');
      return `\n\n${items.map((li, i) => renderLi(li, ctx, 'ol', i + 1)).join('')}\n\n`;
    }
    case 'dl': {
      const parts = [];
      let term = null;
      for (const child of node.children) {
        if (child.tag === 'dt') {
          term = renderInline(child, ctx).trim();
        } else if (child.tag === 'dd') {
          parts.push(`- **${term ?? ''}**: ${renderInline(child, ctx).trim()}`);
          term = null;
        }
      }
      return `\n\n${parts.join('\n')}\n\n`;
    }
    case 'table':
      return `\n\n${renderTable(node, ctx)}\n\n`;
    case 'thead':
    case 'tbody':
      return '';
    case 'figure':
      // A figure's contents can sit inside layout wrappers, so render the whole
      // subtree instead of only direct img/figcaption children - otherwise an
      // image wrapped in a div is dropped from the mirror entirely.
      return `\n\n${kids()}\n\n`;
    case 'figcaption':
      return inline().trim() ? `\n\n*${inline().trim()}*\n\n` : '';
    case 'blockquote':
      return `\n\n> ${inline().trim()}\n\n`;
    case 'hr':
      return '\n\n---\n\n';
    default:
      if (BLOCK_CONTAINERS.has(node.tag)) return `\n\n${kids()}\n\n`;
      return kids();
  }
}

const inline2 = (node, ctx) => node.children.map((c) => renderInline(c, ctx)).join('');

function renderInline(node, ctx) {
  if (node.tag === 'text') return node.text;
  switch (node.tag) {
    case 'strong':
    case 'b': return `**${inline2(node, ctx).trim()}**`;
    case 'em':
    case 'i': return `*${inline2(node, ctx).trim()}*`;
    case 'a': {
      const text = inline2(node, ctx).trim();
      const href = node.attrs?.href;
      return href && text ? `[${text}](${abs(href)})` : text;
    }
    case 'img': {
      const { src, alt } = node.attrs ?? {};
      return src ? `![${alt ?? ''}](${assetUrl(src)})` : '';
    }
    case 'br': return ' ';
    case 'script':
    case 'style':
    case 'svg': return '';
    default: return inline2(node, ctx);
  }
}

function renderLi(li, ctx, kind, index) {
  const marker = kind === 'ol' ? `${index}. ` : '- ';
  const body = li.children
    .filter((c) => c.tag !== 'ul' && c.tag !== 'ol')
    .map((c) => renderInline(c, ctx))
    .join('')
    .trim();
  const nested = li.children
    .filter((c) => c.tag === 'ul' || c.tag === 'ol')
    .map((c) => render(c, ctx).trim())
    .join('\n');
  const indent = '  '.repeat(ctx.listDepth ?? 0);
  const nestedBlock = nested ? `\n${nested.split('\n').map((l) => `  ${l}`).join('\n')}` : '';
  return `${indent}${marker}${body}${nestedBlock}\n`;
}

function renderTable(table, ctx) {
  const rows = [];
  const collect = (node) => {
    for (const child of node.children) {
      if (child.tag === 'tr') rows.push(child);
      else if (child.tag === 'thead' || child.tag === 'tbody' || child.tag === 'tfoot') collect(child);
    }
  };
  collect(table);
  if (!rows.length) return '';
  const cellsOf = (tr) =>
    tr.children
      .filter((c) => c.tag === 'th' || c.tag === 'td')
      .map((c) => inline2(c, ctx).replace(/\s+/g, ' ').replace(/\|/g, '\\|').trim());
  const header = cellsOf(rows[0]);
  const body = rows.slice(1).map(cellsOf);
  const lines = [`| ${header.join(' | ')} |`, `| ${header.map(() => '---').join(' | ')} |`];
  for (const r of body) lines.push(`| ${r.join(' | ')} |`);
  return lines.join('\n');
}

/* ------------------------------------------------------------------ tidy up */

function tidy(md) {
  return (
    md
      // Adjacent inline elements carry no whitespace in the HTML, so a link can
      // end up glued to whatever follows it. Markdown needs the separator.
      .replace(/(\]\([^)]*\))(?=[^\s)\].,;:!?])/g, '$1 ')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .replace(/[ \t]{2,}/g, ' ')
      .trim() + '\n'
  );
}

/* -------------------------------------------------------------------- main */

const listPages = () => {
  const urls = [];
  for (const group of ROUTE_GROUPS) {
    const dir = path.join(APP_DIR, group.dir);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (file.endsWith('.html')) urls.push(`${group.prefix}/${file.replace(/\.html$/, '')}`);
    }
  }
  for (const url of TOP_LEVEL_PAGES) {
    if (fs.existsSync(path.join(APP_DIR, `${url.slice(1)}.html`))) urls.push(url);
  }
  return urls.sort();
};

const pages = listPages();
if (!pages.length) {
  console.error(`No prerendered pages found under ${APP_DIR}. Run "next build" first.`);
  process.exit(1);
}

let written = 0;
const failures = [];
for (const url of pages) {
  const htmlFile = path.join(APP_DIR, `${url.slice(1)}.html`);
  const raw = fs.readFileSync(htmlFile, 'utf8');
  const body = raw.replace(/<script>self\.__next_f\.push\([\s\S]*?\)<\/script>/g, '');
  const main = body.match(/<main[\s\S]*?<\/main>/);
  if (!main) {
    failures.push(`${url}: no <main> element in the prerendered HTML`);
    continue;
  }
  const md = tidy(render(parse(main[0])));
  const firstHeading = (md.match(/^#{1,6} /m) ?? [''])[0];
  if (firstHeading !== '# ') {
    failures.push(`${url}: the first heading in the generated Markdown is not an H1`);
    continue;
  }
  if (/<\/?(?:div|span|section|p|a|ul|li|h[1-6])\b/.test(md)) {
    failures.push(`${url}: generated Markdown still contains HTML tags`);
    continue;
  }
  // The mirror, the page's own rel="alternate" annotation and the llms.txt links
  // all have to name the same URL, so check the annotation is really in the HTML
  // rather than trusting that the metadata call did the right thing.
  const linkTags = raw.match(/<link[^>]*rel="alternate"[^>]*>/g) ?? [];
  const annotated = linkTags.some((tag) => /type="text\/markdown"/.test(tag) && tag.includes(`${url}/index.md`));
  if (!annotated) {
    failures.push(`${url}: HTML has no rel="alternate" type="text/markdown" pointing at ${url}/index.md`);
    continue;
  }

  const outFile = path.join(PUBLIC_DIR, url.slice(1), 'index.md');
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, md, 'utf8');
  written++;
  console.log(`  ${url}/index.md  (${md.length} chars)`);
}

if (failures.length) {
  console.error('\nMarkdown generation failed:');
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log(`\n${written} page markdown mirrors written to ${PUBLIC_DIR}/`);
