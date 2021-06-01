(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2013],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var d=2;d<o;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8815:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return r},toc:function(){return l},default:function(){return c}});var i=n(2122),a=n(9756),o=(n(7294),n(3905)),s={title:"Destinations",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Destinations",description:"This article describes how destinations are fetched in the SDK and how they can be configured.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript"]},r={unversionedId:"js/features/connectivity/destination",id:"js/features/connectivity/destination",isDocsHomePage:!1,title:"Destinations",description:"This article describes how destinations are fetched in the SDK and how they can be configured.",source:"@site/docs/js/features/connectivity/destination.mdx",sourceDirName:"js/features/connectivity",slug:"/js/features/connectivity/destination",permalink:"/cloud-sdk/docs/js/features/connectivity/destination",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/connectivity/destination.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1622531859,formattedLastUpdatedAt:"6/1/2021",sidebar_label:"Destinations",frontMatter:{title:"Destinations",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Destinations",description:"This article describes how destinations are fetched in the SDK and how they can be configured.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"Use the OData v4 Client",permalink:"/cloud-sdk/docs/js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript"},next:{title:"Proxies",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"The Lookup Flow",id:"the-lookup-flow",children:[{value:"Local Environment Variable",id:"local-environment-variable",children:[]},{value:"Service Binding Environment Variables",id:"service-binding-environment-variables",children:[]},{value:"Destination Service",id:"destination-service",children:[]}]}],d={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Most applications developed on SAP Business Technology Platform (SCP) will integrate in some way with other LoB solutions and systems.\nIntegration means the exchange of data and it is necessary to abstract the details on the data exchange from your codebase.\nThe reasons for this abstraction are manifold: URLs defining a resource may change, authentication information should not be part of code, in case of a multi-customer application the locations depends on the customer, etc."),(0,o.kt)("p",null,"On SAP BTP this abstraction is provided by a so-called destination object.\nThis object can be obtained at runtime of the application and contains information like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL"),(0,o.kt)("li",{parentName:"ul"},"Authentication"),(0,o.kt)("li",{parentName:"ul"},"Proxy Settings (see the ",(0,o.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/proxy"},"proxy documentation")," for more details)"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("p",null,"The SAP Cloud SDK helps you receiving this object and provides also options for local testing outside the SCP."),(0,o.kt)("p",null,"The SAP Cloud SDK provides a generator to create a client or data model based on a service definition.\nFor SAP S/4HANA this client has been created and published to npm.\nIn this ",(0,o.kt)("a",{parentName:"p",href:"https://developers.sap.com/group.s4sdk-js-cloud-foundry.html"},"tutorial series")," a detailed step-by-step guide on how to use the data model is presented.\nA simple request to receive some business-partners from an SAP S/4HANA system would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"BusinessPartner.requestBuilder()\n  .getAll()\n  .filter(BusinessPartner.BUSINESS_PARTNER_CATEGORY.equals('1'))\n  .top(5)\n  .execute(yourDestination);\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"yourDestination")," is a ",(0,o.kt)("a",{parentName:"p",href:"pathname:///api/1.32.0/interfaces/sap_cloud_sdk_core.destination"},(0,o.kt)("inlineCode",{parentName:"a"},"Destination")," object"),".\nIn principle, you could create a destination object yourself or read it from somewhere and then pass it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute()")," method.\nHowever, this would not be very flexible and convenient as discussed above.\nThe SAP Cloud SDK provides some help for this problem.\nIf just a destinationName is provided i.e.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},".execute({\"destinationName\": 'myDestination'})\n")),(0,o.kt)("p",null,"The SAP Cloud SDK tries to look the destination up for you.\nThe details of this process are explained in the next chapters."),(0,o.kt)("h2",{id:"the-lookup-flow"},"The Lookup Flow"),(0,o.kt)("p",null,"When given a ",(0,o.kt)("inlineCode",{parentName:"p"},"destinationName")," the SAP Cloud SDK tries three things to find a destination:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Checking local environment variables"),(0,o.kt)("li",{parentName:"ol"},"Checking a service binding environment variables"),(0,o.kt)("li",{parentName:"ol"},"Using the destination service")),(0,o.kt)("p",null,"Once a destination is found, the flow is stopped and the destination is returned.\nSo local environment beats service binding beats destination service in case all contain a destination with the given name."),(0,o.kt)("h3",{id:"local-environment-variable"},"Local Environment Variable"),(0,o.kt)("p",null,"This option is present for deployment and testing in a local environment outside the SAP BTP where no destination services are available.\nIf a ",(0,o.kt)("inlineCode",{parentName:"p"},"destinations")," environment variable is present it will be used for the destination lookup as described above.\nThe value is expected to be a stringified JSON array, where the items adhere to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Destination")," interface.\nExample: ",(0,o.kt)("inlineCode",{parentName:"p"},"\"[{name: 'TESTINATION', url: 'http://url.hana.ondemand.com', username: 'DUMMY', password: 'dummy'}]\""),"."),(0,o.kt)("p",null,"The SAP Cloud SDK provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"setTestDestination(destination)")," function to add a destination to the environment variable for the current process programmatically.\nIt takes a destination object, transforms it to a JSON object, and adds it to ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.destinations"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { setTestDestination } from '@sap-cloud-sdk/test-util';\n\nsetTestDestination({\n  authentication: 'NoAuthentication',\n  name: 'TESTINATION',\n  isTrustingAllCertificates: false,\n  url: 'https://mys4hana.com'\n});\n")),(0,o.kt)("p",null,"This would set a destination with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"TESTINATION"),".\nAt runtime, the SAP Cloud SDK will check the environment variable for a destination with the given name and use it if present.\nNote that the SAP Cloud SDK offers also a ",(0,o.kt)("inlineCode",{parentName:"p"},"mockTestDestination()")," method, which reads in a ",(0,o.kt)("inlineCode",{parentName:"p"},"systems.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"credentials.json")," to create destinations.\nThe advantage of files is that they can be excluded from the repository since they contain sensitive information."),(0,o.kt)("h3",{id:"service-binding-environment-variables"},"Service Binding Environment Variables"),(0,o.kt)("p",null,"The service credentials, in other words ",(0,o.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICES")," environment variables, may contain a destination.\nIf you want to use this information, the name of the service instance must be provided as the destination name.\nCurrently two services types are supported out of the box ",(0,o.kt)("inlineCode",{parentName:"p"},"business-logging")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"s4-hana-cloud")," with the following transformation functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//business-logging\n(serviceBinding) => {\n    url: serviceBinding.credentials.writeUrl,\n    authentication: 'OAuth2ClientCredentials',\n    username: serviceBinding.credentials.uaa.clientid,\n    password: serviceBinding.credentials.uaa.clientsecret\n};\n\n//s4-hana-cloud\n(serviceBinding) => {\n    url: serviceBinding.credentials.URL,\n    authentication: 'BasicAuthentication',\n    username: serviceBinding.credentials.User,\n    password: serviceBinding.credentials.Password\n};\n")),(0,o.kt)("h3",{id:"destination-service"},"Destination Service"),(0,o.kt)("p",null,"In a productive environment, you will use a ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html"},"Destination service")," to retrieve destinations."),(0,o.kt)("h4",{id:"authentication-and-json-web-token-retrieval"},"Authentication and JSON Web Token Retrieval"),(0,o.kt)("p",null,"To access the destination service, the SAP Cloud SDK will first fetch an access token from the XSUAA service.\nThe token retrieved from the XSUAA service is used to make a call to the destination service and receive the destinations.\nThe destination service returns a destination with all relevant authentication information depending on the used authentication flow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PrincipalPropagation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NoAuthentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BasicAuthentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OAuth2SAMLBearerAssertion")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OAuth2UserTokenExchange")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OAuth2ClientCredentials")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ClientCertificateAuthentication"))),(0,o.kt)("p",null,"The SAP Cloud SDK automatically parses the response of the destination service and uses the provided authentication information for the request to the target system.\nFor a simple service, this would be the end of the story."),(0,o.kt)("h4",{id:"multi-tenancy"},"Multi-Tenancy"),(0,o.kt)("p",null,"However, the destination service is special in a way that it is a ",(0,o.kt)("inlineCode",{parentName:"p"},"tenant aware service"),".\nSuch services make it possible to build multi-tenant applications.\nSo what defines a tenant aware service?"),(0,o.kt)("p",null,"Assume you want to build a simple application showing the 5 newest business-partner in an S/4 system.\nYou want to offer this application as a service to customers.\nOf course, you want to make this service cost-efficient and host it only once and let multiple customers use it.\nThis leads now naturally to the requirement that your service needs to return the data related to the specific customers.\nA customer is represented by an account on the SAP BTP and a service considering the account is a ",(0,o.kt)("inlineCode",{parentName:"p"},"tenant aware service"),"."),(0,o.kt)("p",null,"Tenant aware services on the SAP BTP are offered to customers via a ",(0,o.kt)("inlineCode",{parentName:"p"},"subscription")," which works on a high level as follows:\nIf a customer wants to use a service, a subscription is created linking the customer account and the one account hosting the service.\nIn the following the term ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriber account")," will be used for the accounts using a service and ",(0,o.kt)("inlineCode",{parentName:"p"},"provider account")," for the one hosting it."),(0,o.kt)("p",null,"After this little definition detour, let's go back to the destination service and the SAP Cloud SDK.\nFor simplicity an optional argument of the destination lookup has been neglected in the beginning:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},".execute({destinationName: 'myDestination', jwt: 'yourJWT'})\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"jwt")," argument takes the JSON web token (JWT) issued by an XSUAA as input.\nThis token contains a field ",(0,o.kt)("inlineCode",{parentName:"p"},"zid")," holding the tenant id which will be used in the lookup process.\nThe lookup process done by the SAP Cloud SDK involves the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Request an access token for the destination service and a given tenant id from the XSUAA."),(0,o.kt)("li",{parentName:"ul"},"Due to the subscription between provider and subscriber, the XSUAA is allowed to issue the token."),(0,o.kt)("li",{parentName:"ul"},"The token allows for calling the destination service on behalf of the given tenant.\nThe tenant and service information is encoded in the access token."),(0,o.kt)("li",{parentName:"ul"},"Make a call to the destination service using the obtained access token."),(0,o.kt)("li",{parentName:"ul"},"The destination maintained in the given tenant are returned.")),(0,o.kt)("p",null,"If no token is given or the destination is not found in the subscriber account the provider account is used as a fallback.\nTo control this fallback behavior a selection strategy can be passed to the destination lookup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},".execute({destinationName: 'myDestination', jwt: 'yourJWT'},{selectionStrategy:'alwaysSubscriber'})\n")),(0,o.kt)("p",null,"There are three selection strategies defined in the SAP Cloud SDK: ",(0,o.kt)("inlineCode",{parentName:"p"},"alwaysSubscriber"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"alwaysProvider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriberFirst"),".\nThe selection strategy can be passed as an optional argument to the ",(0,o.kt)("inlineCode",{parentName:"p"},".execute()")," method.\nThe default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriberFirst"),".\nThe selection strategies can be used to control for which account a destination lookup is attempted:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AlwaysSubscriber: Only try to get destinations from the subscriber account.\nA valid JWT is mandatory to receive something."),(0,o.kt)("li",{parentName:"ul"},"AlwaysProvider: Only try to get destination from the provider account.\nA JWT is not needed.\nEven if you present a subscriber JWT the provider destination will be returned if present."),(0,o.kt)("li",{parentName:"ul"},"SubscriberFirst: Tries to get from the subscriber first using the JWT.\nIf no valid JWT is provided or the destination is not found it tries the provider as described for alwaysProvider.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"One aspect has been left out for simplicity.\nIn principle, it is possible to define destinations not only on the account level but also on the destination service level.\nThese destinations are called ",(0,o.kt)("inlineCode",{parentName:"p"},"instance destinations")," since they are tied to a service binding called instance on SCP.\nIn every request, these destinations are added to the destinations returned by the destination service."))),(0,o.kt)("h4",{id:"destination-lookup-without-a-jwt"},"Destination Lookup without a JWT"),(0,o.kt)("p",null,"There are situations where you do not have a JWT issued by the XSUAA but need to look a destination up e.g. in background processes.\nIn such situations the property ",(0,o.kt)("inlineCode",{parentName:"p"},"iss")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"DestinationAccessorOptions")," can be used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},".execute(\n  { destinationName: 'myDestination' },\n  { iss: yourIssuerValue }\n )\n\nThe value for `iss` is supposed to be the same as in a JWT issued from the XSUAA e.g. `https://yourSubdomain.localhost:8080/uaa/oauth/token`.\nIn principle only the host of the URL is relevant but since the same parsing and replacement methods are used for the JWT handling, the URL has to be provided in the format above.\n\n:::note\nIf a JWT is used in the destination lookup a validation of the provided token is performed.\nThis validation ensures that the JWT has not been manipulated.\nIf only the `iss` is provided no such validation is performed.\nNote that the given subdomain value defines from which tenant destinations are fetched.\nSo a wrong value may break the isolation for tenants.\nIt is your responsibility as a developer to ensure that the provided value for the `iss` property is valid.\n:::\n")))}c.isMDXComponent=!0}}]);