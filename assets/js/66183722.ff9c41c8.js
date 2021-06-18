(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2017],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return a}});var i=n(2263),o=n(3919);function r(){var e=(0,i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,a=r.forcePrependBaseUrl,s=void 0!==a&&a,c=r.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(r,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},630:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var i=n(2122),o=n(9756),r=(n(7294),n(3905)),a=n(4996),s={title:"On-Premise Connectivity",sidebar_label:"On-Premise Systems",description:"How to connect to SAP S/4HANA On-premise systems using the SAP Cloud SDK",keywords:["sap","cloud","sdk","On-premise","connectivity","JavaScript","TypeScript"]},c={unversionedId:"js/features/connectivity/on-premise",id:"js/features/connectivity/on-premise",isDocsHomePage:!1,title:"On-Premise Connectivity",description:"How to connect to SAP S/4HANA On-premise systems using the SAP Cloud SDK",source:"@site/docs/js/features/connectivity/on-premise.mdx",sourceDirName:"js/features/connectivity",slug:"/js/features/connectivity/on-premise",permalink:"/cloud-sdk/docs/js/features/connectivity/on-premise",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/connectivity/on-premise.mdx",version:"current",lastUpdatedBy:"KavithaSiva",lastUpdatedAt:1624007482,formattedLastUpdatedAt:"6/18/2021",sidebar_label:"On-Premise Systems",frontMatter:{title:"On-Premise Connectivity",sidebar_label:"On-Premise Systems",description:"How to connect to SAP S/4HANA On-premise systems using the SAP Cloud SDK",keywords:["sap","cloud","sdk","On-premise","connectivity","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"Generic HTTP Client",permalink:"/cloud-sdk/docs/js/features/connectivity/generic-http-client"},next:{title:"Overview",permalink:"/cloud-sdk/docs/js/features/openapi/overview"}},l=[{value:"Why On-Premise Systems Are Different",id:"why-on-premise-systems-are-different",children:[]},{value:"Implementation Details",id:"implementation-details",children:[{value:"Connectivity Service",id:"connectivity-service",children:[]},{value:"Principal Propagation",id:"principal-propagation",children:[]},{value:"Multiple Cloud Connectors",id:"multiple-cloud-connectors",children:[]}]}],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"why-on-premise-systems-are-different"},"Why On-Premise Systems Are Different"),(0,r.kt)("p",null,"The crucial problem with SAP S/4HANA On-premise systems is, that they are not exposed to the internet.\nTypically, they are located within a company's internal network.\nThe SAP Cloud SDK has some useful features that allow you to connect to On-premise systems."),(0,r.kt)("p",null,"Since this isolation contradicts to modern requirements of data availability, SAP has introduced the ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector"},"Cloud Connector"),".\nThe Cloud Connector works like a reverse proxy opening a connection between some allowlisted service endpoints of the On-premise system, and the connected Cloud Foundry account.\nOnly applications running in the connected Cloud Foundry account can access the services.\nApplications that are supposed to access On-premise systems need a binding to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.cloudfoundry.org/the-foundry/sap-cloud-platform-service-connectivity/"},"connectivity service"),"."),(0,r.kt)("img",{alt:"Destination in CF",src:(0,a.Z)("img/on-premise-connectivity.png"),class:"center",width:"100%"}),(0,r.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,r.kt)("h3",{id:"connectivity-service"},"Connectivity Service"),(0,r.kt)("p",null,"As a first step, the SAP Cloud SDK ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"looks up the destination"),".\nIf the ",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy Type")," of the destination is ",(0,r.kt)("inlineCode",{parentName:"p"},"OnPremise")," the SAP Cloud SDK will try to establish a connection via the Cloud Connector."),(0,r.kt)("p",null,"As mentioned above, the application needs a service binding to the connectivity service.\nA service binding leads to client credentials in the ",(0,r.kt)("inlineCode",{parentName:"p"},"VCAP")," environment variable.\nThe environment variables are accessible for the application at runtime.\nThe SAP Cloud SDK uses the client credentials and if given the tenant id of the JWT to obtain a ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/8d8be6a74e4e49589a546c02ee193741/latest/en-US/f1eff1dd7907469491989b3a36e6a7c6.html"},"client credentials grant."),"\nIf multiple connectivity services bindings exist, the SAP Cloud SDK uses the first entry per default."),(0,r.kt)("p",null,"The SAP Cloud SDK takes the client grant to call the connectivity service and receives the host, password, and authorization of the connectivity proxy.\nThen the SAP Cloud SDK creates an HTTP agent considering this proxy and the necessary ",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy-Authorization")," headers.\nThe proxy is the entry point to the Cloud Connector instance connected the account.\nThe proxy is only reachable from the Cloud Foundry space, so you cannot use that flow for applications running outside of Cloud Foundry.\nThe final destination containing the ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/proxy"},"proxy information")," will look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\nurl: "https://my.onPremise.System.url.com",\nheaders: {...},    //contains authorization headers for the SAP S/4HANA system\nproxyConfiguration?: {\n  host: "connectivity.service.proxy.host"\n  port: 1234\n  protocol: "http"\n  headers?: {\n      Proxy-Authorization: "AuthHeaderForTheProxy"\n    };,\n  }\n}\n')),(0,r.kt)("p",null,"It will be used by the ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/generic-http-client"},"HTTP client")," of the SAP Cloud SDK to execute the request.\nWe would like to mention two minor aspects of the SAP Cloud SDK."),(0,r.kt)("h3",{id:"principal-propagation"},"Principal Propagation"),(0,r.kt)("p",null,"In case the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authentication")," property on the destination is ",(0,r.kt)("inlineCode",{parentName:"p"},"PrincipalPropagation")," the SAP Cloud SDK adds the ",(0,r.kt)("inlineCode",{parentName:"p"},"SAP-Connectivity-Authentication")," header to the request.\nThe header contains user information included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," and enables user propagation from the cloud application to the SAP S/4HANA system."),(0,r.kt)("h3",{id:"multiple-cloud-connectors"},"Multiple Cloud Connectors"),(0,r.kt)("p",null,"If you have multiple Cloud Connectors connected to your account, the ",(0,r.kt)("inlineCode",{parentName:"p"},"LocationId")," defines which one of these to use for the request.\nIn case the destination contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"LocationId")," property, the SAP Cloud SDK adds the ",(0,r.kt)("inlineCode",{parentName:"p"},"SAP-Connectivity-SCC-Location_ID")," header to the request."))}p.isMDXComponent=!0}}]);