(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2642],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,v=d["".concat(c,".").concat(f)]||d[f]||l[f]||o;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(2263),i=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,s=void 0!==a&&a,c=o.absolute,p=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},9432:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=(n(4996),{title:"OpenAPI Overview",sidebar_label:"Overview",description:"This article describes how generate a client from the a service definition and how to use the client.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]}),s={unversionedId:"js/features/openapi/overview",id:"js/features/openapi/overview",isDocsHomePage:!1,title:"OpenAPI Overview",description:"This article describes how generate a client from the a service definition and how to use the client.",source:"@site/docs/js/features/openapi/overview.mdx",sourceDirName:"js/features/openapi",slug:"/js/features/openapi/overview",permalink:"/cloud-sdk/docs/js/features/openapi/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/openapi/overview.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1620025414,formattedLastUpdatedAt:"5/3/2021",sidebar_label:"Overview",frontMatter:{title:"OpenAPI Overview",sidebar_label:"Overview",description:"This article describes how generate a client from the a service definition and how to use the client.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"On-Premise Connectivity",permalink:"/cloud-sdk/docs/js/features/connectivity/on-premise"},next:{title:"Use the OpenAPI Generator to Generate Typed Clients",permalink:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client"}},c=[],p={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The OpenAPI generator is a command-line tool to generate clients from ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI specifications"),".\nOpenAPI specifications are the standard to define RESTful web services in a language-agnostic way.\nIt is comparable to the ",(0,o.kt)("inlineCode",{parentName:"p"},"edmx")," service definitions for ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/overview"},"OData clients"),".\nThe generated OpenAPI clients make use of the SAP Cloud SDK's connectivity layer.\nThat means, that the mechanisms for ",(0,o.kt)("a",{parentName:"p",href:"../connectivity/destination"},"destination lookup"),", ",(0,o.kt)("a",{parentName:"p",href:"../connectivity/on-premise"},"On-premise connectivity")," and ",(0,o.kt)("a",{parentName:"p",href:"../connectivity/proxy"},"proxy handling")," are applied when consuming services through the generated clients."),(0,o.kt)("p",null,"As you would expect, an Open Source ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},"OpenAPI generator (OpenAPITools)")," already exists.\nIt offers client generation for various programming languages, including TypeScript.\nThe main difference between the generator by the SAP Cloud SDK and the generator by OpenAPITools is the aforementioned use of the SAP Cloud SDK's connectivity layer.\nFurther, the OpenAPITools generator requires a Java runtime environment to be used.\nThis is not required by the SAP Cloud SDK's generator.\nAs it is written in TypeScript it requires a Node.js environment."),(0,o.kt)("p",null,"If you are interested in using an OpenAPI client in your project, find more information in the guides on ",(0,o.kt)("a",{parentName:"p",href:"./generate-openapi-client"},"the generation of a client")," and ",(0,o.kt)("a",{parentName:"p",href:"./execute-openapi-request"},"the usage of the client"),"."))}u.isMDXComponent=!0}}]);