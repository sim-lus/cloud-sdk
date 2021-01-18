(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{181:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return d})),r.d(t,"toc",(function(){return f})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(203)),u=r(207),c=r(204),i={id:"use-typed-odata-v2-and-v4-client-for-java",title:"Redirecting",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},d={unversionedId:"java/features/odata/use-typed-odata-v2-and-v4-client-for-java",id:"java/features/odata/use-typed-odata-v2-and-v4-client-for-java",isDocsHomePage:!1,title:"Redirecting",description:"<Redirect",source:"@site/docs/java/features/odata/redirect-typed-client.mdx",slug:"/java/features/odata/use-typed-odata-v2-and-v4-client-for-java",permalink:"/cloud-sdk/docs/java/features/odata/use-typed-odata-v2-and-v4-client-for-java",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/odata/redirect-typed-client.mdx",version:"current",lastUpdatedBy:"Johannes Schneider",lastUpdatedAt:1610984826},f=[],s={toc:f};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(u.Redirect,{to:Object(c.a)("docs/java/features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java"),mdxType:"Redirect"}))}l.isMDXComponent=!0},203:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return v}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),f=function(e){var t=o.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=f(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=f(r),p=n,v=s["".concat(u,".").concat(p)]||s[p]||l[p]||a;return r?o.a.createElement(v,c(c({ref:t},d),{},{components:r})):o.a.createElement(v,c({ref:t},d))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,u[1]=c;for(var d=2;d<a;d++)u[d]=r[d];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},204:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return u}));var n=r(21),o=r(205);function a(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,u=a.forcePrependBaseUrl,c=void 0!==u&&u,i=a.absolute,d=void 0!==i&&i;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var f=r.startsWith(t)?r:t+r.replace(/^\//,"");return d?e+f:f}(a,r,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},205:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},207:function(e,t,r){"use strict";r.r(t);var n=r(10);r.d(t,"MemoryRouter",(function(){return n.d})),r.d(t,"Prompt",(function(){return n.f})),r.d(t,"Redirect",(function(){return n.g})),r.d(t,"Route",(function(){return n.h})),r.d(t,"Router",(function(){return n.i})),r.d(t,"StaticRouter",(function(){return n.j})),r.d(t,"Switch",(function(){return n.k})),r.d(t,"generatePath",(function(){return n.l})),r.d(t,"matchPath",(function(){return n.m})),r.d(t,"useHistory",(function(){return n.n})),r.d(t,"useLocation",(function(){return n.o})),r.d(t,"useParams",(function(){return n.p})),r.d(t,"useRouteMatch",(function(){return n.q})),r.d(t,"withRouter",(function(){return n.r})),r.d(t,"BrowserRouter",(function(){return n.a})),r.d(t,"HashRouter",(function(){return n.b})),r.d(t,"Link",(function(){return n.c})),r.d(t,"NavLink",(function(){return n.e}))}}]);