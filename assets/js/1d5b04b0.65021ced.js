(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5404],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,k=u["".concat(l,".").concat(f)]||u[f]||p[f]||r;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return i}});var o=n(2263),a=n(3919);function r(){var e=(0,o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var r=void 0===o?{}:o,i=r.forcePrependBaseUrl,s=void 0!==i&&i,l=r.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},9825:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i=n(4996),s={title:"Use the Pregenerated Workflow API Client for Cloud Foundry",sidebar_label:"SAP Workflow API for Cloud Foundry",description:"This article describes what the Workflow API for Cloud Foundry is and how to consume it with the SAP Cloud SDK.",keywords:["sap","cloud","sdk","OpenAPI","REST","JavaScript","TypeScript"]},l={unversionedId:"js/features/openapi/pregenerated-clients/workflow",id:"js/features/openapi/pregenerated-clients/workflow",isDocsHomePage:!1,title:"Use the Pregenerated Workflow API Client for Cloud Foundry",description:"This article describes what the Workflow API for Cloud Foundry is and how to consume it with the SAP Cloud SDK.",source:"@site/docs/js/features/openapi/pregenerated-clients/workflow.mdx",sourceDirName:"js/features/openapi/pregenerated-clients",slug:"/js/features/openapi/pregenerated-clients/workflow",permalink:"/cloud-sdk/docs/js/features/openapi/pregenerated-clients/workflow",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/openapi/pregenerated-clients/workflow.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1622531859,formattedLastUpdatedAt:"6/1/2021",sidebar_label:"SAP Workflow API for Cloud Foundry",frontMatter:{title:"Use the Pregenerated Workflow API Client for Cloud Foundry",sidebar_label:"SAP Workflow API for Cloud Foundry",description:"This article describes what the Workflow API for Cloud Foundry is and how to consume it with the SAP Cloud SDK.",keywords:["sap","cloud","sdk","OpenAPI","REST","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"Execute a Request Using a Generated OpenAPI Client",permalink:"/cloud-sdk/docs/js/features/openapi/execute-openapi-request"},next:{title:"What is the SAP Cloud SDK CLI?",permalink:"/cloud-sdk/docs/js/features/cli/overview"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Use the Client",id:"use-the-client",children:[{value:"Start a Workflow",id:"start-a-workflow",children:[]},{value:"Retrieve Tasks of a Workflow Instance",id:"retrieve-tasks-of-a-workflow-instance",children:[]},{value:"Update the Status and Context of a Task",id:"update-the-status-and-context-of-a-task",children:[]},{value:"Retrieve Execution Logs",id:"retrieve-execution-logs",children:[]}]}],d={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/product/WORKFLOW_SERVICE/Cloud/en-US"},"SAP Workflow service")," allows you to automate business processes across organizations and applications on SAP Business Technology Platform, both Cloud Foundry and Neo environment.\nIt is technically separated into two services per environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inbox API (OData)"),(0,r.kt)("li",{parentName:"ul"},"Workflow API (OpenAPI)")),(0,r.kt)("p",null,"The Inbox API is mainly meant to build a personal inbox, while the Workflow API helps to manage workflows and tasks across recipients."),(0,r.kt)("p",null,"The first SAP Cloud SDK pregenerated OpenAPI client is for the Workflow API.\nThere is no pregenerated client for the Inbox API, yet.\nThe remainder of this document refers to the OpenAPI Workflow API for Cloud Foundry only."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The following documentation explains how to use the pregenerated client for:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"An existing instance of the SAP Workflow service"),(0,r.kt)("li",{parentName:"ul"},"A user, who has the necessary roles to make the requests"),(0,r.kt)("li",{parentName:"ul"},"An existing workflow definition that contains one simple user task")),(0,r.kt)("p",{parentName:"div"},"To learn how to set up your environment for the SAP Workflow service, see the ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/fc3d44872c354742afd672aa8d9c16b4.html"},"Workflow service documentation"),"."))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The client for the Workflow API is available as an npm package.\nTo install it, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install @sap/cloud-sdk-workflow-service-cf\n")),(0,r.kt)("h2",{id:"use-the-client"},"Use the Client"),(0,r.kt)("p",null,"For this example, assume the following workflow definition:"),(0,r.kt)("img",{src:(0,i.Z)("img/workflow-definition.png"),style:{width:"50%"}}),(0,r.kt)("p",null,"It contains one task definition to approve a request through a form with one boolean field, ",(0,r.kt)("inlineCode",{parentName:"p"},"approve"),".\nThe use case shows how to initiate a workflow, retrieve its tasks, complete a task, and retrieve the execution logs."),(0,r.kt)("h3",{id:"start-a-workflow"},"Start a Workflow"),(0,r.kt)("p",null,"First, import the ",(0,r.kt)("inlineCode",{parentName:"p"},"WorkflowInstancesApi")," from the Workflow API client.\nThis API includes functionality to manage workflow instances.\nIt allows you to start an instance of a workflow for an existing definition.\nUse the ",(0,r.kt)("inlineCode",{parentName:"p"},"startInstance")," function to build a request to start a workflow instance for the definition with the ID ",(0,r.kt)("inlineCode",{parentName:"p"},"'myWorkflowDefinitionId'")," and execute it against a ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"destination"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { WorkflowDefinitionsApi } from '@sap/cloud-sdk-workflow-service-cf';\n\nfunction startWorkflow(): Promise<WorkflowInstance> {\n  return WorkflowInstancesApi.startInstance({\n    definitionId: 'myWorkflowDefinitionId'\n  }).execute(destination);\n}\n")),(0,r.kt)("p",null,"The returned workflow instance looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "<workflowInstanceId>",\n  "definitionId": "myworkflow",\n  "definitionVersion": "2",\n  "subject": "MyWorkflow",\n  "status": "RUNNING",\n  "businessKey": "",\n  "parentInstanceId": null,\n  "rootInstanceId": "<workflowInstanceId>",\n  "applicationScope": "own",\n  "startedAt": "2021-05-28T07:54:14.492Z",\n  "startedBy": "<serviceClientId>",\n  "completedAt": null\n}\n')),(0,r.kt)("p",null,"It contains information on the started workflow, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", the ID of the instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"defintionId"),", the ID of the definition, and ",(0,r.kt)("inlineCode",{parentName:"p"},"status"),", which in this case is ",(0,r.kt)("inlineCode",{parentName:"p"},"'RUNNING'"),"."),(0,r.kt)("h3",{id:"retrieve-tasks-of-a-workflow-instance"},"Retrieve Tasks of a Workflow Instance"),(0,r.kt)("p",null,"To get the tasks that are part of an instance, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserTaskInstancesApi"),".\nIt includes functionality around managing user tasks.\nTo retrieve the tasks of a workflow, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"queryInstances")," function and pass the workflow instance ID as query parameter to filter the tasks by your workflow instance.\nExecute the request against a destination:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { UserTaskInstancesApi } from '@sap/cloud-sdk-workflow-service-cf';\n\nasync function getTask(\n  workflowInstance: WorkflowInstance\n): Promise<TaskInstance> {\n  const [taskInstance] = await UserTaskInstancesApi.queryInstances({\n    workflowInstanceId: workflowInstance.id\n  }).execute(destination);\n\n  return taskInstance;\n}\n")),(0,r.kt)("p",null,"The function above returns an instance of a task, that looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "activityId": "usertask1",\n  "claimedAt": null,\n  "completedAt": null,\n  "createdAt": "2021-05-28T07:54:14.748Z",\n  "description": null,\n  "id": "<userTaskInstanceId>",\n  "processor": null,\n  "recipientUsers": ["<userId>"],\n  "recipientGroups": [],\n  "status": "READY",\n  "subject": "Approve a request",\n  "workflowDefinitionId": "myworkflow",\n  "workflowInstanceId": "<workflowInstanceId>",\n  "priority": "MEDIUM",\n  "dueDate": null,\n  "createdBy": "<serviceClientId>",\n  "definitionId": "usertask1@myworkflow",\n  "lastChangedAt": "2021-05-28T07:54:14.748Z",\n  "applicationScope": "own"\n}\n')),(0,r.kt)("p",null,"This is an object with data on the task.\nIt has properties like the ID of the instance and definition (",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"definitionId"),"), the ",(0,r.kt)("inlineCode",{parentName:"p"},"status"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"priority"),", and so on."),(0,r.kt)("h3",{id:"update-the-status-and-context-of-a-task"},"Update the Status and Context of a Task"),(0,r.kt)("p",null,"To update a task, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateInstance")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserTaskInstancesApi"),".\nPass the mandatory instance ID as first parameter.\nThe second parameter is the body to be sent with the update.\nIs has the type ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateTaskInstancePayload")," and allows you to pass the parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"status"),", among others.\nIn this example the task requires to give (or not to give) an approval.\nThe form to execute this task has one boolean field, ",(0,r.kt)("inlineCode",{parentName:"p"},"approve"),":"),(0,r.kt)("img",{src:(0,i.Z)("img/workflow-task-form.png"),style:{width:"50%"}}),(0,r.kt)("p",null,"It is defined to point to the context path ",(0,r.kt)("inlineCode",{parentName:"p"},"${context.approve}"),".\nTherefore, you can set it on the context in the request body as in the example below.\nTo complete the action, you can also set the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"'COMPLETED'"),".\nAs in this example, this is the only task, it will also complete the workflow.\nExecute the request against a destination:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { UserTaskInstancesApi } from '@sap/cloud-sdk-workflow-service-cf';\n\nfunction updateTask(taskInstance: TaskInstance): Promise<void> {\n  return UserTaskInstancesApi.updateInstance(taskInstance.id, {\n    context: {\n      approve: true\n    },\n    status: 'COMPLETED'\n  }).execute(destination);\n}\n")),(0,r.kt)("h3",{id:"retrieve-execution-logs"},"Retrieve Execution Logs"),(0,r.kt)("p",null,"Every workflow tracks information on the events that occurred throughout its execution.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"WorkflowInstanceApi")," provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"queryInstanceExecutionLogs")," function to retrieve the current logs for a workflow.\nPass the ID of the workflow to this function and execute it against a destination to retrieve the logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { WorkflowInstancesApi } from '@sap/cloud-sdk-workflow-service-cf';\n\nfunction getLogs(\n  workflowInstance: WorkflowInstance\n): Promise<WorkflowInstanceExecutionLog[]> {\n  return WorkflowInstancesApi.queryInstanceExecutionLogs(\n    workflowInstance.id\n  ).execute(destination);\n}\n")),(0,r.kt)("p",null,"The returned logs for this exemplary use case would look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "48",\n    "type": "WORKFLOW_STARTED",\n    "timestamp": "2021-05-28T07:54:14.501Z",\n    "referenceInstanceId": "<workflowInstanceId>",\n    "userId": "<serviceClientId>"\n  },\n  {\n    "id": "49",\n    "type": "USERTASK_CREATED",\n    "timestamp": "2021-05-28T07:54:14.769Z",\n    "referenceInstanceId": "dd25391e-e426-49bf-bfbc-2e58d33fb4a8",\n    "activityId": "usertask1",\n    "subject": "Approve a request",\n    "recipientUsers": ["<userId>"],\n    "recipientGroups": [],\n    "initiatorId": "<serviceClientId>",\n    "taskId": "<userTaskInstanceId>"\n  },\n  {\n    "id": "50",\n    "type": "USERTASK_COMPLETED",\n    "timestamp": "2021-05-28T07:54:16.407Z",\n    "referenceInstanceId": "dd25391e-e426-49bf-bfbc-2e58d33fb4a8",\n    "activityId": "usertask1",\n    "userId": "<serviceClientId>",\n    "subject": "Approve a request",\n    "taskId": "<userTaskInstanceId>"\n  }\n]\n')),(0,r.kt)("p",null,"The three items represented here are the initiation of the workflow, the creation of the task, and the completion of the task."))}p.isMDXComponent=!0}}]);