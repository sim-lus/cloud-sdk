(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1521],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(2263),a=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},2245:function(e,t,n){"use strict";var r=n(7294),a=n(4996);t.Z=function(e){var t=e.versions,n=e.basePath;return r.createElement("ul",null,t.map((function(e,t){return r.createElement("li",{key:""+e},r.createElement("a",{href:(0,a.Z)(n+"/"+e+"/")},""+e),t?"":r.createElement("strong",null,r.createElement("em",null," - latest ")))})))}},3689:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.align;return r.createElement("span",{className:t?"col text--right":""},r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/SAP/cloud-sdk-js"},r.createElement("img",{src:"https://github.com/SAP/cloud-sdk-js/workflows/build/badge.svg",alt:"build",className:"max-width:100%;"})))}},5767:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.align;return r.createElement("span",{className:t?"col text--right":""},r.createElement("a",{href:"https://opensource.org/licenses/Apache-2.0",rel:"nofollow"},r.createElement("img",{src:"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",alt:"License","data-canonical-src":"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",className:"max-width:100%;"})))}},3081:function(e,t){"use strict";t.Z=["1.45.0","1.44.0","1.43.0","1.42.0","1.41.0","1.40.0","1.39.0","1.38.0","1.37.1","1.37.0","1.36.1","1.36.0","1.35.0","1.34.0","1.33.0","1.32.1","1.32.0","1.31.0","1.30.0","1.29.0","1.28.2","1.28.1","1.28.0","1.27.0","1.26.1","1.26.0","1.25.0","1.24.1","1.24.0","1.23.0","1.22.0","1.21.2","1.21.1","1.21.0","1.20.1","1.20.0","1.19.0","1.18.1","1.18.0"]},8355:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=n(2245),c=n(3081),s=n(3689),l=n(5767),u={title:"API Reference",sidebar_label:"API Reference",description:"Generated TypeDoc API Documentation",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},d={unversionedId:"js/api",id:"js/api",isDocsHomePage:!1,title:"API Reference",description:"Generated TypeDoc API Documentation",source:"@site/docs/js/api.mdx",sourceDirName:"js",slug:"/js/api",permalink:"/cloud-sdk/docs/js/api",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/api.mdx",version:"current",lastUpdatedBy:"Johannes Schneider",lastUpdatedAt:1624277121,formattedLastUpdatedAt:"6/21/2021",sidebar_label:"API Reference",frontMatter:{title:"API Reference",sidebar_label:"API Reference",description:"Generated TypeDoc API Documentation",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},sidebar:"someSidebar",previous:{title:"SAP Cloud Application Programming Model and SAP Cloud Application Lifecycle Management",permalink:"/cloud-sdk/docs/js/video/demo-of-cloud-sdk-for-javascript-with-calm-and-cap"},next:{title:"Release Notes",permalink:"/cloud-sdk/docs/js/release-notes-sap-cloud-sdk-for-javascript-and-typescript"}},p=[{value:"Autogenerated API Documentation",id:"autogenerated-api-documentation",children:[{value:"The SAP Cloud SDK Version",id:"the-sap-cloud-sdk-version",children:[]}]},{value:"See Also",id:"see-also",children:[]}],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{mdxType:"BuildBadge"})," ",(0,o.kt)(l.Z,{mdxType:"LicenseBadge"}),(0,o.kt)("h2",{id:"autogenerated-api-documentation"},"Autogenerated API Documentation"),(0,o.kt)("h3",{id:"the-sap-cloud-sdk-version"},"The SAP Cloud SDK Version"),(0,o.kt)(i.Z,{versions:c.Z,basePath:"api",mdxType:"ApiReleaseList"}),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk-js/releases"},"Release notes for the SAP Cloud SDK for JavaScript")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"getting-started"},"Getting Started Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"release-notes-sap-cloud-sdk-for-javascript-and-typescript"},"Release notes and API documentation for type-safe client libraries"))))}m.isMDXComponent=!0}}]);