(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(205)),c={title:"Generate an OData client for JavaScript",sidebar_label:"Generate an OData Client",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","generate"]},o={unversionedId:"js/features/odata/generate-odata-client",id:"js/features/odata/generate-odata-client",isDocsHomePage:!1,title:"Generate an OData client for JavaScript",description:"Generate a Typed OData Client With the SAP Cloud SDK Generator",source:"@site/docs/js/features/odata/generate-odata-client.mdx",slug:"/js/features/odata/generate-odata-client",permalink:"/cloud-sdk/docs/js/features/odata/generate-odata-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/generate-odata-client.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1614131255,sidebar_label:"Generate an OData Client",sidebar:"someSidebar",previous:{title:"OData",permalink:"/cloud-sdk/docs/js/features/odata/overview"},next:{title:"Executing a Request Using a Generated OData v2/v4 Client",permalink:"/cloud-sdk/docs/js/features/odata/execute-odata-request"}},l=[{value:"Generate a Typed OData Client With the SAP Cloud SDK Generator",id:"generate-a-typed-odata-client-with-the-sap-cloud-sdk-generator",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Using the OData Generator",id:"using-the-odata-generator",children:[{value:"Using the Command Line Interface",id:"using-the-command-line-interface",children:[]},{value:"Invoke the Generator Programmatically",id:"invoke-the-generator-programmatically",children:[]}]}],b={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"generate-a-typed-odata-client-with-the-sap-cloud-sdk-generator"},"Generate a Typed OData Client With the SAP Cloud SDK Generator"),Object(i.b)("p",null,"The generator allows you to generate custom OData client libraries for OData services.\nYou can then easily access these services via the client libraries."),Object(i.b)("p",null,"The SAP Cloud SDK generator can both be used as a command-line interface (CLI) and programmatically."),Object(i.b)("p",null,"All you need to use it is a service metadata specification in the ",Object(i.b)("inlineCode",{parentName:"p"},"EDMX")," format (file ending can be ",Object(i.b)("inlineCode",{parentName:"p"},".edmx")," or ",Object(i.b)("inlineCode",{parentName:"p"},".xml"),")."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Run this command in your project's terminal to install the generator globally."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install -g @sap-cloud-sdk/generator\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The generator is included in the SAP Cloud SDK CLI.\nIf you installed the CLI, you don't need to install the generator separately."))),Object(i.b)("h2",{id:"using-the-odata-generator"},"Using the OData Generator"),Object(i.b)("h3",{id:"using-the-command-line-interface"},"Using the Command Line Interface"),Object(i.b)("p",null,"The SAP Cloud SDK generator is primarily intended to be used on the command line."),Object(i.b)("p",null,"Run"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"generate-odata-client --inputDir path/to/your/service-specifications --outputDir path/to/store/generated/modules\n")),Object(i.b)("p",null,"Adapt the ",Object(i.b)("inlineCode",{parentName:"p"},"path/to/your/service-specifications")," to the directory containing your service specifications in ",Object(i.b)("inlineCode",{parentName:"p"},"EDMX")," format, for example ",Object(i.b)("inlineCode",{parentName:"p"},"service-specifications/"),".\nAlso adapt ",Object(i.b)("inlineCode",{parentName:"p"},"path/to/store/generated/modules")," to your OData client directory for example ",Object(i.b)("inlineCode",{parentName:"p"},"odata-client"),"."),Object(i.b)("p",null,"This will generate OData clients for all your service specifications and create a ",Object(i.b)("inlineCode",{parentName:"p"},"serviceMapping.json")," in your input directory.\nThis file is used for generation and contains a mapping from the original file name to the following information:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"directoryName")," - the name of the subdirectory the client code will be generated into."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"servicePath")," - the URL path to be prepended before every request.\nThis is read from the EDMX file if available, otherwise, the value here will be ",Object(i.b)("inlineCode",{parentName:"li"},"VALUE_IS_UNDEFINED"),". In that case, it should be adjusted manually."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"npmPackageName")," - the name of the npm package, if a ",Object(i.b)("inlineCode",{parentName:"li"},"package.json")," is generated.\nThis information is optional.")),Object(i.b)("p",null,"This information can be adjusted manually and ensure that every run of the generator produces the same names for the generation."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "MyService": {\n    "directoryName": "my-service",\n    "servicePath": "/odata/v2",\n    "npmPackageName": "my-service"\n  }\n}\n')),Object(i.b)("p",null,"By default, the generated module contains the following sources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"TypeScript code ",Object(i.b)("inlineCode",{parentName:"li"},".ts")),Object(i.b)("li",{parentName:"ul"},"Transpiled JavaScript code ",Object(i.b)("inlineCode",{parentName:"li"},".js")),Object(i.b)("li",{parentName:"ul"},"Type definition files ",Object(i.b)("inlineCode",{parentName:"li"},".d.ts")),Object(i.b)("li",{parentName:"ul"},"Source map files ",Object(i.b)("inlineCode",{parentName:"li"},".js.map")," and ",Object(i.b)("inlineCode",{parentName:"li"},".d.ts.map")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".npmrc")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"package.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"typedoc.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tsconfig.json"))),Object(i.b)("p",null,"Depending on which of those files you need, you can skip the generation of most of those - see the options below."),Object(i.b)("h4",{id:"options"},"Options"),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"generate-odata-client --help")," for further options."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Alias"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\xa0Default"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"inputDir")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"-i")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\xa0This directory will be recursively searched for ",Object(i.b)("inlineCode",{parentName:"td"},".edmx"),"/",Object(i.b)("inlineCode",{parentName:"td"},".xml")," files.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"outputDir")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"-o")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\xa0Directory to save the generated code in.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"serviceMapping")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"-s")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"<inputDir>/service-mapping.json")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\xa0Configuration file to ensure consistent names between multiple generation runs with updated / changed metadata files. Will be generated if not existent.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"forceOverwrite")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\xa0Exit when encountering a file that already exists. When set to true, it will be overwritten instead. Please note that compared to the --clearOutputDir option, this will not delete outdated files.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"clearOutputDir")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\xa0Deletes EVERYTHING in the specified output directory before generating code.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"generateNpmrc")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\xa0Generate a ",Object(i.b)("inlineCode",{parentName:"td"},".npmrc")," file specifying a registry for @sap scoped dependencies.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"generateTypedocJson")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\xa0Generates a ",Object(i.b)("inlineCode",{parentName:"td"},"typedoc.json"),' file for each package, used for the corresponding "doc" npm script.')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"generatePackageJson")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\xa0Generate a package.json file, specifying dependencies and scripts for compiling and generating documentation.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"versionInPackageJson")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"true?")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\xa0By default, when generating ",Object(i.b)("inlineCode",{parentName:"td"},"package.json")," file, the generator will set a version by using the generator version. It can also be set to a specific version.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"generateJs")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\xa0Generates transpiled ",Object(i.b)("inlineCode",{parentName:"td"},".js"),", ",Object(i.b)("inlineCode",{parentName:"td"},".js.map"),", ",Object(i.b)("inlineCode",{parentName:"td"},".d.ts")," and ",Object(i.b)("inlineCode",{parentName:"td"},".d.ts.map")," files. When set to false, the generator will only generate ",Object(i.b)("inlineCode",{parentName:"td"},".ts")," files.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"generateCSN")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\xa0A CSN file will be generated for each service definition in the output directory.")))),Object(i.b)("h3",{id:"invoke-the-generator-programmatically"},"Invoke the Generator Programmatically"),Object(i.b)("p",null,"You can also use the generator programmatically.\nYou will have to provide the options."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { generate } from '@sap-cloud-sdk/generator';\n\n// Create your options, adapt the input & output directory as well as the package name according to your setup.\nconst inputDir = 'service-specifications';\nconst outputDir = 'odata-client';\n\n// Create your project datastructure with all sourcefiles based on your options\nconst generatorConfig = {\n  forceOverwrite: true,\n  generateJs: false,\n  useSwagger: false,\n  writeReadme: false,\n  clearOutputDir: true,\n  generateNpmrc: false,\n  generateTypedocJson: false,\n  generatePackageJson: false,\n  generateCSN: false,\n  sdkAfterVersionScript: false,\n  s4hanaCloud: false\n  /* optional:\n    serviceMapping: 'test/directory',\n    changelogFile: 'test/directory',\n    aggregatorNpmPackageName: 'test',\n    aggregatorDirectoryName: 'test',\n    versionInPackageJson: 'version'\n  */\n};\n\n// generate your project, you can also redefine options\ngenerate({\n  ...generatorConfig,\n  inputDir,\n  outputDir\n});\n")))}d.isMDXComponent=!0},205:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,O=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return a?r.a.createElement(O,o(o({ref:t},b),{},{components:a})):r.a.createElement(O,o({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);