(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),p=n("pD55"),u=n("8Aig"),s=n("ReZb"),m=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,n=e.depth;return r.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(k,{items:e.items,depth:n+1}):null)})))}k.defaultProps={depth:0};var w=k,v=n("MfeC");function E(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),l=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),l.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,i.variant.title),r.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},l)))}E.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=E,N=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),W=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,j=i.title,k=i.description,E=i.status,T=i.source,P=i.additionalContributors,z=void 0===P?[]:P,M=v.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:g.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:j,description:k}),r.a.createElement(u.b,{location:a}),r.a.createElement(N,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{location:a})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},j),k))),null!=M?r.a.createElement(I,null,r.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:a})):null),n.tableOfContents.items?r.a.createElement(W,{display:["none",null,"block"],position:"sticky",top:u.a+24,mt:"6px",maxHeight:"calc(100vh - "+u.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(S,null,E||T?r.a.createElement(o.k,{mb:3,alignItems:"center"},E?r.a.createElement(O.a,{status:E}):null,r.a.createElement(o.e,{mx:"auto"}),T?r.a.createElement(y.a,{href:T}):null):null,n.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:l.b,mr:2}):r.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(b.a,{editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},"j/Hi":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return b}));var a,o=n("zLVn"),l=n("q1tI"),i=n("7ljp"),r=n("O6H6"),c=n("4LHR"),p={},u=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),s={_frontmatter:p},m=r.a;function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(m,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"How to unpublish"),Object(i.b)("p",null,"As a package owner or collaborator, if your package has no dependents, you can permanently remove it from the npm registry by using the CLI. You can ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"cli/unpublish"}),"unpublish")," within 72 hours of the initial publish. Beyond 72 hours,so you can still unpublish your package if ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/policies/unpublish"}),"it meets certain criteria"),"."),Object(i.b)(u,{mdxType:"Note"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Removing all the collaborators or teams from the package will not unpublish it.")),Object(i.b)("h3",null,"Unpublishing a single version of a package"),Object(i.b)("p",null,"To unpublish a single version of a package, run the following command, replacing ",Object(i.b)("inlineCode",{parentName:"p"},"<package-name>")," with the name of your package, and ",Object(i.b)("inlineCode",{parentName:"p"},"<version>")," with your version number:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),"npm unpublish <package-name>@<version>\n")),Object(i.b)("h3",null,"Unpublishing an entire package"),Object(i.b)("p",null,"To unpublish an entire package, run the following command, replacing ",Object(i.b)("inlineCode",{parentName:"p"},"<package-name>")," with the name of your package:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),"npm unpublish <package-name> -f\n")),Object(i.b)("p",null,"If you have ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"about-two-factor-authentication"}),"two-factor authentication")," enabled for writes, you will need to add a one-time password to the ",Object(i.b)("inlineCode",{parentName:"p"},"unpublish")," command, ",Object(i.b)("inlineCode",{parentName:"p"},"--otp=123456")," (where ",Object(i.b)("em",{parentName:"p"},"123456")," is the code from your authenticator app)."),Object(i.b)(l.Fragment,null,"If you need help unpublishing your package, please ",c.a["contact-support"].text,". If you are an Enterprise customer, please ",c.a["contact-enterprise-support"].text),".",Object(i.b)("h2",null,"When to unpublish"),Object(i.b)("p",null,"Unpublishing a package permanently removes the package from the registry so it is no longer available for other users to install. Once a package is unpublished, it cannot be republished. If you've unpublished a package by mistake, we'd recommend publishing again under a different name, or for unpublished versions, bumping the version number and publishing again."),Object(i.b)("p",null,"You might want to unpublish a package because you:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Published something accidentally."),Object(i.b)("li",{parentName:"ul"},"Wanted to test npm."),Object(i.b)("li",{parentName:"ul"},"Published content you ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://blog.npmjs.org/post/101934969510/oh-no-i-accidentally-published-private-data-to"}),"didn't intend to be public"),"."),Object(i.b)("li",{parentName:"ul"},"Want to rename a package. (The only way to rename a package is to re-publish it under a new name)")),Object(i.b)(u,{mdxType:"Note"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," ",Object(i.b)("inlineCode",{parentName:"p"},"package-name@version")," is unique, and cannot be reused by unpublishing and re-publishing it. We recommend publishing a minor version update instead.")),Object(i.b)("h2",null,"When to deprecate"),Object(i.b)("p",null,"If you are no longer interested in maintaining a package, but want it to remain available for users to install, or if your package has dependents, we'd recommend ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"cli/deprecate"}),"deprecating"),' it. To learn about how to deprecate a package, see "',Object(i.b)("a",Object.assign({parentName:"p"},{href:"deprecating-and-undeprecating-packages-or-package-versions"}),"Deprecating and undeprecating packages or package versions"),'".'))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-updating-and-managing-your-published-packages-unpublishing-packages-from-the-registry-mdx-c9ce2a2ec4d619c2c76b.js.map