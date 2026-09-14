const sharp=require("sharp");
const fs=require("fs"),p=require("path");
(async()=>{
const d="public/assets/images";
const b="zyd-static-backup/pre-optimize-originals-20260914";
const bk=fs.existsSync(b)?fs.readdirSync(b):[];
console.log("originals backup files: "+bk.length);
let flagged=0,total=0;
const files=fs.readdirSync(d).sort();
for(const f of files){
  const full=p.join(d,f);
  try{
    const m=await sharp(full).metadata();
    const st=fs.statSync(full);
    const s=await sharp(full).stats();
    const maxSd=Math.max.apply(null,s.channels.map(c=>c.stdev));
    let line=f.padEnd(38)+String(m.format).padEnd(6)+(m.width+"x"+m.height).padEnd(12)+(st.size/1024).toFixed(0).padStart(5)+"KB";
    let tag="";
    if(bk.indexOf(f)>=0){
      const om=await sharp(p.join(b,f)).metadata();
      const oar=om.width/om.height, nar=m.width/m.height;
      const drift=Math.abs(oar-nar)/oar*100;
      line+="  orig "+om.width+"x"+om.height+" ARdrift="+drift.toFixed(2)+"%";
      if(drift>1) tag+=" [AR_DRIFT]";
    }
    if(maxSd<2){tag+=" [DEGENERATE?]";}
    if(tag) flagged++;
    total+=st.size;
    console.log(line+tag);
  }catch(e){ console.log(f.padEnd(38)+"DECODE_FAIL "+e.message); flagged++; }
}
console.log("");
console.log("--- files="+files.length+"  totalMB="+(total/1048576).toFixed(2)+"  flagged="+flagged);
})();
