(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),s=n("pD55"),m=n("8Aig"),p=n("ReZb"),b=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=n("gnlW"),f=n("mwnC"),j=n("/Rw0"),O=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function k(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(k,{items:e.items,depth:n+1}):null)})))}k.defaultProps={depth:0};var E=k,N=n("MfeC");function v(e){var t=N.a.getPath(e.location.pathname),n=N.a.getVariantAndPage(e.root,t);if(!n)return null;var a=N.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},i)))}v.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=v,C=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,k=o.description,v=o.status,M=o.source,T=o.additionalContributors,W=void 0===T?[]:T,A=N.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:p.a,Note:b.a,Prompt:d,PromptReply:g,Screenshot:h.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:y,description:k}),r.a.createElement(m.b,{location:a}),r.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),k))),null!=A?r.a.createElement(I,null,r.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:A,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(E,{items:n.tableOfContents.items})):null,r.a.createElement(z,null,v||M?r.a.createElement(l.k,{mb:3,alignItems:"center"},v?r.a.createElement(O.a,{status:v}):null,r.a.createElement(l.e,{mx:"auto"}),M?r.a.createElement(j.a,{href:M}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(E,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},"m+4i":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm ci\n")),Object(l.b)("h3",null,"Example"),Object(l.b)("p",null,"Make sure you have a package-lock and an up-to-date install:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ cd ./my/npm/project\n$ npm install\nadded 154 packages in 10s\n$ ls | grep package-lock\n")),Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"npm ci")," in that project"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ npm ci\nadded 154 packages in 5s\n")),Object(l.b)("p",null,"Configure Travis to build using ",Object(l.b)("inlineCode",{parentName:"p"},"npm ci")," instead of ",Object(l.b)("inlineCode",{parentName:"p"},"npm install"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),'# .travis.yml\ninstall:\n- npm ci\n# keep the npm cache around to speed up installs\ncache:\n  directories:\n  - "$HOME/.npm"\n')),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This command is similar to ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"/cli/v6/commands/npm-install"}),Object(l.b)("inlineCode",{parentName:"a"},"npm install")),", except it's meant to be used in\nautomated environments such as test platforms, continuous integration, and\ndeployment -- or any situation where you want to make sure you're doing a clean\ninstall of your dependencies. It can be significantly faster than a regular npm\ninstall by skipping certain user-oriented features. It is also more strict than\na regular install, which can help catch errors or inconsistencies caused by the\nincrementally-installed local environments of most npm users."),Object(l.b)("p",null,"In short, the main differences between using ",Object(l.b)("inlineCode",{parentName:"p"},"npm install")," and ",Object(l.b)("inlineCode",{parentName:"p"},"npm ci")," are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The project ",Object(l.b)("strong",{parentName:"li"},"must")," have an existing ",Object(l.b)("inlineCode",{parentName:"li"},"package-lock.json")," or ",Object(l.b)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json"),"."),Object(l.b)("li",{parentName:"ul"},"If dependencies in the package lock do not match those in ",Object(l.b)("inlineCode",{parentName:"li"},"package.json"),", ",Object(l.b)("inlineCode",{parentName:"li"},"npm ci")," will exit with an error, instead of updating the package lock."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm ci")," can only install entire projects at a time: individual dependencies cannot be added with this command."),Object(l.b)("li",{parentName:"ul"},"If a ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," is already present, it will be automatically removed before ",Object(l.b)("inlineCode",{parentName:"li"},"npm ci")," begins its install."),Object(l.b)("li",{parentName:"ul"},"It will never write to ",Object(l.b)("inlineCode",{parentName:"li"},"package.json")," or any of the package-locks: installs are essentially frozen.")),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-install"}),"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/configuring-npm/package-locks"}),"package-locks"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-ci-md-b869fbf2af4f08e78c39.js.map