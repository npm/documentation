(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),m=n("pD55"),u=n("8Aig"),s=n("ReZb"),p=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),g=n("mwnC"),O=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function E(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var v=E,w=n("MfeC");function N(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(N.Menu,{direction:e.direction,width:e.menuWidth},i)))}N.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=N,x=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,E=o.description,N=o.status,D=o.source,W=o.additionalContributors,z=void 0===W?[]:W,B=w.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:p.a,Prompt:d,PromptReply:h,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:y,description:E}),r.a.createElement(u.b,{location:a}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{location:a})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),E))),null!=B?r.a.createElement(S,null,r.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:B,location:a})):null),n.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:u.a+24,mt:"6px",maxHeight:"calc(100vh - "+u.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,N||D?r.a.createElement(l.k,{mb:3,alignItems:"center"},N?r.a.createElement(j.a,{status:N}):null,r.a.createElement(l.e,{mx:"auto"}),D?r.a.createElement(O.a,{href:D}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(b.a,{editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},Sa0c:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"    npm fund [<pkg>]\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This command retrieves information on how to fund the dependencies of\na given project. If no package name is provided, it will list all\ndependencies that are looking for funding in a tree-structure in which\nare listed the type of funding and the url to visit. If a package name\nis provided then it tries to open its funding url using the ",Object(l.b)("inlineCode",{parentName:"p"},"--browser"),"\nconfig param; if there are multiple funding sources for the package, the\nuser will be instructed to pass the ",Object(l.b)("inlineCode",{parentName:"p"},"--which")," command to disambiguate."),Object(l.b)("p",null,"The list will avoid duplicated entries and will stack all packages\nthat share the same type/url as a single entry. Given this nature the\nlist is not going to have the same shape of the output from ",Object(l.b)("inlineCode",{parentName:"p"},"npm ls"),"."),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,"browser"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: OS X: ",Object(l.b)("inlineCode",{parentName:"li"},'"open"'),", Windows: ",Object(l.b)("inlineCode",{parentName:"li"},'"start"'),", Others: ",Object(l.b)("inlineCode",{parentName:"li"},'"xdg-open"')),Object(l.b)("li",{parentName:"ul"},"Type: String")),Object(l.b)("p",null,"The browser that is called by the ",Object(l.b)("inlineCode",{parentName:"p"},"npm fund")," command to open websites."),Object(l.b)("h4",null,"json"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Boolean"),Object(l.b)("li",{parentName:"ul"},"Default: false")),Object(l.b)("p",null,"Show information in JSON format."),Object(l.b)("h4",null,"unicode"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Boolean"),Object(l.b)("li",{parentName:"ul"},"Default: true")),Object(l.b)("p",null,"Whether to represent the tree structure using unicode characters.\nSet it to ",Object(l.b)("inlineCode",{parentName:"p"},"false")," in order to use all-ansi output."),Object(l.b)("h4",null,"which"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Number"),Object(l.b)("li",{parentName:"ul"},"Default: undefined")),Object(l.b)("p",null,"If there are multiple funding sources, which 1-indexed source URL to open."),Object(l.b)("h2",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-docs"}),"npm docs")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-config"}),"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-install"}),"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-ls"}),"npm ls"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-fund-md-5c6ea8000e88035110b1.js.map