(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),r=a("u9kb"),c=a("aOgs"),i=a("q1tI"),l=a.n(i),b=a("7ljp"),o=a("pD55"),s=a("8Aig"),m=a("ReZb"),g=a("GCVy"),p=a("+6vE");var d=function(e){var t=e.children;return l.a.createElement(r.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},l.a.createElement(r.s,{fontFamily:"mono",fontSize:1},t))};var O=function(e){var t=e.children;return l.a.createElement("strong",null,t)},j=a("gnlW"),u=a("mwnC"),N=a("/Rw0"),f=a("dVM4"),y=Object(n.f)(r.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function h(e){var t=e.items,a=e.depth;return l.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(r.e,{as:"li",key:e.url,pl:a>0?3:0},l.a.createElement(r.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(h,{items:e.items,depth:a+1}):null)})))}h.defaultProps={depth:0};var E=h,v=a("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),a=v.a.getVariantAndPage(e.root,t);if(!a)return null;var n=v.a.getVariantsForPage(e.root,a.page),c=[],i=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(i=e),c.push(l.a.createElement(r.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),l.a.createElement(r.i,{overlay:e.overlay},l.a.createElement(r.i.Button,null,i.variant.title),l.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},c)))}w.Menu=Object(n.f)(r.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=w,k=Object(n.f)(r.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(n.f)(r.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(r.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),z=Object(n.f)(r.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),X=Object(n.f)(r.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(n.f)(r.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,i=a.frontmatter,y=i.title,h=i.description,w=i.status,M=i.source,A=i.additionalContributors,S=void 0===A?[]:A,R=v.a.getVariantRoot(n.pathname);return l.a.createElement(b.a,{components:{Index:m.a,Note:g.a,Prompt:d,PromptReply:O,Screenshot:j.a}},l.a.createElement(r.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(o.a,{title:y,description:h}),l.a.createElement(s.b,{location:n}),l.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(r.e,{display:["none",null,null,"block"]},l.a.createElement(u.a,{location:n})),l.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(_,null,l.a.createElement(r.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(r.e,null,l.a.createElement(r.e,null,l.a.createElement(r.m,{as:"h1"},y),h))),null!=R?l.a.createElement(z,null,l.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:R,location:n})):null),a.tableOfContents.items?l.a.createElement(X,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},l.a.createElement(r.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(E,{items:a.tableOfContents.items})):null,l.a.createElement(I,null,w||M?l.a.createElement(r.k,{mb:3,alignItems:"center"},w?l.a.createElement(f.a,{status:w}):null,l.a.createElement(r.e,{mx:"auto"}),M?l.a.createElement(N.a,{href:M}):null):null,a.tableOfContents.items?l.a.createElement(r.e,{display:["block",null,"none"],mb:3},l.a.createElement(r.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.s,{as:"summary",fontWeight:"bold"},t?l.a.createElement(r.r,{icon:c.b,mr:2}):l.a.createElement(r.r,{icon:c.c,mr:2}),"Table of contents"),l.a.createElement(r.e,{pt:1},l.a.createElement(E,{items:a.tableOfContents.items})))}))):null,t,l.a.createElement(p.a,{editUrl:a.editUrl,contributors:a.contributors.concat(S.map((function(e){return{login:e}})))}))))))}},hYde:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));var n,r=a("zLVn"),c=a("q1tI"),i=a("7ljp"),l=a("O6H6"),b=a("4LHR"),o={},s=(n="Note",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),m={_frontmatter:o},g=l.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(g,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are three roles in an organization:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Owner:")," Users who manage organization members and billing."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Admin:")," Users who manage team membership and package access."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Member:")," Users who create and publish packages in the organization scope.")),Object(i.b)(c.Fragment,null,Object(i.b)("strong",null,"On the public registry, you cannot remove the last owner from an organization.")," To delete an organization, ",b.a["contact-support"].text,"."),Object(i.b)(s,{mdxType:"Note"},Object(i.b)(c.Fragment,null,Object(i.b)("strong",null,"npm Enterprise users:")," If you are using npm Enterprise, deactivating the only owner of an organization will cause that organization to be ownerless. If you have deactivated the last owner of an organization on an npm Enterprise instance, ",b.a["contact-enterprise-support"].text,".")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Action"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"th"},"Owner")),Object(i.b)("th",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"th"},"Admin")),Object(i.b)("th",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"th"},"Member")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Manage organization billing"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Add members to the organization"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Remove members from the organization"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Rename an organization"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Delete an organization"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Change any organization member's role"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Create teams"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Delete teams"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Add any member to any team"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Remove any member from any team"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Manage team package access"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Create and publish packages in the organization scope"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"X")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-organizations-managing-organization-members-organization-roles-and-permissions-mdx-284958638ff309b375e5.js.map