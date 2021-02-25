(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{156:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return d}));var o=t(3),a=t(7),r=(t(0),t(205)),c={id:"cf-cli",title:"SAP Cloud Foundry",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Cloud Foundry CLI",description:"Configure you Cloud Foundry CLI and bind it to SAP Cloud Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},l={unversionedId:"java/guides/cf-cli",id:"java/guides/cf-cli",isDocsHomePage:!1,title:"SAP Cloud Foundry",description:"Configure you Cloud Foundry CLI and bind it to SAP Cloud Platform",source:"@site/docs/java/guides/cf-cli.mdx",slug:"/java/guides/cf-cli",permalink:"/cloud-sdk/docs/java/guides/cf-cli",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/guides/cf-cli.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1614216267,sidebar_label:"Cloud Foundry CLI",sidebar:"someSidebar",previous:{title:"Currency Conversion",permalink:"/cloud-sdk/docs/java/features/extensions/extension-library/curconv/sap-currency-conversion-extension-library-for-cloud-sdk-for-java"},next:{title:"Deploy to Cloud Foundry",permalink:"/cloud-sdk/docs/java/guides/cf-deploy"}},i=[{value:"Cloud Foundry Command-Line Interface",id:"cloud-foundry-command-line-interface",children:[]},{value:"Bind Your Command-Line Interface To SAP Cloud Foundry",id:"bind-your-command-line-interface-to-sap-cloud-foundry",children:[]},{value:"SAP Cloud Platform",id:"sap-cloud-platform",children:[]}],u={toc:i};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"cloud-foundry-command-line-interface"},"Cloud Foundry Command-Line Interface"),Object(r.b)("p",null,"To deploy your app developed with SAP Cloud SDK to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.sap.com/products/cloud-platform.html"}),"SAP Cloud Platform")," you'll need Cloud Foundry command-line interface (CLI).\nYou can download latest release of DEB package ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/cli/releases"}),"from the official CF GitHub repository")," or follow ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/cli#installing-using-a-package-manager"}),"instructions")," to install it with you package manager: ",Object(r.b)("inlineCode",{parentName:"p"},"apt-get"),", ",Object(r.b)("inlineCode",{parentName:"p"},"yum")," and ",Object(r.b)("inlineCode",{parentName:"p"},"homebrew")," are supported."),Object(r.b)("p",null,"After installing the CLI you might need to reload you shell before it becomes available.\nTo check if it works run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"cf\n")),Object(r.b)("h2",{id:"bind-your-command-line-interface-to-sap-cloud-foundry"},"Bind Your Command-Line Interface To SAP Cloud Foundry"),Object(r.b)("p",null,"Let's associate you Cloud Foundry CLI to your SAP account by providing an API endpoint and logging in with your account."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Select endpoint depending on your region:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Europe ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://api.cf.eu10.hana.ondemand.com"}),"https://api.cf.eu10.hana.ondemand.com")),Object(r.b)("li",{parentName:"ul"},"US East: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://api.cf.us10.hana.ondemand.com"}),"https://api.cf.us10.hana.ondemand.com")),Object(r.b)("li",{parentName:"ul"},"US CENTRAL: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://api.cf.us20.hana.ondemand.com"}),"https://api.cf.us20.hana.ondemand.com"))),Object(r.b)("p",null,"To use a snippet for Europe run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"cf api https://api.cf.eu10.hana.ondemand.com\n")),Object(r.b)("p",null,"Provide your credential for SAP Cloud Foundry by running:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"cf login\n")),Object(r.b)("p",null,"For more details on ",Object(r.b)("inlineCode",{parentName:"p"},"SAP Cloud Foundry CLI")," follow this ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.sap.com/tutorials/cp-cf-download-cli.html"}),"official tutorial"),"."),Object(r.b)("h2",{id:"sap-cloud-platform"},"SAP Cloud Platform"),Object(r.b)("p",null,"Find out more about ",Object(r.b)("inlineCode",{parentName:"p"},"SAP Cloud Platform")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Cloud Foundry Environment")," from ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/73beb06e127f4e47b849aa95344aabe1.html"}),"official documentation"),"."))}d.isMDXComponent=!0},205:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),d=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(t),s=o,m=p["".concat(c,".").concat(s)]||p[s]||b[s]||r;return t?a.a.createElement(m,l(l({ref:n},u),{},{components:t})):a.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=s;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<r;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);