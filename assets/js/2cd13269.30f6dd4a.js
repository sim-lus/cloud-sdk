(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5413],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var i=n(2263),r=n(3919);function a(){var e=(0,i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,s=void 0!==o&&o,c=a.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},5981:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=n(4996),s={title:"Generic HTTP Client",sidebar_label:"Generic HTTP Client",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},c={unversionedId:"js/features/connectivity/generic-http-client",id:"js/features/connectivity/generic-http-client",isDocsHomePage:!1,title:"Generic HTTP Client",description:"How to use the generic http client for untyped requests",source:"@site/docs/js/features/connectivity/generic-http-client.mdx",sourceDirName:"js/features/connectivity",slug:"/js/features/connectivity/generic-http-client",permalink:"/cloud-sdk/docs/js/features/connectivity/generic-http-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/connectivity/generic-http-client.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1623187207,formattedLastUpdatedAt:"6/8/2021",sidebar_label:"Generic HTTP Client",frontMatter:{title:"Generic HTTP Client",sidebar_label:"Generic HTTP Client",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"Proxies",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy"},next:{title:"On-Premise Connectivity",permalink:"/cloud-sdk/docs/js/features/connectivity/on-premise"}},l=[{value:"What Is the Generic HTTP Client?",id:"what-is-the-generic-http-client",children:[]},{value:"How to Use It",id:"how-to-use-it",children:[]},{value:"When to Use It",id:"when-to-use-it",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-the-generic-http-client"},"What Is the Generic HTTP Client?"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/execute-odata-request"},"Executing a request using a generated OData client")," section, we explained how to make OData requests using the generated OData client.\nThis client is the highest layer of convenience and type-safety for the user.\nBelow the OData client uses the Generic HTTP client of the SAP Cloud SDK.\nFor the final HTTP calls, we have decided to use the axios library."),(0,a.kt)("img",{alt:"The layers of HTTP clients in the SDK.",src:(0,o.Z)("img/odata-client-layers.png"),class:"center",width:"50%"}),(0,a.kt)("p",null,"In this document, we explain when and how to use the middle layer directly.\nDifferent clients serve different purposes:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OData Client:"),"\nProvides strong typing for the request (payload, select, filter, etc.) and response.\nFor each OData service, a separate client needs to be generated which defines the types and methods for this service.\nThe client takes care of deserializing your request to a URL and JSON payload as well as serializing the response.\nThe generated payload and URL are passed to the Generic HTTP Client."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Generic HTTP Client:"),"\nAdds SAP infrastructure specific functionality on top of a standard HTTP Client.\nAll OData services use the same generic HTTP client, so it contains no service-specific information.\nThe client handles connectivity related issues such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"Destination lookup")),(0,a.kt)("li",{parentName:"ul"},"Connections to ",(0,a.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/on-premise"},"SAP S/4HANA On-premise")," via the connectivity service"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/proxy"},"Web proxies"),".")),(0,a.kt)("p",null,"In the end, all information from the destination, connectivity service, and proxy configuration ends up in header-fields and ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/proxy-agent"},"proxy-agents"),".\nThe information goes one level down to the axios client."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"axios HTTP Client:"),"\nIs a widely used open source ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/axios"},"HTTP client for node"),".\nThis client executes the actual HTTP requests in the end."),(0,a.kt)("h2",{id:"how-to-use-it"},"How to Use It"),(0,a.kt)("p",null,"To make a request using the Generic HTTP client use the ",(0,a.kt)("inlineCode",{parentName:"p"},"executeHttpRequest")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"executeHttpRequest(destination, requestConfig, httpRequestOptions);\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"destination")," argument is either a full destination object you have already fetched or an object containing a destination name and JWT.\nIn the latter case the SAP Cloud SDK ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"fetches the destination")," for you.\nThe ",(0,a.kt)("a",{parentName:"p",href:"pathname:///api/1.28.1/interfaces/sap_cloud_sdk_core.httprequestconfig"},"request configuration")," argument contains the request configuration.\nA minimal configuration would look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},"{\n     method: 'get',\n     params: {\n          a: 'a',\n          b: 'b'\n     },\n    ...\n}\n")),(0,a.kt)("p",null,"Note that you can also give values for ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," in the request configuration.\nThe values you give in the request configuration ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/blob/main/packages/core/src/http-client/http-client.ts#L136-L148"},"will be merged")," with ones related to the destination:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  ...destinationRequestConfig,\n  ...customRequestConfig,\n  headers: {\n   ...destinationRequestConfig.headers,\n   ...customRequestConfig.headers\n}\n")),(0,a.kt)("p",null,"For keys which exist for both object the value from the custom request configuration will be used.\nFor example, a request configuration with ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization")," headers will overwrite the authorization header information from the destination."),(0,a.kt)("p",null,"You can also pass an optional third parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"httpRequestOptions"),", where you can indicate for example whether the SAP Cloud SDK should fetch ",(0,a.kt)("inlineCode",{parentName:"p"},"CSRF")," token for a non-GET request.\nFor a get request, the ",(0,a.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not fetched and this option is ignored.\nBelow is an example of the ",(0,a.kt)("inlineCode",{parentName:"p"},"httpRequestOptions")," to delegate the ",(0,a.kt)("inlineCode",{parentName:"p"},"CSRF")," token fetching to the SAP Cloud SDK."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},"{\n     fetchCsrfToken: true\n}\n")),(0,a.kt)("p",null,"By default, the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchCsrfToken")," is false."),(0,a.kt)("h2",{id:"when-to-use-it"},"When to Use It"),(0,a.kt)("p",null,"You should consider the Generic HTTP client if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You need to use an unsupported feature by the typed OData Client like ",(0,a.kt)("inlineCode",{parentName:"li"},"upsert")," for example.\nWith this, you can profit from the aforementioned convenience in connectivity."),(0,a.kt)("li",{parentName:"ul"},"You want to ping a service or trigger a function import without a complicated payload.\nIn such a case the size of a full data model of the typed client is perhaps not worth the benefits."),(0,a.kt)("li",{parentName:"ul"},"You want to call a non-OData service that has no service definition.")),(0,a.kt)("p",null,"You should consider the OData client if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You have to build complicated filter, selection, and/or expand conditions.\nHere you will highly benefit from the help of the OData client."),(0,a.kt)("li",{parentName:"ul"},"You want to update or create new entities.\nThe OData Client has built-in ",(0,a.kt)("inlineCode",{parentName:"li"},"ETag")," versions handling.\nWith the generic client, you have to manage versions on your own.")))}p.isMDXComponent=!0}}]);