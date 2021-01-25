(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(7),i=(a(0),a(204)),r={id:"sdk-java-troubleshooting-frequent-problems",title:"Troubleshooting Frequent Problems",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Troubleshooting",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",keywords:["sap","cloud","sdk","debugging","FAQ","common mistakes","problems"],image:null},c={unversionedId:"java/sdk-java-troubleshooting-frequent-problems",id:"java/sdk-java-troubleshooting-frequent-problems",isDocsHomePage:!1,title:"Troubleshooting Frequent Problems",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",source:"@site/docs/java/troubleshooting.mdx",slug:"/java/sdk-java-troubleshooting-frequent-problems",permalink:"/cloud-sdk/docs/java/sdk-java-troubleshooting-frequent-problems",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/troubleshooting.mdx",version:"current",lastUpdatedBy:"Johannes Schneider",lastUpdatedAt:1611570888,sidebar_label:"Troubleshooting",sidebar:"someSidebar",previous:{title:"Video Tutorial: Use the Type-Safe OData v4 Client",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client"},next:{title:"Release Notes",permalink:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"}},s=[{value:"Troubleshooting Frequent Problems",id:"troubleshooting-frequent-problems",children:[{value:"Tenant or Principal Not Available",id:"tenant-or-principal-not-available",children:[]},{value:"Provider Instead of Subscriber Account Used",id:"provider-instead-of-subscriber-account-used",children:[]},{value:"JSON Web Token Validation Fails",id:"json-web-token-validation-fails",children:[]},{value:"Connecting to an ERP System fails",id:"connecting-to-an-erp-system-fails",children:[]},{value:"Compilation Failures in the Generated OData Virtual Data Model Classes",id:"compilation-failures-in-the-generated-odata-virtual-data-model-classes",children:[]},{value:"Compilation or Runtime Failures After Updating the SAP Cloud SDK Version",id:"compilation-or-runtime-failures-after-updating-the-sap-cloud-sdk-version",children:[]},{value:"The Java App Has Good Performance on Your Local Machine but Utilizes 100% CPU on SAP Cloud Platform Cloud Foundry",id:"the-java-app-has-good-performance-on-your-local-machine-but-utilizes-100-cpu-on-sap-cloud-platform-cloud-foundry",children:[]}]}],l={toc:s};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"troubleshooting-frequent-problems"},"Troubleshooting Frequent Problems"),Object(i.b)("p",null,"This article lists common problems that can be encountered when using the SAP Cloud SDK for Java.\nThe linked resources provide more information on the subject."),Object(i.b)("p",null,"If not covered here also search for any issue you might face on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/tagged/sap-cloud-sdk"}),"Stack Overflow"),".\nThere you can also reach out to us by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/ask"}),"asking a question")," (be sure to tag it with ",Object(i.b)("inlineCode",{parentName:"p"},"sap-cloud-sdk"),")."),Object(i.b)("h3",{id:"tenant-or-principal-not-available"},"Tenant or Principal Not Available"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),Object(i.b)("strong",{parentName:"h5"},"Symptoms"))),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Tenant or principal information is not available or an incorrect tenant is used."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Possible causes:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A subscriber based JWT is passed in but its validation fails, causing the SAP Cloud SDK to fall back to the provider account.\nSee ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#jwt-validation-fails"}),"JWT validation fails"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"An operation is performed in an asynchronous manner without propagating the ",Object(i.b)("inlineCode",{parentName:"p"},"ThreadContext"),".\nSee ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"features/multi-tenancy/multi-tenancy-thread-context#running-asynchronous-operations"}),"Running Asynchronous Operations"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The SAP Cloud SDK components are not registered as listeners on incoming requests.\nSee ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"getting-started#framework-integration"}),"Framework Support"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"There was no JWT in the authorization header.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A BAPI/RFC call was attempted while using resilience or multithreading capabilities of the SAP Cloud SDK.\nSee ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"features/bapi-and-rfc/bapi-and-rfc-overview#subscriber-tenant-is-not-found-at-runtime"}),"Subscriber Tenant Is Not Found at Runtime")))),Object(i.b)("h3",{id:"provider-instead-of-subscriber-account-used"},"Provider Instead of Subscriber Account Used"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),Object(i.b)("strong",{parentName:"h5"},"Symptoms"))),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Destinations are returned only for the provider account, but not for a subscriber account."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Possible causes:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The SAP Cloud SDK defaults back to the provider account if no tenant information is available.\nSee the above section on ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#tenant-or-principal-not-available"}),"Tenant or Principal not available"),".")),Object(i.b)("h3",{id:"json-web-token-validation-fails"},"JSON Web Token Validation Fails"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),Object(i.b)("strong",{parentName:"h5"},"Symptoms:"))),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Logs show JWT validation exceptions, Tenant information is not available."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Possible causes:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The SAP Cloud SDK version might be outdated.\nCheck with the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom"}),"latest SAP Cloud SDK version"),".")),Object(i.b)("h3",{id:"connecting-to-an-erp-system-fails"},"Connecting to an ERP System fails"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),Object(i.b)("strong",{parentName:"h5"},"Symptoms:"))),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ERP system unexpectedly responds with ",Object(i.b)("em",{parentName:"p"},"401: Unauthorized")," or ",Object(i.b)("em",{parentName:"p"},"403: Forbidden"),"."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Possible causes:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The SAP Client and Locale headers will be missing if the ",Object(i.b)("inlineCode",{parentName:"li"},"Destination")," is not an ",Object(i.b)("inlineCode",{parentName:"li"},"ErpHttpDestination"),".\nSee ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"features/connectivity/sdk-connectivity-destination-service#connect-to-on-premise-s4hana-system"}),"Connecting to SAP S/4HANA"),".")),Object(i.b)("h3",{id:"compilation-failures-in-the-generated-odata-virtual-data-model-classes"},"Compilation Failures in the Generated OData Virtual Data Model Classes"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),Object(i.b)("strong",{parentName:"h5"},"Symptoms:"))),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Compilation fails due to missing ",Object(i.b)("em",{parentName:"p"},"Getters")," and ",Object(i.b)("em",{parentName:"p"},"Setters")," on entity objects."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Possible causes:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Getters and Setters will be missing if ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://projectlombok.org/"}),"Lombok")," is not present in the dependency tree of your project.\nSee ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:3000/cloud-sdk/docs/java/features/odata/generate-typed-odata-v2-and-v4-client-for-java#using-the-odata-generator"}),"Using the OData Generator"),"."),Object(i.b)("li",{parentName:"ul"},"Getters and Setters will be shown red if your IDE does not support Lombok. Hence, install the Lombok plugin for your IDE.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"For IntelliJ, install ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://plugins.jetbrains.com/plugin/6317-lombok"}),"the Lombok plugin"),"."),Object(i.b)("li",{parentName:"ul"},"For Eclipse, follow ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://projectlombok.org/setup/eclipse"}),"this guide"),".")))),Object(i.b)("h3",{id:"compilation-or-runtime-failures-after-updating-the-sap-cloud-sdk-version"},"Compilation or Runtime Failures After Updating the SAP Cloud SDK Version"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),Object(i.b)("strong",{parentName:"h5"},"Symptoms:"))),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"MethodNotFound"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ClassDefNotFound")," or similar exceptions occur."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Possible causes:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Conflicting dependency versions may cause such issues.\nSee the section on ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/cloud-sdk/docs/java/guides/manage-dependencies#dealing-with-dependency-conflicts"}),"Managing Dependencies"),".")),Object(i.b)("h3",{id:"the-java-app-has-good-performance-on-your-local-machine-but-utilizes-100-cpu-on-sap-cloud-platform-cloud-foundry"},"The Java App Has Good Performance on Your Local Machine but Utilizes 100% CPU on SAP Cloud Platform Cloud Foundry"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),Object(i.b)("strong",{parentName:"h5"},"Symptoms:"))),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"The Java app executes multiple threads and runs with good performance on a powerful local machine."),Object(i.b)("li",{parentName:"ul"},"The performance significantly drops after the app is deployed to SAP Cloud Platform - Cloud Foundry and CPU utilization is always around 100%.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Possible causes:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A powerful developer's machine usually has much better CPU and memory capacity than a standard cloud instance."),Object(i.b)("li",{parentName:"ul"},"SCP Cloud Foundry provides 1/4 of CPU unit per every GB of memory.\nWith maximum memory per instance of 8 GB, you can get a maximum of 2 CPU cores."),Object(i.b)("li",{parentName:"ul"},"All the limitations are subject to change.\nPlease check the latest details about ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://help.sap.com/viewer/3504ec5ef16548778610c7e89cc0eac3/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html#loio9809fa4f02cb4696baea5c23d6eaac94"}),"SCP Cloud Foundry quotas and limitation")),Object(i.b)("li",{parentName:"ul"},"If even after achieving the maximum vertical scale of your instance, your app doesn't reach the desired performance level, try to optimize it.\nConsider scaling it horizontally or different custom solutions to boost performance where it lags.")))}b.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(a),m=n,u=d["".concat(r,".").concat(m)]||d[m]||p[m]||i;return a?o.a.createElement(u,c(c({ref:t},l),{},{components:a})):o.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<i;l++)r[l]=a[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);