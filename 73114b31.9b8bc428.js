(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{172:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return s}));var n=t(3),a=t(7),o=(t(0),t(297)),p=["components"],c={title:"app.pageUrl",sidebar_label:"app.pageUrl"},l={unversionedId:"developer/app/components/page-url",id:"developer/app/components/page-url",isDocsHomePage:!1,title:"app.pageUrl",description:"app.pageUrl - To fetch the page url from where the request is generated.",source:"@site/docs/developer/app/components/page-url.md",slug:"/developer/app/components/page-url",permalink:"/docs/developer/app/components/page-url",version:"current",sidebar_label:"app.pageUrl"},u=[{value:"Examples",id:"examples",children:[]}],i={toc:u};function s(e){var r=e.components,t=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"app.pageUrl - To fetch the page url from where the request is generated."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"app.log(app.pageUrl)\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Prints page url on console")))}s.isMDXComponent=!0},297:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),i=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=i(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=i(t),b=n,m=s["".concat(p,".").concat(b)]||s[b]||f[b]||o;return t?a.a.createElement(m,c(c({ref:r},u),{},{components:t})):a.a.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var u=2;u<o;u++)p[u]=t[u];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);