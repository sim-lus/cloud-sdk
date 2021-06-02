(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1521],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return o},Z:function(){return i}});var n=r(2263),a=r(3919);function o(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(c)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+u:u}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},2245:function(e,t,r){"use strict";var n=r(7294),a=r(4996);t.Z=function(e){var t=e.versions,r=e.basePath;return n.createElement("ul",null,t.map((function(e,t){return n.createElement("li",{key:""+e},n.createElement("a",{href:(0,a.Z)(r+"/"+e+"/")},""+e),t?"":n.createElement("strong",null,n.createElement("em",null," - latest ")))})))}},3689:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.align;return n.createElement("span",{className:t?"col text--right":""},n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/SAP/cloud-sdk"},n.createElement("img",{src:"https://github.com/SAP/cloud-sdk-js/workflows/build/badge.svg",alt:"build",className:"max-width:100%;"})))}},5767:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.align;return n.createElement("span",{className:t?"col text--right":""},n.createElement("a",{href:"https://opensource.org/licenses/Apache-2.0",rel:"nofollow"},n.createElement("img",{src:"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",alt:"License","data-canonical-src":"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",className:"max-width:100%;"})))}},3081:function(e,t){"use strict";t.Z=["1.41.0","1.40.0","1.39.0","1.38.0","1.37.1","1.37.0","1.36.1","1.36.0","1.35.0","1.34.0","1.33.0","1.32.1","1.32.0","1.31.0","1.30.0","1.29.0","1.28.2","1.28.1","1.28.0","1.27.0","1.26.1","1.26.0","1.25.0","1.24.1","1.24.0","1.23.0","1.22.0","1.21.2","1.21.1","1.21.0","1.20.1","1.20.0","1.19.0","1.18.1","1.18.0"]},8355:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=r(2245),c=r(3081),s=r(3689),l=r(5767),u={title:"API Reference",sidebar_label:"API Reference",description:"Generated TypeDoc API Documentation",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},d={unversionedId:"js/api",id:"js/api",isDocsHomePage:!1,title:"API Reference",description:"Generated TypeDoc API Documentation",source:"@site/docs/js/api.mdx",sourceDirName:"js",slug:"/js/api",permalink:"/cloud-sdk/docs/js/api",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/api.mdx",version:"current",lastUpdatedBy:"Florian Richter",lastUpdatedAt:1622628581,formattedLastUpdatedAt:"6/2/2021",sidebar_label:"API Reference",frontMatter:{title:"API Reference",sidebar_label:"API Reference",description:"Generated TypeDoc API Documentation",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},sidebar:"someSidebar",previous:{title:"SAP Cloud Application Programming Model and SAP Cloud Application Lifecycle Management",permalink:"/cloud-sdk/docs/js/video/demo-of-cloud-sdk-for-javascript-with-calm-and-cap"},next:{title:"Release Notes",permalink:"/cloud-sdk/docs/js/release-notes-sap-cloud-sdk-for-javascript-and-typescript"}},p=[{value:"Autogenerated API Documentation",id:"autogenerated-api-documentation",children:[{value:"The SAP Cloud SDK Version",id:"the-sap-cloud-sdk-version",children:[]}]},{value:"See Also",id:"see-also",children:[]}],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{mdxType:"BuildBadge"})," ",(0,o.kt)(l.Z,{mdxType:"LicenseBadge"}),(0,o.kt)("h2",{id:"autogenerated-api-documentation"},"Autogenerated API Documentation"),(0,o.kt)("h3",{id:"the-sap-cloud-sdk-version"},"The SAP Cloud SDK Version"),(0,o.kt)(i.Z,{versions:c.Z,basePath:"api",mdxType:"ApiReleaseList"}),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk-js/releases"},"Release notes for the SAP Cloud SDK for JavaScript")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"getting-started"},"Getting Started Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"release-notes-sap-cloud-sdk-for-javascript-and-typescript"},"Release notes and API documentation for type-safe client libraries"))))}m.isMDXComponent=!0}}]);