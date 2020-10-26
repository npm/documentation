(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{"2G4O":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("O6H6"),l={},r={_frontmatter:l},c=i.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Organizations cannot be renamed from the website or command line interface."),Object(o.b)("p",null,"To rename an organization, as an organization owner, you must manually migrate your existing organization members, teams, and packages to a new organization, then ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/support"}),"contact npm Support")," to have the outdated packages unpublished and the previous organization deleted."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"creating-an-organization"}),"Create a new organization")," with the name you want. If your old organization is on a paid plan, you must choose a paid plan for the new organization."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"adding-members-to-your-organization"}),"Add the members")," of your old organization to your new organization."),Object(o.b)("li",{parentName:"ol"},"In your new organization, ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"creating-teams"}),"create teams")," to match teams in your old organization."),Object(o.b)("li",{parentName:"ol"},"Republish packages to the new organization by updating the package scope in its ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")," file to match the new organizationanization name and running ",Object(o.b)("inlineCode",{parentName:"li"},"npm publish"),"."),Object(o.b)("li",{parentName:"ol"},"In the new organization teams, ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"managing-team-access-to-packages"}),"configure package access")," to match team package access in your old organization."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://www.npmjs.com/support"}),"Contact npm Support")," to have the outdated packages unpublished and the previous organization deleted.")))}m.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),i=n("aOgs"),l=n("q1tI"),r=n.n(l),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),u=n("ReZb"),p=n("GCVy"),d=n("+6vE");var b=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),E=n("dVM4"),w=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function O(e){var t=e.items,n=e.depth;return r.a.createElement(w,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(O,{items:e.items,depth:n+1}):null)})))}O.defaultProps={depth:0};var j=O,k=n("MfeC");function v(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),i=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),i.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,l.variant.title),r.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},i)))}v.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=v,z=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),N=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,w=l.title,O=l.description,v=l.status,M=l.source,W=l.additionalContributors,A=void 0===W?[]:W,P=k.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:b,PromptReply:g,Screenshot:h.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:w,description:O}),r.a.createElement(s.b,{location:a}),r.a.createElement(z,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{location:a})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},w),O))),null!=P?r.a.createElement(N,null,r.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:a})):null),n.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(j,{items:n.tableOfContents.items})):null,r.a.createElement(S,null,v||M?r.a.createElement(o.k,{mb:3,alignItems:"center"},v?r.a.createElement(E.a,{status:v}):null,r.a.createElement(o.e,{mx:"auto"}),M?r.a.createElement(y.a,{href:M}):null):null,n.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:i.b,mr:2}):r.a.createElement(o.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(j,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(A.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-organizations-creating-and-managing-organizations-renaming-an-organization-mdx-e2bec0d357ac731bddb8.js.map