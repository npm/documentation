(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{"9n5p":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),r={},i={_frontmatter:r},c=o.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"When choosing a name for your package, choose a name that"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"is unique"),Object(l.b)("li",{parentName:"ul"},"is descriptive"),Object(l.b)("li",{parentName:"ul"},"meets ",Object(l.b)("a",Object.assign({parentName:"li"},{href:"https://www.npmjs.com/policies"}),"npm policy guidelines"),". For example, do not give your package an offensive name, and do not use someone else's trademarked name or violate the ",Object(l.b)("a",Object.assign({parentName:"li"},{href:"https://www.npmjs.com/policies/trademark#the-npm-trademark-policy"}),"npm trademark policy"),".")),Object(l.b)("p",null,"Additionally, when choosing a name for an ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"creating-and-publishing-unscoped-public-packages"}),Object(l.b)("strong",{parentName:"a"},"unscoped")," package"),", also choose a name that"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"is not already owned by someone else"),Object(l.b)("li",{parentName:"ul"},"is not spelled in a similar way to another package name"),Object(l.b)("li",{parentName:"ul"},"will not confuse others about authorship")))}m.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),u=n("ReZb"),p=n("GCVy"),d=n("+6vE");var b=function(e){var t=e.children;return i.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var f=function(e){var t=e.children;return i.a.createElement("strong",null,t)},h=n("gnlW"),g=n("mwnC"),y=n("/Rw0"),E=n("dVM4"),w=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function O(e){var t=e.items,n=e.depth;return i.a.createElement(w,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(O,{items:e.items,depth:n+1}):null)})))}O.defaultProps={depth:0};var k=O,v=n("MfeC");function j(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),o=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),o.push(i.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(l.i,{overlay:e.overlay},i.a.createElement(l.i.Button,null,r.variant.title),i.a.createElement(j.Menu,{direction:e.direction,width:e.menuWidth},o)))}j.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=j,_=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),N=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,w=r.title,O=r.description,j=r.status,W=r.source,M=r.additionalContributors,A=void 0===M?[]:M,P=v.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:b,PromptReply:f,Screenshot:h.a}},i.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:w,description:O}),i.a.createElement(s.b,{location:a}),i.a.createElement(_,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(l.e,{display:["none",null,null,"block"]},i.a.createElement(g.a,{location:a})),i.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(N,null,i.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(l.e,null,i.a.createElement(l.e,null,i.a.createElement(l.m,{as:"h1"},w),O))),null!=P?i.a.createElement(I,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:a})):null),n.tableOfContents.items?i.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(k,{items:n.tableOfContents.items})):null,i.a.createElement(z,null,j||W?i.a.createElement(l.k,{mb:3,alignItems:"center"},j?i.a.createElement(E.a,{status:j}):null,i.a.createElement(l.e,{mx:"auto"}),W?i.a.createElement(y.a,{href:W}):null):null,n.tableOfContents.items?i.a.createElement(l.e,{display:["block",null,"none"],mb:3},i.a.createElement(l.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(l.r,{icon:o.b,mr:2}):i.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),i.a.createElement(l.e,{pt:1},i.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(A.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-packages-and-modules-contributing-packages-to-the-registry-package-name-guidelines-mdx-4e66e801e6db62e21db3.js.map