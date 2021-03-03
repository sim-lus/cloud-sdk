(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{132:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return i})),r.d(e,"metadata",(function(){return d})),r.d(e,"toc",(function(){return s})),r.d(e,"default",(function(){return l}));var n=r(3),o=r(7),u=(r(0),r(212)),a=r(216),c=r(213),i={id:"use-typed-odata-client-for-js",title:"Redirecting",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},d={unversionedId:"js/features/odata/use-typed-odata-client-for-js",id:"js/features/odata/use-typed-odata-client-for-js",isDocsHomePage:!1,title:"Redirecting",source:"@site/docs/js/features/odata/redirect-use-typed-odata-client-for-js.mdx",slug:"/js/features/odata/use-typed-odata-client-for-js",permalink:"/cloud-sdk/docs/js/features/odata/use-typed-odata-client-for-js",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/redirect-use-typed-odata-client-for-js.mdx",version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1614794902},s=[],f={toc:s};function l(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(u.b)("wrapper",Object(n.a)({},f,r,{components:e,mdxType:"MDXLayout"}),Object(u.b)(a.Redirect,{to:Object(c.a)("docs/js/features/odata/odata-v2-client"),mdxType:"Redirect"}))}l.isMDXComponent=!0},212:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return y}));var n=r(0),o=r.n(n);function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var d=o.a.createContext({}),s=function(t){var e=o.a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},f=function(t){var e=s(t.components);return o.a.createElement(d.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},p=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,u=t.originalType,a=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),f=s(r),p=n,y=f["".concat(a,".").concat(p)]||f[p]||l[p]||u;return r?o.a.createElement(y,c(c({ref:e},d),{},{components:r})):o.a.createElement(y,c({ref:e},d))}));function y(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var u=r.length,a=new Array(u);a[0]=p;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:n,a[1]=c;for(var d=2;d<u;d++)a[d]=r[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},213:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return a}));var n=r(21),o=r(214);function u(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,u=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var u=void 0===n?{}:n,a=u.forcePrependBaseUrl,c=void 0!==a&&a,i=u.absolute,d=void 0!==i&&i;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return e+r;var s=r.startsWith(e)?r:e+r.replace(/^\//,"");return d?t+s:s}(u,r,t,e)}}}function a(t,e){return void 0===e&&(e={}),(0,u().withBaseUrl)(t,e)}},214:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!n(t)}r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o}))},216:function(t,e,r){"use strict";r.r(e);var n=r(10);r.d(e,"MemoryRouter",(function(){return n.d})),r.d(e,"Prompt",(function(){return n.f})),r.d(e,"Redirect",(function(){return n.g})),r.d(e,"Route",(function(){return n.h})),r.d(e,"Router",(function(){return n.i})),r.d(e,"StaticRouter",(function(){return n.j})),r.d(e,"Switch",(function(){return n.k})),r.d(e,"generatePath",(function(){return n.l})),r.d(e,"matchPath",(function(){return n.m})),r.d(e,"useHistory",(function(){return n.n})),r.d(e,"useLocation",(function(){return n.o})),r.d(e,"useParams",(function(){return n.p})),r.d(e,"useRouteMatch",(function(){return n.q})),r.d(e,"withRouter",(function(){return n.r})),r.d(e,"BrowserRouter",(function(){return n.a})),r.d(e,"HashRouter",(function(){return n.b})),r.d(e,"Link",(function(){return n.c})),r.d(e,"NavLink",(function(){return n.e}))}}]);