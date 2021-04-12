(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{134:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(214)),c=r(22),i=r(215),u={id:"use-typed-odata-client-for-js",title:"Redirecting",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},s={unversionedId:"js/features/odata/use-typed-odata-client-for-js",id:"js/features/odata/use-typed-odata-client-for-js",isDocsHomePage:!1,title:"Redirecting",source:"@site/docs/js/features/odata/redirect-use-typed-odata-client-for-js.mdx",slug:"/js/features/odata/use-typed-odata-client-for-js",permalink:"/cloud-sdk/docs/js/features/odata/use-typed-odata-client-for-js",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/redirect-use-typed-odata-client-for-js.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1618248015,formattedLastUpdatedAt:"4/12/2021"},d=[],f={toc:d};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c.Redirect,{to:Object(i.a)("docs/js/features/odata/odata-v2-client"),mdxType:"Redirect"}))}l.isMDXComponent=!0},214:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=d(r),p=n,y=f["".concat(c,".").concat(p)]||f[p]||l[p]||a;return r?o.a.createElement(y,i(i({ref:t},s),{},{components:r})):o.a.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},215:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return c}));var n=r(16),o=r(216);function a(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,c=a.forcePrependBaseUrl,i=void 0!==c&&c,u=a.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(i)return t+r;var d=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+d:d}(a,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},216:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))}}]);