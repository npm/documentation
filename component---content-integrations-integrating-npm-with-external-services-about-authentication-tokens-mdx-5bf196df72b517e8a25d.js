(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),s=n("pD55"),m=n("8Aig"),u=n("ReZb"),p=n("GCVy"),d=n("+6vE");var b=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),v=n("dVM4"),k=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function E(e){var t=e.items,n=e.depth;return r.a.createElement(k,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var w=E,O=n("MfeC");function x(e){var t=O.a.getPath(e.location.pathname),n=O.a.getVariantAndPage(e.root,t);if(!n)return null;var a=O.a.getVariantsForPage(e.root,n.page),l=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),l.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,i.variant.title),r.a.createElement(x.Menu,{direction:e.direction,width:e.menuWidth},l)))}x.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=x,j=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),_=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),N=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),W=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,k=i.title,E=i.description,x=i.status,z=i.source,D=i.additionalContributors,M=void 0===D?[]:D,P=O.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:b,PromptReply:h,Screenshot:g.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:k,description:E}),r.a.createElement(m.b,{location:a}),r.a.createElement(j,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{location:a})),r.a.createElement(_,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(I,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},k),E))),null!=P?r.a.createElement(N,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(W,null,x||z?r.a.createElement(o.k,{mb:3,alignItems:"center"},x?r.a.createElement(v.a,{status:x}):null,r.a.createElement(o.e,{mx:"auto"}),z?r.a.createElement(y.a,{href:z}):null):null,n.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:l.b,mr:2}):r.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},j5h7:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return u}));var a,o=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),r={},c=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),s={_frontmatter:r},m=i.a;function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(m,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(c,{mdxType:"Note"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," You must be using npm version 5.5.1 or greater to use authentication tokens.")),Object(l.b)("p",null,"An authentication token is a hexadecimal string that gives you the right to publish and access your modules. Whenever you log in to npm, we generate an authentication token for you."),Object(l.b)("p",null,"You can also create an authentication token to give other tools (such as continuous integration testing environments) access to your npm packages. For example, Travis CI provides an environment variable that you can set to an npm token value, which gives Travis CI the ability to run npm as your npm user. When Travis CI runs, it will be able to complete npm tasks as you, including installing private packages you can access."),Object(l.b)("p",null,"You can work with tokens from the web or the CLI, whichever is easiest. What you do in each environment will be reflected in the other environment."),Object(l.b)("p",null,"npm token commands let you:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"View tokens for easier tracking and management"),Object(l.b)("li",{parentName:"ul"},"Create new tokens, specifying read-only or full-permission"),Object(l.b)("li",{parentName:"ul"},"Limit access according to IP address ranges (CIDR)"),Object(l.b)("li",{parentName:"ul"},"Delete/revoke tokens")),Object(l.b)("p",null,'For more information on creating and viewing authentication tokens on the web and CLI, see "',Object(l.b)("a",Object.assign({parentName:"p"},{href:"creating-and-viewing-authentication-tokens"}),"Creating and viewing authentication tokens"),'".'))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-integrations-integrating-npm-with-external-services-about-authentication-tokens-mdx-5bf196df72b517e8a25d.js.map