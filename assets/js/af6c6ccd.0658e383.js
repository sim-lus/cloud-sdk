(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4772],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return f}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=o.createContext({}),d=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),f=a,m=p["".concat(u,".").concat(f)]||p[f]||s[f]||r;return t?o.createElement(m,i(i({ref:n},c),{},{components:t})):o.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1801:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var o=t(2122),a=t(9756),r=(t(7294),t(3905)),i={id:"cf-cli",title:"Cloud Foundry",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Cloud Foundry CLI",description:"Configure you Cloud Foundry CLI and bind it to SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},l={unversionedId:"java/guides/cf-cli",id:"java/guides/cf-cli",isDocsHomePage:!1,title:"Cloud Foundry",description:"Configure you Cloud Foundry CLI and bind it to SAP Business Technology Platform",source:"@site/docs/java/guides/cf-cli.mdx",sourceDirName:"java/guides",slug:"/java/guides/cf-cli",permalink:"/cloud-sdk/docs/java/guides/cf-cli",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/guides/cf-cli.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1623187207,formattedLastUpdatedAt:"6/8/2021",sidebar_label:"Cloud Foundry CLI",frontMatter:{id:"cf-cli",title:"Cloud Foundry",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Cloud Foundry CLI",description:"Configure you Cloud Foundry CLI and bind it to SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},sidebar:"someSidebar",previous:{title:"Caching Capabilities",permalink:"/cloud-sdk/docs/java/features/resilience/caching"},next:{title:"Deploy to Cloud Foundry",permalink:"/cloud-sdk/docs/java/guides/cf-deploy"}},u=[{value:"Cloud Foundry Command-Line Interface",id:"cloud-foundry-command-line-interface",children:[]},{value:"Bind Your Command-Line Interface to an API Endpoint",id:"bind-your-command-line-interface-to-an-api-endpoint",children:[]},{value:"SAP Business Technology Platform",id:"sap-business-technology-platform",children:[]}],d={toc:u};function c(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cloud-foundry-command-line-interface"},"Cloud Foundry Command-Line Interface"),(0,r.kt)("p",null,"To deploy your app developed with SAP Cloud SDK to ",(0,r.kt)("a",{parentName:"p",href:"https://www.sap.com/products/cloud-platform.html"},"SAP Business Technology Platform")," you'll need Cloud Foundry command-line interface (CLI).\nYou can download latest release of DEB package ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cloudfoundry/cli/releases"},"from the official CF GitHub repository")," or follow ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cloudfoundry/cli#installing-using-a-package-manager"},"instructions")," to install it with you package manager: ",(0,r.kt)("inlineCode",{parentName:"p"},"apt-get"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yum")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"homebrew")," are supported."),(0,r.kt)("p",null,"After installing the CLI you might need to reload you shell before it becomes available.\nTo check if it works run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cf\n")),(0,r.kt)("h2",{id:"bind-your-command-line-interface-to-an-api-endpoint"},"Bind Your Command-Line Interface to an API Endpoint"),(0,r.kt)("p",null,"Let's associate your Cloud Foundry CLI to your SAP account by providing an API endpoint and logging in with your account."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Select endpoint depending on your region:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Europe ",(0,r.kt)("a",{parentName:"li",href:"https://api.cf.eu10.hana.ondemand.com"},"https://api.cf.eu10.hana.ondemand.com")),(0,r.kt)("li",{parentName:"ul"},"US East: ",(0,r.kt)("a",{parentName:"li",href:"https://api.cf.us10.hana.ondemand.com"},"https://api.cf.us10.hana.ondemand.com")),(0,r.kt)("li",{parentName:"ul"},"US CENTRAL: ",(0,r.kt)("a",{parentName:"li",href:"https://api.cf.us20.hana.ondemand.com"},"https://api.cf.us20.hana.ondemand.com"))),(0,r.kt)("p",null,"To use a snippet for Europe run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cf api https://api.cf.eu10.hana.ondemand.com\n")),(0,r.kt)("p",null,"Provide your credentials for SAP BTP:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cf login\n")),(0,r.kt)("p",null,"For more details on the Cloud Foundry CLI and SAP BTP follow this ",(0,r.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cp-cf-download-cli.html"},"official tutorial"),"."),(0,r.kt)("h2",{id:"sap-business-technology-platform"},"SAP Business Technology Platform"),(0,r.kt)("p",null,"Find out more about the SAP Business Technology Platform, Cloud Foundry environment in the ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/73beb06e127f4e47b849aa95344aabe1.html"},"official documentation"),"."))}c.isMDXComponent=!0}}]);