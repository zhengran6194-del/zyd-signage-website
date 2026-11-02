'use client';

import { useEffect, useState } from 'react';

export default function InternalTestNotice() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => { setEnabled(Boolean(window.__zydInternalTest)); }, []);
  if (!enabled) return null;
  return (
    <aside role="status" style={{position:'fixed',bottom:0,left:0,right:0,zIndex:2147483647,background:'#102a43',color:'#fff',padding:'10px 16px',fontSize:14,textAlign:'center'}}>
      内部测试模式：本浏览器不计入访问、WhatsApp 点击或询盘统计。测试表单仍会发送邮件。
      {' '}<a href="/?zyd_internal=0" style={{color:'#fff',textDecoration:'underline'}}>退出测试模式</a>
    </aside>
  );
}
