(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7542],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return o}});var a=n(2263),i=n(3919);function r(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,l=void 0!==o&&o,s=r.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+d:d}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},1566:function(e,t,n){"use strict";n(412);var a=n(7294);t.Z=function(e){e.label;var t=(0,a.useState)(!1),n=t[0],i=t[1],r=function(e){swa&&swa.hasOwnProperty("trackCustomEvent")&&swa.trackCustomEvent("collectFeedback",e),i(!0)};return a.createElement("div",{className:"docsRating"},n?"Thanks for giving feedback!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_positive",alt:"Like",onClick:function(){return r(1)},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 81.13 89.76"},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_negative",alt:"Dislike",onClick:function(){return r(0)},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 81.13 89.76"},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"}))))}},7249:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=(n(4996),n(1566)),l=["components"],s={title:"Use the OpenAPI Generator to Generate Typed Clients",sidebar_label:"Generate an OpenAPI Client",description:"How to generate a client from a service definition.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]},p=void 0,d={unversionedId:"js/features/openapi/generate-openapi-client",id:"js/features/openapi/generate-openapi-client",isDocsHomePage:!1,title:"Use the OpenAPI Generator to Generate Typed Clients",description:"How to generate a client from a service definition.",source:"@site/docs/js/features/openapi/generate-openapi-client.mdx",sourceDirName:"js/features/openapi",slug:"/js/features/openapi/generate-openapi-client",permalink:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/openapi/generate-openapi-client.mdx",version:"current",lastUpdatedBy:"Johannes Schneider",lastUpdatedAt:1624620672,formattedLastUpdatedAt:"6/25/2021",frontMatter:{title:"Use the OpenAPI Generator to Generate Typed Clients",sidebar_label:"Generate an OpenAPI Client",description:"How to generate a client from a service definition.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/js/features/openapi/overview"},next:{title:"Execute an OpenAPI Request",permalink:"/cloud-sdk/docs/js/features/openapi/execute-openapi-request"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Generate a Client Using the Command Line Interface",id:"generate-a-client-using-the-command-line-interface",children:[]},{value:"Options",id:"options",children:[]},{value:"Configuration File Schema",id:"configuration-file-schema",children:[]},{value:"Generate a Client Programmatically",id:"generate-a-client-programmatically",children:[]},{value:"How the API Code is Generated",id:"how-the-api-code-is-generated",children:[{value:"APIs",id:"apis",children:[]},{value:"Operations",id:"operations",children:[]},{value:"Configure Generated Client Structure and Naming",id:"configure-generated-client-structure-and-naming",children:[]}]}],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"REST is a common pattern to define APIs of services.\nMany SAP systems like SAP S/4HANA, SAP Concur and SAP Business Technology Platform provide their services through REST APIs.\nA common way to specify these services are ",(0,r.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI specifications"),".\nWith the SAP Cloud SDK, you can generate typed clients for those specifications."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There is an upcoming community call on using the OpenAPI client generator of the SAP Cloud SDK for JS on June 23rd 2020.\nConsider ",(0,r.kt)("a",{parentName:"p",href:"https://sap-se.zoom.us/webinar/register/WN_dBtYmF5IR7Gb8TMjHqEvhw"},"registering")," to get a hands on demo on this topic."))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Run this command to install the OpenAPI generator globally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g @sap-cloud-sdk/openapi-generator\n")),(0,r.kt)("h2",{id:"generate-a-client-using-the-command-line-interface"},"Generate a Client Using the Command Line Interface"),(0,r.kt)("p",null,"The SAP Cloud SDK generator is primarily intended to be used on the command line.\nYou can generate an OpenAPI client by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"openapi-generator --input <input> --outputDir <outputDirectory>\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>")," points to your specification file or a directory containing the specification(s) and ",(0,r.kt)("inlineCode",{parentName:"p"},"<outputDirectory>")," to the target folder where the generated client(s) will be saved."),(0,r.kt)("p",null,"By default, the generated clients will each contain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API files as ",(0,r.kt)("inlineCode",{parentName:"li"},".ts"),' files - one for each "API" in the service.\nSee ',(0,r.kt)("a",{parentName:"li",href:"#how-the-api-code-is-generated"},"details"),"."),(0,r.kt)("li",{parentName:"ul"},"A schema directory, containing schema files (",(0,r.kt)("inlineCode",{parentName:"li"},".ts"),"), one for each schema defined in the service specification."),(0,r.kt)("li",{parentName:"ul"},"All of the above as transpiled sources, including JavaScript sources (",(0,r.kt)("inlineCode",{parentName:"li"},".js"),"), type definition files (",(0,r.kt)("inlineCode",{parentName:"li"},".d.ts"),") and sourcemap files (",(0,r.kt)("inlineCode",{parentName:"li"},".js.map")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".d.ts.map"),")."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),".")),(0,r.kt)("p",null,"The generation always includes the TypeScript sources.\nAll other files can be excluded from the generation - see the options below."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"openapi-generator --help")," for additional options."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Options ",(0,r.kt)("div",{style:{width:"225px"}})),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-i"),",",(0,r.kt)("inlineCode",{parentName:"td"},"--input")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify the path to the directory or file containing the OpenAPI service definition(s) to generate clients for. Accepts Swagger and OpenAPI definitions as YAML and JSON files. Throws an error if the path does not exist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-o"),",",(0,r.kt)("inlineCode",{parentName:"td"},"--outputDir")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify the path to the directory to generate the client(s) in. Each client is generated into a subdirectory within the given output directory. Creates the directory if it does not exist. Customize subdirectory naming through ",(0,r.kt)("inlineCode",{parentName:"td"},"--optionsPerService"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-t"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--transpile"),","),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transpile the generated TypeScript code. When enabled a default ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," will be generated and used. It emits ",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".js.map"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".d.ts")," and ",(0,r.kt)("inlineCode",{parentName:"td"},".d.ts.map")," files. To configure transpilation set ",(0,r.kt)("inlineCode",{parentName:"td"},"--tsconfig"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--clearOutputDir")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Remove all files in the output directory before generation. Be cautious when using this option, as it really removes EVERYTHING in the output directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--include")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Include files matching the given glob into the root of each generated client directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--optionsPerService")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the path to a file containing the options per service. The configuration allows to set a ",(0,r.kt)("inlineCode",{parentName:"td"},"directoryName")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"packageName")," for every service, identified by the path to the original file. It also makes sure that names do not change between generator runs. If a directory is passed, a ",(0,r.kt)("inlineCode",{parentName:"td"},"options-per-service.json")," file is read/created in this directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--overwrite")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allow overwriting files, that already exist. This is useful, when running the generation regularly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--packageJson")),(0,r.kt)("td",{parentName:"tr",align:"left"},"When enabled, a ",(0,r.kt)("inlineCode",{parentName:"td"},"package.json"),", that specifies dependencies and scripts for transpilation and documentation generation is generated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--skipValidation")),(0,r.kt)("td",{parentName:"tr",align:"left"},"By default, the generation fails, when there are duplicate or invalid names for operations and/or path parameters after transforming them to camel case. Set this to true to enable unique and valid name generation. The names will then be generated by appending numbers and prepending prefixes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--tsConfig")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Replace the default ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," by passing a path to a custom configuration. By default, a ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," is only generated, when transpilation is enabled (",(0,r.kt)("inlineCode",{parentName:"td"},"--transpile"),"). If a directory is passed, a ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file is read from this directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Turn on verbose logging.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-c"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--config")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the path to the file containing the options for generation. If other flags are used, they overwrite the options set in the configuration file. If a directory is passed, a ",(0,r.kt)("inlineCode",{parentName:"td"},"config.json")," file is read from this directory.")))),(0,r.kt)("h2",{id:"configuration-file-schema"},"Configuration File Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n  input: string;\n  outputDir: string;\n  transpile?: boolean;\n  include?: string;\n  clearOutputDir?: boolean;\n  skipValidation?: boolean;\n  tsConfig?: string;\n  packageJson?: boolean;\n  optionsPerService?: string;\n  packageVersion?: string;\n  readme?: boolean;\n  metadata?: boolean;\n  verbose?: boolean;\n  overwrite?: boolean;\n }\n")),(0,r.kt)("h2",{id:"generate-a-client-programmatically"},"Generate a Client Programmatically"),(0,r.kt)("p",null,"The generator can also be executed programmatically in JavaScript or TypeScript code.\nAdd the ",(0,r.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/openapi-generator")," package to your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm i @sap-cloud-sdk/openapi-generator\n")),(0,r.kt)("p",null,"This package exports the ",(0,r.kt)("inlineCode",{parentName:"p"},"generate")," function.\nIt takes the same options as the command-line tool and generates the same files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { generate } from '@sap-cloud-sdk/openapi-generator'\n\nconst generatorOptions = {\n  inputDir: 'directoryWithOpenApiFiles';\n  outputDir: 'myOutputDirectory';\n}\n\nawait generate(generatorOptions);\n")),(0,r.kt)("h2",{id:"how-the-api-code-is-generated"},"How the API Code is Generated"),(0,r.kt)("p",null,"By default, the generator produces one service directory for every OpenAPI specification.\nThe directory name is based on the file name of the specification and is transformed to kebab case, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"my-service"),"."),(0,r.kt)("h3",{id:"apis"},"APIs"),(0,r.kt)("p",null,'All operations of the service are grouped into APIs based on their tags.\nA service can consist of multiple APIs.\nIf multiple tags are specified for an operation, only the first one is considered.\nIf no tags are specified, "default" is used.'),(0,r.kt)("p",null,"The API names are transformed by appending \"Api\" and transforming them to pascal case, e.g. 'my-tag' results in ",(0,r.kt)("inlineCode",{parentName:"p"},"MyTagApi"),'.\nIn case the tag already ends with "api" (case independent), one "Api" will be removed, e.g. ',(0,r.kt)("inlineCode",{parentName:"p"},"myapi")," results in ",(0,r.kt)("inlineCode",{parentName:"p"},"MyApi"),'.\nIf your tags end with "api", but this is part of the word, e.g. "okapi", we recommend the OpenAPI vendor extensions and provide an explicit API name ending with "Api", e.g. "OkapiApi".\nNote, that operations are grouped into APIs based on their transformed names, not the original names.\nTherefore, tags like "my-tag" and "MyTag" are treated as the same API, "MyTagApi".'),(0,r.kt)("h3",{id:"operations"},"Operations"),(0,r.kt)("p",null,"Every operation in the specification is reflected as a function of a generated API.\nThe function names are based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"operationId")," property in the specification of the operation.\nIf no ",(0,r.kt)("inlineCode",{parentName:"p"},"operationId")," is given, the name is derived from the method and the path pattern, examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'resource'")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"post")," would result in ",(0,r.kt)("inlineCode",{parentName:"li"},"createResource")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'resource/{id}'")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"get")," would result in ",(0,r.kt)("inlineCode",{parentName:"li"},"getResourceById"))),(0,r.kt)("p",null,"The function names are transformed to camel case, e.g. 'myFunction'.\nDuplicates within an API are handled by adding an index at the end of the name.\nIn cases where we have duplicate names, but one of the names is in camel case, this name remains as is.\nExample:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Original ",(0,r.kt)("inlineCode",{parentName:"th"},"operationId"),"s"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Generated function names"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"my-function")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"myFunction2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"myFunction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"myFunction"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"other_function")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"otherFunction"))))),(0,r.kt)("h3",{id:"configure-generated-client-structure-and-naming"},"Configure Generated Client Structure and Naming"),(0,r.kt)("p",null,"In case you need more flexibility when generating clients, you can use the SAP Cloud SDK's vendor extensions for OpenAPI.\nWe provide two extensions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#x-sap-cloud-sdk-api-name"},(0,r.kt)("inlineCode",{parentName:"a"},"x-sap-cloud-sdk-api-name"))," to configure the structure and naming of the generated APIs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#x-sap-cloud-sdk-operation-name"},(0,r.kt)("inlineCode",{parentName:"a"},"x-sap-cloud-sdk-operation-name"))," to configure the generated function names.")),(0,r.kt)("p",null,"You can set those on different levels of the specification.\nThey take precedence before the default behavior."),(0,r.kt)("h4",{id:"x-sap-cloud-sdk-api-name"},(0,r.kt)("inlineCode",{parentName:"h4"},"x-sap-cloud-sdk-api-name")),(0,r.kt)("p",null,"Use this extension to configure the structure of your generated APIs.\nSetting ",(0,r.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-api-name"),' as a property determines which operations are grouped into one API.\nNote, that the name will be transformed to pascal case with an "Api" ending, same as in the default behavior, e.g. "MyApi".\nWhen referring to the "API name", the transformed name is meant.'),(0,r.kt)("p",null,"This extension can be set on the following levels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Operations - Operations that have the same API name are grouped into one API."),(0,r.kt)("li",{parentName:"ul"},"On the path definitions - All operations below paths with the same API name are grouped into one API."),(0,r.kt)("li",{parentName:"ul"},"Root of the specification - All operations in the specification belong to the specified API.\nYou can think of this as the custom default name for an API.")),(0,r.kt)("p",null,"This extension can be set on all these levels in the same document.\nIn these cases the most specific use of the extension takes precedence."),(0,r.kt)("h4",{id:"x-sap-cloud-sdk-operation-name"},(0,r.kt)("inlineCode",{parentName:"h4"},"x-sap-cloud-sdk-operation-name")),(0,r.kt)("p",null,"Use this extension to overwrite the default names for the generated functions.\nAs of the OpenAPI specification, this is the intent of the ",(0,r.kt)("inlineCode",{parentName:"p"},"operationId")," field.\nHowever, the value of this property has to be unique throughout a specification file.\nMany OpenAPI validators fail if there are duplicate ",(0,r.kt)("inlineCode",{parentName:"p"},"operationId"),"s.\nWith the approach of the SAP Cloud SDK OpenAPI generator this restriction might make the resulting clients more complicated than necessary.\nGiven that you have multiple APIs, it can make sense to have the same function names in different APIs, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"MyResource1Api.getAll()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MyResource2Api.getAll()"),".\nThe purpose of the ",(0,r.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-operation-name")," is to allow using duplicate names across APIs, while complying with the OpenAPI specification."),(0,r.kt)(o.Z,{mdxType:"DocsRating"}))}u.isMDXComponent=!0}}]);