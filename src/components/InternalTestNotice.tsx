'use client';

import Link from 'next/link';
import { useSyncExternalStore } from 'react';

// The flag is written by the inline analytics guard in the root layout before
// hydration, so it is stable for the life of the page. Only the exit control
// mutates it, which is why the store is this small.
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return Boolean(window.__zydInternalTest);
}

// Server render and hydration both see "off", so the banner never causes a
// hydration mismatch; it appears on the render that follows hydration.
function getServerSnapshot() {
  return false;
}

function exitInternalMode() {
  try {
    window.localStorage.removeItem('zyd_internal');
  } catch {
    // Storage can be blocked; the in-memory flag still exits for this session.
  }
  window.__zydInternalTest = false;
  listeners.forEach((listener) => listener());
}

export default function InternalTestNotice() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!enabled) return null;
  return (
    <aside role="status" style={{position:'fixed',bottom:0,left:0,right:0,zIndex:2147483647,background:'#102a43',color:'#fff',padding:'10px 16px',fontSize:14,textAlign:'center'}}>
      内部测试模式：本浏览器不计入访问、WhatsApp 点击或询盘统计。测试表单仍会发送邮件。
      {' '}<Link href="/?zyd_internal=0" onClick={exitInternalMode} style={{color:'#fff',textDecoration:'underline'}}>退出测试模式</Link>
    </aside>
  );
}
