(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),p=n("pD55"),s=n("8Aig"),d=n("ReZb"),m=n("GCVy"),u=n("+6vE");var b=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),g=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,n=e.depth;return r.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var v=E,w=n("MfeC");function x(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(x.Menu,{direction:e.direction,width:e.menuWidth},o)))}x.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=x,N=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),k=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,j=i.title,E=i.description,x=i.status,D=i.source,A=i.additionalContributors,M=void 0===A?[]:A,T=w.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:d.a,Note:m.a,Prompt:b,PromptReply:h,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:j,description:E}),r.a.createElement(s.b,{location:a}),r.a.createElement(N,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{location:a})),r.a.createElement(k,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},j),E))),null!=T?r.a.createElement(I,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:T,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:n.tableOfContents.items})):null,r.a.createElement(z,null,x||D?r.a.createElement(l.k,{mb:3,alignItems:"center"},x?r.a.createElement(O.a,{status:x}):null,r.a.createElement(l.e,{mx:"auto"}),D?r.a.createElement(y.a,{href:D}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},pnTe:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),i={},r={_frontmatter:i},c=o.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm dedupe\nnpm ddp\n\naliases: find-dupes, ddp\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"Searches the local package tree and attempts to simplify the overall\nstructure by moving dependencies further up the tree, where they can\nbe more effectively shared by multiple dependent packages."),Object(l.b)("p",null,"For example, consider this dependency graph:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),"a\n+-- b <-- depends on c@1.0.x\n|   `-- c@1.0.3\n`-- d <-- depends on c@~1.0.9\n    `-- c@1.0.10\n")),Object(l.b)("p",null,"In this case, ",Object(l.b)("inlineCode",{parentName:"p"},"npm dedupe")," will transform the tree to:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"a\n+-- b\n+-- d\n`-- c@1.0.10\n")),Object(l.b)("p",null,"Because of the hierarchical nature of node's module lookup, b and d\nwill both get their dependency met by the single c package at the root\nlevel of the tree."),Object(l.b)("p",null,"In some cases, you may have a dependency graph like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),"a\n+-- b <-- depends on c@1.0.x\n+-- c@1.0.3\n`-- d <-- depends on c@1.x\n    `-- c@1.9.9\n")),Object(l.b)("p",null,"During the installation process, the ",Object(l.b)("inlineCode",{parentName:"p"},"c@1.0.3")," dependency for ",Object(l.b)("inlineCode",{parentName:"p"},"b")," was\nplaced in the root of the tree.  Though ",Object(l.b)("inlineCode",{parentName:"p"},"d"),"'s dependency on ",Object(l.b)("inlineCode",{parentName:"p"},"c@1.x")," could\nhave been satisfied by ",Object(l.b)("inlineCode",{parentName:"p"},"c@1.0.3"),", the newer ",Object(l.b)("inlineCode",{parentName:"p"},"c@1.9.0")," dependency was used,\nbecause npm favors updates by default, even when doing so causes\nduplication."),Object(l.b)("p",null,"Running ",Object(l.b)("inlineCode",{parentName:"p"},"npm dedupe")," will cause npm to note the duplication and\nre-evaluate, deleting the nested ",Object(l.b)("inlineCode",{parentName:"p"},"c")," module, because the one in the root is\nsufficient."),Object(l.b)("p",null,"To prefer deduplication over novelty during the installation process, run\n",Object(l.b)("inlineCode",{parentName:"p"},"npm install --prefer-dedupe")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm config set prefer-dedupe true"),"."),Object(l.b)("p",null,"Arguments are ignored. Dedupe always acts on the entire tree."),Object(l.b)("p",null,"Note that this operation transforms the dependency tree, but will never\nresult in new modules being installed."),Object(l.b)("p",null,"Using ",Object(l.b)("inlineCode",{parentName:"p"},"npm find-dupes")," will run the command in ",Object(l.b)("inlineCode",{parentName:"p"},"--dry-run")," mode."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli-commands/ls"}),"npm ls")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli-commands/update"}),"npm update")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli-commands/install"}),"npm install"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-dedupe-md-0ee907c1f1774191e126.js.map