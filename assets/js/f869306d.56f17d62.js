(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7671],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9835:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={},l={unversionedId:"js/features/odata/v4/filter-one-to-many",id:"js/features/odata/v4/filter-one-to-many",isDocsHomePage:!1,title:"filter-one-to-many",description:"OData V4 introduces lambda operators e.g., any/all, so that the root property of the one-to-many navigation properties can be filtered.",source:"@site/docs/js/features/odata/v4/filter-one-to-many.mdx",sourceDirName:"js/features/odata/v4",slug:"/js/features/odata/v4/filter-one-to-many",permalink:"/cloud-sdk/docs/js/features/odata/v4/filter-one-to-many",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/v4/filter-one-to-many.mdx",version:"current",lastUpdatedBy:"KavithaSiva",lastUpdatedAt:1623239454,formattedLastUpdatedAt:"6/9/2021",frontMatter:{}},s=[],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"OData V4 introduces ",(0,o.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_LambdaOperators"},"lambda operators")," e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"all"),", so that the root property of the one-to-many navigation properties can be filtered.\nBelow is an example that demonstrates how to use the lambda operator ",(0,o.kt)("a",{parentName:"p",href:"pathname:///api/1.28.1/modules/sap_cloud_sdk_core#any"},"any"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n  Get all people that have at least one friend that matches all the following conditions:\n    - Has first name 'firstName'\n    - Has last name 'lastName'\n*/\n.filter(\n  any(\n    People.FRIENDS.filter(\n      People.FIRST_NAME.equals('firstName'),\n      People.LAST_NAME.equals('lastName')\n    )\n  )\n)\n")),(0,o.kt)("p",null,"The generated ",(0,o.kt)("inlineCode",{parentName:"p"},"$filter")," parameter of the URL will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"$filter=(/any(a0:((a0/Friends/FirstName eq 'firstName' and a0/Friends/LastName eq 'lastName'))))\n")))}c.isMDXComponent=!0}}]);