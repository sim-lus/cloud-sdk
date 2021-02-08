(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{170:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),o=(t(0),t(204)),s={title:"Error Handling",sidebar_label:"Error Handling",description:"How to work with errors thrown by the SAP Cloud SDK",keywords:["sap","cloud","sdk","JavaScript","TypeScript","error","cause","root cause"]},i={unversionedId:"js/features/error-handling",id:"js/features/error-handling",isDocsHomePage:!1,title:"Error Handling",description:"How to work with errors thrown by the SAP Cloud SDK",source:"@site/docs/js/features/error-handling.mdx",slug:"/js/features/error-handling",permalink:"/cloud-sdk/docs/js/features/error-handling",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/error-handling.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1612808811,sidebar_label:"Error Handling",sidebar:"someSidebar",previous:{title:"Executing a Request Using a Generated OpenAPI Client",permalink:"/cloud-sdk/docs/js/features/openapi/execute-openapi-request"},next:{title:"What is the SAP Cloud SDK CLI?",permalink:"/cloud-sdk/docs/js/features/cli/overview"}},c=[],l={toc:c};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are many reasons for errors to occur when developing software.\nThe SAP Cloud SDK tries to provide as much information as possible and necessary to understand what caused an error.\nGenerally speaking, there is no difference in handling errors when working with the SAP Cloud SDK.\nHowever, some errors are caused by underlying errors.\nIn these cases, the SAP Cloud SDK throws an ",Object(o.b)("inlineCode",{parentName:"p"},"ErrorWithCause"),", that allows access to the immediate cause and root cause of this error.\nThese can be accessed by the ",Object(o.b)("inlineCode",{parentName:"p"},"cause")," and ",Object(o.b)("inlineCode",{parentName:"p"},"rootCause")," properties on ",Object(o.b)("inlineCode",{parentName:"p"},"ErrorWithCause"),"."),Object(o.b)("p",null,"In the example below we try to create a business partner against ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://example.com"}),"https://example.com")," as a destination.\nAs this is not an SAP S/4HANA system, this will fail and the error reveals the cause and root cause of the failure."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';\n\nBusinessPartner.requestBuilder()\n  .create(BusinessPartner.builder().build())\n  .execute({ url: 'https://example.com' })\n  .catch(err => {\n    console.log('Error:', err.message);\n    console.log('Cause:', err.cause?.message);\n    console.log('Root cause:', err.rootCause?.message);\n  });\n")),Object(o.b)("p",null,"The example above will yield the following output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"Error: Create request failed!\nCause: post request to https://example.com/sap/opu/odata/sap/API_BUSINESS_PARTNER failed!\nRoot cause: Request failed with status code 404\n")),Object(o.b)("p",null,"The final error is an ",Object(o.b)("inlineCode",{parentName:"p"},"ErrorWithCause")," that was caused by another ",Object(o.b)("inlineCode",{parentName:"p"},"ErrorWithCause"),".\nThe root cause is an ",Object(o.b)("inlineCode",{parentName:"p"},"Error")," and reveals that the requested URL does not exist."))}u.isMDXComponent=!0},204:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=n,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return t?a.a.createElement(m,i(i({ref:r},l),{},{components:t})):a.a.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=b;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);