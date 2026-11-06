import type { Metadata } from 'next';
import { buildPageMetadata, siteConfig } from '@/config/site';
import JsonLd from '@/components/JsonLd';
const path="/guides/pylon-sign-cost";
const title="Pylon Sign Cost: What Affects Your Project Quote?";
const description="Understand custom pylon sign cost: dimensions, single or double faces, tenant panels, lighting, steel framing, wooden crating and freight. Get a project quote.";
export const metadata: Metadata=buildPageMetadata({title,description,path,type:'article',image:{path:"/assets/images/pylon-water-plaza-installed.jpg",width:5647,height:3765,alt:"Installed multi-tenant pylon sign at Water Fashion Plaza in Dalian"}});
export default function Layout({children}:Readonly<{children:React.ReactNode}>){
const url=siteConfig.url+path;
return <><JsonLd data={{'@context':'https://schema.org','@graph':[{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:siteConfig.url},{'@type':'ListItem',position:2,name:'Guides',item:siteConfig.url+'/guides'},{'@type':'ListItem',position:3,name:title,item:url}]},{'@type':'Article','@id':url+'#article',headline:title,description,mainEntityOfPage:url,author:{'@id':siteConfig.url+'/#aaron'},publisher:{'@id':siteConfig.url+'/#organization'},datePublished:'2026-11-06',dateModified:'2026-11-06',image:siteConfig.url+"/assets/images/pylon-water-plaza-installed.jpg"}]}}/>{children}</>;}
