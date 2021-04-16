(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{220:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(220)),i={},c={unversionedId:"js/features/odata/common/query-parameter/filter-one-to-one",id:"js/features/odata/common/query-parameter/filter-one-to-one",isDocsHomePage:!1,title:"filter-one-to-one",description:"In addition to basic properties, filters can also be applied on one-to-one navigation properties.",source:"@site/docs/js/features/odata/common/query-parameter/filter-one-to-one.mdx",slug:"/js/features/odata/common/query-parameter/filter-one-to-one",permalink:"/cloud-sdk/docs/js/features/odata/common/query-parameter/filter-one-to-one",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/query-parameter/filter-one-to-one.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1618578955,formattedLastUpdatedAt:"4/16/2021"},l=[],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In addition to basic properties, filters can also be applied on one-to-one navigation properties.\nThe example below shows how to filter on the ",Object(a.b)("inlineCode",{parentName:"p"},"TO_CUSTOMER"),", which is a one-to-one navigation property of the BusinessPartner entity.\nPlease note, the ",Object(a.b)("inlineCode",{parentName:"p"},"CUSTOMER_NAME")," and ",Object(a.b)("inlineCode",{parentName:"p"},"CUSTOMER_FULL_NAME")," are properties of the entity ",Object(a.b)("inlineCode",{parentName:"p"},"Customer"),", which is the type of the one-to-one navigation property ",Object(a.b)("inlineCode",{parentName:"p"},"TO_CUSTOMER"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"/*\n  Get all business partners that match all the following conditions:\n    - Have customer with the customer name 'name'\n    - Have customer with the customer full name 'fullName'\n*/\n.filter(\n  BusinessPartner.TO_CUSTOMER.filter(\n    Customer.CUSTOMER_NAME.equals('name'),\n    Customer.CUSTOMER_FULL_NAME.equals('fullName')\n  )\n)\n")),Object(a.b)("p",null,"The generated ",Object(a.b)("inlineCode",{parentName:"p"},"$filter")," will be:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sql"},"$filter=((to_Customer/CustomerName eq 'name' and to_Customer/CustomerFullName eq 'fullName'))\n")))}p.isMDXComponent=!0}}]);