(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(297)),i=["components"],c={title:"Shopify",sidebar_label:"Shopify"},p={unversionedId:"platform_concepts/appConfiguration/shopify",id:"platform_concepts/appConfiguration/shopify",isDocsHomePage:!1,title:"Shopify",description:"To get shopify password and shared secret",source:"@site/docs/platform_concepts/appConfiguration/shopify.md",slug:"/platform_concepts/appConfiguration/shopify",permalink:"/docs/platform_concepts/appConfiguration/shopify",version:"current",sidebar_label:"Shopify",sidebar:"platform_concepts",previous:{title:"SuccessFactors Integration",permalink:"/docs/platform_concepts/appConfiguration/successfactors"},next:{title:"Zalo",permalink:"/docs/platform_concepts/appConfiguration/zalo"}},l=[{value:"To get shopify password and shared secret",id:"to-get-shopify-password-and-shared-secret",children:[]},{value:"To integrate shopify with your bot on the platform:",id:"to-integrate-shopify-with-your-bot-on-the-platform",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"to-get-shopify-password-and-shared-secret"},"To get shopify password and shared secret"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Login into ",Object(a.b)("inlineCode",{parentName:"li"},"shopify")),Object(a.b)("li",{parentName:"ol"},"Go to your store"),Object(a.b)("li",{parentName:"ol"},"Go To Apps\n",Object(a.b)("img",{parentName:"li",src:"https://i.imgur.com/XQy9gzS.png",alt:null})),Object(a.b)("li",{parentName:"ol"},"Then click on ",Object(a.b)("inlineCode",{parentName:"li"},"Manage Private APPs"),Object(a.b)("img",{parentName:"li",src:"https://i.imgur.com/htADsgB.png",alt:null})),Object(a.b)("li",{parentName:"ol"},"Enter the name of the ",Object(a.b)("inlineCode",{parentName:"li"},"Private store")," and ",Object(a.b)("inlineCode",{parentName:"li"},"Emergency developer email id"),Object(a.b)("img",{parentName:"li",src:"https://i.imgur.com/LDP8T0T.png",alt:null})),Object(a.b)("li",{parentName:"ol"},"Click on Show inactive Admin API permission, change to Read and Write wherever required."),Object(a.b)("li",{parentName:"ol"},"Once all the setting are done, click on Create Private app\n",Object(a.b)("img",{parentName:"li",src:"https://i.imgur.com/bOuchbs.png",alt:null})),Object(a.b)("li",{parentName:"ol"},"Then copy the ",Object(a.b)("inlineCode",{parentName:"li"},"password")," and ",Object(a.b)("inlineCode",{parentName:"li"},"shared secret"),".\n",Object(a.b)("img",{parentName:"li",src:"https://i.imgur.com/8CZBBSf.png",alt:null}))),Object(a.b)("h3",{id:"to-integrate-shopify-with-your-bot-on-the-platform"},"To integrate shopify with your bot on the platform:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Go to ",Object(a.b)("inlineCode",{parentName:"li"},"Configure")," section of your bot"),Object(a.b)("li",{parentName:"ol"},"In ",Object(a.b)("inlineCode",{parentName:"li"},"Integration")," click on the connect for the shopify Shop\n",Object(a.b)("img",{parentName:"li",src:"https://i.imgur.com/iyeHrup.png",alt:null})),Object(a.b)("li",{parentName:"ol"},"Enter the ",Object(a.b)("inlineCode",{parentName:"li"},"store name"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Password")," and ",Object(a.b)("inlineCode",{parentName:"li"},"shared secret"),Object(a.b)("img",{parentName:"li",src:"https://i.imgur.com/Mp3HhVz.png",alt:null})),Object(a.b)("li",{parentName:"ol"},"Click on Save")),Object(a.b)("p",null,"Once the integration is done successfully, You can find an Integration option available in addition to the existing nodes."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/tZtuigx.png",alt:null})))}b.isMDXComponent=!0},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,f=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);