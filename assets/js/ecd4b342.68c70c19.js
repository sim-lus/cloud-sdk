(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7128],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||l[m]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6648:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s={},i={unversionedId:"js/features/odata/common/operations/deep-create",id:"js/features/odata/common/operations/deep-create",isDocsHomePage:!1,title:"deep-create",description:"It is also possible to create an entity together with related entities in a single request:",source:"@site/docs/js/features/odata/common/operations/deep-create.mdx",sourceDirName:"js/features/odata/common/operations",slug:"/js/features/odata/common/operations/deep-create",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/deep-create",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/operations/deep-create.mdx",version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1623045465,formattedLastUpdatedAt:"6/7/2021",frontMatter:{}},c=[],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is also possible to create an entity together with related entities in a single request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// build a business partner instance with one linked address\nconst businessPartner = BusinessPartner.builder()\n  .firstName('John')\n  .lastName('Doe')\n  .businessPartnerCategory('1')\n  .toBusinessPartnerAddress([\n    BusinessPartnerAddress.builder()\n      .country('DE')\n      .postalCode('14469')\n      .cityName('Potsdam')\n      .streetName('Konrad-Zuse-Ring')\n      .houseNumber('10')\n      .build()\n  ])\n  .build();\n\n// execute the create request\nBusinessPartner.requestBuilder().create(businessPartner).execute(myDestination);\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Troubleshooting")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When you try the example code above for testing the ",(0,o.kt)("inlineCode",{parentName:"p"},"deep creat")," feature, you might see some errors like ",(0,o.kt)("inlineCode",{parentName:"p"},'"operation module BUA_CHECK_ADDRESS_VALIDITY_ALL; a check table is missing"'),".\nTypically, it can happen if you are using a new system with a default configuration.\nYou need to configure an ",(0,o.kt)("inlineCode",{parentName:"p"},"address usage")," field as shown in the example below to fix it."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const businessPartner = BusinessPartner.builder()\n  .firstName('John')\n  .lastName('Doe')\n  .businessPartnerCategory('1')\n  .toBusinessPartnerAddress([\n    BusinessPartnerAddress.builder()\n      .country('DE')\n      .postalCode('14469')\n      .cityName('Potsdam')\n      .streetName('Konrad-Zuse-Ring')\n      .houseNumber('10')\n      // additional code starts\n      .toAddressUsage([\n        BuPaAddressUsage.builder().addressUsage('XXDEFAULT').build()\n      ])\n      .build()\n  ])\n  .build();\n")),(0,o.kt)("p",null,"You can also create an entity ",(0,o.kt)("inlineCode",{parentName:"p"},"asChildOf")," another entity."))}d.isMDXComponent=!0}}]);