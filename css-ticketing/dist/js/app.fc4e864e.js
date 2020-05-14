(function(t){function e(e){for(var n,s,c=e[0],o=e[1],l=e[2],d=0,m=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,c=1;c<i.length;c++){var o=i[c];0!==r[o]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),r=i.n(n);r.a},"0b5a":function(t,e,i){},2393:function(t,e,i){},"3a26":function(t,e,i){"use strict";var n=i("5c13"),r=i.n(n);r.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Validation",{attrs:{errors:t.errors}}),i("h1",{attrs:{id:"title"}},[t._v("CSS ticketing app!")]),i("div",{attrs:{id:"button-container"}},[i("button",{staticClass:"btn btn-secondary btn-edit",on:{click:function(e){return t.tabSelected(1)}}},[t._v("Add Ticket")]),i("button",{staticClass:"btn btn-secondary btn-edit",on:{click:function(e){return t.tabSelected(2)}}},[t._v("Show Ticket")])]),1==t.currentTab?i("NewTicketForm",{on:{"ticket-added":t.ticketAdded,"test-name":t.validationData}}):t._e(),2==t.currentTab?i("TicketTable",{attrs:{tickets:t.tickets},on:{"delete-ticket":t.ticketDeleted}}):t._e()],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"input-form"}},[i("div",{staticClass:"card add-ticket m-2 p-2",attrs:{id:"form"}},[i("h4",{staticClass:"card-title"},[t._v("Add new Ticket")]),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"name"}},[t._v("Name")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.studentName,expression:"studentName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:t.studentName},on:{input:function(e){e.target.composing||(t.studentName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"email"}},[t._v("Email")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.studentEmail,expression:"studentEmail",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"email"},domProps:{value:t.studentEmail},on:{input:function(e){e.target.composing||(t.studentEmail=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"client-name"}},[t._v("Client Name")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientName,expression:"clientName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"client-name"},domProps:{value:t.clientName},on:{input:function(e){e.target.composing||(t.clientName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"client-email"}},[t._v("Client Email")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientEmail,expression:"clientEmail",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"client-email"},domProps:{value:t.clientEmail},on:{input:function(e){e.target.composing||(t.clientEmail=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"issue"}},[t._v("Problem Description")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.issues,expression:"issues",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"issue"},domProps:{value:t.issues},on:{input:function(e){e.target.composing||(t.issues=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"pc-model"}},[t._v("Model")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.model,expression:"model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"pc-model"},domProps:{value:t.model},on:{input:function(e){e.target.composing||(t.model=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),i("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.addTicket()}}},[t._v("Add")])])])},c=[],o={name:"NewTicketForm",data:function(){return{studentName:"",studentEmail:"",clientName:"",clientEmail:"",issues:"",model:"",errors:[]}},methods:{addTicket:function(){if(this.errors=[],this.studentName||this.errors.push("Enter name"),this.studentEmail||this.errors.push("Enter email"),this.clientName||this.errors.push("Enter client name "),this.clientEmail||this.errors.push("Enter client email"),this.issues||this.errors.push("Enter the issue"),this.model||this.errors.push("Enter the Model"),this.$emit("test-name",this.errors),0==this.errors.length){console.log("were in this place now");var t={name:this.studentName,email:this.studentEmail,clientName:this.clientName,clientEmail:this.clientEmail,issue:this.issues,model:this.model};this.$emit("ticket-added",t),this.studentName="",this.studentEmail="",this.clientName="",this.clientEmail="",this.issues="",this.model=""}}}},l=o,u=(i("3a26"),i("2877")),d=Object(u["a"])(l,s,c,!1,null,null,null),m=d.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"card ticket-list m-2 p-2",attrs:{id:"table-edit"}},[i("h4",{staticClass:"card-title"},[t._v("Tickets")]),i("div",{staticClass:"edit-table-toggle form-check"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.editTable,expression:"editTable"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"edit-table"},domProps:{checked:Array.isArray(t.editTable)?t._i(t.editTable,null)>-1:t.editTable},on:{change:function(e){var i=t.editTable,n=e.target,r=!!n.checked;if(Array.isArray(i)){var a=null,s=t._i(i,a);n.checked?s<0&&(t.editTable=i.concat([a])):s>-1&&(t.editTable=i.slice(0,s).concat(i.slice(s+1)))}else t.editTable=r}}}),i("label",{staticClass:"form-check-label",attrs:{for:"edit-table"}},[t._v("Edit table?")])]),i("div",{attrs:{id:"ticket-table"}},[i("table",{staticClass:"table"},[i("tr",[i("th",[t._v("Name")]),i("th",[t._v("Email")]),i("th",[t._v("Client Name")]),i("th",[t._v("Client Email")]),i("th",[t._v("Issue")]),i("th",[t._v("Model")]),i("th",{directives:[{name:"show",rawName:"v-show",value:t.editTable,expression:"editTable"}]},[t._v("Delete")])]),t._l(t.tickets,(function(e){return i("TicketRow",{key:e.id,attrs:{ticket:e,edit:t.editTable},on:{"delete-ticket":t.ticketDeleted}})}))],2)])])])},p=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v(t._s(t.ticket.name))]),n("td",[t._v(t._s(t.ticket.email))]),n("td",[t._v(t._s(t.ticket.clientName))]),n("td",[t._v(t._s(t.ticket.clientEmail))]),n("td",[t._v(t._s(t.ticket.issue))]),n("td",[t._v(t._s(t.ticket.model))]),n("td",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}]},[n("img",{staticClass:"delete-icon",attrs:{src:i("ed3a")},on:{click:function(e){return t.deleteTicket(t.ticket)}}})])])},h=[],b=(i("b0c0"),{name:"TicketRow",props:{ticket:Object,edit:Boolean},methods:{deleteTicket:function(t){confirm("Delete ".concat(t.name,"?"))&&this.$emit("delete-ticket",t)}}}),k=b,A=(i("e36f"),Object(u["a"])(k,v,h,!1,null,null,null)),g=A.exports,T={name:"TicketTable",components:{TicketRow:g},data:function(){return{editTable:!1}},props:{tickets:Array},methods:{ticketDeleted:function(t){this.$emit("delete-ticket",t)}}},w=T,_=(i("a9cc"),Object(u["a"])(w,f,p,!1,null,"5a45a553",null)),C=_.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.length>0,expression:"errors.length > 0"}],staticClass:"alert alert-danger"},t._l(t.errors,(function(e){return i("li",{key:e.id},[t._v(t._s(e))])})),0)])},E=[],N={name:"Validation",props:{errors:Array}},x=N,M=Object(u["a"])(x,y,E,!1,null,null,null),j=M.exports,O={name:"App",components:{NewTicketForm:m,TicketTable:C,Validation:j},data:function(){return{tickets:[],currentTab:1,errors:[]}},mounted:function(){this.updateTickets()},methods:{ticketAdded:function(t){var e=this;this.$ticket_api.addTicket(t).then((function(t){e.updateTickets()}))},ticketDeleted:function(t){var e=this;this.$ticket_api.deleteTicket(t).then((function(){e.updateTickets()}))},updateTickets:function(){var t=this;this.$ticket_api.getAllTickets().then((function(e){t.tickets=e}))},tabSelected:function(t){this.currentTab=t},validationData:function(t){this.errors=t}}},S=O,U=(i("034f"),Object(u["a"])(S,r,a,!1,null,null,null)),I=U.exports,P=i("5f5b"),D=i("bc3a"),F=i.n(D),G="api/tickets",Q={getAllTickets:function(){return F.a.get(G).then((function(t){return t.data}))},addTicket:function(t){return F.a.post(G,t).then((function(t){return t.data}))},deleteTicket:function(t){return F.a.delete("".concat(G,"/").concat(t.id)).then((function(t){return t.data}))}};i("f9e3"),i("2dd8");n["default"].use(P["a"]),n["default"].prototype.$ticket_api=Q,n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(I)}}).$mount("#app")},"5c13":function(t,e,i){},"85ec":function(t,e,i){},a9cc:function(t,e,i){"use strict";var n=i("0b5a"),r=i.n(n);r.a},e36f:function(t,e,i){"use strict";var n=i("2393"),r=i.n(n);r.a},ed3a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM2SURBVGhD7ZnLbtNAFIYjbgt23FbAC7BCSmYIUqWIcalYsCTitoMtrItgwQKJdE0rlcsjoCJVFCQeAygPAJQNAVTiJCqgZjhneiyF5Iztie1JkfxLnxTLM+f8x554xuNKqVKlsks3m3t7s7LeVfIusNINxAfgRxjI3wj+7gZy3ZyDNthW36/soe7TU3+udhIMLoRKfAGD2oUwEBvYt9eQJyicP3Ua1aOhkk+BX5w5FzAGFLKMMSl8sYIrd62rxHfOTEbaGJvS5C/dPHUArtQzJnGuQBGPdbW6n9LmI32xehDMv+YSFgEU8QpzUvpsoivvzXwEFLGay53wMWxs4HAiG5MJAlznAvskDGqXyY6bOhdOH4NJ5xsX1DPtn4E4QrbSC28fE2xKiCWylU5mhnWZpM7Xdf/2Tf4cg2kLfbhzHOilp+rHyV6y4I+7wAViASN/3qxpvb2ttx7c49sMgW2wLfZxLKJF9uKFiywYPhtckDEi85ESiojMR3IpAgr4lGoB2A/EWS4AR//WjX8MGVmKGDVvBMcYY7StjZ6qSrJpl1kSM51t2IwNF5GmTSpmxR2yaReM/xds5xjiDOZm3iCek027oOH6eMdkWKMDOB4M6IA0sXlAyfdk0y56e+IDJMAWMaws5hGYWMmmXU7PfwZTBF75UcGdyGQeQG9k0658ChgZNigoyksB//0Qwj8K2zkB1jzeidHhlKUIJd6RTbuggBW2cwyseTIad46LFU+ax+hunsiUmCebdpkNKq4zg/elRFATZNMuWsx95gKMsRsXcyho3OKCsERFJJiPiIpwMY+ESjwke8nC7T6n+QCMFPxCs+X0QoOCRd0yF2w6iEWylV74Io0TBx/QI0p+3ZyrHyZbbgrPyatsUI/A8GmSnckEf54nXGAvKPmIbEyuna1FscomKBDMiR9OyEY2mc1dJda4REUAw+Zlbpu7kXCj1c9ml1jUjcY+Spu/QnXmCiRqjyfOTLuj5CVKU6zMIzYQS06TnQWcpPCqb87MHKLw/kQzdgv4yJmLA/vg8sB5hi1CuMjCTSfct8E1O7544Hc0vEPIzjc18ZbOzeOqMvXCrFSpUjGqVP4C/xYkeiCFjZAAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.fc4e864e.js.map