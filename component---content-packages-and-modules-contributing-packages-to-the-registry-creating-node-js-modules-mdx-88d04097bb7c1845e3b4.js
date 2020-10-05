(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{FuMD:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("O6H6"),o={},r={_frontmatter:o},c=i.a;function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Node.js modules are a type of ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"about-packages-and-modules"}),"package")," that can be published to npm."),Object(l.b)("h2",null,"Overview"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"#create-a-package-json-file"}),"Create a ",Object(l.b)("inlineCode",{parentName:"a"},"package.json")," file")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"#create-the-file-that-will-be-loaded-when-your-module-is-required-by-another-application"}),"Create the file that will be loaded when your module is required by another application")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"#test-your-module"}),"Test your module"))),Object(l.b)("h2",null,"Create a ",Object(l.b)("inlineCode",{parentName:"h2"},"package.json")," file"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"To create a ",Object(l.b)("inlineCode",{parentName:"li"},"package.json")," file, on the command line, in the root directory of your Node.js module, run ",Object(l.b)("inlineCode",{parentName:"li"},"npm init"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"For ",Object(l.b)("a",Object.assign({parentName:"li"},{href:"about-scopes"}),"scoped modules"),", run ",Object(l.b)("inlineCode",{parentName:"li"},"npm init --scope=@scope-name")),Object(l.b)("li",{parentName:"ul"},"For ",Object(l.b)("a",Object.assign({parentName:"li"},{href:"creating-and-publishing-unscoped-public-packages"}),"unscoped modules"),", run ",Object(l.b)("inlineCode",{parentName:"li"},"npm init")))),Object(l.b)("li",{parentName:"ol"},"Provide responses for the required fields (",Object(l.b)("inlineCode",{parentName:"li"},"name")," and ",Object(l.b)("inlineCode",{parentName:"li"},"version"),"), as well as the ",Object(l.b)("inlineCode",{parentName:"li"},"main")," field:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"name"),": The name of your module."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"version"),": The initial module version. We recommend following ",Object(l.b)("a",Object.assign({parentName:"li"},{href:"about-semantic-versioning"}),"semantic versioning guidelines")," and starting with ",Object(l.b)("inlineCode",{parentName:"li"},"1.0.0"),".")))),Object(l.b)("p",null,"For more information on ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),' files, see "',Object(l.b)("a",Object.assign({parentName:"p"},{href:"creating-a-package-json-file"}),"Creating a package.json file"),'".'),Object(l.b)("h2",null,"Create the file that will be loaded when your module is required by another application"),Object(l.b)("p",null,"In the file, add a function as a property of the ",Object(l.b)("inlineCode",{parentName:"p"},"exports")," object. This will make the function available to other code:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),'exports.printMsg = function() {\n  console.log("This is a message from the demo package");\n}\n')),Object(l.b)("h2",null,"Test your module"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Publish your package to npm:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"For ",Object(l.b)("a",Object.assign({parentName:"li"},{href:"creating-and-publishing-private-packages#publishing-private-packages"}),"private packages")," and ",Object(l.b)("a",Object.assign({parentName:"li"},{href:"creating-and-publishing-unscoped-public-packages#publishing-unscoped-public-packages"}),"unscoped packages"),", use ",Object(l.b)("inlineCode",{parentName:"li"},"npm publish"),"."),Object(l.b)("li",{parentName:"ul"},"For ",Object(l.b)("a",Object.assign({parentName:"li"},{href:"creating-and-publishing-scoped-public-packages#publishing-scoped-public-packages"}),"scoped public packages"),", use ",Object(l.b)("inlineCode",{parentName:"li"},"npm publish --access public")))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"On the command line, create a new test directory outside of your project directory."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object.assign({parentName:"pre"},{}),"mkdir test-directory\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Switch to the new directory:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object.assign({parentName:"pre"},{}),"cd /path/to/test-directory\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"In the test directory, install your module:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object.assign({parentName:"pre"},{}),"npm install <your-module-name>\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"In the test directory, create a ",Object(l.b)("inlineCode",{parentName:"p"},"test.js")," file which requires your module and calls your module as a method.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"On the command line, run ",Object(l.b)("inlineCode",{parentName:"p"},"node test.js"),". The message sent to the console.log should appear."))),Object(l.b)("h2",null,"Resources"),Object(l.b)("iframe",{src:"https://www.youtube.com/embed/3I78ELjTzlQ",frameBorder:"0",allowFullScreen:!0}))}b.isMDXComponent=!0},O6H6:function(e,t,a){"use strict";var n=a("vOnD"),l=a("u9kb"),i=a("aOgs"),o=a("q1tI"),r=a.n(o),c=a("7ljp"),b=a("pD55"),p=a("8Aig"),m=a("ReZb"),s=a("GCVy"),u=a("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var j=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=a("gnlW"),O=a("mwnC"),g=a("/Rw0"),f=a("dVM4"),y=Object(n.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function N(e){var t=e.items,a=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:a>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:a+1}):null)})))}N.defaultProps={depth:0};var k=N,E=a("MfeC");function w(e){var t=E.a.getPath(e.location.pathname),a=E.a.getVariantAndPage(e.root,t);if(!a)return null;var n=E.a.getVariantsForPage(e.root,a.page),i=[],o=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},i)))}w.Menu=Object(n.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=w,v=Object(n.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(n.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),T=Object(n.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,o=a.frontmatter,y=o.title,N=o.description,w=o.status,F=o.source,z=o.additionalContributors,M=void 0===z?[]:z,P=E.a.getVariantRoot(n.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:s.a,Prompt:d,PromptReply:j,Screenshot:h.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(b.a,{title:y,description:N}),r.a.createElement(p.b,{location:n}),r.a.createElement(v,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{location:n})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),N))),null!=P?r.a.createElement(I,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:n})):null),a.tableOfContents.items?r.a.createElement(T,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(k,{items:a.tableOfContents.items})):null,r.a.createElement(S,null,w||F?r.a.createElement(l.k,{mb:3,alignItems:"center"},w?r.a.createElement(f.a,{status:w}):null,r.a.createElement(l.e,{mx:"auto"}),F?r.a.createElement(g.a,{href:F}):null):null,a.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(k,{items:a.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editUrl:a.editUrl,contributors:a.contributors.concat(M.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-packages-and-modules-contributing-packages-to-the-registry-creating-node-js-modules-mdx-88d04097bb7c1845e3b4.js.map