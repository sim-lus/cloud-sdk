(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(214)),i={id:"multi-tenancy-thread-context",title:"Multitenancy With the Thread Context",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Thread Context",description:"This article describes how the SAP Cloud SDK for Java provides an application context that is stored in a thread-safe manner and enables cloud-native features to be used out of the box.",keywords:["sap","cloud","sdk","thread context","multi tenancy","cloud native","tenant","user","principal","JWT","AuthToken"],image:null},c={unversionedId:"java/features/multi-tenancy/multi-tenancy-thread-context",id:"java/features/multi-tenancy/multi-tenancy-thread-context",isDocsHomePage:!1,title:"Multitenancy With the Thread Context",description:"This article describes how the SAP Cloud SDK for Java provides an application context that is stored in a thread-safe manner and enables cloud-native features to be used out of the box.",source:"@site/docs/java/features/multi-tenancy/thread-context.mdx",slug:"/java/features/multi-tenancy/multi-tenancy-thread-context",permalink:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/multi-tenancy/thread-context.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1615545636,formattedLastUpdatedAt:"3/12/2021",sidebar_label:"Thread Context",sidebar:"someSidebar",previous:{title:"Use the HttpClient Accessor To Configure Requests To Remote Services",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-http-client"},next:{title:"Resilience Capabilities",permalink:"/cloud-sdk/docs/java/features/resilience/resilience"}},s=[{value:"What Is a Thread Context?",id:"what-is-a-thread-context",children:[]},{value:"How Is a Thread Context Created?",id:"how-is-a-thread-context-created",children:[]},{value:"How Can the Thread Context Be Used?",id:"how-can-the-thread-context-be-used",children:[{value:"Accessing Information",id:"accessing-information",children:[]},{value:"Storing Information",id:"storing-information",children:[]},{value:"Running Asynchronous Operations",id:"running-asynchronous-operations",children:[]}]}],l={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-is-a-thread-context"},"What Is a Thread Context?"),Object(r.b)("p",null,"The SAP Cloud SDK for Java provides a so-called ",Object(r.b)("inlineCode",{parentName:"p"},"ThreadContext"),".\nIt serves as thread-safe storage for potentially sensitive information.\nSpecifically, the following three objects are stored:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The current ",Object(r.b)("em",{parentName:"li"},"Tenant")),Object(r.b)("li",{parentName:"ul"},"The current ",Object(r.b)("em",{parentName:"li"},"Principal")," (User)"),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("a",{parentName:"li",href:"https://jwt.io"},"JSON Web Token")," (JWT)")),Object(r.b)("p",null,"This information is used throughout the SAP Cloud SDK to provide features like tenant and principal isolation, JWT verification and authorization against other systems and services.\nTo ensure different tenants and users are properly isolated in an application, this information is always limited to the thread it was created on unless it is explicitly passed on by the application (see ",Object(r.b)("a",{parentName:"p",href:"#running-asynchronous-operations"},"Propagating the Thread Context"),")."),Object(r.b)("h2",{id:"how-is-a-thread-context-created"},"How Is a Thread Context Created?"),Object(r.b)("p",null,"The SAP Cloud SDK provides a ",Object(r.b)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/servlet/RequestAccessorFilter.html"},"RequestFilter")," that will listen to incoming HTTP requests.\nIf the ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization")," header contains a ",Object(r.b)("inlineCode",{parentName:"p"},"JWT")," from the ",Object(r.b)("a",{parentName:"p",href:"https://blogs.sap.com/2020/04/03/sap-application-router/"},"AppRouter")," the filter will:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Verify this token"),Object(r.b)("li",{parentName:"ul"},"Store it in the ",Object(r.b)("inlineCode",{parentName:"li"},"ThreadContext")," and"),Object(r.b)("li",{parentName:"ul"},"Pull the ",Object(r.b)("em",{parentName:"li"},"Tenant")," and ",Object(r.b)("em",{parentName:"li"},"Principal")," information from it")),Object(r.b)("h2",{id:"how-can-the-thread-context-be-used"},"How Can the Thread Context Be Used?"),Object(r.b)("h3",{id:"accessing-information"},"Accessing Information"),Object(r.b)("p",null,"The Thread context can be accessed via the static ",Object(r.b)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/thread/ThreadContextAccessor.html"},"ThreadContextAccessor"),"."),Object(r.b)("p",null,"For the frequently needed ",Object(r.b)("em",{parentName:"p"},"Tenant"),", ",Object(r.b)("em",{parentName:"p"},"Principal")," and ",Object(r.b)("em",{parentName:"p"},"JWT")," there are also dedicated accessors: ",Object(r.b)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/tenant/TenantAccessor.html"},"TenantAccessor"),", ",Object(r.b)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/security/principal/PrincipalAccessor.html"},"PrincipalAccessor"),", ",Object(r.b)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/security/AuthTokenAccessor.html"},"AuthTokenAccessor"),"."),Object(r.b)("h3",{id:"storing-information"},"Storing Information"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/thread/ThreadContext.html"},"ThreadContext")," allows for some manipulation by the application.\nHowever, oftentimes it is more convenient to leverage the ",Object(r.b)("inlineCode",{parentName:"p"},"executeWith...()")," functionality offered by the dedicated accessors."),Object(r.b)("p",null,"Consider a scenario where some part of the code should run on behalf of a specific tenant.\nIn that case you can override the current tenant explicitly:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"TenantAccessor.executeWithTenant(customTenant, () -> doStuff());\n")),Object(r.b)("h3",{id:"running-asynchronous-operations"},"Running Asynchronous Operations"),Object(r.b)("p",null,"As the name suggests the ",Object(r.b)("inlineCode",{parentName:"p"},"ThreadContext")," is bound to a Thread, more specifically to the one it was created.\nIf asynchronous operations need to access the information it has to be propagated to the new Threads."),Object(r.b)("p",null,"The following code achieves this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"ThreadContextExecutor executor = new ThreadContextExecutor();\nCallable operationWithContext = () -> executor.execute(() -> operation());\n\ninvokeAsynchronously(operationWithContext);\n")),Object(r.b)("p",null,"Take note that the ",Object(r.b)("inlineCode",{parentName:"p"},"ThreadContextExecutor")," is created ",Object(r.b)("em",{parentName:"p"},"before")," performing the asynchronous operation.\nThis is important because only at that time the context is available and will be propagated."),Object(r.b)("p",null,"A similar approach can be applied with the ",Object(r.b)("em",{parentName:"p"},"Tenant"),", ",Object(r.b)("em",{parentName:"p"},"Principal")," and ",Object(r.b)("em",{parentName:"p"},"AuthToken")," accessors.\nThis code runs an asynchronous operation with a dedicated tenant:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"Callable operationWithTenant = TenantAccessor.executeWithTenant(customTenant, () -> operation());\n\ninvokeAsynchronously(operationWithContext);\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Be cautious with long-running, asynchronous operations.\nA propagated Thread context will only persist as long as the Thread lives that it was created on.\nSo when the parent Thread dies the context will cease to exist and no longer be available in any of the Threads."))))}d.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,b=p["".concat(i,".").concat(u)]||p[u]||h[u]||r;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);