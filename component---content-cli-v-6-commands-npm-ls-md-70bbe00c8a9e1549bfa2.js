(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"Bm/P":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm ls [[<@scope>/]<pkg> ...]\n\naliases: list, la, ll\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This command will print to stdout all the versions of packages that are\ninstalled, as well as their dependencies, in a tree-structure."),Object(l.b)("p",null,"Positional arguments are ",Object(l.b)("inlineCode",{parentName:"p"},"name@version-range")," identifiers, which will\nlimit the results to only the paths to the packages named.  Note that\nnested packages will ",Object(l.b)("em",{parentName:"p"},"also")," show the paths to the specified packages.\nFor example, running ",Object(l.b)("inlineCode",{parentName:"p"},"npm ls promzard")," in npm's source tree will show:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"    npm@6.0.0 /path/to/npm\n    └─┬ init-package-json@0.0.4\n      └── promzard@0.1.5\n")),Object(l.b)("p",null,"It will print out extraneous, missing, and invalid packages."),Object(l.b)("p",null,"If a project specifies git urls for dependencies these are shown\nin parentheses after the name@version to make it easier for users to\nrecognize potential forks of a project."),Object(l.b)("p",null,"The tree shown is the logical dependency tree, based on package\ndependencies, not the physical layout of your node_modules folder."),Object(l.b)("p",null,"When run as ",Object(l.b)("inlineCode",{parentName:"p"},"ll")," or ",Object(l.b)("inlineCode",{parentName:"p"},"la"),", it shows extended information by default."),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,"json"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Show information in JSON format."),Object(l.b)("h4",null,"long"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Show extended information."),Object(l.b)("h4",null,"parseable"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Show parseable output instead of tree view."),Object(l.b)("h4",null,"global"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"List packages in the global install prefix instead of in the current\nproject."),Object(l.b)("h4",null,"depth"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Int")),Object(l.b)("p",null,"Max display depth of the dependency tree."),Object(l.b)("h4",null,"prod / production"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Boolean"),Object(l.b)("li",{parentName:"ul"},"Default: false")),Object(l.b)("p",null,"Display only the dependency tree for packages in ",Object(l.b)("inlineCode",{parentName:"p"},"dependencies"),"."),Object(l.b)("h4",null,"dev / development"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Boolean"),Object(l.b)("li",{parentName:"ul"},"Default: false")),Object(l.b)("p",null,"Display only the dependency tree for packages in ",Object(l.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(l.b)("h4",null,"only"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String")),Object(l.b)("p",null,'When "dev" or "development", is an alias to ',Object(l.b)("inlineCode",{parentName:"p"},"dev"),"."),Object(l.b)("p",null,'When "prod" or "production", is an alias to ',Object(l.b)("inlineCode",{parentName:"p"},"production"),"."),Object(l.b)("h4",null,"link"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Boolean"),Object(l.b)("li",{parentName:"ul"},"Default: false")),Object(l.b)("p",null,"Display only dependencies which are linked"),Object(l.b)("h4",null,"unicode"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Boolean"),Object(l.b)("li",{parentName:"ul"},"Default: true")),Object(l.b)("p",null,"Whether to represent the tree structure using unicode characters.\nSet it to false in order to use all-ansi output."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-config"}),"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/configuring-npm/npmrc"}),"npmrc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/configuring-npm/folders"}),"npm folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-install"}),"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-link"}),"npm link")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-prune"}),"npm prune")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-outdated"}),"npm outdated")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-update"}),"npm update"))))}b.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),b=n("pD55"),p=n("8Aig"),s=n("ReZb"),u=n("GCVy"),m=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var O=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),h=n("mwnC"),j=n("/Rw0"),g=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function N(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var v=N,E=n("MfeC");function k(e){var t=E.a.getPath(e.location.pathname),n=E.a.getVariantAndPage(e.root,t);if(!n)return null;var a=E.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},i)))}k.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=k,x=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),D=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,N=o.description,k=o.status,T=o.source,B=o.additionalContributors,z=void 0===B?[]:B,W=E.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:u.a,Prompt:d,PromptReply:O,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(b.a,{title:y,description:N}),r.a.createElement(p.b,{location:a}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(h.a,{location:a})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),N))),null!=W?r.a.createElement(D,null,r.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:n.tableOfContents.items})):null,r.a.createElement(I,null,k||T?r.a.createElement(l.k,{mb:3,alignItems:"center"},k?r.a.createElement(g.a,{status:k}):null,r.a.createElement(l.e,{mx:"auto"}),T?r.a.createElement(j.a,{href:T}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(m.a,{editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-ls-md-70bbe00c8a9e1549bfa2.js.map