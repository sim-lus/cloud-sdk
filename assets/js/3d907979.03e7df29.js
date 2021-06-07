(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9551],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o={title:"Deploy to SAP Business Technology Platform",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Deploy to SAP Business Technology Platform",description:"???",keywords:["sap","cloud","sdk","cli","command","line","JavaScript","TypeScript"]},l={unversionedId:"js/features/cli/package",id:"js/features/cli/package",isDocsHomePage:!1,title:"Deploy to SAP Business Technology Platform",description:"???",source:"@site/docs/js/features/cli/package.mdx",sourceDirName:"js/features/cli",slug:"/js/features/cli/package",permalink:"/cloud-sdk/docs/js/features/cli/package",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/cli/package.mdx",version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1623045465,formattedLastUpdatedAt:"6/7/2021",sidebar_label:"Deploy to SAP Business Technology Platform",frontMatter:{title:"Deploy to SAP Business Technology Platform",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Deploy to SAP Business Technology Platform",description:"???",keywords:["sap","cloud","sdk","cli","command","line","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"Add the SAP Cloud SDK to Your Project",permalink:"/cloud-sdk/docs/js/features/cli/init"},next:{title:"Generate Clients for OData",permalink:"/cloud-sdk/docs/js/features/cli/generator"}},s=[{value:"Benefits of Using the SAP Cloud SDK CLI in Continuous Delivery",id:"benefits-of-using-the-sap-cloud-sdk-cli-in-continuous-delivery",children:[]},{value:"Set Up a Jenkins Pipeline",id:"set-up-a-jenkins-pipeline",children:[]},{value:"Pipeline Steps",id:"pipeline-steps",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"CLI is deprecated")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The SAP Cloud SDK CLI is deprecated.\nWe'll provide replacement for key value adds of the CLI like project scaffolding, etc."))),(0,r.kt)("h2",{id:"benefits-of-using-the-sap-cloud-sdk-cli-in-continuous-delivery"},"Benefits of Using the SAP Cloud SDK CLI in Continuous Delivery"),(0,r.kt)("p",null,"A project initialized with the SAP Cloud SDK CLI provides all the necessary configuration to be used with ",(0,r.kt)("a",{parentName:"p",href:"../../../related-projects/project-piper"},'Project "Piper"'),".\nIt also provides a cross-platform way to copy deployment files that can help if your team develops on Windows, macOS, and Linux."),(0,r.kt)("h2",{id:"set-up-a-jenkins-pipeline"},"Set Up a Jenkins Pipeline"),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"https://sap.github.io/jenkins-library/guidedtour/"},"guide"),' at Project "Piper" to find all information necessary to set up a new pipeline server.\nYou may use the SAP Cloud SDK CLI to download the necessary files.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sap-cloud-sdk add-cx-server\n")),(0,r.kt)("h2",{id:"pipeline-steps"},"Pipeline Steps"),(0,r.kt)("p",null,'The Project "Piper" pipeline contains many stages to ensure enterprise and cloud qualities.\nHere is a list of stages which you should know about.\nFor projects generated with the CLI, all these scripts are automatically maintained.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Build"),":\nYou need to maintain the ",(0,r.kt)("inlineCode",{parentName:"li"},"ci-build")," script in the ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Test"),":\nYou need to maintain the ",(0,r.kt)("inlineCode",{parentName:"li"},"ci-it-backend")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ci-backend-unit-test")," scripts in the ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),".\nIf you built with ",(0,r.kt)("inlineCode",{parentName:"li"},"--addFrontendScripts")," you also need to maintain ",(0,r.kt)("inlineCode",{parentName:"li"},"ci-frontend-unit-test")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ci-e2e"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Package"),":\nYou may need to maintain the ",(0,r.kt)("inlineCode",{parentName:"li"},"ci-package")," script in the ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),".\nBy default, this copies the ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"package-lock.json"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"index.js"),", and the contents of the ",(0,r.kt)("inlineCode",{parentName:"li"},"dist")," folder.\nYou can use ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Glob_(programming)"},"glob patterns")," to include or exclude other files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Deploy"),":\nConfigure your deployment in the ",(0,r.kt)("inlineCode",{parentName:"li"},".pipeline/config.yml")," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"mainfest.yml"),".")))}c.isMDXComponent=!0}}]);