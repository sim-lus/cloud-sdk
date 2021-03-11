(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{214:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||a;return n?o.a.createElement(m,i(i({ref:t},u),{},{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(214)),s={},i={unversionedId:"js/features/odata/common/entity/from-json",id:"js/features/odata/common/entity/from-json",isDocsHomePage:!1,title:"from-json",description:"In some cases it makes sense for you to store your data as a JSON object, that is based on the entity type, i. e. using the property names of the entity class as properties of your object.",source:"@site/docs/js/features/odata/common/entity/from-json.mdx",slug:"/js/features/odata/common/entity/from-json",permalink:"/cloud-sdk/docs/js/features/odata/common/entity/from-json",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/entity/from-json.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1615468607,formattedLastUpdatedAt:"3/11/2021"},c=[],u={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In some cases it makes sense for you to store your data as a JSON object, that is based on the entity type, i. e. using the property names of the entity class as properties of your object.\nIf you are looking for a way to create an entity from a JSON response, that you got from an OData service, you are probably looking for ",Object(a.b)("a",{parentName:"p",href:"#deserialize-an-odata-json-response-to-an-entity"},"entity deserialization"),"."),Object(a.b)("p",null,"This would be the JSON representation of a business partner in the SAP Cloud SDK:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "firstName": "Peter",\n  "lastName": "Pan",\n  "toBusinessPartnerAddress": [\n    {\n      "country": "Neverland"\n    }\n  ]\n}\n')),Object(a.b)("p",null,"You can use this data to build an entity using the ",Object(a.b)("inlineCode",{parentName:"p"},".fromJson")," method.\nThe example below shows how you would create an instance of the business partner class using the ",Object(a.b)("inlineCode",{parentName:"p"},".fromJson")," method."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import {\n  BusinessPartner,\n  BusinessPartnerAddress\n} from '@sap/cloud-sdk-vdm-business-partner-service';\n\nconst businessPartner = BusinessPartner.builder().fromJson({\n  firstName: 'Peter',\n  lastName: 'Pan',\n  toBusinessPartnerAddress: [\n    {\n      country: 'Neverland'\n    }\n  ]\n});\n")),Object(a.b)("p",null,"If there are unknown fields present in the JSON object, they will be treated as custom fields."))}p.isMDXComponent=!0}}]);