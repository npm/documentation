(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),r=n("aOgs"),l=n("q1tI"),i=n.n(l),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),u=n("ReZb"),p=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return i.a.createElement("strong",null,t)},f=n("gnlW"),g=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function k(e){var t=e.items,n=e.depth;return i.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(k,{items:e.items,depth:n+1}):null)})))}k.defaultProps={depth:0};var w=k,v=n("MfeC");function C(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),r=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),r.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,l.variant.title),i.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},r)))}C.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=C,x=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),N=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),D=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,j=l.title,k=l.description,C=l.status,M=l.source,P=l.additionalContributors,R=void 0===P?[]:P,z=v.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:d,PromptReply:h,Screenshot:f.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:j,description:k}),i.a.createElement(s.b,{location:a}),i.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(g.a,{location:a})),i.a.createElement(N,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},j),k))),null!=z?i.a.createElement(I,null,i.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:a})):null),n.tableOfContents.items?i.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(w,{items:n.tableOfContents.items})):null,i.a.createElement(D,null,C||M?i.a.createElement(o.k,{mb:3,alignItems:"center"},C?i.a.createElement(O.a,{status:C}):null,i.a.createElement(o.e,{mx:"auto"}),M?i.a.createElement(y.a,{href:M}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:r.b,mr:2}):i.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(b.a,{editUrl:n.editUrl,contributors:n.contributors.concat(R.map((function(e){return{login:e}})))}))))))}},e8Sw:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("O6H6"),l={},i={_frontmatter:l},c=r.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can use authentication tokens to test private npm packages with continuous integration (CI) servers, or deploy them to continuous deployment (CD) servers."),Object(o.b)("h2",null,"Create a new authentication token"),Object(o.b)("p",null,"Create a new authentication token that will be used only to access npm packages from a CI/CD server."),Object(o.b)("h3",null,"Continuous integration"),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"npm token create")," will generate a token with both read and write permissions. When generating a token for use in a continuous integration environment, we recommend creating a read-only token:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm token create --read-only\n")),Object(o.b)("p",null,'For more information on creating authentication tokens, including CIDR-whitelisted tokens, see "',Object(o.b)("a",Object.assign({parentName:"p"},{href:"creating-and-viewing-authentication-tokens"}),"Creating an authentication token"),'".'),Object(o.b)("h3",null,"Continuous deployment"),Object(o.b)("p",null,"Since continuous deployment environments usually involve the creation of a deploy artifact, the token likely will need read and write permissions, which are granted with the standard token creation command:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm token create\n")),Object(o.b)("h3",null,"CIDR whitelists"),Object(o.b)("p",null,"For increased security, you may use a CIDR-whitelisted token that can only be used from a certain IP address range. You can use a CIDR whitelist with a read and publish token or a read-only token:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm token create --cidr=[list]\nnpm token create --read-only --cidr=[list]\n")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm token create --cidr=192.0.2.0/24\n")),Object(o.b)("p",null,'For more information, see "',Object(o.b)("a",{href:"creating-and-viewing-authentication-tokens"},"Creating and viewing authentication tokens"),'".'),Object(o.b)("h2",null,"Set the token as an environment variable on the CI/CD server"),Object(o.b)("p",null,"Set your token as an environment variable on the CI/CD server and your development machine. In OSX or Linux, add this line to your ",Object(o.b)("inlineCode",{parentName:"p"},"~/.profile"),", replacing the example token with your own:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),'export NPM_TOKEN="00000000-0000-0000-0000-000000000000"\n')),Object(o.b)("p",null,"and then refresh your environment variables:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"source ~/.profile\n")),Object(o.b)("h2",null,"Create and check in a project-specific .npmrc file"),Object(o.b)("p",null,"Use a project-specific ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file with a variable for your token to securely authenticate your CI/CD server with npm."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the root directory of your project, create a custom ",Object(o.b)("a",{href:"https://docs.npmjs.com/cli-documentation/files/npmrc"},Object(o.b)("inlineCode",{parentName:"p"},".npmrc"))," file with the following contents:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object.assign({parentName:"pre"},{}),"//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check in the ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file."))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-integrations-integrating-npm-with-external-services-using-private-packages-in-a-ci-cd-workflow-mdx-ed7f27c0a3666520bd30.js.map