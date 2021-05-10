(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[85],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||a;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return r}});var o=n(2263),i=n(3919);function a(){var e=(0,o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,r=a.forcePrependBaseUrl,s=void 0!==r&&r,l=a.absolute,p=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+d:d}(a,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},7195:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var o=n(2122),i=n(9756),a=(n(7294),n(3905)),r=n(4996),s={title:"Proxies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Proxies",description:"This article describes how the SAP Cloud SDK handles the different proxy options and how they are configured.",keywords:["sap","cloud","sdk","proxy","connectivity","JavaScript","TypeScript"]},l={unversionedId:"js/features/connectivity/proxy",id:"js/features/connectivity/proxy",isDocsHomePage:!1,title:"Proxies",description:"This article describes how the SAP Cloud SDK handles the different proxy options and how they are configured.",source:"@site/docs/js/features/connectivity/proxy.mdx",sourceDirName:"js/features/connectivity",slug:"/js/features/connectivity/proxy",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/connectivity/proxy.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1620629205,formattedLastUpdatedAt:"5/10/2021",sidebar_label:"Proxies",frontMatter:{title:"Proxies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Proxies",description:"This article describes how the SAP Cloud SDK handles the different proxy options and how they are configured.",keywords:["sap","cloud","sdk","proxy","connectivity","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"Destinations",permalink:"/cloud-sdk/docs/js/features/connectivity/destination"},next:{title:"Generic HTTP Client",permalink:"/cloud-sdk/docs/js/features/connectivity/generic-http-client"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Making a First API Call",id:"making-a-first-api-call",children:[]},{value:"What Kind of Proxies are There?",id:"what-kind-of-proxies-are-there",children:[]},{value:"Manual Configuration",id:"manual-configuration",children:[]},{value:"The Automatic Flow",id:"the-automatic-flow",children:[]},{value:"A Word on the Used Libraries and Implementation Details",id:"a-word-on-the-used-libraries-and-implementation-details",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The SAP Cloud SDK for JavaScript offers a convenient way to connect to various systems offering public APIs.\nThe most famous one is SAP S/4HANA which comes in two flavors Cloud and On-premise.\nWe pre-generate type-safe clients for SAP S/4HANA APIs and publish them to ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40sap%2Fcloud-sdk-vdm-*"},"npm")," for your convenience."),(0,a.kt)("p",null,"For different systems like SAP SuccessFactors, SAP Cloud for Customer, and many others you can generate a type-safe client yourself.\nAll you have to do it look up an API definition on ",(0,a.kt)("a",{parentName:"p",href:"https://api.sap.com/"},"SAP API BusinessHub")," and invoke a ",(0,a.kt)("a",{parentName:"p",href:"../odata/generate-typed-odata-v2-and-v4-client-for-javascript-and-typescript"},"generator")," supplied with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js"},"SAP Cloud SDK for JavaScript"),".\nThis ",(0,a.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-js-generator.html"},"comprehensive tutorial")," and will guide you through this process step by step."),(0,a.kt)("h2",{id:"making-a-first-api-call"},"Making a First API Call"),(0,a.kt)("p",null,"Once you have generated a type-safe client, this is how you make your first API call.\nThis example uses the ",(0,a.kt)("strong",{parentName:"p"},"BusinessPartner")," service from the SAP S/4HANA suite."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"BusinessPartner.requestBuilder()\n  .getAll()\n  .filter(BusinessPartner.BUSINESS_PARTNER_CATEGORY.equals('1'))\n  .top(5)\n  .execute(yourDestination);\n")),(0,a.kt)("p",null,"The SAP Cloud SDK does a lot of heavy lifting under the hood to take care of complexity so that you can fully concentrate on your app's logic.\nA detailed step by step guide on using a type-safe client is provided in this ",(0,a.kt)("a",{parentName:"p",href:"https://developers.sap.com/group.s4sdk-js-cloud-foundry.html"},"tutorial series"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To name a few things handled by SAP Cloud SDK for JavaScript:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Destination fetching"),(0,a.kt)("li",{parentName:"ul"},"Handling of ETag"),(0,a.kt)("li",{parentName:"ul"},"Handling of CSRF token"),(0,a.kt)("li",{parentName:"ul"},"Serializing and deserializing the request"),(0,a.kt)("li",{parentName:"ul"},"And more...")),(0,a.kt)("p",null,"In this document, we focus on the ",(0,a.kt)("strong",{parentName:"p"},"proxy")," part and explain how proxies are handled by the SAP Cloud SDK."),(0,a.kt)("h2",{id:"what-kind-of-proxies-are-there"},"What Kind of Proxies are There?"),(0,a.kt)("p",null,"Before we get into the details it is important to have an overview of the different proxy types.\nThere are two possible types of proxies:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A local proxy running on the cloud platform that connects to SAP S/4HANA On-premise systems.\nThe proxy information like host and port are provided by the ",(0,a.kt)("a",{parentName:"li",href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/daca64dacc6148fcb5c70ed86082ef91.html#loiodaca64dacc6148fcb5c70ed86082ef91__services"},"connectivity service"),".\nThis proxy will be referred to as connectivity proxy."),(0,a.kt)("li",{parentName:"ol"},"A proxy running in some landscape that makes requests to the internet.\nThis proxy will be referred to as web proxy.")),(0,a.kt)("h2",{id:"manual-configuration"},"Manual Configuration"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute()")," you can either give an object containing the destination name or you can configure the full destination manually.\nIf you provide the destination name the SAP Cloud SDK will try to lookup as described ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"here"),"."),(0,a.kt)("p",null,"In productive use, the manual configuration will not be useful, but for testing, it might be valuable.\nThe destination object contains a field ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyConfiguration")," in which you can configure a proxy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  url: "https://MyDestinationURL.com"\n  proxyConfiguration: {\n    host: "my.proxy.host.com",\n    port: 123,\n    protocol: "http",\n    headers: {\n      Proxy-Authorization: \'yourAuthHeader could be basic or some bearer token\',\n      SAP-Connectivity-Authentication: \'\'\n    }\n  }\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SAP-Connectivity-Authentication")," field contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," issued for the user on application login.\nThis is mandatory if principal propagation is used i.e. identity propagation from the cloud application to the SAP S/4HANA system."),(0,a.kt)("h2",{id:"the-automatic-flow"},"The Automatic Flow"),(0,a.kt)("p",null,"For productive use, you do not want to include a specific proxy configuration in your code.\nHere you should let the SAP Cloud SDK handle everything.\nHence, you will provide in the ",(0,a.kt)("inlineCode",{parentName:"p"},".execute()")," method only the destination name.\nThis will trigger the destination lookup as described ",(0,a.kt)("a",{parentName:"p",href:"destination"},"here"),"."),(0,a.kt)("p",null,"The result of the lookup is a destination object which contains a property called ",(0,a.kt)("inlineCode",{parentName:"p"},"Proxy Type"),".\nThis property can have two values: ",(0,a.kt)("inlineCode",{parentName:"p"},"Internet")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"OnPremise"),":"),(0,a.kt)("img",{alt:"Destination in CF",src:(0,r.Z)("img/proxyTypeDestination.png")}),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"OnPremise")," is selected it is assumed that this destination points to an SAP S/4HANA On-premise system.\nIn this case, you need the connectivity proxy.\nThe SAP Cloud SDK will request the proxy host and port from the connectivity service and make a request using this proxy.\nFrom there the request will pass via the ",(0,a.kt)("strong",{parentName:"p"},"SAP Cloud Connector")," to the SAP S/4HANA On-premise system."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"Internet")," is selected it is assumed that this destination points to something on the Internet and in most cases, no proxy is needed.\nHowever, if a proxy is needed to reach this destination it is configured in the following way."),(0,a.kt)("p",null,"The SAP Cloud SDK considers the environment variables ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP_PROXY")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY"),".\nThe variable ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP_PROXY")," is used for destinations using ",(0,a.kt)("inlineCode",{parentName:"p"},"http://")," in their URL and ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," for the ones using ",(0,a.kt)("inlineCode",{parentName:"p"},"https://"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"https")," is the default protocol if the protocol is not set in the URL field of the destination."),(0,a.kt)("p",null,"The value of the two proxy variables is just a simple string following this pattern:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<protocol>://<user>:<password>?@<host>:<port>\n")),(0,a.kt)("p",null,"The user and password are optional and if they are left out no authentication header is added.\nThe protocol is also optional and the default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," since most proxies do not use an encryption layer for communication.\nThe default for the port is ",(0,a.kt)("inlineCode",{parentName:"p"},"80")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"443")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"https"),". Example of a valid values would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},"http://John:SecurePassword@some.host.com:1234\nhttps://some.host.com:1234 -> will use 443 as default\nsome.host.com:1234 -> will use http as default\nsome.host.com -> will use http and 80 as default\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you use any special character in your username or password you need to encode them using ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Percent-encoding"},"percent encoding")))),(0,a.kt)("p",null,"Since environment variables are a global setting, it might become necessary to exclude some destinations from using the proxy.\nThis is possible using the ",(0,a.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," environment variable.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," variable contains a list of comma-separated URLs for which no proxy is used.\nCurrently, wild cards like ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," are supported in the list."),(0,a.kt)("h2",{id:"a-word-on-the-used-libraries-and-implementation-details"},"A Word on the Used Libraries and Implementation Details"),(0,a.kt)("p",null,"The SAP Cloud SDK uses axios to execute ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," requests.\nIn principle axios should support web proxies based on the environment variables.\nHowever, we found that the request URL using a proxy was not correctly constructed and for the connectivity proxy, an entry point was necessary anyhow."),(0,a.kt)("p",null,"Hence, the SAP Cloud SDK switches off the build-in proxy handling by axios completely by using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "proxy": false\n}\n')),(0,a.kt)("p",null,"in the axios request configuration.\nIf a proxy becomes necessary or is configured by the discussed environment variables the SAP Cloud SDK builds directly the ",(0,a.kt)("inlineCode",{parentName:"p"},"http-agent")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"https-agent"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "proxy": false,\n  "httpAgent": httpProxAgent || new http.Agent(),\n  "httpsAgent": httpsProxyAgent || new https.Agent()\n}\n')),(0,a.kt)("p",null,"This adds them to the axios configuration.\nThe agents contain the proxy configuration.\nThe standard ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/http-proxy-agent"},"http and https agents")," are used."))}c.isMDXComponent=!0}}]);