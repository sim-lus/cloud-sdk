(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4489],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8334:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={},l={unversionedId:"js/features/odata/v4/expand-select",id:"js/features/odata/v4/expand-select",isDocsHomePage:!1,title:"expand-select",description:"In contrast to the OData v2 implementation, you have to select and expand separately.",source:"@site/docs/js/features/odata/v4/expand-select.mdx",sourceDirName:"js/features/odata/v4",slug:"/js/features/odata/v4/expand-select",permalink:"/cloud-sdk/docs/js/features/odata/v4/expand-select",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/v4/expand-select.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1623667395,formattedLastUpdatedAt:"6/14/2021",frontMatter:{}},p=[],s={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In contrast to the OData v2 implementation, you have to ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"expand")," separately.\nIn other words selected properties are not expanded automatically as in v2."),(0,o.kt)("p",null,"The reason for this difference originates in the way select and expand work in OData v4.\nIn OData v4 you select within the expand-argument ",(0,o.kt)("inlineCode",{parentName:"p"},"$expand=Friends($select=FirstName)")," whereas in OData v2 you select via a path ",(0,o.kt)("inlineCode",{parentName:"p"},"$select=Friends/FirstName&$expand=Friends"),".\nThat's why we mimic this behavior for ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"expand")," operations in our API for OData v4 type-safe client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"People.requestBuilder()\n  .getAll()\n  .select(People.LAST_NAME)\n  .expand(People.FRIENDS.select(People.FIRST_NAME, People.ADDRESS_INFO));\n")),(0,o.kt)("p",null,"In the example above you select the ",(0,o.kt)("inlineCode",{parentName:"p"},"LAST_NAME")," of the root entity and expand the navigation property ",(0,o.kt)("inlineCode",{parentName:"p"},"FRIENDS"),".\nIn the expanded entity the selected fields are ",(0,o.kt)("inlineCode",{parentName:"p"},"FIRST_NAME")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ADDRESS_INFO"),"."),(0,o.kt)("p",null,"The generated URL for this request will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"/People?$select=LastName&$expand=Friends($select=FirstName,AddressInfo)\n")),(0,o.kt)("p",null,"If no ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," is given, all non-navigational properties are included in the response."))}c.isMDXComponent=!0}}]);