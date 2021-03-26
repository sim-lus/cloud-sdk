(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{210:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return s})),n.d(r,"metadata",(function(){return u})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return p}));var t=n(3),o=n(7),a=(n(0),n(214)),c=["0.1.1"],i=n(267),s={title:"SAP Cloud SDK Currency Conversion Libraries for JavaScript",sidebar_label:"Currency Conversion",description:"The currency conversion libraries are an extension to the SAP Cloud SDK. You can use this library to facilitate currency exchange rate conversion.",keywords:["sap","cloud","sdk","cloud sdk","sap cloud sdk","currency conversion","extension"]},u={unversionedId:"js/extensions/currency-conversion",id:"js/extensions/currency-conversion",isDocsHomePage:!1,title:"SAP Cloud SDK Currency Conversion Libraries for JavaScript",description:"The currency conversion libraries are an extension to the SAP Cloud SDK. You can use this library to facilitate currency exchange rate conversion.",source:"@site/docs/js/extensions/currency-conversion.mdx",slug:"/js/extensions/currency-conversion",permalink:"/cloud-sdk/docs/js/extensions/currency-conversion",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/extensions/currency-conversion.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1616751739,formattedLastUpdatedAt:"3/26/2021",sidebar_label:"Currency Conversion",sidebar:"someSidebar",previous:{title:"Use the SAP Cloud SDK in the Browser",permalink:"/cloud-sdk/docs/js/guides/sdk-in-browser"},next:{title:"SAP Cloud Application Programming Model and SAP Cloud Application Lifecycle Management",permalink:"/cloud-sdk/docs/js/video/demo-of-cloud-sdk-for-javascript-with-calm-and-cap"}},l=[{value:"Overview",id:"overview",children:[]},{value:"SAP Cloud SDK Currency Conversion Library Versions",id:"sap-cloud-sdk-currency-conversion-library-versions",children:[]}],d={toc:l};function p(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},d,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Currency Conversion is an extension library built on SAP Cloud SDK.\nYou can use this library to facilitate currency exchange rate conversions."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The library does not provide any market data out-of-the-box.\nYou must provide the currency exchange rates to the library from your own data sources.\nYou can use the ",Object(a.b)("a",{parentName:"p",href:"https://www.sap.com/products/market-rates-management.html"},"SAP Market Rates Management")," service or any other of your choice."))),Object(a.b)("p",null,"You can use the library for the following functions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Direct one-to-one conversions, from a source currency to a target currency."),Object(a.b)("li",{parentName:"ul"},'Indirect conversions by using inverse rates or a "reference currency".'),Object(a.b)("li",{parentName:"ul"},"Fixed rate conversions, for when you have the exact currency exchange rate that you want to use in your conversion operations."),Object(a.b)("li",{parentName:"ul"},'Non-fixed rate conversions, for when you have a set of exchange rates, as opposed to the exact rate.\nThe library will pick the "best rate" from the set depending on various factors.')),Object(a.b)("h2",{id:"sap-cloud-sdk-currency-conversion-library-versions"},"SAP Cloud SDK Currency Conversion Library Versions"),Object(a.b)(i.a,{versions:c,basePath:"currency-conversion/api",mdxType:"ApiReleaseList"}))}p.isMDXComponent=!0},214:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return v}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=t,v=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(v,i(i({ref:r},u),{},{components:n})):o.a.createElement(v,i({ref:r},u))}));function v(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},215:function(e,r,n){"use strict";n.d(r,"b",(function(){return a})),n.d(r,"a",(function(){return c}));var t=n(16),o=n(216);function a(){var e=Object(t.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,n=void 0===r?"/":r,a=e.url;return{withBaseUrl:function(e,r){return function(e,r,n,t){var a=void 0===t?{}:t,c=a.forcePrependBaseUrl,i=void 0!==c&&c,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(i)return r+n;var l=n.startsWith(r)?n:r+n.replace(/^\//,"");return u?e+l:l}(a,n,e,r)}}}function c(e,r){return void 0===r&&(r={}),(0,a().withBaseUrl)(e,r)}},216:function(e,r,n){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!t(e)}n.d(r,"b",(function(){return t})),n.d(r,"a",(function(){return o}))},267:function(e,r,n){"use strict";var t=n(0),o=n.n(t),a=n(215);r.a=function(e){var r=e.versions,n=e.basePath;return o.a.createElement("ul",null,r.map((function(e,r){return o.a.createElement("li",{key:""+e},o.a.createElement("a",{href:Object(a.a)(n+"/"+e+"/")},""+e),r?"":o.a.createElement("strong",null,o.a.createElement("em",null," - latest ")))})))}}}]);