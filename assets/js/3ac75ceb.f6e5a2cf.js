(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{221:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),u=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(n),p=r,f=l["".concat(s,".").concat(p)]||l[p]||m[p]||o;return n?i.a.createElement(f,a(a({ref:t},d),{},{components:n})):i.a.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var d=2;d<o;d++)s[d]=n[d];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(221)),s={},a={unversionedId:"js/features/odata/common/entity/custom-fields",id:"js/features/odata/common/entity/custom-fields",isDocsHomePage:!1,title:"custom-fields",description:"In the real world, OData service implementations can differ from their original service specifications.",source:"@site/docs/js/features/odata/common/entity/custom-fields.mdx",slug:"/js/features/odata/common/entity/custom-fields",permalink:"/cloud-sdk/docs/js/features/odata/common/entity/custom-fields",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/entity/custom-fields.mdx",version:"current",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1619790398,formattedLastUpdatedAt:"4/30/2021"},c=[],d={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In the real world, OData service implementations can differ from their original service specifications.\nThis can happen due to incorrect specifications or customizations of the service.\nThe SAP Cloud SDK supports custom fields on your entities, that are not covered by the specification the according service is based on."),Object(o.b)("p",null,"You can set custom fields on an entity through the ",Object(o.b)("inlineCode",{parentName:"p"},".setCustomFields")," and ",Object(o.b)("inlineCode",{parentName:"p"},".setCustomField")," methods.\nSetting custom fields with existing keys overrides the exising fields.\nNon-existent fields are added without removing other fields."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"// add custom fields to the exisitng fields\nbusinessPartner.setCustomFields({\n  myCustomField: 'this is custom'\n});\n\n// add specific custom field\nbusinessPartner.setCustomField('myCustomField', 'this is custom');\n")),Object(o.b)("p",null,"You can also access existing fields using the ",Object(o.b)("inlineCode",{parentName:"p"},".getCustomField")," and ",Object(o.b)("inlineCode",{parentName:"p"},".getCustomFields")," methods."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"// get all custom fields\nconst customFields = businessPartner.getCustomFields(); // { myCustomField: 'this is custom' }\n\n// get specific custom field\nconst customFields: = businessPartner.getCustomField(); // 'this is custom'\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Custom fields are not serialized or deserialized")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"As custom fields are not defined through the service specification, the type of their values is unknown.\nTherefore custom fields are never automatically serialized or deserialized.\nIf you are using custom fields, you might have to take care of serialization on your own."))))}u.isMDXComponent=!0}}]);