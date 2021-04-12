(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(214)),i={id:"migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",title:"Migrate to our Open Source Version",sidebar_label:"Migrate to Open Source",description:"We open-sourced the SAP Cloud SDK for JS/TS in the beginning of 2020. This guide will help you with migration to the open source version.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},c={unversionedId:"js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",id:"js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",isDocsHomePage:!1,title:"Migrate to our Open Source Version",description:"We open-sourced the SAP Cloud SDK for JS/TS in the beginning of 2020. This guide will help you with migration to the open source version.",source:"@site/docs/js/guides/migrate-to-os.mdx",slug:"/js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",permalink:"/cloud-sdk/docs/js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/guides/migrate-to-os.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1618248015,formattedLastUpdatedAt:"4/12/2021",sidebar_label:"Migrate to Open Source",sidebar:"someSidebar",previous:{title:"Shared ESLint configuration",permalink:"/cloud-sdk/docs/js/features/eslint-configuration"},next:{title:"Connecting to External Systems From the Business Application Studio",permalink:"/cloud-sdk/docs/js/guides/bas-external-system"}},l=[{value:"Switch To the Open Source Version",id:"switch-to-the-open-source-version",children:[]},{value:"What About Support and Future Development?",id:"what-about-support-and-future-development",children:[]},{value:"How Can I Report an Issue or Make a Feature Request?",id:"how-can-i-report-an-issue-or-make-a-feature-request",children:[]},{value:"Can I Contribute?",id:"can-i-contribute",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"switch-to-the-open-source-version"},"Switch To the Open Source Version"),Object(o.b)("p",null,"Some packages of the SAP Cloud SDK for JavaScript have been migrated to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js"},"github.com"),".\nAs a result, the packages were renamed as shown in the table below.\nNo Breaking changes were made.\nPlease use the new packages from now on."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"old package name"),Object(o.b)("th",{parentName:"tr",align:null},"new package name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@sap/cloud-sdk-util")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@sap-cloud-sdk/util"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@sap/cloud-sdk-analytics")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@sap-cloud-sdk/analytics"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@sap/cloud-sdk-core")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@sap-cloud-sdk/core"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@sap/cloud-sdk-generator")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@sap-cloud-sdk/generator"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@sap/cloud-sdk-test-util")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@sap-cloud-sdk/test-util"))))),Object(o.b)("h5",{id:"how-to-use-the-open-source-version"},"How To Use the Open Source Version"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Search for all your ",Object(o.b)("inlineCode",{parentName:"li"},"dependencies"),"/",Object(o.b)("inlineCode",{parentName:"li"},"devDependencies"),"/",Object(o.b)("inlineCode",{parentName:"li"},"peerDependencies")," in your ",Object(o.b)("inlineCode",{parentName:"li"},"package.json"),"."),Object(o.b)("li",{parentName:"ol"},"Replace the old package name e.g., ",Object(o.b)("inlineCode",{parentName:"li"},"@sap/cloud-sdk-core")," with the new one e.g.",Object(o.b)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/core"),"."),Object(o.b)("li",{parentName:"ol"},"Use a stable version of the SAP Cloud SDK e.g., ",Object(o.b)("inlineCode",{parentName:"li"},"^1.18.0"),"."),Object(o.b)("li",{parentName:"ol"},"Delete your ",Object(o.b)("inlineCode",{parentName:"li"},"node_modules")," and the ",Object(o.b)("inlineCode",{parentName:"li"},"package-lock.json"),"."),Object(o.b)("li",{parentName:"ol"},"Install your dependencies, run: ",Object(o.b)("inlineCode",{parentName:"li"},"npm i"),"."),Object(o.b)("li",{parentName:"ol"},"Search your source code for references to the old packages (e.g. in import statements) and replace them with the new names.")),Object(o.b)("h2",{id:"what-about-support-and-future-development"},"What About Support and Future Development?"),Object(o.b)("p",null,"SAP Cloud SDK team fully maintains the Open Source version which is the only one existing.\nWe continue developing and releasing new functionality as well as supporting developers and fixing found bugs."),Object(o.b)("h2",{id:"how-can-i-report-an-issue-or-make-a-feature-request"},"How Can I Report an Issue or Make a Feature Request?"),Object(o.b)("p",null,"Please, create an issue in our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/issues/new/choose"},"GitHub repository"),"."),Object(o.b)("h2",{id:"can-i-contribute"},"Can I Contribute?"),Object(o.b)("p",null,"We are happily accepting contributions via pull requests on our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js"},"GitHub repository"),"."))}u.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);