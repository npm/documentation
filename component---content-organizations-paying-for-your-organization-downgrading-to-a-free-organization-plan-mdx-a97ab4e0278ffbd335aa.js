(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{JHhf:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return p}));var a,o=n("zLVn"),l=n("q1tI"),r=n("7ljp"),i=n("O6H6"),c=n("4LHR"),m={},u=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),s={_frontmatter:m},b=i.a;function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(b,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(u,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," This article only applies to users of the public npm registry.")),Object(r.b)("p",null,"If you are a subscriber to the npm Teams product (you have a paid organization) and you are an owner of the organization, then you can downgrade from npm Teams to a free organization.  When you downgrade from a paid to a free organization, you and your organization members will lose the ability to install and publish private packages at the end of your last paid billing cycle. Your private packages will ",Object(r.b)("em",{parentName:"p"},"not")," be made publicly visible when you downgrade to a free plan."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:"),' If you would like to pay for fewer seats, you can remove members from your organization by following the steps in "',Object(r.b)("a",Object.assign({parentName:"p"},{href:"removing-members-from-your-org"}),"Removing members from your organization"),'".'),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)(l.Fragment,null,c.a["user-login"].text),Object(r.b)(l.Fragment,null,c.a["user-login"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(l.Fragment,null,c.a["profile-settings"].text),Object(r.b)(l.Fragment,null,c.a["profile-settings"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the left sidebar, click the name of the organization you want to downgrade."),Object(r.b)(l.Fragment,null,c.a["organization-selection"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(l.Fragment,null,c.a["organization-billing-tab"].text),Object(r.b)(l.Fragment,null,c.a["organization-billing-tab"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(l.Fragment,null,c.a["billing-downgrade-selection"].text),Object(r.b)(l.Fragment,null,c.a["billing-downgrade-selection"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(l.Fragment,null,c.a["billing-downgrade-confirm"].text),Object(r.b)(l.Fragment,null,c.a["billing-downgrade-confirm"].image))))}p.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),m=n("pD55"),u=n("8Aig"),s=n("ReZb"),b=n("GCVy"),p=n("+6vE");var d=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return i.a.createElement("strong",null,t)},f=n("gnlW"),y=n("mwnC"),h=n("/Rw0"),O=n("dVM4"),E=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function w(e){var t=e.items,n=e.depth;return i.a.createElement(E,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var j=w,v=n("MfeC");function x(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,r.variant.title),i.a.createElement(x.Menu,{direction:e.direction,width:e.menuWidth},l)))}x.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=x,_=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),N=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),C=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),z=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),F=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,E=r.title,w=r.description,x=r.status,S=r.source,M=r.additionalContributors,T=void 0===M?[]:M,W=v.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:s.a,Note:b.a,Prompt:d,PromptReply:g,Screenshot:f.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:E,description:w}),i.a.createElement(u.b,{location:a}),i.a.createElement(_,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(y.a,{location:a})),i.a.createElement(N,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(C,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},E),w))),null!=W?i.a.createElement(z,null,i.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?i.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:u.a+24,mt:"6px",maxHeight:"calc(100vh - "+u.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(j,{items:n.tableOfContents.items})):null,i.a.createElement(F,null,x||S?i.a.createElement(o.k,{mb:3,alignItems:"center"},x?i.a.createElement(O.a,{status:x}):null,i.a.createElement(o.e,{mx:"auto"}),S?i.a.createElement(h.a,{href:S}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:l.b,mr:2}):i.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(j,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(p.a,{editUrl:n.editUrl,contributors:n.contributors.concat(T.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-organizations-paying-for-your-organization-downgrading-to-a-free-organization-plan-mdx-a97ab4e0278ffbd335aa.js.map