(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{"0akN":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm <command> [args]\n")),Object(l.b)("h3",null,"Version"),Object(l.b)("p",null,"7.0.0"),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"npm is the package manager for the Node JavaScript platform.  It puts\nmodules in place so that node can find them, and manages dependency\nconflicts intelligently."),Object(l.b)("p",null,"It is extremely configurable to support a wide variety of use cases.\nMost commonly, it is used to publish, discover, install, and develop node\nprograms."),Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"npm help")," to get a list of available commands."),Object(l.b)("h3",null,"Important"),Object(l.b)("p",null,"npm is configured to use npm, Inc.'s public registry at\n",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://registry.npmjs.org"}),"https://registry.npmjs.org")," by default. Use of the npm public registry is\nsubject to terms of use available at ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/policies/terms"}),"https://www.npmjs.com/policies/terms"),"."),Object(l.b)("p",null,"You can configure npm to use any compatible registry you like, and even run\nyour own registry. Use of someone else's registry may be governed by their\nterms of use."),Object(l.b)("h3",null,"Introduction"),Object(l.b)("p",null,"You probably got npm because you want to install stuff."),Object(l.b)("p",null,"Use ",Object(l.b)("inlineCode",{parentName:"p"},"npm install blerg"),' to install the latest version of "blerg".  Check out\n',Object(l.b)("a",Object.assign({parentName:"p"},{href:"/cli/v7/commands/npm-npm-install"}),Object(l.b)("inlineCode",{parentName:"a"},"npm install"))," for more info.  It can do a lot of stuff."),Object(l.b)("p",null,"Use the ",Object(l.b)("inlineCode",{parentName:"p"},"npm search")," command to show everything that's available.\nUse ",Object(l.b)("inlineCode",{parentName:"p"},"npm ls")," to show everything you've installed."),Object(l.b)("h3",null,"Dependencies"),Object(l.b)("p",null,"If a package references to another package with a git URL, npm depends\non a preinstalled git."),Object(l.b)("p",null,"If one of the packages npm tries to install is a native node module and\nrequires compiling of C++ Code, npm will use\n",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/nodejs/node-gyp"}),"node-gyp")," for that task.\nFor a Unix system, ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/nodejs/node-gyp"}),"node-gyp"),"\nneeds Python, make and a buildchain like GCC. On Windows,\nPython and Microsoft Visual Studio C++ are needed. Python 3 is\nnot supported by ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/nodejs/node-gyp"}),"node-gyp"),".\nFor more information visit\n",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/nodejs/node-gyp"}),"the node-gyp repository")," and\nthe ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/nodejs/node-gyp/wiki"}),"node-gyp Wiki"),"."),Object(l.b)("h3",null,"Directories"),Object(l.b)("p",null,"See ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"/cli/v7/configuring-npm/folders"}),Object(l.b)("inlineCode",{parentName:"a"},"folders"))," to learn about where npm puts stuff."),Object(l.b)("p",null,"In particular, npm has two modes of operation:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"global mode:\nnpm installs packages into the install prefix at\n",Object(l.b)("inlineCode",{parentName:"li"},"prefix/lib/node_modules")," and bins are installed in ",Object(l.b)("inlineCode",{parentName:"li"},"prefix/bin"),"."),Object(l.b)("li",{parentName:"ul"},"local mode:\nnpm installs packages into the current project directory, which\ndefaults to the current working directory.  Packages are installed to\n",Object(l.b)("inlineCode",{parentName:"li"},"./node_modules"),", and bins are installed to ",Object(l.b)("inlineCode",{parentName:"li"},"./node_modules/.bin"),".")),Object(l.b)("p",null,"Local mode is the default.  Use ",Object(l.b)("inlineCode",{parentName:"p"},"-g")," or ",Object(l.b)("inlineCode",{parentName:"p"},"--global")," on any command to\noperate in global mode instead."),Object(l.b)("h3",null,"Developer Usage"),Object(l.b)("p",null,"If you're using npm to develop and publish your code, check out the\nfollowing help topics:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"json:\nMake a package.json file.  See ",Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/configuring-npm/package-json"}),Object(l.b)("inlineCode",{parentName:"a"},"package.json")),"."),Object(l.b)("li",{parentName:"ul"},"link:\nFor linking your current working code into Node's path, so that you\ndon't have to reinstall every time you make a change.  Use\n",Object(l.b)("inlineCode",{parentName:"li"},"npm link")," to do this."),Object(l.b)("li",{parentName:"ul"},"install:\nIt's a good idea to install things if you don't need the symbolic link.\nEspecially, installing other peoples code from the registry is done via\n",Object(l.b)("inlineCode",{parentName:"li"},"npm install")),Object(l.b)("li",{parentName:"ul"},"adduser:\nCreate an account or log in.  Credentials are stored in the\nuser config file."),Object(l.b)("li",{parentName:"ul"},"publish:\nUse the ",Object(l.b)("inlineCode",{parentName:"li"},"npm publish")," command to upload your code to the registry.")),Object(l.b)("h4",null,"Configuration"),Object(l.b)("p",null,"npm is extremely configurable.  It reads its configuration options from\n5 places."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Command line switches:\nSet a config with ",Object(l.b)("inlineCode",{parentName:"li"},"--key val"),".  All keys take a value, even if they\nare booleans (the config parser doesn't know what the options are at\nthe time of parsing).  If no value is provided, then the option is set\nto boolean ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},"Environment Variables:\nSet any config by prefixing the name in an environment variable with\n",Object(l.b)("inlineCode",{parentName:"li"},"npm_config_"),".  For example, ",Object(l.b)("inlineCode",{parentName:"li"},"export npm_config_key=val"),"."),Object(l.b)("li",{parentName:"ul"},"User Configs:\nThe file at $HOME/.npmrc is an ini-formatted list of configs.  If\npresent, it is parsed.  If the ",Object(l.b)("inlineCode",{parentName:"li"},"userconfig")," option is set in the cli\nor env, then that will be used instead."),Object(l.b)("li",{parentName:"ul"},"Global Configs:\nThe file found at ../etc/npmrc (from the node executable, by default\nthis resolves to /usr/local/etc/npmrc) will be parsed if it is found.\nIf the ",Object(l.b)("inlineCode",{parentName:"li"},"globalconfig")," option is set in the cli, env, or user config,\nthen that file is parsed instead."),Object(l.b)("li",{parentName:"ul"},"Defaults:\nnpm's default configuration options are defined in\nlib/utils/config-defs.js.  These must not be changed.")),Object(l.b)("p",null,"See ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"/cli/v7/using-npm/config"}),Object(l.b)("inlineCode",{parentName:"a"},"config"))," for much much more information."),Object(l.b)("h3",null,"Contributions"),Object(l.b)("p",null,"Patches welcome!"),Object(l.b)("p",null,"If you would like to contribute, but don't know what to work on, read\nthe contributing guidelines and check the issues list."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/npm/cli/blob/latest/CONTRIBUTING.md"}),"CONTRIBUTING.md")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/npm/cli/issues"}),"Bug tracker"))),Object(l.b)("h3",null,"Bugs"),Object(l.b)("p",null,"When you find issues, please report them:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"web:\n",Object(l.b)("a",Object.assign({parentName:"li"},{href:"https://npm.community/c/bugs"}),"https://npm.community/c/bugs"))),Object(l.b)("p",null,"Be sure to follow the template and bug reporting guidelines. You can also ask\nfor help in the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://npm.community/c/support"}),"support forum")," if you're\nunsure if it's actually a bug or are having trouble coming up with a detailed\nreproduction to report."),Object(l.b)("h3",null,"Author"),Object(l.b)("p",null,Object(l.b)("a",Object.assign({parentName:"p"},{href:"http://blog.izs.me/"}),"Isaac Z. Schlueter")," ::\n",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/isaacs/"}),"isaacs")," ::\n",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/izs"}),"@izs")," ::\n",Object(l.b)("a",Object.assign({parentName:"p"},{href:"mailto:i@izs.me"}),"i@izs.me")),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-npm-help"}),"npm help")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/configuring-npm/package-json"}),"package.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-npm-install"}),"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-npm-config"}),"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/configuring-npm/npmrc"}),"npmrc"))))}s.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),s=n("pD55"),b=n("8Aig"),p=n("ReZb"),m=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),j=n("/Rw0"),O=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function N(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var v=N,k=n("MfeC");function w(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},i)))}w.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=w,E=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),U=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,N=o.description,w=o.status,z=o.source,M=o.additionalContributors,P=void 0===M?[]:M,T=k.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:p.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:g.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:y,description:N}),r.a.createElement(b.b,{location:a}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(I,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),N))),null!=T?r.a.createElement(_,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:T,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:n.tableOfContents.items})):null,r.a.createElement(U,null,w||z?r.a.createElement(l.k,{mb:3,alignItems:"center"},w?r.a.createElement(O.a,{status:w}):null,r.a.createElement(l.e,{mx:"auto"}),z?r.a.createElement(j.a,{href:z}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(P.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-md-b95d5a83339464523b50.js.map