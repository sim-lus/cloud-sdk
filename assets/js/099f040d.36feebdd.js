(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9127],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2667:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s={},i={unversionedId:"js/features/odata/common/entity/from-json",id:"js/features/odata/common/entity/from-json",isDocsHomePage:!1,title:"from-json",description:"In some cases it makes sense for you to store your data as a JSON object, that is based on the entity type, i. e. using the property names of the entity class as properties of your object.",source:"@site/docs/js/features/odata/common/entity/from-json.mdx",sourceDirName:"js/features/odata/common/entity",slug:"/js/features/odata/common/entity/from-json",permalink:"/cloud-sdk/docs/js/features/odata/common/entity/from-json",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/entity/from-json.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1620025414,formattedLastUpdatedAt:"5/3/2021",frontMatter:{}},u=[],c={toc:u};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In some cases it makes sense for you to store your data as a JSON object, that is based on the entity type, i. e. using the property names of the entity class as properties of your object.\nIf you are looking for a way to create an entity from a JSON response, that you got from an OData service, you are probably looking for ",(0,a.kt)("a",{parentName:"p",href:"#deserialize-an-odata-json-response-to-an-entity"},"entity deserialization"),"."),(0,a.kt)("p",null,"This would be the JSON representation of a business partner in the SAP Cloud SDK:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "firstName": "Peter",\n  "lastName": "Pan",\n  "toBusinessPartnerAddress": [\n    {\n      "country": "Neverland"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"You can use this data to build an entity using the ",(0,a.kt)("inlineCode",{parentName:"p"},".fromJson")," method.\nThe example below shows how you would create an instance of the business partner class using the ",(0,a.kt)("inlineCode",{parentName:"p"},".fromJson")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  BusinessPartner,\n  BusinessPartnerAddress\n} from '@sap/cloud-sdk-vdm-business-partner-service';\n\nconst businessPartner = BusinessPartner.builder().fromJson({\n  firstName: 'Peter',\n  lastName: 'Pan',\n  toBusinessPartnerAddress: [\n    {\n      country: 'Neverland'\n    }\n  ]\n});\n")),(0,a.kt)("p",null,"If there are unknown fields present in the JSON object, they will be treated as custom fields."))}l.isMDXComponent=!0}}]);