import type { Metadata } from 'next';
import { buildPageMetadata, siteConfig } from '@/config/site';
import JsonLd from '@/components/JsonLd';
const path="/guides/ordering-channel-letters-from-manufacturer";
const title="Ordering Channel Letters from a Manufacturer: What to Send";
const description="Get free channel letter design support from Aaron. Prepare artwork, dimensions, lighting, mounting details and destination to confirm drawings, timing and freight.";
export const metadata: Metadata=buildPageMetadata({title,description,path,type:'article',image:{path:"/assets/images/guides/halo-lit-channel-letters-installation-template.jpg",width:1441,height:1080,alt:"Channel letters and logo arranged on a full-size workshop positioning template"}});
export default function Layout({children}:Readonly<{children:React.ReactNode}>){
const url=siteConfig.url+path;
return <><JsonLd data={{'@context':'https://schema.org','@graph':[{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:siteConfig.url},{'@type':'ListItem',position:2,name:'Guides',item:siteConfig.url+'/guides'},{'@type':'ListItem',position:3,name:title,item:url}]},{'@type':'Article','@id':url+'#article',headline:title,description,mainEntityOfPage:url,author:{'@id':siteConfig.url+'/#aaron'},publisher:{'@id':siteConfig.url+'/#organization'},datePublished:'2026-11-06',dateModified:'2026-11-06',image:siteConfig.url+"/assets/images/guides/halo-lit-channel-letters-installation-template.jpg"}]}}/>{children}</>;}
