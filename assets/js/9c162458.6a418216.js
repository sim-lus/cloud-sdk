(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5294],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9490:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],u={},s=void 0,c={unversionedId:"js/features/odata/common/function-imports/request-builder",id:"js/features/odata/common/function-imports/request-builder",isDocsHomePage:!1,title:"request-builder",description:"The function imports request builder helps build a request for a service operation containing parameters in a type-safe way.",source:"@site/docs/js/features/odata/common/function-imports/request-builder.mdx",sourceDirName:"js/features/odata/common/function-imports",slug:"/js/features/odata/common/function-imports/request-builder",permalink:"/cloud-sdk/docs/js/features/odata/common/function-imports/request-builder",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/function-imports/request-builder.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1624363200,formattedLastUpdatedAt:"6/22/2021",frontMatter:{}},p=[],l={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"pathname:///api/1.28.1/classes/sap_cloud_sdk_core.functionimportrequestbuilderv2"},"function imports request builder")," helps build a request for a service operation containing parameters in a type-safe way.\nThis time, as an example, the ",(0,a.kt)("a",{parentName:"p",href:"https://api.sap.com/api/API_WHSE_OUTB_DLV_ORDER/resource"},(0,a.kt)("inlineCode",{parentName:"a"},"Warehouse Outbound Delivery Order Service"))," is used, because not all the services contain function imports like the ",(0,a.kt)("inlineCode",{parentName:"p"},"Business Partner Service"),".\nThe type-safe client for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Warehouse Outbound Delivery Order Service")," can be found in the package ",(0,a.kt)("inlineCode",{parentName:"p"},"@sap/cloud-sdk-vdm-warehouse-outbound-delivery-order-service"),"."),(0,a.kt)("p",null,"The example below creates a function import request builder for the service operation ",(0,a.kt)("inlineCode",{parentName:"p"},"PostGoodsIssue")," and then execute it against your service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"postGoodsIssue({ outboundDeliveryOrder: 'order' }).execute(destination);\n")),(0,a.kt)("p",null,"The service operation is defined in the service metadata."))}d.isMDXComponent=!0}}]);