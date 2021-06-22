(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[526],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return l},kt:function(){return v}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),v=o,f=p["".concat(s,".").concat(v)]||p[v]||d[v]||i;return n?t.createElement(f,a(a({ref:r},l),{},{components:n})):t.createElement(f,a({ref:r},l))}));function v(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,r,n){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!t(e)}n.d(r,{b:function(){return t},Z:function(){return o}})},4996:function(e,r,n){"use strict";n.d(r,{C:function(){return i},Z:function(){return a}});var t=n(2263),o=n(3919);function i(){var e=(0,t.Z)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,n=void 0===r?"/":r,i=e.url;return{withBaseUrl:function(e,r){return function(e,r,n,t){var i=void 0===t?{}:t,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(c)return r+n;var l=n.startsWith(r)?n:r+n.replace(/^\//,"");return u?e+l:l}(i,n,e,r)}}}function a(e,r){return void 0===r&&(r={}),(0,i().withBaseUrl)(e,r)}},2245:function(e,r,n){"use strict";var t=n(7294),o=n(4996);r.Z=function(e){var r=e.versions,n=e.basePath;return t.createElement("ul",null,r.map((function(e,r){return t.createElement("li",{key:""+e},t.createElement("a",{href:(0,o.Z)(n+"/"+e+"/")},""+e),r?"":t.createElement("strong",null,t.createElement("em",null," - latest ")))})))}},6248:function(e,r,n){"use strict";n.r(r),n.d(r,{contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var t=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["0.1.1"],c=n(2245),s=["components"],u={title:"SAP Cloud SDK Currency Conversion Libraries for JavaScript",sidebar_label:"Currency Conversion",description:"The currency conversion libraries are an extension to the SAP Cloud SDK. You can use this library to facilitate currency exchange rate conversion.",keywords:["sap","cloud","sdk","cloud sdk","sap cloud sdk","currency conversion","extension"]},l=void 0,d={unversionedId:"js/extensions/currency-conversion",id:"js/extensions/currency-conversion",isDocsHomePage:!1,title:"SAP Cloud SDK Currency Conversion Libraries for JavaScript",description:"The currency conversion libraries are an extension to the SAP Cloud SDK. You can use this library to facilitate currency exchange rate conversion.",source:"@site/docs/js/extensions/currency-conversion.mdx",sourceDirName:"js/extensions",slug:"/js/extensions/currency-conversion",permalink:"/cloud-sdk/docs/js/extensions/currency-conversion",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/extensions/currency-conversion.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1624363200,formattedLastUpdatedAt:"6/22/2021",frontMatter:{title:"SAP Cloud SDK Currency Conversion Libraries for JavaScript",sidebar_label:"Currency Conversion",description:"The currency conversion libraries are an extension to the SAP Cloud SDK. You can use this library to facilitate currency exchange rate conversion.",keywords:["sap","cloud","sdk","cloud sdk","sap cloud sdk","currency conversion","extension"]},sidebar:"someSidebar",previous:{title:"Use the SAP Cloud SDK in the Browser",permalink:"/cloud-sdk/docs/js/guides/sdk-in-browser"},next:{title:"SAP Cloud SDK & CAP",permalink:"/cloud-sdk/docs/js/video/demo-of-cloud-sdk-for-javascript-with-calm-and-cap"}},p=[{value:"Overview",id:"overview",children:[]},{value:"SAP Cloud SDK Currency Conversion Library Versions",id:"sap-cloud-sdk-currency-conversion-library-versions",children:[]}],v={toc:p};function f(e){var r=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},v,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Currency Conversion is an extension library built on SAP Cloud SDK.\nYou can use this library to facilitate currency exchange rate conversions."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The library does not provide any market data out-of-the-box.\nYou must provide the currency exchange rates to the library from your own data sources.\nYou can use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.sap.com/products/market-rates-management.html"},"SAP Market Rates Management")," service or any other of your choice."))),(0,i.kt)("p",null,"You can use the library for the following functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Direct one-to-one conversions, from a source currency to a target currency."),(0,i.kt)("li",{parentName:"ul"},'Indirect conversions by using inverse rates or a "reference currency".'),(0,i.kt)("li",{parentName:"ul"},"Fixed rate conversions, for when you have the exact currency exchange rate that you want to use in your conversion operations."),(0,i.kt)("li",{parentName:"ul"},'Non-fixed rate conversions, for when you have a set of exchange rates, as opposed to the exact rate.\nThe library will pick the "best rate" from the set depending on various factors.')),(0,i.kt)("h2",{id:"sap-cloud-sdk-currency-conversion-library-versions"},"SAP Cloud SDK Currency Conversion Library Versions"),(0,i.kt)(c.Z,{versions:a,basePath:"currency-conversion/api",mdxType:"ApiReleaseList"}))}f.isMDXComponent=!0}}]);