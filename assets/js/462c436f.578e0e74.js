(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4401],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=o,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7498:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i={id:"multi-tenancy-thread-context",title:"Multitenancy With the Thread Context",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Thread Context",description:"This article describes how the SAP Cloud SDK for Java provides an application context that is stored in a thread-safe manner and enables cloud-native features to be used out of the box.",keywords:["sap","cloud","sdk","thread context","multi tenancy","cloud native","tenant","user","principal","JWT","AuthToken"],image:null},s={unversionedId:"java/features/multi-tenancy/multi-tenancy-thread-context",id:"java/features/multi-tenancy/multi-tenancy-thread-context",isDocsHomePage:!1,title:"Multitenancy With the Thread Context",description:"This article describes how the SAP Cloud SDK for Java provides an application context that is stored in a thread-safe manner and enables cloud-native features to be used out of the box.",source:"@site/docs/java/features/multi-tenancy/thread-context.mdx",sourceDirName:"java/features/multi-tenancy",slug:"/java/features/multi-tenancy/multi-tenancy-thread-context",permalink:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/multi-tenancy/thread-context.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1620196888,formattedLastUpdatedAt:"5/5/2021",sidebar_label:"Thread Context",frontMatter:{id:"multi-tenancy-thread-context",title:"Multitenancy With the Thread Context",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Thread Context",description:"This article describes how the SAP Cloud SDK for Java provides an application context that is stored in a thread-safe manner and enables cloud-native features to be used out of the box.",keywords:["sap","cloud","sdk","thread context","multi tenancy","cloud native","tenant","user","principal","JWT","AuthToken"],image:null},sidebar:"someSidebar",previous:{title:"Use the HttpClient Accessor To Configure Requests To Remote Services",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-http-client"},next:{title:"Resilience Capabilities",permalink:"/cloud-sdk/docs/java/features/resilience/resilience"}},c=[{value:"What Is a Thread Context?",id:"what-is-a-thread-context",children:[]},{value:"How Is a Thread Context Created?",id:"how-is-a-thread-context-created",children:[]},{value:"How Can the Thread Context Be Used?",id:"how-can-the-thread-context-be-used",children:[{value:"Accessing Information",id:"accessing-information",children:[]},{value:"Storing Information",id:"storing-information",children:[]},{value:"Running Asynchronous Operations",id:"running-asynchronous-operations",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-a-thread-context"},"What Is a Thread Context?"),(0,r.kt)("p",null,"The SAP Cloud SDK for Java provides a so-called ",(0,r.kt)("inlineCode",{parentName:"p"},"ThreadContext"),".\nIt serves as thread-safe storage for potentially sensitive information.\nSpecifically, the following three objects are stored:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The current ",(0,r.kt)("em",{parentName:"li"},"Tenant")),(0,r.kt)("li",{parentName:"ul"},"The current ",(0,r.kt)("em",{parentName:"li"},"Principal")," (User)"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://jwt.io"},"JSON Web Token")," (JWT)")),(0,r.kt)("p",null,"This information is used throughout the SAP Cloud SDK to provide features like tenant and principal isolation, JWT verification and authorization against other systems and services.\nTo ensure different tenants and users are properly isolated in an application, this information is always limited to the thread it was created on unless it is explicitly passed on by the application (see ",(0,r.kt)("a",{parentName:"p",href:"#running-asynchronous-operations"},"Propagating the Thread Context"),")."),(0,r.kt)("h2",{id:"how-is-a-thread-context-created"},"How Is a Thread Context Created?"),(0,r.kt)("p",null,"The SAP Cloud SDK provides a ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/servlet/RequestAccessorFilter.html"},"RequestFilter")," that will listen to incoming HTTP requests.\nIf the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://blogs.sap.com/2020/04/03/sap-application-router/"},"AppRouter")," the filter will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verify this token"),(0,r.kt)("li",{parentName:"ul"},"Store it in the ",(0,r.kt)("inlineCode",{parentName:"li"},"ThreadContext")," and"),(0,r.kt)("li",{parentName:"ul"},"Pull the ",(0,r.kt)("em",{parentName:"li"},"Tenant")," and ",(0,r.kt)("em",{parentName:"li"},"Principal")," information from it")),(0,r.kt)("h2",{id:"how-can-the-thread-context-be-used"},"How Can the Thread Context Be Used?"),(0,r.kt)("h3",{id:"accessing-information"},"Accessing Information"),(0,r.kt)("p",null,"The Thread context can be accessed via the static ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/thread/ThreadContextAccessor.html"},"ThreadContextAccessor"),"."),(0,r.kt)("p",null,"For the frequently needed ",(0,r.kt)("em",{parentName:"p"},"Tenant"),", ",(0,r.kt)("em",{parentName:"p"},"Principal")," and ",(0,r.kt)("em",{parentName:"p"},"JWT")," there are also dedicated accessors: ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/tenant/TenantAccessor.html"},"TenantAccessor"),", ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/security/principal/PrincipalAccessor.html"},"PrincipalAccessor"),", ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/security/AuthTokenAccessor.html"},"AuthTokenAccessor"),"."),(0,r.kt)("h3",{id:"storing-information"},"Storing Information"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/thread/ThreadContext.html"},"ThreadContext")," allows for some manipulation by the application.\nHowever, oftentimes it is more convenient to leverage the ",(0,r.kt)("inlineCode",{parentName:"p"},"executeWith...()")," functionality offered by the dedicated accessors."),(0,r.kt)("p",null,"Consider a scenario where some part of the code should run on behalf of a specific tenant.\nIn that case you can override the current tenant explicitly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"TenantAccessor.executeWithTenant(customTenant, () -> doStuff());\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Be aware, that the ",(0,r.kt)("em",{parentName:"p"},"executeWith")," methods shown above only replaces the given property, but does not update properties derived from it."),(0,r.kt)("p",{parentName:"div"},"Example: You have a special ",(0,r.kt)("em",{parentName:"p"},"AuthToken"),", that you propagate with ",(0,r.kt)("em",{parentName:"p"},"AuthTokenAccessor.executeWithAuthToken"),".\nInside the given code block only the ",(0,r.kt)("em",{parentName:"p"},"AuthToken")," will be replaced, while e.g. the ",(0,r.kt)("em",{parentName:"p"},"Tenant")," is the same as in the original context."),(0,r.kt)("p",{parentName:"div"},"If you want to start a fresh context based on a given ",(0,r.kt)("em",{parentName:"p"},"AuthToken"),", for example accessing information of the provider tenant while in a subscriber context, have a look at this code:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nTenant retrieveProviderTenant()\n{\n    // retrieves an access token from the provider context\n    AuthToken providerXsuaaAccessToken = AuthTokenAccessor.getXsuaaServiceToken();\n    return new ThreadContextExecutor()\n        // don't reuse the original context\n        .withoutParentThreadContext()\n        // add the provider token into the new context\n        .withListeners(new AuthTokenThreadContextListener(providerXsuaaAccessToken))\n        // return the actual provider tenant\n        .execute(TenantAccessor::getCurrentTenant);\n}\n\n")))),(0,r.kt)("h3",{id:"running-asynchronous-operations"},"Running Asynchronous Operations"),(0,r.kt)("p",null,"As the name suggests the ",(0,r.kt)("inlineCode",{parentName:"p"},"ThreadContext")," is bound to a Thread, more specifically to the one it was created.\nIf asynchronous operations need to access the information it has to be propagated to the new Threads."),(0,r.kt)("p",null,"The following code achieves this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ThreadContextExecutor executor = new ThreadContextExecutor();\nCallable operationWithContext = () -> executor.execute(() -> operation());\n\ninvokeAsynchronously(operationWithContext);\n")),(0,r.kt)("p",null,"Take note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"ThreadContextExecutor")," is created ",(0,r.kt)("em",{parentName:"p"},"before")," performing the asynchronous operation.\nThis is important because only at that time the context is available and will be propagated."),(0,r.kt)("p",null,"A similar approach can be applied with the ",(0,r.kt)("em",{parentName:"p"},"Tenant"),", ",(0,r.kt)("em",{parentName:"p"},"Principal")," and ",(0,r.kt)("em",{parentName:"p"},"AuthToken")," accessors.\nThis code runs an asynchronous operation with a dedicated tenant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Callable operationWithTenant = TenantAccessor.executeWithTenant(customTenant, () -> operation());\n\ninvokeAsynchronously(operationWithContext);\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Be cautious with long-running, asynchronous operations.\nA propagated Thread context will only persist as long as the Thread lives that it was created on.\nSo when the parent Thread dies the context will cease to exist and no longer be available in any of the Threads."))))}d.isMDXComponent=!0}}]);