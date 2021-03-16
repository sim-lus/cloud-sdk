(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{214:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(214)),i={},l={unversionedId:"js/features/odata/common/query-parameter/filter",id:"js/features/odata/common/query-parameter/filter",isDocsHomePage:!1,title:"filter",description:"When operating on a collection of entities the API offers filter( ... ) on the builders.",source:"@site/docs/js/features/odata/common/query-parameter/filter.mdx",slug:"/js/features/odata/common/query-parameter/filter",permalink:"/cloud-sdk/docs/js/features/odata/common/query-parameter/filter",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/query-parameter/filter.mdx",version:"current",lastUpdatedBy:"Suhas Rao",lastUpdatedAt:1615881888,formattedLastUpdatedAt:"3/16/2021"},s=[],c={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When operating on a collection of entities the API offers ",Object(o.b)("inlineCode",{parentName:"p"},"filter( ... )")," on the builders.\nIt directly corresponds to the ",Object(o.b)("inlineCode",{parentName:"p"},"$filter")," parameter of the request.\nFilters are also built via the static property fields on entities:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"/*\n  Get all business partners that either:\n    - Have first name 'Alice' but not last name 'Bob'\n    - Or have first name 'Mallory'\n*/\nBusinessPartner.requestBuilder()\n  .getAll()\n  .filter(\n    or(\n      and(\n        BusinessPartner.FIRST_NAME.equals('Alice'),\n        BusinessPartner.LAST_NAME.notEquals('Bob')\n      ),\n      BusinessPartner.FIRST_NAME.equals('Mallory')\n    )\n  )\n  .execute(destination);\n")),Object(o.b)("p",null,"The example above will translate to this filter parameter:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"$filter=(((FirstName eq 'Alice') and (LastName ne 'Bob')) or (FirstName eq 'Mallory'))\n")),Object(o.b)("p",null,"Take note of the order of ",Object(o.b)("inlineCode",{parentName:"p"},"and")," and ",Object(o.b)("inlineCode",{parentName:"p"},"or"),".\nAs ",Object(o.b)("inlineCode",{parentName:"p"},"or")," is invoked on the result of ",Object(o.b)("inlineCode",{parentName:"p"},"and")," it will form the outer expression while ",Object(o.b)("inlineCode",{parentName:"p"},"and")," is an inner expression in the first branch of ",Object(o.b)("inlineCode",{parentName:"p"},"or"),"."),Object(o.b)("p",null,"It is also possible to pass multiple filters to the same filter function without concatenating them with ",Object(o.b)("inlineCode",{parentName:"p"},"and")," or ",Object(o.b)("inlineCode",{parentName:"p"},"or"),".\nThey will be concatenated with ",Object(o.b)("inlineCode",{parentName:"p"},"and")," by default.\nThe two following examples are equal:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},".filter(\n  and(\n    BusinessPartner.FIRST_NAME.equals('Alice'),\n    BusinessPartner.LAST_NAME.notEquals('Bob')\n  )\n)\n")),Object(o.b)("p",null,"The example above can be shortened to:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},".filter(\n  BusinessPartner.FIRST_NAME.equals('Alice'),\n  BusinessPartner.LAST_NAME.notEquals('Bob')\n)\n")))}u.isMDXComponent=!0}}]);