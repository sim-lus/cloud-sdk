(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9590],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=c(n),f=s,m=l["".concat(u,".").concat(f)]||l[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=l;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},5150:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var r=n(2122),s=n(9756),a=(n(7294),n(3905)),o={},i={unversionedId:"js/features/odata/common/batch/retrieve-request",id:"js/features/odata/common/batch/retrieve-request",isDocsHomePage:!1,title:"retrieve-request",description:"A retrieve request is any HTTP GET request.",source:"@site/docs/js/features/odata/common/batch/retrieve-request.mdx",sourceDirName:"js/features/odata/common/batch",slug:"/js/features/odata/common/batch/retrieve-request",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/retrieve-request",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/batch/retrieve-request.mdx",version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1620048512,formattedLastUpdatedAt:"5/3/2021",frontMatter:{}},u=[],c={toc:u};function d(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A retrieve request is any HTTP ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," request.\nIn terms of the SAP Cloud SDK this includes all requests built by a ",(0,a.kt)("a",{parentName:"p",href:"#getall-request-builder"},"GetAllRequestBuilder")," and ",(0,a.kt)("a",{parentName:"p",href:"#getbykey-request-builder"},"GetByKeyRequestBuilder"),"."),(0,a.kt)("p",null,"Retrieve requests can be passed directly to the ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," function, which in turn can be executed once to execute all subrequests.\nOnce a batch request is executed it returns a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchResponse"),"s.\nThose contain the raw response information of each subrequest, the subresponse to a retrieve subrequest can either be a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadResponse")," or an ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),".\nTo determine if a request was successful use ",(0,a.kt)("inlineCode",{parentName:"p"},".isSuccess()"),"."),(0,a.kt)("p",null,"Successful requests can be cast to ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadResponse")," which contains the HTTP code, the raw body, and the constructor of the entity that was parsed from the response.\nTo work with an instance of the retrieved entity, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},".as")," method, which allows you to transform the raw data into an instance of the given constructor.\nNote, that retrieve responses can be ",(0,a.kt)("a",{parentName:"p",href:"#error-handling"},(0,a.kt)("inlineCode",{parentName:"a"},"ErrorResponse"),"s"),".\nTherefore, it is crucial to check responses for success, before casting them to ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadResponse"),"."),(0,a.kt)("p",null,"In the example below, each given address id is mapped to a ",(0,a.kt)("a",{parentName:"p",href:"#getbykey-request-builder"},"GetByKeyRequestBuilder"),".\nThese retrieve requests are combined into one ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request and executed against a destination."),(0,a.kt)("p",null,"If one of the requests was not successful, an error will be thrown, otherwise, the responses are transformed into instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartnerAddress"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async function getAddressesByIds(\n  businessPartnerId: string,\n  addressIds: string[]\n): Promise<BusinessPartnerAddress[]> {\n  const retrieveRequests = addressIds.map(addressId =>\n    // Create get by key request\n    BusinessPartnerAddress.requestBuilder().getByKey(\n      businessPartnerId,\n      addressId\n    )\n  );\n\n  // Execute batch request combining multiple retrieve requests\n  const batchResponses = await batch(...retrieveRequests).execute(destination);\n\n  // Error handling\n  if (batchResponses.some(response => !response.isSuccess())) {\n    throw new Error('Some of the batch subrequests were not successful.');\n  }\n\n  return batchResponses.reduce(\n    (addresses: BusinessPartnerAddress[], response: BatchResponse) => [\n      ...addresses,\n      // Transform response to an instance of BusinessPartnerAddress\n      ...(response as ReadResponse).as(BusinessPartnerAddress)\n    ],\n    []\n  );\n}\n")))}d.isMDXComponent=!0}}]);