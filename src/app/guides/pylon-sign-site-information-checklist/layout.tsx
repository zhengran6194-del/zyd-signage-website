import type { Metadata } from 'next';
import { buildPageMetadata, siteConfig } from '@/config/site';
import JsonLd from '@/components/JsonLd';
const path = '/guides/pylon-sign-site-information-checklist';
const title = "What Site Information Do You Need Before Ordering a Pylon Sign?";
const description = "Prepare a pylon sign site brief with photos, dimensions, utilities, electrical supply, foundation interfaces and delivery access before production.";
export const metadata: Metadata = buildPageMetadata({ title, description, path, type: 'article', image: {"path":"/assets/images/pylon-sign-site-information-overview.png","width":1536,"height":1024,"alt":"Illustration of a site survey for a pylon sign, with site photos, dimensions and local requirements"} });
export default function Layout({children}: Readonly<{children:React.ReactNode}>) {
const url = siteConfig.url + path;
const data = {'@context':'https://schema.org','@graph':[{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:siteConfig.url},{'@type':'ListItem',position:2,name:'Guides',item:siteConfig.url+'/guides'},{'@type':'ListItem',position:3,name:title,item:url}]},{'@type':'Article','@id':url+'#article',headline:title,description,inLanguage:'en',mainEntityOfPage:{'@type':'WebPage','@id':url},author:{'@type':'Person',name:'Aaron'},publisher:{'@id':siteConfig.url+'/#organization'},datePublished:'2026-10-24',dateModified:'2026-10-24',image:["/assets/images/pylon-sign-site-information-overview.png","/assets/images/pylon-sign-position-dimensions.png","/assets/images/pylon-sign-underground-utility-review.png","/assets/images/pylon-sign-foundation-interface.png","/assets/images/pylon-sign-foundation-installation-overview.png"].map(p=>siteConfig.url+p),citation:'https://www.hse.gov.uk/pubns/books/hsg47.htm'}]};
return <><JsonLd data={data}/>{children}</>;
}
