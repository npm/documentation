(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),i=n("aOgs"),l=n("q1tI"),r=n.n(l),s=n("7ljp"),c=n("pD55"),m=n("8Aig"),p=n("ReZb"),u=n("GCVy"),b=n("+6vE");var h=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var d=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),g=n("mwnC"),y=n("/Rw0"),j=n("dVM4"),w=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function O(e){var t=e.items,n=e.depth;return r.a.createElement(w,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(O,{items:e.items,depth:n+1}):null)})))}O.defaultProps={depth:0};var k=O,v=n("MfeC");function N(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),i=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),i.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,l.variant.title),r.a.createElement(N.Menu,{direction:e.direction,width:e.menuWidth},i)))}N.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=N,E=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),A=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,w=l.title,O=l.description,N=l.status,T=l.source,M=l.additionalContributors,Y=void 0===M?[]:M,D=v.a.getVariantRoot(a.pathname);return r.a.createElement(s.a,{components:{Index:p.a,Note:u.a,Prompt:h,PromptReply:d,Screenshot:f.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:w,description:O}),r.a.createElement(m.b,{location:a}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(I,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},w),O))),null!=D?r.a.createElement(_,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:D,location:a})):null),n.tableOfContents.items?r.a.createElement(A,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(k,{items:n.tableOfContents.items})):null,r.a.createElement(S,null,N||T?r.a.createElement(o.k,{mb:3,alignItems:"center"},N?r.a.createElement(j.a,{status:N}):null,r.a.createElement(o.e,{mx:"auto"}),T?r.a.createElement(y.a,{href:T}):null):null,n.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:i.b,mr:2}):r.a.createElement(o.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(b.a,{editUrl:n.editUrl,contributors:n.contributors.concat(Y.map((function(e){return{login:e}})))}))))))}},drBD:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("O6H6"),l={},r={_frontmatter:l},s=i.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(s,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document describes the steps that you should take to resolve module name\ndisputes with other npm publishers. It also describes special steps you should\ntake about names you think infringe your trademarks."),Object(o.b)("p",null,"This document is a clarification of the acceptable behavior outlined in the\n",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/policies/conduct"}),"npm Code of Conduct"),", and nothing in\nthis document should be interpreted to contradict any aspect of the npm Code of\nConduct."),Object(o.b)("h3",null,"TL;DR"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Get the author email with ",Object(o.b)("inlineCode",{parentName:"li"},"npm owner ls <pkgname>")),Object(o.b)("li",{parentName:"ol"},"Email the author, CC ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"mailto:support@npmjs.com"}),"support@npmjs.com")),Object(o.b)("li",{parentName:"ol"},"After a few weeks, if there's no resolution, we'll sort it out.")),Object(o.b)("p",null,"Don't squat on package names.  Publish code or move out of the way."),Object(o.b)("h3",null,"Description"),Object(o.b)("p",null,"There sometimes arise cases where a user publishes a module, and then later,\nsome other user wants to use that name. Here are some common ways that happens\n(each of these is based on actual events.)"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Alice writes a JavaScript module ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),", which is not node-specific. Alice\ndoesn't use node at all. Yusuf wants to use ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," in node, so he wraps it in\nan npm module. Some time later, Alice starts using node, and wants to take\nover management of her program.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Yusuf writes an npm module ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),", and publishes it. Perhaps much later, Alice\nfinds a bug in ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),", and fixes it. She sends a pull request to Yusuf, but\nYusuf doesn't have the time to deal with it, because he has a new job and a\nnew baby and is focused on his new Erlang project, and kind of not involved\nwith node any more. Alice would like to publish a new ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),", but can't,\nbecause the name is taken.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Yusuf writes a 10-line flow-control library, and calls it ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),", and\npublishes it to the npm registry. Being a simple little thing, it never\nreally has to be updated. Alice works for Foo Inc, the makers of the\ncritically acclaimed and widely-marketed ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," JavaScript toolkit framework.\nThey publish it to npm as ",Object(o.b)("inlineCode",{parentName:"p"},"foojs"),", but people are routinely confused when\n",Object(o.b)("inlineCode",{parentName:"p"},"npm install foo")," is some different thing.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Yusuf writes a parser for the widely-known ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," file format, because he\nneeds it for work. Then, he gets a new job, and never updates the prototype.\nLater on, Alice writes a much more complete ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," parser, but can't publish,\nbecause Yusuf's ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," is in the way.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"npm owner ls foo"),". This will tell Alice the email address of the owner\n(Yusuf).")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Alice emails Yusuf, explaining the situation ",Object(o.b)("strong",{parentName:"p"},"as respectfully as possible"),",\nand what she would like to do with the module name. She adds the npm support\nstaff ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"mailto:support@npmjs.com"}),"support@npmjs.com")," to the CC list of the email. Mention in the email\nthat Yusuf can run npm owner ",Object(o.b)("inlineCode",{parentName:"p"},"add alice foo")," to add Alice as an owner of the\nfoo package.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"After a reasonable amount of time, if Yusuf has not responded, or if Yusuf\nand Alice can't come to any sort of resolution, email support\n",Object(o.b)("a",Object.assign({parentName:"p"},{href:"mailto:support@npmjs.com"}),"support@npmjs.com"),' and we\'ll sort it out. ("Reasonable" is usually at least\n4 weeks.)'))),Object(o.b)("h3",null,"Reasoning"),Object(o.b)("p",null,"In almost every case so far, the parties involved have been able to reach an\namicable resolution without any major intervention. Most people really do want\nto be reasonable, and are probably not even aware that they're in your way."),Object(o.b)("p",null,"Module ecosystems are most vibrant and powerful when they are as self-directed\nas possible. If an admin one day deletes something you had worked on, then that\nis going to make most people quite upset, regardless of the justification. When\nhumans solve their problems by talking to other humans with respect, everyone\nhas the chance to end up feeling good about the interaction."),Object(o.b)("h3",null,"Exceptions"),Object(o.b)("p",null,"Some things are not allowed, and will be removed without discussion if they are\nbrought to the attention of the npm registry admins, including but not limited\nto:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Malware (that is, a package designed to exploit or harm the machine on which\nit is installed)."),Object(o.b)("li",{parentName:"ol"},"Violations of copyright or licenses (for example, cloning an MIT-licensed\nprogram, and then removing or changing the copyright and license statement)."),Object(o.b)("li",{parentName:"ol"},"Illegal content."),Object(o.b)("li",{parentName:"ol"},"\"Squatting\" on a package name that you plan to use, but aren't actually\nusing. Sorry, I don't care how great the name is, or how perfect a fit it is\nfor the thing that someday might happen. If someone wants to use it today,\nand you're just taking up space with an empty tarball, you're going to be\nevicted."),Object(o.b)("li",{parentName:"ol"},"Putting empty packages in the registry. Packages must have SOME\nfunctionality. It can be silly, but it can't be nothing. (See also:\nsquatting.)"),Object(o.b)("li",{parentName:"ol"},"Doing weird things with the registry, like using it as your own personal\napplication database or otherwise putting non-packagey things into it."),Object(o.b)("li",{parentName:"ol"},"Other things forbidden by the npm\n",Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://www.npmjs.com/policies/conduct"}),"Code of Conduct")," such as hateful\nlanguage, pornographic content, or harassment.")),Object(o.b)("p",null,"If you see bad behavior like this, please report it to ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"mailto:abuse@npmjs.com"}),"abuse@npmjs.com")," right\naway. ",Object(o.b)("strong",{parentName:"p"},"You are never expected to resolve abusive behavior on your own. We are\nhere to help.")),Object(o.b)("h3",null,"Trademarks"),Object(o.b)("p",null,"If you think another npm publisher is infringing your trademark, such as by\nusing a confusingly similar package name, email ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"mailto:abuse@npmjs.com"}),"abuse@npmjs.com")," with a link to\nthe package or user account on ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/"}),"https://www.npmjs.com/"),".\nAttach a copy of your trademark registration certificate."),Object(o.b)("p",null,"If we see that the package's publisher is intentionally misleading others by\nmisusing your registered mark without permission, we will transfer the package\nname to you. Otherwise, we will contact the package publisher and ask them to\nclear up any confusion with changes to their package's ",Object(o.b)("inlineCode",{parentName:"p"},"README")," file or\nmetadata."),Object(o.b)("h3",null,"Changes"),Object(o.b)("p",null,"This is a living document and may be updated from time to time. Please refer to\nthe ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/npm/cli/commits/latest/doc/misc/npm-disputes.md"}),"git history for this document"),"\nto view the changes."),Object(o.b)("h3",null,"License"),Object(o.b)("p",null,"Copyright (C) npm, Inc., All rights reserved"),Object(o.b)("p",null,"This document may be reused under a Creative Commons Attribution-ShareAlike\nLicense."),Object(o.b)("h3",null,"See also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/using-npm/registry"}),"npm registry")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-owner"}),"npm owner"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-using-npm-disputes-md-0e19562c7ccc55bd4a8d.js.map