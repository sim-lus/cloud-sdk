(window.webpackJsonp=window.webpackJsonp||[]).push([[106,12,23,49,54],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(221)),o=(a(222),a(229)),s=a(230),c=a(280),u={title:"Executing a Request Using a Generated OData v2/v4 Client",sidebar_label:"Execute an OData request",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"]},l={unversionedId:"js/features/odata/execute-odata-request",id:"js/features/odata/execute-odata-request",isDocsHomePage:!1,title:"Executing a Request Using a Generated OData v2/v4 Client",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",source:"@site/docs/js/features/odata/execute-odata-request.mdx",slug:"/js/features/odata/execute-odata-request",permalink:"/cloud-sdk/docs/js/features/odata/execute-odata-request",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/execute-odata-request.mdx",version:"current",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1619790398,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"Execute an OData request",sidebar:"someSidebar",previous:{title:"Generate an OData client for JavaScript",permalink:"/cloud-sdk/docs/js/features/odata/generate-odata-client"},next:{title:"Use the OData v2 Client",permalink:"/cloud-sdk/docs/js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript"}},d=[{value:"General Request Structure",id:"general-request-structure",children:[{value:"Setting Custom Request Headers",id:"setting-custom-request-headers",children:[]},{value:"Setting Custom Query Parameters",id:"setting-custom-query-parameters",children:[]},{value:"Setting a Custom Service Path",id:"setting-a-custom-service-path",children:[]},{value:"Setting a Custom Request Configuration",id:"setting-a-custom-request-configuration",children:[]},{value:"Getting the Raw Response and the Original Request",id:"getting-the-raw-response-and-the-original-request",children:[]}]}],p={toc:d};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Once you have generated a typed OData client using the SAP Cloud SDK generator or if you decided to use one of the pre-generated OData clients for SAP S/4HANA, you can use your OData client to execute HTTP requests against your service.\nThe client provides request builders for the different types of requests and abstractions of the entity sets of the given service, that we refer to as ",Object(i.b)("em",{parentName:"p"},"entities"),"."),Object(i.b)("p",null,"To request an entity set, entities offer a fluent API."),Object(i.b)("h2",{id:"general-request-structure"},"General Request Structure"),Object(i.b)("p",null,"On an abstract level, creating a request using the fluent API always follows the same simple structure:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { MyEntity } from './outputDir/my-service';\n\nreturn MyEntity.requestBuilder()\n  .<requestType>(...)\n  .<additionalRequestConfiguration>(...)\n  .execute(destination);\n")),Object(i.b)("p",null,"When using a custom OData client, import an entity from the generated service directory (",Object(i.b)("inlineCode",{parentName:"p"},"my-service"),") within the specified output directory (",Object(i.b)("inlineCode",{parentName:"p"},"outputDir"),").\nThe name of the service directory corresponds to the ",Object(i.b)("inlineCode",{parentName:"p"},"directoryName")," specified in the service mapping file (",Object(i.b)("inlineCode",{parentName:"p"},"serviceMapping.json")," by default) in your input directory."),Object(i.b)("p",null,"When using one of the predefined OData clients, import it from the npm module."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { PredefinedEntity } from '@sap/cloud-sdk-vdm-predefined-service';\n")),Object(i.b)("p",null,"Every entity has a ",Object(i.b)("inlineCode",{parentName:"p"},"requestBuilder")," function, that allows to chain all types of request builders that are available for this entity, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"MyEntity.requestBuilder().getAll()")," for the ",Object(i.b)("inlineCode",{parentName:"p"},"getAll")," request type."),Object(i.b)("p",null,"See the list below for details on all available request types (denoted by ",Object(i.b)("inlineCode",{parentName:"p"},"requestType")," in the example above):"),Object(i.b)(o.a,{groupId:"odataVersion",defaultValue:"v2",values:[{label:"OData v2",value:"v2"},{label:"OData v4",value:"v4"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"v2",mdxType:"TabItem"},Object(i.b)("li",null,Object(i.b)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#getall-request-builder"},Object(i.b)("code",null,"getAll"))," ","Build requests to get a list of entities (OData v2)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#getbykey-request-builder"},Object(i.b)("code",null,"getByKey"))," ","Build requests to get an entity based on a key (OData v2)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#create-request-builder"},Object(i.b)("code",null,"create"))," ","Build requests to create entities (OData v2)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#update-request-builder"},Object(i.b)("code",null,"update"))," ","Build requests to update entities (OData v2)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#delete-request-builder"},Object(i.b)("code",null,"delete"))," ","Build requests to delete entities (OData v2)")),Object(i.b)(s.a,{value:"v4",mdxType:"TabItem"},Object(i.b)("li",null,Object(i.b)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#getall-request-builder"},Object(i.b)("code",null,"getAll"))," ","Build requests to get a list of entities (OData v4)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#getbykey-request-builder"},Object(i.b)("code",null,"getByKey"))," ","Build requests to get an entity based on a key (OData v4)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#create-request-builder"},Object(i.b)("code",null,"create"))," ","Build requests to create entities (OData v4)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#update-request-builder"},Object(i.b)("code",null,"update"))," ","Build requests to update entities (OData v4)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#delete-request-builder"},Object(i.b)("code",null,"delete"))," ","Build requests to delete entities (OData v4)"))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Some entities do not support all of the request types, which in turn won't be available through the API."))),Object(i.b)("p",null,"The request can further be configured by chaining additional configuration functions (denoted by ",Object(i.b)("inlineCode",{parentName:"p"},"additionalRequestConfiguration")," in the example above).\nAll requests can be configured by setting ",Object(i.b)("a",{parentName:"p",href:"#setting-custom-request-headers"},"custom request headers"),", ",Object(i.b)("a",{parentName:"p",href:"#setting-custom-query-parameters"},"custom query parameters")," and a ",Object(i.b)("a",{parentName:"p",href:"#setting-a-custom-service-path"},"custom service path"),"."),Object(i.b)("p",null,"Each request type has additional request specific configuration options, e.g. creating an entity ",Object(i.b)("inlineCode",{parentName:"p"},"asChildOf")," another entity for ",Object(i.b)("inlineCode",{parentName:"p"},"create")," requests, ETag handling for ",Object(i.b)("inlineCode",{parentName:"p"},"update")," and ",Object(i.b)("inlineCode",{parentName:"p"},"delete")," requests, as well as set operations for ",Object(i.b)("inlineCode",{parentName:"p"},"getAll")," requests and selecting properties for ",Object(i.b)("inlineCode",{parentName:"p"},"getAll")," and ",Object(i.b)("inlineCode",{parentName:"p"},"getByKey")," requests."),Object(i.b)("p",null,"The last step when making a request using the SAP Cloud SDK is the request execution.\nOnce the request is configured use the ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," function and pass a ",Object(i.b)("a",{parentName:"p",href:"../connectivity/destination"},"destination")," to it.\nThis will automatically construct your request URL and headers, execute the request, and return a typed response if applicable."),Object(i.b)("h3",{id:"setting-custom-request-headers"},"Setting Custom Request Headers"),Object(i.b)("p",null,"The SAP Cloud SDK automatically sets some necessary request headers on every request.\nYou can specify additional custom headers using the ",Object(i.b)("inlineCode",{parentName:"p"},"addCustomHeaders")," function:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder().getAll().addCustomHeaders({\n  apikey: 'my-api-key'\n});\n")),Object(i.b)("p",null,"The keys and values of the passed object correspond with the header names and values.\nCustom headers take priority over automatically generated headers.\nAutomatically generated headers are sent with lowercase header names, custom headers keep the case they were set in.\nIn the example above we pass an ",Object(i.b)("inlineCode",{parentName:"p"},"apikey"),", which is necessary if you want to make use of the SAP API Business Hub sandbox."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Setting an ",Object(i.b)("inlineCode",{parentName:"p"},"authorization")," or ",Object(i.b)("inlineCode",{parentName:"p"},"apikey")," header (regardless of lowercase or uppercase spelling) will skip any automatic authorization header building that the SAP Cloud SDK would normally do."))),Object(i.b)("h3",{id:"setting-custom-query-parameters"},"Setting Custom Query Parameters"),Object(i.b)("p",null,"The SAP Cloud SDK adds necessary query parameters for a request based on your configuration.\nYou can add custom parameters by using the ",Object(i.b)("inlineCode",{parentName:"p"},"withCustomQueryParameters")," function.\nCustom query parameters take precedence over those created by the SAP Cloud SDK."),Object(i.b)("p",null,"In the example below an additional query parameter ",Object(i.b)("inlineCode",{parentName:"p"},"language=en")," will be added to the request URL:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getAll()\n\n  .withCustomQueryParameters({\n    language: 'en'\n  });\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you want to set a query parameter in quotes (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"language='en'"),") you will have to provide the parameter with quotes, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"{ language: \"'en'\" }"),"."))),Object(i.b)("h3",{id:"setting-a-custom-service-path"},"Setting a Custom Service Path"),Object(i.b)("p",null,"If a service specification contains a specification for the ",Object(i.b)("inlineCode",{parentName:"p"},"servicePath"),", the SAP Cloud SDK generator generates an OData client with a default service path according to the specification (typically ",Object(i.b)("inlineCode",{parentName:"p"},"'/sap/opus/data/sap/'")," for SAP S/4HANA services).\nWhen there is no such path defined in the specification it can be manually set in the ",Object(i.b)("inlineCode",{parentName:"p"},"service-mapping.json"),".\nIt can also be adjusted per request by using the ",Object(i.b)("inlineCode",{parentName:"p"},"withCustomServicePath")," function:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getAll()\n  .withCustomServicePath('my/custom/service/path');\n")),Object(i.b)("p",null,"This will add the custom service path to your request.\nExecuting the example request above against a destination with URL ",Object(i.b)("inlineCode",{parentName:"p"},"https://my.s4-system.com")," would result in a request against something like this: ",Object(i.b)("inlineCode",{parentName:"p"},"https://my.s4-system.com/my/custom/service/path/MyEntity"),"."),Object(i.b)("h3",{id:"setting-a-custom-request-configuration"},"Setting a Custom Request Configuration"),Object(i.b)(c.a,{mdxType:"CustomRequestConfig"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getAll()\n  .addCustomRequestConfiguration({ responseType: 'arraybuffer' });\n")),Object(i.b)(c.b,{mdxType:"CustomRequestConfigNote"}),Object(i.b)("h3",{id:"getting-the-raw-response-and-the-original-request"},"Getting the Raw Response and the Original Request"),Object(i.b)(c.c,{mdxType:"ExecuteRawOverview"}),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const httpResponse: HttpResponse = MyEntity.requestBuilder()\n  .getAll()\n  .executeRaw(destination);\n")),Object(i.b)(c.d,{mdxType:"ExecuteRawUseCases"}),Object(i.b)("ul",{style:{"margin-top":"-16px"}},Object(i.b)("li",null,"In rare cases, when the response data cannot be deserialized. This can happen when function imports use an entity type as return type, and this entity type is shared by multiple ",Object(i.b)("code",null,"EntitySet"),"s. Without further information, it is unclear which ",Object(i.b)("code",null,"Entity")," should be deserialized. For those cases, you have to use ",Object(i.b)("code",null,"executeRaw")," and use the ",Object(i.b)("code",null,"deserialize")," function on the response data.")))}b.isMDXComponent=!0},221:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(a),b=n,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return a?r.a.createElement(m,s(s({ref:t},u),{},{components:a})):r.a.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},222:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(16),r=a(223);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,u=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(s)return t+a;var l=a.startsWith(t)?a:t+a.replace(/^\//,"");return u?e+l:l}(i,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},223:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},224:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},226:function(e,t,a){"use strict";var n=a(0),r=a(227);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},227:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},229:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(226),o=a(224),s=a(56),c=a.n(s);var u=37,l=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,d=e.values,p=e.groupId,b=e.className,m=Object(i.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,v=Object(n.useState)(s),j=v[0],O=v[1],g=n.Children.toArray(e.children),y=[];if(null!=p){var w=f[p];null!=w&&w!==j&&d.some((function(e){return e.value===w}))&&O(w)}var N=function(e){var t=e.target,a=y.indexOf(t),n=g[a].props.value;O(n),null!=p&&(h(p,n),setTimeout((function(){var e,a,n,r,i,o,s,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,u=o.innerWidth,a>=0&&i<=u&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},q=function(e){var t,a;switch(e.keyCode){case l:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case u:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},b)},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:q,onFocus:N,onClick:N},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},230:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},280:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return p}));var n=a(0),r=a.n(n),i=a(61),o=a(73),s=a(70),c=a(63);function u(){return r.a.createElement(i.default,null)}function l(){return r.a.createElement(o.default,null)}function d(){return r.a.createElement(s.default,null)}function p(){return r.a.createElement(c.default,null)}},61:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(221)),o={},s={unversionedId:"js/features/common/custom-request-config",id:"js/features/common/custom-request-config",isDocsHomePage:!1,title:"custom-request-config",description:"By default, the SAP Cloud SDK uses axios as an HTTP client for executing requests.",source:"@site/docs/js/features/common/custom-request-config.mdx",slug:"/js/features/common/custom-request-config",permalink:"/cloud-sdk/docs/js/features/common/custom-request-config",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/custom-request-config.mdx",version:"current",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1619790398,formattedLastUpdatedAt:"4/30/2021"},c=[],u={toc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"By default, the SAP Cloud SDK uses ",Object(i.b)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," as an HTTP client for executing requests.\nThe SAP Cloud SDK derives and configures most of the request options like ",Object(i.b)("inlineCode",{parentName:"p"},"url"),", ",Object(i.b)("inlineCode",{parentName:"p"},"headers"),", and others for you.\nIn certain cases passing additional options to axios might be required.\nTo achieve this you can provide a custom request configuration that will be passed down to axios.\nThe example below demonstrates how to configure the response data type, which is typically used when downloading a file from an endpoint."))}l.isMDXComponent=!0},63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(221)),o={},s={unversionedId:"js/features/common/execute-raw-use-cases",id:"js/features/common/execute-raw-use-cases",isDocsHomePage:!1,title:"execute-raw-use-cases",description:"Typical cases, where you might need to use executeRaw are:",source:"@site/docs/js/features/common/execute-raw-use-cases.mdx",slug:"/js/features/common/execute-raw-use-cases",permalink:"/cloud-sdk/docs/js/features/common/execute-raw-use-cases",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/execute-raw-use-cases.mdx",version:"current",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1619790398,formattedLastUpdatedAt:"4/30/2021"},c=[],u={toc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Typical cases, where you might need to use ",Object(i.b)("inlineCode",{parentName:"p"},"executeRaw")," are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You need additional information about the response, like the status code or response headers."),Object(i.b)("li",{parentName:"ul"},"You need additional information about the request that has been sent, like payload, method or request headers."),Object(i.b)("li",{parentName:"ul"},"Debugging purposes.")))}l.isMDXComponent=!0},70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(221)),o={},s={unversionedId:"js/features/common/execute-raw-overview",id:"js/features/common/execute-raw-overview",isDocsHomePage:!1,title:"execute-raw-overview",description:"In addition to the execute method, you can execute a request using the executeRaw method.",source:"@site/docs/js/features/common/execute-raw-overview.mdx",slug:"/js/features/common/execute-raw-overview",permalink:"/cloud-sdk/docs/js/features/common/execute-raw-overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/execute-raw-overview.mdx",version:"current",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1619790398,formattedLastUpdatedAt:"4/30/2021"},c=[],u={toc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In addition to the ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," method, you can execute a request using the ",Object(i.b)("inlineCode",{parentName:"p"},"executeRaw")," method.\nIt returns an ",Object(i.b)("inlineCode",{parentName:"p"},"HttpResponse"),", which contains the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"status")," - the status code of the response"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headers")," - the response headers"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data")," - the response body"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"request")," - the original request")))}l.isMDXComponent=!0},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(221)),o={},s={unversionedId:"js/features/common/custom-request-config-note",id:"js/features/common/custom-request-config-note",isDocsHomePage:!1,title:"custom-request-config-note",description:"To ensure API consistency we do not allow to override the following options:",source:"@site/docs/js/features/common/custom-request-config-note.mdx",slug:"/js/features/common/custom-request-config-note",permalink:"/cloud-sdk/docs/js/features/common/custom-request-config-note",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/custom-request-config-note.mdx",version:"current",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1619790398,formattedLastUpdatedAt:"4/30/2021"},c=[],u={toc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"To ensure API consistency we do not allow to override the following options:"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"method")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"url")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"baseURL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"params"))))))}l.isMDXComponent=!0}}]);