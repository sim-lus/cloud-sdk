(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4578,450,6355,9197,8847,2262],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5364:function(e,t,n){"use strict";n.d(t,{Ol:function(){return l},nc:function(){return c},WD:function(){return d},zl:function(){return p},Xc:function(){return m}});var a=n(7294),r=n(9489),i=n(7390),o=n(4874),s=n(8952),u=n(2099);function l(){return a.createElement(r.default,null)}function c(){return a.createElement(i.default,null)}function d(){return a.createElement(o.default,null)}function p(){return a.createElement(s.default,null)}function m(){return a.createElement(u.default,null)}n(1566).Z},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,s=void 0!==o&&o,u=i.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+c:c}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),r=n(944),i=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,l=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=(0,r.Z)(),h=f.tabGroupChoices,v=f.setTabGroupChoices,k=(0,a.useState)(c),g=k[0],y=k[1],w=a.Children.toArray(e.children),N=[];if(null!=p){var b=h[p];null!=b&&b!==g&&d.some((function(e){return e.value===b}))&&y(b)}var q=function(e){var t=e.currentTarget,n=N.indexOf(t),a=d[n].value;y(a),null!=p&&(v(p,a),setTimeout((function(){var e,n,a,r,i,o,u,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,u=o.innerHeight,l=o.innerWidth,n>=0&&i<=l&&r<=u&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case l:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case u:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:q,onClick:q},n)}))),t?(0,a.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},1566:function(e,t,n){"use strict";n(412);var a=n(7294);t.Z=function(e){e.label;var t=(0,a.useState)(!1),n=t[0],r=t[1],i=function(e){swa&&swa.hasOwnProperty("trackCustomEvent")&&swa.trackCustomEvent("collectFeedback",e),r(!0)};return a.createElement("div",{className:"docsRating"},n?"Thanks for giving feedback!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_positive",alt:"Like",onClick:function(){return i(1)},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 81.13 89.76"},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_negative",alt:"Dislike",onClick:function(){return i(0)},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 81.13 89.76"},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"}))))}},7390:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={},u=void 0,l={unversionedId:"js/features/common/custom-request-config-note",id:"js/features/common/custom-request-config-note",isDocsHomePage:!1,title:"custom-request-config-note",description:"To ensure API consistency we do not allow to override the following options:",source:"@site/docs/js/features/common/custom-request-config-note.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/custom-request-config-note",permalink:"/cloud-sdk/docs/js/features/common/custom-request-config-note",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/custom-request-config-note.mdx",version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1624549535,formattedLastUpdatedAt:"6/24/2021",frontMatter:{}},c=[],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To ensure API consistency we do not allow to override the following options:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"baseURL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params"))))))}p.isMDXComponent=!0},9489:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={},u=void 0,l={unversionedId:"js/features/common/custom-request-config",id:"js/features/common/custom-request-config",isDocsHomePage:!1,title:"custom-request-config",description:"By default, the SAP Cloud SDK uses axios as an HTTP client for executing requests.",source:"@site/docs/js/features/common/custom-request-config.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/custom-request-config",permalink:"/cloud-sdk/docs/js/features/common/custom-request-config",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/custom-request-config.mdx",version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1624549535,formattedLastUpdatedAt:"6/24/2021",frontMatter:{}},c=[],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, the SAP Cloud SDK uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," as an HTTP client for executing requests.\nThe SAP Cloud SDK derives and configures most of the request options like ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"headers"),", and others for you.\nIn certain cases passing additional options to axios might be required.\nTo achieve this you can provide a custom request configuration that will be passed down to axios.\nThe example below demonstrates how to configure the response data type, which is typically used when downloading a file from an endpoint."))}p.isMDXComponent=!0},4874:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={},u=void 0,l={unversionedId:"js/features/common/execute-raw-overview",id:"js/features/common/execute-raw-overview",isDocsHomePage:!1,title:"execute-raw-overview",description:"In addition to the execute method, you can execute a request using the executeRaw method.",source:"@site/docs/js/features/common/execute-raw-overview.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/execute-raw-overview",permalink:"/cloud-sdk/docs/js/features/common/execute-raw-overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/execute-raw-overview.mdx",version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1624549535,formattedLastUpdatedAt:"6/24/2021",frontMatter:{}},c=[],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In addition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," method, you can execute a request using the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeRaw")," method.\nIt returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpResponse"),", which contains the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")," - the status code of the response"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headers")," - the response headers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")," - the response body"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request")," - the original request")))}p.isMDXComponent=!0},8952:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={},u=void 0,l={unversionedId:"js/features/common/execute-raw-use-cases",id:"js/features/common/execute-raw-use-cases",isDocsHomePage:!1,title:"execute-raw-use-cases",description:"Typical cases, where you might need to use executeRaw are:",source:"@site/docs/js/features/common/execute-raw-use-cases.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/execute-raw-use-cases",permalink:"/cloud-sdk/docs/js/features/common/execute-raw-use-cases",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/execute-raw-use-cases.mdx",version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1624549535,formattedLastUpdatedAt:"6/24/2021",frontMatter:{}},c=[],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Typical cases, where you might need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"executeRaw")," are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need additional information about the response, like the status code or response headers."),(0,i.kt)("li",{parentName:"ul"},"You need additional information about the request that has been sent, like payload, method or request headers."),(0,i.kt)("li",{parentName:"ul"},"The function ",(0,i.kt)("inlineCode",{parentName:"li"},"execute")," is omitted in some request builders because the response data cannot be deserialized by the request builder."),(0,i.kt)("li",{parentName:"ul"},"Debugging purposes.")))}p.isMDXComponent=!0},2099:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={},u=void 0,l={unversionedId:"js/features/common/skip-csrf-token",id:"js/features/common/skip-csrf-token",isDocsHomePage:!1,title:"skip-csrf-token",description:"For some services, the CSRF token is not required even for non-get requests.",source:"@site/docs/js/features/common/skip-csrf-token.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/skip-csrf-token",permalink:"/cloud-sdk/docs/js/features/common/skip-csrf-token",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/skip-csrf-token.mdx",version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1624549535,formattedLastUpdatedAt:"6/24/2021",frontMatter:{}},c=[],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For some services, the ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not required even for non-get requests.\nTherefore, skipping fetching the ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token makes sense as performance improvement.\nYou can disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token request by using ",(0,i.kt)("inlineCode",{parentName:"p"},"skipCsrfTokenFetching()")," like below:"))}p.isMDXComponent=!0},3329:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return f},default:function(){return v}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=(n(4996),n(1395)),s=n(8215),u=n(5364),l=n(1566),c=["components"],d={title:"Executing a Request Using a Generated OData v2/v4 Client",sidebar_label:"Execute an OData request",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"]},p=void 0,m={unversionedId:"js/features/odata/execute-odata-request",id:"js/features/odata/execute-odata-request",isDocsHomePage:!1,title:"Executing a Request Using a Generated OData v2/v4 Client",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",source:"@site/docs/js/features/odata/execute-odata-request.mdx",sourceDirName:"js/features/odata",slug:"/js/features/odata/execute-odata-request",permalink:"/cloud-sdk/docs/js/features/odata/execute-odata-request",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/execute-odata-request.mdx",version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1624549535,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"Executing a Request Using a Generated OData v2/v4 Client",sidebar_label:"Execute an OData request",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"]},sidebar:"someSidebar",previous:{title:"Generate an OData Client",permalink:"/cloud-sdk/docs/js/features/odata/generate-odata-client"},next:{title:"OData v2 Client API",permalink:"/cloud-sdk/docs/js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript"}},f=[{value:"General Request Structure",id:"general-request-structure",children:[{value:"Setting Custom Request Headers",id:"setting-custom-request-headers",children:[]},{value:"Setting Custom Query Parameters",id:"setting-custom-query-parameters",children:[]},{value:"Setting a Custom Service Path",id:"setting-a-custom-service-path",children:[]},{value:"Setting a Custom Request Configuration",id:"setting-a-custom-request-configuration",children:[]},{value:"Appending Paths to the Request URL Built by the Request Builders",id:"appending-paths-to-the-request-url-built-by-the-request-builders",children:[]},{value:"Getting the Raw Response and the Original Request",id:"getting-the-raw-response-and-the-original-request",children:[]}]}],h={toc:f};function v(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once you have generated a typed OData client using the SAP Cloud SDK generator or if you decided to use one of the pregenerated OData clients for SAP S/4HANA, you can use your OData client to execute HTTP requests against your service.\nThe client provides request builders for the different types of requests and abstractions of the entity sets of the given service, that we refer to as ",(0,i.kt)("em",{parentName:"p"},"entities"),"."),(0,i.kt)("p",null,"To request an entity set, entities offer a fluent API."),(0,i.kt)("h2",{id:"general-request-structure"},"General Request Structure"),(0,i.kt)("p",null,"On an abstract level, creating a request using the fluent API always follows the same simple structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { MyEntity } from './outputDir/my-service';\n\nreturn MyEntity.requestBuilder()\n  .<requestType>(...)\n  .<additionalRequestConfiguration>(...)\n  .execute(destination);\n")),(0,i.kt)("p",null,"When using a custom OData client, import an entity from the generated service directory (",(0,i.kt)("inlineCode",{parentName:"p"},"my-service"),") within the specified output directory (",(0,i.kt)("inlineCode",{parentName:"p"},"outputDir"),").\nThe name of the service directory corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"directoryName")," specified in the service mapping file (",(0,i.kt)("inlineCode",{parentName:"p"},"serviceMapping.json")," by default) in your input directory."),(0,i.kt)("p",null,"When using one of the predefined OData clients, import it from the npm module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { PredefinedEntity } from '@sap/cloud-sdk-vdm-predefined-service';\n")),(0,i.kt)("p",null,"Every entity has a ",(0,i.kt)("inlineCode",{parentName:"p"},"requestBuilder")," function, that allows to chain all types of request builders that are available for this entity, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"MyEntity.requestBuilder().getAll()")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"getAll")," request type."),(0,i.kt)("p",null,"See the list below for details on all available request types (denoted by ",(0,i.kt)("inlineCode",{parentName:"p"},"requestType")," in the example above):"),(0,i.kt)(o.Z,{groupId:"odataVersion",defaultValue:"v2",values:[{label:"OData v2",value:"v2"},{label:"OData v4",value:"v4"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"v2",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#getall-request-builder"},(0,i.kt)("code",null,"getAll"))," ","Build requests to get a list of entities (OData v2)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#getbykey-request-builder"},(0,i.kt)("code",null,"getByKey"))," ","Build requests to get an entity based on a key (OData v2)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#create-request-builder"},(0,i.kt)("code",null,"create"))," ","Build requests to create entities (OData v2)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#update-request-builder"},(0,i.kt)("code",null,"update"))," ","Build requests to update entities (OData v2)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#delete-request-builder"},(0,i.kt)("code",null,"delete"))," ","Build requests to delete entities (OData v2)")),(0,i.kt)(s.Z,{value:"v4",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#getall-request-builder"},(0,i.kt)("code",null,"getAll"))," ","Build requests to get a list of entities (OData v4)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#getbykey-request-builder"},(0,i.kt)("code",null,"getByKey"))," ","Build requests to get an entity based on a key (OData v4)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#create-request-builder"},(0,i.kt)("code",null,"create"))," ","Build requests to create entities (OData v4)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#update-request-builder"},(0,i.kt)("code",null,"update"))," ","Build requests to update entities (OData v4)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#delete-request-builder"},(0,i.kt)("code",null,"delete"))," ","Build requests to delete entities (OData v4)"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some entities do not support all the request types, which in turn won't be available through the API."))),(0,i.kt)("p",null,"The request can further be configured by chaining additional configuration functions (denoted by ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalRequestConfiguration")," in the example above).\nAll requests can be configured by setting ",(0,i.kt)("a",{parentName:"p",href:"#setting-custom-request-headers"},"custom request headers"),", ",(0,i.kt)("a",{parentName:"p",href:"#setting-custom-query-parameters"},"custom query parameters")," and a ",(0,i.kt)("a",{parentName:"p",href:"#setting-a-custom-service-path"},"custom service path"),"."),(0,i.kt)("p",null,"Each request type has additional request specific configuration options, e.g. creating an entity ",(0,i.kt)("inlineCode",{parentName:"p"},"asChildOf")," another entity for ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," requests, ETag handling for ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," requests, as well as set operations for ",(0,i.kt)("inlineCode",{parentName:"p"},"getAll")," requests and selecting properties for ",(0,i.kt)("inlineCode",{parentName:"p"},"getAll")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getByKey")," requests."),(0,i.kt)("p",null,"The last step when making a request using the SAP Cloud SDK is the request execution.\nOnce the request is configured use the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," function and pass a ",(0,i.kt)("a",{parentName:"p",href:"../connectivity/destination"},"destination")," to it.\nThis will automatically construct your request URL and headers, execute the request, and return a typed response if applicable."),(0,i.kt)("h3",{id:"setting-custom-request-headers"},"Setting Custom Request Headers"),(0,i.kt)("p",null,"The SAP Cloud SDK automatically sets some necessary request headers on every request.\nYou can specify additional custom headers using the ",(0,i.kt)("inlineCode",{parentName:"p"},"addCustomHeaders")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder().getAll().addCustomHeaders({\n  apikey: 'my-api-key'\n});\n")),(0,i.kt)("p",null,"The keys and values of the passed object correspond with the header names and values.\nCustom headers take priority over automatically generated headers.\nAutomatically generated headers are sent with lowercase header names, custom headers keep the case they were set in.\nIn the example above we pass an ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey"),", which is necessary if you want to make use of the SAP API Business Hub sandbox."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Setting an ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey")," header (regardless of lowercase or uppercase spelling) will skip any automatic authorization header building that the SAP Cloud SDK would normally do."))),(0,i.kt)("h3",{id:"setting-custom-query-parameters"},"Setting Custom Query Parameters"),(0,i.kt)("p",null,"The SAP Cloud SDK adds necessary query parameters for a request based on your configuration.\nYou can add custom parameters by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"withCustomQueryParameters")," function.\nCustom query parameters take precedence over those created by the SAP Cloud SDK."),(0,i.kt)("p",null,"In the example below an additional query parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"language=en")," will be added to the request URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder().getAll().withCustomQueryParameters({\n  language: 'en'\n});\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to set a query parameter in quotes (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"language='en'"),") you will have to provide the parameter with quotes, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"{ language: \"'en'\" }"),"."))),(0,i.kt)("h3",{id:"setting-a-custom-service-path"},"Setting a Custom Service Path"),(0,i.kt)("p",null,"If a service specification contains a specification for the ",(0,i.kt)("inlineCode",{parentName:"p"},"servicePath"),", the SAP Cloud SDK generator generates an OData client with a default service path according to the specification (typically ",(0,i.kt)("inlineCode",{parentName:"p"},"'/sap/opus/data/sap/'")," for SAP S/4HANA services).\nWhen there is no such path defined in the specification, it can be manually set in the ",(0,i.kt)("inlineCode",{parentName:"p"},"service-mapping.json"),".\nIt can also be adjusted per request by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"withCustomServicePath")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getAll()\n  .withCustomServicePath('my/custom/service/path');\n")),(0,i.kt)("p",null,"This will add the custom service path to your request.\nExecuting the example request above against a destination with URL ",(0,i.kt)("inlineCode",{parentName:"p"},"https://my.s4-system.com")," would result in a request against something like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://my.s4-system.com/my/custom/service/path/MyEntity"),"."),(0,i.kt)("h3",{id:"setting-a-custom-request-configuration"},"Setting a Custom Request Configuration"),(0,i.kt)(u.Ol,{mdxType:"CustomRequestConfig"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getAll()\n  .addCustomRequestConfiguration({ responseType: 'arraybuffer' });\n")),(0,i.kt)(u.nc,{mdxType:"CustomRequestConfigNote"}),(0,i.kt)("h3",{id:"appending-paths-to-the-request-url-built-by-the-request-builders"},"Appending Paths to the Request URL Built by the Request Builders"),(0,i.kt)("p",null,"Usually, our request builders construct the request URL for you automatically.\nHowever, for certain OData features like ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation properties"),", we do not yet provide a type-safe API that constructs the request path in a fully automated manner.\nFor that reason, we added a non-typed API to our request builders providing the capability to append additional path segments to the request URL.\nYou have to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeRaw(destination)")," method to get results because we can't deserialize a response in a type-safe way."),(0,i.kt)("p",null,"The example below shows how to query a navigation property from a given entity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getByKey('123')\n  .appendPath(\n    '/to_SingleValueNavigationProperty1',\n    '/to_SingleValueNavigationProperty2'\n  )\n  .executeRaw(destination);\n")),(0,i.kt)("p",null,"It will build the request URL like below:\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://my.s4-system.com/service-path/MyEntity(key='123')/to_SingleValueNavigationProperty1/to_SingleValueNavigationProperty2?$format=json"),"\nwhere:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/to_SingleValueNavigationProperty1/to_SingleValueNavigationProperty2")," is the additional path that you provide from the parameters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://my.s4-system.com/service-path/MyEntity(key='123')")," is the path of the original request URL built by the SAP Cloud SDK."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$format=json")," is the query parameter.")),(0,i.kt)("h3",{id:"getting-the-raw-response-and-the-original-request"},"Getting the Raw Response and the Original Request"),(0,i.kt)(u.WD,{mdxType:"ExecuteRawOverview"}),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const httpResponse: HttpResponse = MyEntity.requestBuilder()\n  .getAll()\n  .executeRaw(destination);\n")),(0,i.kt)(u.zl,{mdxType:"ExecuteRawUseCases"}),(0,i.kt)("ul",{style:{"margin-top":"-16px"}},(0,i.kt)("li",null,"In rare cases, when the response data cannot be deserialized. This can happen when function imports use an entity type as return type, and this entity type is shared by multiple ",(0,i.kt)("code",null,"EntitySet"),"s. Without further information, it is unclear which ",(0,i.kt)("code",null,"Entity")," should be deserialized. For those cases, you have to use ",(0,i.kt)("code",null,"executeRaw")," and use the ",(0,i.kt)("code",null,"deserialize")," function on the response data.")),(0,i.kt)(l.Z,{mdxType:"DocsRating"}))}v.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);