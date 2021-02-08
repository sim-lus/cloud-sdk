(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),i=(n(0),n(204)),r=n(205),s={title:"Proxies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Proxies",description:"This article describes how the SAP Cloud SDK handles the different proxy options and how they are configured.",keywords:["sap","cloud","sdk","proxy","connectivity","JavaScript","TypeScript"]},c={unversionedId:"js/features/connectivity/proxy",id:"js/features/connectivity/proxy",isDocsHomePage:!1,title:"Proxies",description:"This article describes how the SAP Cloud SDK handles the different proxy options and how they are configured.",source:"@site/docs/js/features/connectivity/proxy.mdx",slug:"/js/features/connectivity/proxy",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/connectivity/proxy.mdx",version:"current",lastUpdatedBy:"Emdee89",lastUpdatedAt:1612809014,sidebar_label:"Proxies",sidebar:"someSidebar",previous:{title:"Destinations",permalink:"/cloud-sdk/docs/js/features/connectivity/destination"},next:{title:"Generic HTTP Client",permalink:"/cloud-sdk/docs/js/features/connectivity/generic-http-client"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Making a First API Call",id:"making-a-first-api-call",children:[]},{value:"What Kind of Proxies are There?",id:"what-kind-of-proxies-are-there",children:[]},{value:"Manual Configuration",id:"manual-configuration",children:[]},{value:"The Automatic Flow",id:"the-automatic-flow",children:[]},{value:"A Word on the Used Libraries and Implementation Details",id:"a-word-on-the-used-libraries-and-implementation-details",children:[]}],p={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"The SAP Cloud SDK for JavaScript offers a convenient way to connect to various systems offering public APIs.\nThe most famous one is SAP S/4HANA which comes in two flavors Cloud and OnPremise.\nWe pre-generate type-safe clients for SAP S/4HANA APIs and publish them to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/search?q=%40sap%2Fcloud-sdk-vdm-*"}),"npm")," for your convenience."),Object(i.b)("p",null,"For different systems like SAP SuccessFactors, SAP Cloud for Customer, and many others you can generate a type-safe client yourself.\nAll you have to do it look up an API definition on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://api.sap.com/"}),"SAP API BusinessHub")," and invoke a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../odata/generate-typed-odata-v2-and-v4-client-for-javascript-and-typescript"}),"generator")," supplied with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk-js"}),"SAP Cloud SDK for JavaScript"),".\nThis ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.sap.com/tutorials/cloudsdk-js-generator.html"}),"comprehensive tutorial")," and will guide you through this process step by step."),Object(i.b)("h2",{id:"making-a-first-api-call"},"Making a First API Call"),Object(i.b)("p",null,"Once you have generated a type-safe client, this is how you make your first API call.\nThis example uses the ",Object(i.b)("strong",{parentName:"p"},"BusinessPartner")," service from the SAP S/4HANA suite."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"BusinessPartner.requestBuilder()\n  .getAll()\n  .filter(BusinessPartner.BUSINESS_PARTNER_CATEGORY.equals('1'))\n  .top(5)\n  .execute(yourDestination);\n")),Object(i.b)("p",null,"The SAP Cloud SDK does a lot of heavy lifting under the hood to take care of complexity so that you can fully concentrate on your app's logic.\nA detailed step by step guide on using a type-safe client is provided in this ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.sap.com/group.s4sdk-js-cloud-foundry.html"}),"tutorial series"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"To name a few things handled by SAP Cloud SDK for JavaScript:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Destination fetching"),Object(i.b)("li",{parentName:"ul"},"Handling of ETag"),Object(i.b)("li",{parentName:"ul"},"Handling of CSRF token"),Object(i.b)("li",{parentName:"ul"},"Serializing and deserializing the request"),Object(i.b)("li",{parentName:"ul"},"And more...")),Object(i.b)("p",null,"In this document, we focus on the ",Object(i.b)("strong",{parentName:"p"},"proxy")," part and explain how proxies are handled by the SAP Cloud SDK."),Object(i.b)("h2",{id:"what-kind-of-proxies-are-there"},"What Kind of Proxies are There?"),Object(i.b)("p",null,"Before we get into the details it is important to have an overview of the different proxy types.\nThere are two possible types of proxies:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"A local proxy running on the cloud platform that connects to SAP S/4HANA OnPremise systems.\nThe proxy information like host and port are provided by the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/daca64dacc6148fcb5c70ed86082ef91.html#loiodaca64dacc6148fcb5c70ed86082ef91__services"}),"connectivity service"),".\nThis proxy will be referred to as ",Object(i.b)("inlineCode",{parentName:"li"},"connectivity proxy"),"."),Object(i.b)("li",{parentName:"ol"},"A proxy running in some landscape that makes requests to the internet.\nThis proxy will be referred to as ",Object(i.b)("inlineCode",{parentName:"li"},"web proxy"),".")),Object(i.b)("h2",{id:"manual-configuration"},"Manual Configuration"),Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"execute()")," you can either give an object containing the destination name or you can configure the full destination manually.\nIf you provide the destination name the SAP Cloud SDK will try to lookup as described ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/cloud-sdk/docs/js/features/connectivity/destination"}),"here"),"."),Object(i.b)("p",null,"In productive use, the manual configuration will not be useful, but for testing, it might be valuable.\nThe destination object contains a field ",Object(i.b)("inlineCode",{parentName:"p"},"proxyConfiguration")," in which you can configure a proxy."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  url: "https://MyDestinationURL.com"\n  proxyConfiguration: {\n    host: "my.proxy.host.com",\n    port: 123,\n    protocol: "http",\n    headers: {\n      Proxy-Authorization: \'yourAuthHeader could be basic or some bearer token\',\n      SAP-Connectivity-Authentication: \'\'\n    }\n  }\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"SAP-Connectivity-Authentication")," field contains the ",Object(i.b)("inlineCode",{parentName:"p"},"JWT")," issued for the user on application login.\nThis is mandatory if principal propagation is used i.e. identity propagation from the cloud application to the SAP S/4HANA system."),Object(i.b)("h2",{id:"the-automatic-flow"},"The Automatic Flow"),Object(i.b)("p",null,"For productive use, you do not want to include a specific proxy configuration in your code.\nHere you should let the SAP Cloud SDK handle everything.\nHence, you will provide in the ",Object(i.b)("inlineCode",{parentName:"p"},".execute()")," method only the destination name.\nThis will trigger the destination lookup as described ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"destination"}),"here"),"."),Object(i.b)("p",null,"The result of the lookup is a destination object which contains a property called ",Object(i.b)("inlineCode",{parentName:"p"},"Proxy Type"),".\nThis property can have two values: ",Object(i.b)("inlineCode",{parentName:"p"},"Internet")," and ",Object(i.b)("inlineCode",{parentName:"p"},"OnPremise"),":"),Object(i.b)("img",{alt:"Destination in CF",src:Object(r.a)("img/proxyTypeDestination.png")}),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"OnPremise")," is selected it is assumed that this destination points to an SAP S/4HANA OnPremise system.\nIn this case, you need the ",Object(i.b)("inlineCode",{parentName:"p"},"connectivity proxy"),".\nThe SAP Cloud SDK will request the proxy host and port from the connectivity service and make a request using this proxy.\nFrom there the request will pass via the ",Object(i.b)("strong",{parentName:"p"},"SAP Cloud Connector")," to the SAP S/4HANA OnPremise system."),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"Internet")," is selected it is assumed that this destination points to something on the Internet and in most cases, no proxy is needed.\nHowever, if a proxy is needed to reach this destination it is configured in the following way."),Object(i.b)("p",null,"The SAP Cloud SDK considers the environment variables ",Object(i.b)("inlineCode",{parentName:"p"},"HTTP_PROXY")," and ",Object(i.b)("inlineCode",{parentName:"p"},"HTTPS_PROXY"),".\nThe variable ",Object(i.b)("inlineCode",{parentName:"p"},"HTTP_PROXY")," is used for destinations using ",Object(i.b)("inlineCode",{parentName:"p"},"http://")," in their URL and ",Object(i.b)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," for the ones using ",Object(i.b)("inlineCode",{parentName:"p"},"https://"),".\n",Object(i.b)("inlineCode",{parentName:"p"},"https")," is the default protocol if the protocol is not set in the URL field of the destination."),Object(i.b)("p",null,"The value of the two proxy variables is just a simple string following this pattern:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"<protocol>://<user>:<password>?@<host>:<port>\n")),Object(i.b)("p",null,"The user and password are optional and if they are left out no authentication header is added.\nThe protocol is also optional and the default value is ",Object(i.b)("inlineCode",{parentName:"p"},"http")," since most proxies do not use an encryption layer for communication.\nThe default for the port is ",Object(i.b)("inlineCode",{parentName:"p"},"80")," for ",Object(i.b)("inlineCode",{parentName:"p"},"http")," and ",Object(i.b)("inlineCode",{parentName:"p"},"443")," for ",Object(i.b)("inlineCode",{parentName:"p"},"https"),". Example of a valid values would be:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"script",script:!0}),"http://John:SecurePassword@some.host.com:1234\nhttps://some.host.com:1234 -> will use 443 as default\nsome.host.com:1234 -> will use http as default\nsome.host.com -> will use http and 80 as default\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you use any special character in your username or password you need to encode them using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Percent-encoding"}),"percent encoding")))),Object(i.b)("p",null,"Since environment variables are a global setting, it might become necessary to exclude some destinations from using the proxy.\nThis is possible using the ",Object(i.b)("inlineCode",{parentName:"p"},"NO_PROXY")," environment variable.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"NO_PROXY")," variable contains a list of comma-separated URLs for which no proxy is used.\nCurrently, wild cards like ",Object(i.b)("inlineCode",{parentName:"p"},"*")," are supported in the list."),Object(i.b)("h2",{id:"a-word-on-the-used-libraries-and-implementation-details"},"A Word on the Used Libraries and Implementation Details"),Object(i.b)("p",null,"The SAP Cloud SDK uses ",Object(i.b)("inlineCode",{parentName:"p"},"axios")," to execute ",Object(i.b)("inlineCode",{parentName:"p"},"http")," requests.\nIn principle ",Object(i.b)("inlineCode",{parentName:"p"},"axios")," should support ",Object(i.b)("inlineCode",{parentName:"p"},"web proxies")," based on the environment variables.\nHowever, we found that the request URL using a proxy was not correctly constructed and for the ",Object(i.b)("inlineCode",{parentName:"p"},"connectivity proxy"),", an entry point was necessary anyhow."),Object(i.b)("p",null,"Hence, the SAP Cloud SDK switches off the build-in proxy handling by ",Object(i.b)("inlineCode",{parentName:"p"},"axios")," completely by using:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "proxy": false\n}\n')),Object(i.b)("p",null,"in the ",Object(i.b)("inlineCode",{parentName:"p"},"axios")," request configuration.\nIf a proxy becomes necessary or is configured by the discussed environment variables the SAP Cloud SDK builds directly the ",Object(i.b)("inlineCode",{parentName:"p"},"http-agent")," or ",Object(i.b)("inlineCode",{parentName:"p"},"https-agent"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "proxy": false,\n  "httpAgent": httpProxAgent || new http.Agent(),\n  "httpsAgent": httpsProxyAgent || new https.Agent()\n}\n')),Object(i.b)("p",null,"This adds them to the ",Object(i.b)("inlineCode",{parentName:"p"},"axios")," configuration.\nThe agents contain the proxy configuration.\nThe standard ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/http-proxy-agent"}),"http and https agents")," are used."))}d.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,h=d["".concat(r,".").concat(b)]||d[b]||u[b]||i;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},205:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n(21),o=n(206);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,s=void 0!==r&&r,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},206:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);