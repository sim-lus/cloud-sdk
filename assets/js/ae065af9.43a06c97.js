(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4359],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),g=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=g(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=g(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var g=2;g<a;g++)l[g]=n[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8099:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return i},default:function(){return c}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l={title:"Logging",sidebar_label:"Logging",description:"How the SAP Cloud SDK logs errors and exceptions",keywords:["sap","cloud","sdk","JavaScript","TypeScript","error","exception","logging"]},s={unversionedId:"js/features/logging",id:"js/features/logging",isDocsHomePage:!1,title:"Logging",description:"How the SAP Cloud SDK logs errors and exceptions",source:"@site/docs/js/features/logging.mdx",sourceDirName:"js/features",slug:"/js/features/logging",permalink:"/cloud-sdk/docs/js/features/logging",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/logging.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1623073422,formattedLastUpdatedAt:"6/7/2021",sidebar_label:"Logging",frontMatter:{title:"Logging",sidebar_label:"Logging",description:"How the SAP Cloud SDK logs errors and exceptions",keywords:["sap","cloud","sdk","JavaScript","TypeScript","error","exception","logging"]},sidebar:"someSidebar",previous:{title:"Error Handling",permalink:"/cloud-sdk/docs/js/features/error-handling"},next:{title:"Shared ESLint configuration",permalink:"/cloud-sdk/docs/js/features/eslint-configuration"}},i=[{value:"Creating a Logger",id:"creating-a-logger",children:[]},{value:"Use a Logger",id:"use-a-logger",children:[]},{value:"Logging Exceptions",id:"logging-exceptions",children:[]},{value:"Exception Logger",id:"exception-logger",children:[]},{value:"What Happens Under the Hood",id:"what-happens-under-the-hood",children:[]}],g={toc:i};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"creating-a-logger"},"Creating a Logger"),(0,a.kt)("p",null,"The SAP Cloud SDK provides an easy way to create a logger:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const myLogger = createLogger('my-message-context');\n")),(0,a.kt)("p",null,"The string argument in the ",(0,a.kt)("inlineCode",{parentName:"p"},"createLogger")," is the identifier for the logger and you should use a separate message context for each logical part of your application.\nSince it is used to group messages or set the log level per context."),(0,a.kt)("h2",{id:"use-a-logger"},"Use a Logger"),(0,a.kt)("p",null,"The logger provides the usual log methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"myLogger.debug('Here is some debug.');\nmyLogger.info('Here is some info.');\nmyLogger.warn('Here is a warning.');\nmyLogger.error('Here is a error.');\n")),(0,a.kt)("p",null,"The default value for the log level is ",(0,a.kt)("inlineCode",{parentName:"p"},"info"),".\nIn the example above the first line would not appear in the logs.\nYou can set the log level either on creation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const myLogger = createLogger({\n  messageContext: 'my-message-context',\n  level: 'info'\n});\n")),(0,a.kt)("p",null,"or later in you application via the ",(0,a.kt)("inlineCode",{parentName:"p"},"setLogLevel()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"setLogLevel('error', 'my-message-context');\n")),(0,a.kt)("h2",{id:"logging-exceptions"},"Logging Exceptions"),(0,a.kt)("p",null,"In the example above a string was passed to the logging method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"myLogger.info('Here is some info.');\n")),(0,a.kt)("p",null,"and in the logs you would find a related entry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TimeStamp [INFO] my-message-context The message you provided.\n")),(0,a.kt)("p",null,"However, you can also pass an error object also known as an exception to the log statement.\nIn this case the log statement will contain only the message of the exception for all log functions except for ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),".\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"myLogger.error(err)")," is called with an error object it will also log the stack trace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"myLogger.error(new Error('Log this message and stack.')\n")),(0,a.kt)("h2",{id:"exception-logger"},"Exception Logger"),(0,a.kt)("p",null,"The SAP Cloud SDK enables an exception logger once you create a logger instance somewhere in your project.\nThe exception logger logs unhandled exception as if you would log the error manually.\nIn other words, the exception logger does the following for you:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  someMethodThrowing();\n} catch (err) {\n  logger.error(err);\n  throw err;\n}\n")),(0,a.kt)("p",null,"You can disable this functionality with the ",(0,a.kt)("inlineCode",{parentName:"p"},"disableExceptionLogger()")," method."),(0,a.kt)("h2",{id:"what-happens-under-the-hood"},"What Happens Under the Hood"),(0,a.kt)("p",null,"The SAP Cloud SDK logger instances are based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston"},"winston"),".\nA ",(0,a.kt)("inlineCode",{parentName:"p"},"logger")," instance is created from a central container which knows all existing loggers.\nVia the ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," the SAP Cloud SDK provides methods per message context:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"getLogger('my-message-context'); //get logger if present\nsetLogLevel('error', 'my-message-context'); //set log level\n")),(0,a.kt)("p",null,"or global methods for all loggers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"setGlobalLogLevel('warn'); //set log level all logger to warn\nmuteLoggers(); //mute all loggers completely\nunmuteLogger(); //unmute all loggers\n")),(0,a.kt)("p",null,"Besides a log level, each logger contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"transports"),".\nThe SAP Cloud SDK sets ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/blob/c8f11d600efbc28b6f6a89dec8552c518e204a0b/packages/util/src/logger/cloud-sdk-logger.ts#L97-L123"},"default values")," for these parts."),(0,a.kt)("p",null,"The transport is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"console")," and the format is set to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/blob/main/packages/util/src/logger/format/local.ts"},"local")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/blob/main/packages/util/src/logger/format/kibana.ts"},(0,a.kt)("inlineCode",{parentName:"a"},"kibana")),".\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICE")," variables are present in the environment variables the ",(0,a.kt)("inlineCode",{parentName:"p"},"kibana")," format is used, because the SAP Cloud SDK assumes your application is running on Cloud Foundry."),(0,a.kt)("p",null,"In case you see a need for higher flexibility of the logging instance feel free to create an issue in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js"},"repository")," or make a contribution"))}c.isMDXComponent=!0}}]);