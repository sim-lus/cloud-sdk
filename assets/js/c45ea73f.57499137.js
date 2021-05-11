(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8102],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1623:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={},s={unversionedId:"js/features/odata/common/operations/count",id:"js/features/odata/common/operations/count",isDocsHomePage:!1,title:"count",description:"The method count() allows you to get the number of elements in a collection.",source:"@site/docs/js/features/odata/common/operations/count.mdx",sourceDirName:"js/features/odata/common/operations",slug:"/js/features/odata/common/operations/count",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/count",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/operations/count.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1620714592,formattedLastUpdatedAt:"5/11/2021",frontMatter:{}},c=[],u={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The method ",(0,a.kt)("inlineCode",{parentName:"p"},"count()")," allows you to get the number of elements in a collection.\nIt is only available for ",(0,a.kt)("inlineCode",{parentName:"p"},"getAll()")," requests and is added before the request execution:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder().getAll().count();\n")),(0,a.kt)("p",null,"The return type of count requests is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise<number>"),".\nYou can combine the ",(0,a.kt)("inlineCode",{parentName:"p"},"count()")," with filter conditions.\nTo get the number of business partners with first name ",(0,a.kt)("inlineCode",{parentName:"p"},"John")," execute the following request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .filter(BusinessPartner.FIRST_NAME.equals('John'))\n  .count()\n  .getAll();\n")),(0,a.kt)("p",null,"As defined in the OData spec ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," is not affected by ",(0,a.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"skip"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"orderBy"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,a.kt)("inlineCode",{parentName:"h5"},"top()")," and ",(0,a.kt)("inlineCode",{parentName:"h5"},"skip()")," are ignored for count")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you include these methods in a count request they will be ignored by the SAP Cloud SDK.\nSo these three requests:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre"},"BusinessPartner.requestBuilder().getAll().top(5).count();\nBusinessPartner.requestBuilder().getAll().skip(5).count();\nBusinessPartner.requestBuilder().getAll().count();\n")),(0,a.kt)("p",{parentName:"div"},"will all return the same value."))))}l.isMDXComponent=!0}}]);