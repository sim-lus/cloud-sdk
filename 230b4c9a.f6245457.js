(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return d}));var o=a(3),r=a(7),n=(a(0),a(212)),s={id:"frequently-asked-questions",title:"Frequently Asked Questions",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"FAQ",description:"You asked! We answered! We collected here the most frequent question about SAP Cloud SDK for Java.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},i={unversionedId:"java/frequently-asked-questions",id:"java/frequently-asked-questions",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"You asked! We answered! We collected here the most frequent question about SAP Cloud SDK for Java.",source:"@site/docs/java/faq.mdx",slug:"/java/frequently-asked-questions",permalink:"/cloud-sdk/docs/java/frequently-asked-questions",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/faq.mdx",version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1614794902,sidebar_label:"FAQ",sidebar:"someSidebar",previous:{title:"Release Notes",permalink:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"},next:{title:"JavaScript & Typescript Overview",permalink:"/cloud-sdk/docs/js/overview-cloud-sdk-for-javascript"}},u=[{value:"General Questions",id:"general-questions",children:[{value:"How Often Do You Release a New SAP Cloud SDK Version?",id:"how-often-do-you-release-a-new-sap-cloud-sdk-version",children:[]},{value:"Do You Release Hotfixes?",id:"do-you-release-hotfixes",children:[]},{value:"Should I Update With Every Release?",id:"should-i-update-with-every-release",children:[]},{value:"Which Java Versions Are Supported by the SAP Cloud SDK?",id:"which-java-versions-are-supported-by-the-sap-cloud-sdk",children:[]},{value:"Can I Use Features Annotated as Beta in Production?",id:"can-i-use-features-annotated-as-beta-in-production",children:[]},{value:"I Think I Found a Bug in the SAP Cloud SDK, What Should I Do?",id:"i-think-i-found-a-bug-in-the-sap-cloud-sdk-what-should-i-do",children:[]},{value:"I&#39;m Creating a BCP Incident, What&#39;s Your Component Name?",id:"im-creating-a-bcp-incident-whats-your-component-name",children:[]}]},{value:"OData Related Questions",id:"odata-related-questions",children:[{value:"What Versions of OData Protocol Do You Support?",id:"what-versions-of-odata-protocol-do-you-support",children:[]},{value:"Do You Support All OData Features?",id:"do-you-support-all-odata-features",children:[]},{value:"I Receive an OData Error/Exception When Using SAP Cloud SDK for Java",id:"i-receive-an-odata-errorexception-when-using-sap-cloud-sdk-for-java",children:[]}]},{value:"Open API Related Questions",id:"open-api-related-questions",children:[{value:"Do You Support RESTful Services?",id:"do-you-support-restful-services",children:[]}]},{value:"Questions About SAP Cloud Platform",id:"questions-about-sap-cloud-platform",children:[{value:"Do You Support SAP Cloud Platform - Cloud Foundry?",id:"do-you-support-sap-cloud-platform---cloud-foundry",children:[]},{value:"Do You Support SAP Cloud Platform - Neo?",id:"do-you-support-sap-cloud-platform---neo",children:[]}]}],l={toc:u};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"general-questions"},"General Questions"),Object(n.b)("h3",{id:"how-often-do-you-release-a-new-sap-cloud-sdk-version"},"How Often Do You Release a New SAP Cloud SDK Version?"),Object(n.b)("p",null,"We release ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom"}),"bi-weekly"),".\nAll the features that are ",Object(n.b)("em",{parentName:"p"},"Generally Available")," or ",Object(n.b)("em",{parentName:"p"},"Beta")," get into the next release.\nYou can find the latest SAP Cloud SDK version and the list of previous releases ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"release-notes-sap-cloud-sdk-for-java"}),"here")," or on ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom"}),"Maven Central"),"."),Object(n.b)("h3",{id:"do-you-release-hotfixes"},"Do You Release Hotfixes?"),Object(n.b)("p",null,"Yes, we do.\nThey usually have a higher ",Object(n.b)("inlineCode",{parentName:"p"},"patch")," number according to ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://semver.org/"}),"semver"),", i.e: 3.19.1 instead of 3.19.0.\nCheck our ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"release-notes-sap-cloud-sdk-for-java"}),"release notes")," for more details."),Object(n.b)("h3",{id:"should-i-update-with-every-release"},"Should I Update With Every Release?"),Object(n.b)("p",null,"The general recommendation is ",Object(n.b)("em",{parentName:"p"},"YES"),".\nThis way you'll reduce the effort to keep up with the fast pace of cloud development.\nWe try to keep stable functionality consistent and explicitly notify about breaking changes.\nBe cautious about using features annotated as ",Object(n.b)("em",{parentName:"p"},"Beta")," because their API can change with every release."),Object(n.b)("h3",{id:"which-java-versions-are-supported-by-the-sap-cloud-sdk"},"Which Java Versions Are Supported by the SAP Cloud SDK?"),Object(n.b)("p",null,"The SAP Cloud SDK itself is compatible with Java 8 and 11.\nOther Java versions may work as well, depending on your setup, but are not yet tested by us.\nNote that the SAP Cloud Platform Cloud Foundry environment only supports Java 8 out of the box, but can be configured to also run with Java 11.\nSAP Cloud Platform Neo only supports Java 8."),Object(n.b)("h3",{id:"can-i-use-features-annotated-as-beta-in-production"},"Can I Use Features Annotated as Beta in Production?"),Object(n.b)("p",null,"We ",Object(n.b)("strong",{parentName:"p"},"do not recommend")," using the API that is marked unstable in the production code.\nWe do not guarantee any API compatibility for future updates and the features might be experimental.\nYou can use these features to test new functionality, provide us feedback, and plan migration steps when ",Object(n.b)("em",{parentName:"p"},"Beta")," features are released as ",Object(n.b)("em",{parentName:"p"},"General Availability"),"."),Object(n.b)("h3",{id:"i-think-i-found-a-bug-in-the-sap-cloud-sdk-what-should-i-do"},"I Think I Found a Bug in the SAP Cloud SDK, What Should I Do?"),Object(n.b)("p",null,"Please, report it to us via any available channel.\nThe preferred support channel is ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/tagged/sap-cloud-sdk"}),"Stack Overflow"),".\nYou can also create an issue on the SAP Cloud SDK external GitHub repository or use the internal one if you're the SAP employee."),Object(n.b)("h3",{id:"im-creating-a-bcp-incident-whats-your-component-name"},"I'm Creating a BCP Incident, What's Your Component Name?"),Object(n.b)("p",null,"Choose ",Object(n.b)("inlineCode",{parentName:"p"},"XX-S4C-SDK")," if you are reporting an issue via BCP."),Object(n.b)("h2",{id:"odata-related-questions"},"OData Related Questions"),Object(n.b)("h3",{id:"what-versions-of-odata-protocol-do-you-support"},"What Versions of OData Protocol Do You Support?"),Object(n.b)("p",null,"We support OData v2 and OData v4 services.\nYou can use pre-generated client libraries supplied with the SAP Cloud SDK or generate your client from the SAP Cloud SDK specification.\n",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"features/odata/overview"}),"Find more details here.")),Object(n.b)("h3",{id:"do-you-support-all-odata-features"},"Do You Support All OData Features?"),Object(n.b)("p",null,"We support most of the OData features that are exposed by SAP services.\nHowever, the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.odata.org/documentation/"}),"OData specification")," is huge and contains many features that would see rare to no use.\nIf you found a feature that you need, but it is not yet supported by SAP Cloud SDK for Java, please, make a feature request via email ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"mailto:cloudsdk@sap.com"}),"cloudsdk@sap.com")," or create an issue towards one of our repositories."),Object(n.b)("h3",{id:"i-receive-an-odata-errorexception-when-using-sap-cloud-sdk-for-java"},"I Receive an OData Error/Exception When Using SAP Cloud SDK for Java"),Object(n.b)("p",null,"You may see some errors while developing.\nThese errors are not always caused by flaws in the SAP Cloud SDK as we often see inconsistent OData protocol handling by different services.\nSome of them even have known flaws for which we have workarounds.\nIf you can't solve your issue via debugging and experimenting, please, report your incident via ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/tagged/sap-cloud-sdk"}),"Stack Overflow")," or our GitHub repositories."),Object(n.b)("h2",{id:"open-api-related-questions"},"Open API Related Questions"),Object(n.b)("h3",{id:"do-you-support-restful-services"},"Do You Support RESTful Services?"),Object(n.b)("p",null,"Yes, we do support ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://swagger.io/specification/v2/"}),"OpenAPI 2.0 also known as Swagger"),", and ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://swagger.io/specification/"}),"OpenAPI 3.0")," specifications.\nThe latter is preferred.\nFind documentation how to generate a ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/cloud-sdk/docs/java/features/rest/generate-rest-client"}),"type-safe Open API client here"),".\nWe also release pre-generated libraries in collaboration with service providers who release RESTful Open API services.\nFor details check an ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"features/rest/overview"}),"overview"),".\nFor feedback or questions about our Open API offering, please, create an issue ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk/issues"}),"here"),"."),Object(n.b)("h2",{id:"questions-about-sap-cloud-platform"},"Questions About SAP Cloud Platform"),Object(n.b)("h3",{id:"do-you-support-sap-cloud-platform---cloud-foundry"},"Do You Support SAP Cloud Platform - Cloud Foundry?"),Object(n.b)("p",null,"SAP Cloud SDK for Java has first-class support for ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.sap.com/products/cloud-platform.html"}),"SCP Cloud Foundry"),".\nWe provide plenty of helpful abstractions for ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"features/connectivity/sdk-connectivity-destination-service"}),"connectivity")," and authentication that make developing apps a pleasant and rewarding experience.\nLet us know if you're missing any features about SCP Cloud Foundry support from the SAP Cloud SDK for Java."),Object(n.b)("h3",{id:"do-you-support-sap-cloud-platform---neo"},"Do You Support SAP Cloud Platform - Neo?"),Object(n.b)("p",null,"We still provide full support for SAP Cloud Platform Neo.\nHowever, we do not recommend starting new projects with SAP Cloud Platform Neo as Cloud Foundry is better suited for apps and SAP S/4HANA extension development.\nAlso, for Neo we provide out-of-the-box support with only servlet based applications and not spring based applications."))}d.isMDXComponent=!0},212:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return h}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=d(a),b=o,h=c["".concat(s,".").concat(b)]||c[b]||p[b]||n;return a?r.a.createElement(h,i(i({ref:t},l),{},{components:a})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);