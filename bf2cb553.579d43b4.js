(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),o=(n(0),n(203)),s=n(212),c=n(213),r={id:"sdk-connectivity-destination-service",title:"Use Destinations To Connect To Other Systems and Services",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Destinations",description:"This article describes how the SAP Cloud SDK for Java can be used to establish connections to other systems and services like SAP S/4HANA or SAP Cloud Platform services.",keywords:["sap","cloud","sdk","destination","java","connectivity"]},l={unversionedId:"java/features/connectivity/sdk-connectivity-destination-service",id:"java/features/connectivity/sdk-connectivity-destination-service",isDocsHomePage:!1,title:"Use Destinations To Connect To Other Systems and Services",description:"This article describes how the SAP Cloud SDK for Java can be used to establish connections to other systems and services like SAP S/4HANA or SAP Cloud Platform services.",source:"@site/docs/java/features/connectivity/destinations.mdx",slug:"/java/features/connectivity/sdk-connectivity-destination-service",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-destination-service",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/connectivity/destinations.mdx",version:"current",lastUpdatedBy:"TanviiG",lastUpdatedAt:1610542541,sidebar_label:"Destinations",sidebar:"someSidebar",previous:{title:"Call a BAPI/RFC Module",permalink:"/cloud-sdk/docs/java/features/bapi-and-rfc/bapi-and-rfc-overview"},next:{title:"Use the HttpClient Accessor To Configure Requests To Remote Services",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-http-client"}},d=[{value:"Accessing Destinations",id:"accessing-destinations",children:[{value:"Integrated Multi-Tenancy",id:"integrated-multi-tenancy",children:[]}]},{value:"Decorating Destinations",id:"decorating-destinations",children:[{value:"HTTP Destinations",id:"http-destinations",children:[]},{value:"BAPI Destinations",id:"bapi-destinations",children:[]},{value:"Connect to SAP S/4HANA On-Premise",id:"connect-to-sap-s4hana-on-premise",children:[]}]},{value:"Registering Destinations at Runtime",id:"registering-destinations-at-runtime",children:[{value:"Mocking Destinations for Testing",id:"mocking-destinations-for-testing",children:[]},{value:"Using Custom Destination Loaders",id:"using-custom-destination-loaders",children:[]}]},{value:"Retrieving Destinations",id:"retrieving-destinations",children:[{value:"Get All Destinations From the Destination Service on Cloud Foundry",id:"get-all-destinations-from-the-destination-service-on-cloud-foundry",children:[]}]},{value:"Configure HTTP Destinations for Local Deployment",id:"configure-http-destinations-for-local-deployment",children:[{value:"Background: Destination Retrieval on SAP Cloud Platform",id:"background-destination-retrieval-on-sap-cloud-platform",children:[]},{value:"Configuration Procedure for Localhost",id:"configuration-procedure-for-localhost",children:[]}]}],b={toc:d};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The SAP Cloud SDK offers some basic functionality that helps with connecting to other systems and services like SAP S/4HANA Cloud.\nThe SAP Cloud SDK introduces the general concept of a ",Object(o.b)("inlineCode",{parentName:"p"},"Destination")," which holds basic information about how to connect to such a system.\nThat could for instance be a ",Object(o.b)("inlineCode",{parentName:"p"},"url"),", a user name, and password for basic authentication or some custom headers."),Object(o.b)("p",null,"This concept is integrated with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html"}),"Destination Service")," that is available on the SAP Cloud Platform.\nIf the application has a service binding to this service in place the SAP Cloud SDK will provide access to these destinations."),Object(o.b)("h2",{id:"accessing-destinations"},"Accessing Destinations"),Object(o.b)("p",null,"In general destinations are accessed through the ",Object(o.b)("inlineCode",{parentName:"p"},"DestinationAccessor"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'DestinationAccessor.getDestination("my-destination");\n')),Object(o.b)("p",null,"This will look up the destination in the destination service if the application is running on SAP Cloud Platform.\nOther sources like the environment variables are also considered."),Object(o.b)("h3",{id:"integrated-multi-tenancy"},"Integrated Multi-Tenancy"),Object(o.b)("p",null,"By default, the ",Object(o.b)("inlineCode",{parentName:"p"},"DestinationAccessor")," is tenant aware.\nIf a tenant is available it will be used to access the destination service on behalf of that tenant.\nIf no destination is found in the tenant-specific destination service the SAP Cloud SDK will try to get it using the service binding of the application."),Object(o.b)("p",null,"This default retrieval strategy can be overridden by passing options to the destination loader as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"DestinationAccessor.getLoader().tryGetDestination(destinationName, options);\n")),Object(o.b)("p",null,"See the section on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#building-destination-options"}),"destination options")," below."),Object(o.b)("h2",{id:"decorating-destinations"},"Decorating Destinations"),Object(o.b)("p",null,"Depending on the use case, one needs to wrap the accessed destination before issuing a request to a system.\nThis is to make sure all required destination properties are correctly set before invoking the actual request."),Object(o.b)("h3",{id:"http-destinations"},"HTTP Destinations"),Object(o.b)("p",null,"In case of HTTP connections one needs to wrap the retrieved destination as ",Object(o.b)("inlineCode",{parentName:"p"},"HttpDestination")," using ",Object(o.b)("inlineCode",{parentName:"p"},"asHttp()"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'DestinationAccessor.getDestination("my-destination").asHttp();\n')),Object(o.b)("p",null,"This method ensures that the required destination properties are all set to make the HTTP connection.\nWith the resulting destination instance depending on the use case one can run HTTP queries for ODATA or REST."),Object(o.b)("h3",{id:"bapi-destinations"},"BAPI Destinations"),Object(o.b)("p",null,"Similarly, for BAPI endpoints you need to use ",Object(o.b)("inlineCode",{parentName:"p"},"asRfc()"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'DestinationAccessor.getDestination("my-destination").asRfc();\n')),Object(o.b)("h3",{id:"connect-to-sap-s4hana-on-premise"},"Connect to SAP S/4HANA On-Premise"),Object(o.b)("p",null,"If your destination is exposing an SAP S/4HANA on-premise service via a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html"}),"Cloud Connector"))," you need to decorate the destination with ",Object(o.b)("inlineCode",{parentName:"p"},"DefaultErpHttpDestination"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"final HttpDestination httpDestination =\ndestination.asHttp().decorate(DefaultErpHttpDestination::new);\n")),Object(o.b)("p",null,"This ensures the mapping of all SAP S/4HANA properties like ",Object(o.b)("inlineCode",{parentName:"p"},"sap-client")," and ",Object(o.b)("inlineCode",{parentName:"p"},"sap-locale")," as HTTP request headers."),Object(o.b)("h2",{id:"registering-destinations-at-runtime"},"Registering Destinations at Runtime"),Object(o.b)("p",null,"The SAP Cloud SDK offers convenient ways to create a destination at runtime and register it so that it will be available via ",Object(o.b)("inlineCode",{parentName:"p"},"DestinationAccessor.getDestination()"),".\nThis is especially useful when working in a local environment.\nDestinations configured in the destination service are not available in a local setting and have to be mocked."),Object(o.b)("h3",{id:"mocking-destinations-for-testing"},"Mocking Destinations for Testing"),Object(o.b)("p",null,"The SAP Cloud SDK offers a ",Object(o.b)("inlineCode",{parentName:"p"},"MockUtil")," class that is capable of injecting destinations into the ",Object(o.b)("inlineCode",{parentName:"p"},"DestinationAccessor"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'final MockUtil mockUtil = new MockUtil();\n\nMockDestination destination = MockDestination\n            .builder("my-destination", URI.create("http://localhost:8080"))\n            .build();\n\nmockUtil.mockDestination(destination);\n\n// This will now return the mocked destination\nDestinationAccessor.getDestination("my-destination").asHttp();\n')),Object(o.b)("p",null,"This helps with keeping production and test code nicely separated.\nThere are more overloads of the mocking on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/testutil/MockUtil.html"}),"MockUtil class")," that you can use.\nRefer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.sap.com/tutorials/s4sdk-odata-service-cloud-foundry.html#b77d53b0-2d8b-449c-9a9a-9df80ee09a4e"}),"these tutorial steps")," on how to mock destinations for local development and testing."),Object(o.b)("h3",{id:"using-custom-destination-loaders"},"Using Custom Destination Loaders"),Object(o.b)("p",null,"The above is useful for testing but not suited for productive code.\nIf you want to register custom destinations in your productive code you can use the following API:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'customHttpDestination = DefaultHttpDestination.builder("http://url")\n        .name("custom-destination")\n        .build();\n\ncustomLoader = new DefaultDestinationLoader()\n        .registerDestination(customHttpDestination);\n\nDestinationAccessor.appendDestinationLoader(loader);\n\n// This will now return the custom destination\nDestinationAccessor.getDestination("custom-destination").asHttp();\n')),Object(o.b)("p",null,"By default, the ",Object(o.b)("inlineCode",{parentName:"p"},"DestinationAccessor")," is using a ",Object(o.b)("inlineCode",{parentName:"p"},"DestinationLoaderChain")," that comprises multiple loaders.\nThese are e.g. a loader to get destinations from the destination service and a loader that reads destinations from environment variables."),Object(o.b)("p",null,"The above ",Object(o.b)("inlineCode",{parentName:"p"},"appendDestinationLoader()")," will add the provided loader at the end of such a chain.\nThat means the new loader can operate as a fallback.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"prependDestinationLoader()")," to add it at the beginning if you would like it to take precedence.\nLastly use ",Object(o.b)("inlineCode",{parentName:"p"},"setLoader()")," to replace all existing loaders."),Object(o.b)("h2",{id:"retrieving-destinations"},"Retrieving Destinations"),Object(o.b)("h3",{id:"get-all-destinations-from-the-destination-service-on-cloud-foundry"},"Get All Destinations From the Destination Service on Cloud Foundry"),Object(o.b)("p",null,"To fetch all destinations from the Destination Service, you need to make a call to ",Object(o.b)("inlineCode",{parentName:"p"},"tryGetAllDestinations"),".\nThe method queries the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://api.sap.com/api/SAP_CP_CF_Connectivity_Destination/overview"}),"Destination Service API")," and retrieves all the destinations available at the service instance and sub-account level.\nIn case there is a destination available on both the levels with the same name, then this method prioritizes the destination at the service instance level."),Object(o.b)("p",null,"Below is the sample call to ",Object(o.b)("inlineCode",{parentName:"p"},"tryGetAllDestinations"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"final Try<Iterable<ScpCfDestination>> destinations = destinationLoader.tryGetAllDestinations(options);\n")),Object(o.b)("p",null,"In the above call ",Object(o.b)("inlineCode",{parentName:"p"},"destinationLoader")," needs to be an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"ScpCfDestinationLoader"),"."),Object(o.b)("h4",{id:"building-destination-options"},"Building Destination Options"),Object(o.b)("p",null,"You need to build a ",Object(o.b)("inlineCode",{parentName:"p"},"DestinationOptions")," object and pass it as a parameter.\nIt defines how Destinations Service is queried.\nIn a simple application without provider/subscriber setup, your initial configuration is as simple as:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"final DestinationOptions options = DestinationOptions.builder().build();\n")),Object(o.b)("p",null,"For a provider/subscriber setup, a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/connectivity/ScpCfDestinationRetrievalStrategy.html"}),"retrieval strategy")," must be chosen according to your particular use case from:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ALWAYS_SUBSCRIBER")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ALWAYS_PROVIDER")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SUBSCRIBER_THEN_PROVIDER"),".")),Object(o.b)("p",null,"Here is an example for ",Object(o.b)("inlineCode",{parentName:"p"},"SUBSCRIBER_THEN_PROVIDER")," option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"final DestinationOptions options =\n          DestinationOptions\n              .builder()\n              .augmentBuilder(\n                  ScpCfDestinationOptionsAugmenter.augmenter().retrievalStrategy(\n                      ScpCfDestinationRetrievalStrategy.SUBSCRIBER_THEN_PROVIDER))\n              .build();\n")),Object(o.b)("p",null,"You can similarly use other retrieval options."),Object(o.b)("h2",{id:"configure-http-destinations-for-local-deployment"},"Configure HTTP Destinations for Local Deployment"),Object(o.b)("p",null,"When testing your app on localhost instead of SCP you require some configuration steps to make the destination retrieval work."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"HTTP Destinations")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This section refers to the maintenance of HTTP destinations.\nRefer to the documentation about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/cloud-sdk/docs/java/features/bapi-and-rfc/bapi-and-rfc-overview"}),"BAPI/RFC communication")," concerning the maintenance of RFC destinations for local deployment."))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Works for SAP Business Application Studio too")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'The configuration procedures outlined here work too when you launch your app "locally" inside SAP Business Application Studio.\nIt does not matter that the app does not run on your own machine.'))),Object(o.b)("p",null,"To better understand the configuration steps, we'll outline shortly how destination retrieval works when running your app on SCP.\nThereafter we'll outline the configuration procedures in detail."),Object(o.b)("h3",{id:"background-destination-retrieval-on-sap-cloud-platform"},"Background: Destination Retrieval on SAP Cloud Platform"),Object(o.b)("p",null,"By default the SAP Cloud SDK uses a set of so-called destination loaders in a given order when searching for a destination via the ",Object(o.b)("inlineCode",{parentName:"p"},"DestinationAccessor")," API:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'DestinationAccessor.tryGetDestination("MyDestination");\n')),Object(o.b)("h4",{id:"environment-variable"},"Environment Variable"),Object(o.b)("p",null,"The first destination loader attempts to find the requested destination in the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"destinations"),".\nHere is an example value:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "type": "HTTP",\n    "name": "MyDestination",\n    "proxyType": "Internet",\n    "description": "This destination rocks!",\n    "authentication": "BasicAuthentication",\n    "url": "https://URL",\n    "user": "USER",\n    "password": "PASSWORD"\n  }\n]\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Multiple Destinations")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can configure multiple destinations with that approach.\nNote that the value of the environment variable is a JSON array, so you can add further entries into it."))),Object(o.b)("h4",{id:"sap-cloud-platform-destination-service"},"SAP Cloud Platform Destination Service"),Object(o.b)("p",null,"If the previous lookup was not successful, the next destination loaders examine the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"VCAP_SERVICES")," to see if the SCP destination service is bound.\nIf so, the SAP Cloud SDK queries the SCP destination service for the destination configuration per the requested destination name."),Object(o.b)("h4",{id:"sap-cloud-platform-connectivity-service"},"SAP Cloud Platform Connectivity Service"),Object(o.b)("p",null,"In case the destination is of proxy type ",Object(o.b)("inlineCode",{parentName:"p"},"OnPremise"),", the SAP Cloud SDK performs an additional query to the SCP connectivity service to obtain further proxy information and an authorization token."),Object(o.b)("h3",{id:"configuration-procedure-for-localhost"},"Configuration Procedure for Localhost"),Object(o.b)("h4",{id:"destinations-with-proxy-type-internet"},'Destinations With Proxy Type "Internet"'),Object(o.b)("p",null,"Maintain the destination configuration via the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"destinations"),".\nSee the example value above for reference."),Object(o.b)("h4",{id:"destinations-with-proxy-type-onpremise"},'Destinations With Proxy Type "OnPremise"'),Object(o.b)("p",null,"We have to some perform configuration steps to tell the SAP Cloud SDK how to access the SCP destination service and connectivity service."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Are your client and server located on the same Network?")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If your localhost (client) resides in the same network zone as the target system (server) you can access it directly.\nConfiguration of SCP connectivity services is not needed.\nAll you have to do is creating a destination via environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"destinations"),"."))),Object(o.b)("h5",{id:"maintain-vcap_services"},"Maintain VCAP_SERVICES"),Object(o.b)("p",null,"How to create the ",Object(o.b)("inlineCode",{parentName:"p"},"VCAP_SERVICES")," representation depends on whether the Cloud Application Programming (CAP) Model is used."),Object(o.b)(s.a,{groupId:"isCapUsed",defaultValue:"true",values:[{label:"CAP is used",value:"true"},{label:"CAP is not used",value:"false"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"false",mdxType:"TabItem"},Object(o.b)("p",null,"Create the ",Object(o.b)("inlineCode",{parentName:"p"},"VCAP_SERVIES")," environment variable on the shell or operating system level.\nCopy the value of that environment variable from your app which is deployed to SCP.")),Object(o.b)(c.a,{value:"true",mdxType:"TabItem"},Object(o.b)("p",null,"Create the file ",Object(o.b)("inlineCode",{parentName:"p"},"default-env.json")," in your project's root and supply the ",Object(o.b)("inlineCode",{parentName:"p"},"VCAP_SERVICES")," value you copied beforehand so that the file looks similar to the following shortened example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "VCAP_SERVICES": {\n    "connectivity": [\n      {\n        "label": "connectivity",\n        "plan": "lite",\n        "name": "my-connectivity",\n        "instance_name": "my-connectivity",\n        "credentials": {\n          ...\n        }\n      }\n    ],\n    "xsuaa": [\n      {\n        "label": "xsuaa",\n        "plan": "space",\n        "name": "my-xsuaa",\n        "instance_name": "my-xsuaa",\n        "credentials": {\n          ...\n        }\n      }\n    ],\n    "destination": [\n      {\n        "label": "destination",\n        "plan": "lite",\n        "name": "my-destination",\n        "instance_name": "my-destination",\n        "credentials": {\n          ...\n        }\n      }\n    ]\n  }\n}\n\n\n')),Object(o.b)("p",null,"Furthermore, add the dependency ",Object(o.b)("inlineCode",{parentName:"p"},"com.sap.cds:cds-integration-cloud-sdk")," to your POM file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n  <groupId>com.sap.cds</groupId>\n  <artifactId>cds-integration-cloud-sdk</artifactId>\n</dependency>\n")))),Object(o.b)("h5",{id:"enable-access-to-sap-cloud-platform-connectivity-service"},"Enable Access to SAP Cloud Platform Connectivity Service"),Object(o.b)("p",null,"The SCP connectivity service builds the connection between SCP and the on-premise network.\nThat is why it has strong built-in restrictions to allow it only to be called from within SCP.\nIf you would call the connectivity service from your local machine, you would encounter a connection timeout.\nWe'll therefore apply port forwarding via SSH to simulate that your localhost plays the cloud app."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Deploy your app to the SCP once."),Object(o.b)("li",{parentName:"ul"},"Enable SSH access to your app container with the ",Object(o.b)("inlineCode",{parentName:"li"},"cf")," CLI:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cf enable-ssh app-name\ncf restart app-name\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Inspect the value of the entry ",Object(o.b)("inlineCode",{parentName:"li"},"connectivity")," of your ",Object(o.b)("inlineCode",{parentName:"li"},"VCAP_SERVICES")," and take note of the values of the fields",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"credentials.onpremise_proxy_port")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"credentials.onpremise_proxy_host"))))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We'll refer to these values as ",Object(o.b)("em",{parentName:"p"},"proxy-port")," and ",Object(o.b)("em",{parentName:"p"},"proxy-host")," hereafter."))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create an SSH session to your app container with the following command and let the session opened:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cf ssh app-name -L proxy-port:proxy-host:proxy-port\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Replace the value of the field ",Object(o.b)("inlineCode",{parentName:"li"},"VCAP_SERVICES.connectivity.credentials.onpremise_proxy_host")," in your ",Object(o.b)("inlineCode",{parentName:"li"},"default-env.json"),"\nwith ",Object(o.b)("inlineCode",{parentName:"li"},"localhost"),".")),Object(o.b)("div",{className:"admonition admonition-success alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Ready")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Now your local setup is ready to consume an on-premise HTTP destination."))))}p.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(s,".").concat(u)]||b[u]||p[u]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},206:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},209:function(e,t,n){"use strict";var a=n(0),i=n(210);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},210:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},212:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(209),s=n(206),c=n(55),r=n.n(c),l=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,p=e.groupId,u=e.className,m=Object(o.a)(),h=m.tabGroupChoices,v=m.setTabGroupChoices,O=Object(a.useState)(c),j=O[0],f=O[1],g=a.Children.toArray(e.children);if(null!=p){var y=h[p];null!=y&&y!==j&&b.some((function(e){return e.value===y}))&&f(y)}var N=function(e){f(e),null!=p&&v(p,e)},C=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},u)},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(s.a)("tabs__item",r.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},213:function(e,t,n){"use strict";var a=n(3),i=n(0),o=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:i}),t)}}}]);