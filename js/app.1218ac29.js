(function(t){function e(e){for(var s,n,c=e[0],i=e[1],r=e[2],v=0,u=[];v<c.length;v++)n=c[v],l[n]&&u.push(l[n][0]),l[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,r||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,c=1;c<a.length;c++){var i=a[c];0!==l[i]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},l={1:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var d=i;o.push([4,0]),a()})({4:function(t,e,a){t.exports=a("Vtdi")},MW8Y:function(t,e,a){},R7xM:function(t,e,a){},Vtdi:function(t,e,a){"use strict";a.r(e);a("VRzm");var s=a("Kw5r"),l=a("vDqi"),o=a.n(l),n=a("p/7L"),c=a.n(n),i=a("jE9Z"),r=a("XJYT"),d=a.n(r),v=(a("D66Q"),a("stYL")),u=a.n(v),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[a("navbar")],1),a("div",{staticClass:"container"},[a("router-view")],1)])},p=[],f={data:function(){return{}}},h=f,C=a("KHd+"),b=Object(C["a"])(h,m,p,!1,null,null,null),y=b.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("ShuttleCalculator")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1)])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],k={},E=k,w=Object(C["a"])(E,_,g,!1,null,null,null),x=w.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-xs-12"},[t._m(0),a("div",{staticClass:"mt-4"},[a("div",{staticClass:"row"},[t._m(1),a("div",{staticClass:"col-12 col-xs-12 col-sm-4 col-md-4"},[a("router-link",{attrs:{to:"/event/create"}},[a("button",{staticClass:"btn btn-success  float-right",attrs:{type:"button"}},[t._v("Create New Event")])])],1)]),a("div",{staticClass:"col-12"},[a("div",[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:[{disabled:!t.pagination.prev_page_url}]},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){t.fetchEvents(t.pagination.prev_page_url)}}},[t._v("«")])]),a("li",{staticClass:"page-item disabled"},[a("a",{staticClass:"page-link text-dark",attrs:{href:"#"}},[t._v("Page "+t._s(t.pagination.current_page)+" of "+t._s(t.pagination.last_page))])]),a("li",{staticClass:"page-item",class:[{disabled:!t.pagination.next_page_url}]},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){t.fetchEvents(t.pagination.next_page_url)}}},[t._v("»")])])])])]),a("div",{staticClass:"col-12 table-responsive-sm"},[a("table",{staticClass:"table table-hover"},[t._m(2),a("tbody",t._l(t.events,function(e){return a("router-link",{key:e.id,attrs:{to:{name:"event",params:{event_id:e.event_id}},tag:"tr"}},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.place))]),a("td",[t._v(t._s(e.dateEvent))]),a("td",[t._v(t._s(e.timeEvent))])])}))])])])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jumbotron jumbotron-fluid mt-2"},[a("h1",{staticClass:"display-3 text-center"},[t._v("Shuttle Calculator")]),a("p",{staticClass:"text-center lead"},[t._v("This system is to calculate total fees for each person every badminton match")]),a("hr",{staticClass:"my-4"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 col-xs-12 col-sm-6 col-md-8"},[a("h1",{staticClass:"display-5"},[t._v("Recent Matches")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Event Name")]),a("th",{attrs:{scope:"col"}},[t._v("Location")]),a("th",{attrs:{scope:"col"}},[t._v("Date")]),a("th",{attrs:{scope:"col"}},[t._v("Time")])])])}],M=(a("f3/d"),a("rGqo"),a("iqUP")),D=a.n(M),N=(a("5x/H"),{apiKey:"AIzaSyAlk7vHbUNDKkAVdQ6SL_sflMda7tfJdZ0",authDomain:"shuttlecalculator.firebaseapp.com",databaseURL:"https://shuttlecalculator.firebaseio.com",projectId:"shuttlecalculator",storageBucket:"shuttlecalculator.appspot.com",messagingSenderId:"477023716358"}),S=D.a.initializeApp(N),O=S.firestore(),j={data:function(){return{events:[],pagination:{}}},created:function(){this.fetchEvents()},methods:{fetchEvents:function(){var t=this;O.collection("events").orderBy("dateEvent").get().then(function(e){e.forEach(function(e){console.log(e.data);var a={id:e.id,event_id:e.data().id,name:e.data().name,place:e.data().place,dateEvent:e.data().dateEvent,timeEvent:e.data().timeEvent,hall:e.data().hall,shuttlecockfees:e.data().shuttlecockfees};t.events.push(a)})})},makePagination:function(t,e){var a={current_page:t.current_page,last_page:t.last_page,next_page_url:e.next,prev_page_url:e.prev};this.pagination=a},viewEvent:function(t){this.$router.push("event/".concat(t))}}},I=j,R=Object(C["a"])(I,P,$,!1,null,null,null),F=R.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-2"},[0===t.editEvent?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-xs-12 col-md-12 col-sm-12"},[a("div",{staticClass:"card border-info mb-3"},[a("div",{staticClass:"card-header"},[t._v(t._s(t.event.name))]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-sm-2 col-form-label",attrs:{for:"eventID"}},[t._v("Event ID")]),a("div",{staticClass:"col-8 col-sm-10"},[a("input",{staticClass:"form-control-plaintext",attrs:{type:"text",readonly:"",id:"eventID"},domProps:{value:t.event.id}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-sm-2 col-form-label",attrs:{for:"location"}},[t._v("Location")]),a("div",{staticClass:"col-8 col-sm-10"},[a("input",{staticClass:"form-control-plaintext",attrs:{type:"text",readonly:"",id:"location"},domProps:{value:t.event.place}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-sm-2 col-form-label",attrs:{for:"hall"}},[t._v("Hall Price (RM)")]),a("div",{staticClass:"col-8 col-sm-10"},[a("input",{staticClass:"form-control-plaintext",attrs:{type:"text",readonly:"",id:"hall"},domProps:{value:t.event.hall}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-sm-2 col-form-label",attrs:{for:"shuttlecockfees"}},[t._v("Shuttlecock / Person (RM)")]),a("div",{staticClass:"col-8 col-sm-10"},[a("input",{staticClass:"form-control-plaintext",attrs:{type:"text",readonly:"",id:"shuttlecockfees"},domProps:{value:t.event.shuttlecockfees}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-sm-2 col-form-label",attrs:{for:"date"}},[t._v("Date")]),a("div",{staticClass:"col-8 col-sm-10"},[a("input",{staticClass:"form-control-plaintext",attrs:{type:"text",readonly:"",id:"date"},domProps:{value:t.event.dateEvent}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-sm-2 col-form-label",attrs:{for:"time"}},[t._v("Time")]),a("div",{staticClass:"col-8 col-sm-10"},[a("input",{staticClass:"form-control-plaintext",attrs:{type:"text",readonly:"",id:"time"},domProps:{value:t.event.timeEvent}})])]),a("el-row",[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(e){t.editEvent=1}}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:t.deleteEvent}})],1)],1)])])]):t._e(),1===t.editEvent?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-xs-12 col-md-12 col-sm-12"},[a("div",{staticClass:"card border-info mb-3"},[a("div",{staticClass:"card-header"}),a("div",{staticClass:"card-body"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-sm-2 col-form-label",attrs:{for:"eventID"}},[t._v("Event ID")]),a("div",{staticClass:"col-8 col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.event.id,expression:"event.id"}],staticClass:"form-control-plaintext",attrs:{type:"text",readonly:"",id:"eventID"},domProps:{value:t.event.id},on:{input:function(e){e.target.composing||t.$set(t.event,"id",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-sm-2 col-form-label",attrs:{for:"eventName"}},[t._v("Event Name")]),a("div",{staticClass:"col-8 col-sm-10 col-md-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.event.name,expression:"event.name"}],staticClass:"form-control",attrs:{type:"text",id:"eventName"},domProps:{value:t.event.name},on:{input:function(e){e.target.composing||t.$set(t.event,"name",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-sm-2 col-form-label",attrs:{for:"location"}},[t._v("Location")]),a("div",{staticClass:"col-8 col-sm-10 col-md-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.event.place,expression:"event.place"}],staticClass:"form-control",attrs:{type:"text",id:"location"},domProps:{value:t.event.place},on:{input:function(e){e.target.composing||t.$set(t.event,"place",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-sm-2 col-form-label",attrs:{for:"hall"}},[t._v("Hall Price (RM)")]),a("div",{staticClass:"col-8 col-sm-10 col-md-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.event.hall,expression:"event.hall"}],staticClass:"form-control",attrs:{type:"text",id:"hall"},domProps:{value:t.event.hall},on:{input:function(e){e.target.composing||t.$set(t.event,"hall",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-sm-2 col-form-label",attrs:{for:"shuttlecockfees"}},[t._v("Shuttlecock / Person (RM)")]),a("div",{staticClass:"col-8 col-sm-10 col-md-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.event.shuttlecockfees,expression:"event.shuttlecockfees"}],staticClass:"form-control",attrs:{type:"text",id:"shuttlecockfees"},domProps:{value:t.event.shuttlecockfees},on:{input:function(e){e.target.composing||t.$set(t.event,"shuttlecockfees",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-sm-2 col-form-label",attrs:{for:"date"}},[t._v("Date")]),a("div",{staticClass:"col-8 col-sm-10 col-md-4"},[a("el-date-picker",{attrs:{type:"date",placeholder:"Pick a day","picker-options":t.pickerOption,format:"dd-MM-yyyy","value-format":"yyyy-MM-dd"},model:{value:t.event.dateEvent,callback:function(e){t.$set(t.event,"dateEvent",e)},expression:"event.dateEvent"}})],1)]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-sm-2 col-form-label",attrs:{for:"time"}},[t._v("Time")]),a("div",{staticClass:"col-8 col-sm-10 col-md-4"},[a("el-time-select",{attrs:{"picker-options":{start:"18:00",step:"00:30",end:"23:00"},placeholder:"Select time"},model:{value:t.event.timeEvent,callback:function(e){t.$set(t.event,"timeEvent",e)},expression:"event.timeEvent"}})],1)]),a("el-row",[a("el-button",{attrs:{type:"success",icon:"el-icon-check",circle:""},on:{click:t.updateEvent}}),a("el-button",{attrs:{icon:"el-icon-back",circle:""},on:{click:function(e){t.editEvent=0}}})],1)],1)])])]):t._e(),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-xs-12 col-md-12 col-sm-12"},[a("div",{staticClass:"card border-info mb-3"},[a("div",{staticClass:"card-header"},[t._v("Players")]),a("div",{staticClass:"card-body"},[0===t.addPlayer?a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.addPlayer=1}}},[t._v("Add Player")]):t._e(),a("div",{staticClass:"row"},[a("div",{staticClass:"col-5 col-sm-6 col-md-6"},[1===t.addPlayer?a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPlayer.name,expression:"newPlayer.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Enter Name"},domProps:{value:t.newPlayer.name},on:{input:function(e){e.target.composing||t.$set(t.newPlayer,"name",e.target.value)}}})]):t._e()]),a("div",{staticClass:"col-4 col-sm-3 col-md-3 mt-4",staticStyle:{"margin-top":"3px"}},[1===t.addPlayer?a("button",{staticClass:"btn btn-success",staticStyle:{"margin-top":"5px"},attrs:{type:"button"},on:{click:t.createPlayer}},[t._v("Create Player")]):t._e()]),a("div",{staticClass:"col-3 col-sm-3 col-md-3 mt-4"},[1===t.addPlayer?a("button",{staticClass:"btn btn-danger",staticStyle:{"margin-top":"5px"},attrs:{type:"button"},on:{click:function(e){t.addPlayer=0}}},[t._v("X")]):t._e()])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12"},[a("div",{staticClass:"table-responsive-sm"},[a("table",{staticClass:"table table-hover"},[t._m(0),a("tbody",t._l(t.players,function(e,s){return a("tr",{key:e.id},[a("td",[t._v(t._s(s+1))]),a("td",[t._v(t._s(e.name))]),a("td",[0===t.edit?a("input",{staticClass:"form-control-plaintext",attrs:{type:"text",readonly:""},domProps:{value:t.players[s].shuttlecocks}}):t._e(),1===t.edit?a("input",{directives:[{name:"model",rawName:"v-model",value:t.players[s].shuttlecocks,expression:"players[index].shuttlecocks"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.players[s].shuttlecocks},on:{input:function(e){e.target.composing||t.$set(t.players[s],"shuttlecocks",e.target.value)}}}):t._e()]),a("td",[0===t.edit?a("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){t.edit=1}}},[t._v("Edit")]):t._e(),1===t.edit?a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(a){t.editPlayer(e.id,s)}}},[t._v("Update")]):t._e()]),a("td",[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){t.deletePlayer(e.id)}}},[t._v("Delete")])]),a("td",[t._v(t._s(e.totalFee))])])}))])])])])])])])])])},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("No. ")]),a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col"}},[t._v("Shuttlecock used")]),a("th",{attrs:{scope:"col"}}),a("th",{attrs:{scope:"col"}}),a("th",{attrs:{scope:"col"}},[t._v("Total (RM)")])])])}],L={data:function(){return{event:{name:"",id:this.$route.params.event_id,place:"",dateEvent:"",timeEvent:"",hall:"",shuttlecockfees:""},sizeCol:0,addPlayer:0,players:[],newPlayer:{name:""},edit:0,editEvent:0,pickerOption:{disabledDate:function(t){return t<new Date}}}},created:function(){this.fetchPlayers()},beforeRouteEnter:function(t,e,a){O.collection("events").where("id","==",t.params.event_id).get().then(function(t){t.forEach(function(t){a(function(e){e.event.name=t.data().name,e.event.place=t.data().place,e.event.dateEvent=t.data().dateEvent,e.event.timeEvent=t.data().timeEvent,e.event.hall=t.data().hall,e.event.shuttlecockfees=t.data().shuttlecockfees})})})},watch:{$route:"fetchEvent"},methods:{fetchEvent:function(){var t=this;O.collection("events").where("id","==",this.event.id).get().then(function(e){e.forEach(function(e){t.event.name=e.data().name,t.event.place=e.data().place,t.event.dateEvent=e.data().dateEvent,t.event.timeEvent=e.data().timeEvent,t.event.hall=e.data().hall,t.event.shuttlecockfees=e.data().shuttlecockfees})})},deleteEvent:function(){var t=this,e=confirm("Are you sure you want to delete this event?");1==e&&O.collection("events").where("id","==",this.$route.params.event_id).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})},open:function(t){this.$message({message:t,type:"success"})},fetchPlayers:function(){var t=this;O.collection("players").where("event_id","==",this.event.id).get().then(function(e){e.forEach(function(e,a){var s={id:e.data().id,name:e.data().name,shuttlecocks:e.data().shuttlecocks,totalFee:e.data().totalFee};t.players.push(s)}),t.sizeCol=e.size})},createPlayer:function(){var t=this;O.collection("players").add({id:this.sizeCol++,name:this.newPlayer.name,event_id:this.event.id,shuttlecocks:0,totalFee:0}).then(function(e){t.newPlayer.name="",t.updateFees()})},deletePlayer:function(t){var e=this,a=confirm("Are you sure you want to delete this player?");1==a&&O.collection("players").where("id","==",t).get().then(function(t){t.forEach(function(t){t.ref.delete()})}).then(function(){e.players=[],e.updateFees()})},editPlayer:function(t,e){var a=this;O.collection("players").where("id","==",t).get().then(function(t){t.forEach(function(t){t.ref.update({shuttlecocks:a.players[e].shuttlecocks}).then(function(){a.edit=0,a.updateFees()})})})},updateFees:function(){var t=this;O.collection("players").where("event_id","==",this.event.id).get().then(function(e){e.forEach(function(a,s){var l=t.event.hall/e.size+t.event.shuttlecockfees*parseFloat(a.data().shuttlecocks);l=l.toFixed(2),a.ref.update({totalFee:l})})}).then(function(){t.edit=0,t.players=[],t.fetchPlayers()})},updateEvent:function(){var t=this;O.collection("events").where("id","==",this.event.id).get().then(function(e){e.forEach(function(e){e.ref.update({name:t.event.name,id:t.event.id,place:t.event.place,dateEvent:t.event.dateEvent,timeEvent:t.event.timeEvent,hall:t.event.hall,shuttlecockfees:t.event.shuttlecockfees}).then(function(){t.editEvent=0,t.fetchEvent()})})})}}},A=L,H=(a("islP"),Object(C["a"])(A,T,z,!1,null,null,null)),Y=H.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 mt-4"},[a("div",{staticClass:"card border-success mb-3"},[t._m(0),a("div",{staticClass:"card-body"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-md-4 col-form-label",attrs:{for:"name"}},[t._v("Event Name")]),a("div",{staticClass:"col-sm-10 col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.event.name,expression:"event.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Badminton Persahabatan"},domProps:{value:t.event.name},on:{input:function(e){e.target.composing||t.$set(t.event,"name",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-md-4 col-form-label",attrs:{for:"eventID"}},[t._v("Event ID")]),a("div",{staticClass:"col-sm-10 col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.event.id,expression:"event.id"}],staticClass:"form-control",attrs:{type:"text",id:"eventID",placeholder:"20"},domProps:{value:t.event.id},on:{input:function(e){e.target.composing||t.$set(t.event,"id",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-md-4 col-form-label",attrs:{for:"place"}},[t._v("Location")]),a("div",{staticClass:"col-sm-10 col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.event.place,expression:"event.place"}],staticClass:"form-control",attrs:{type:"text",id:"place",placeholder:"Dewan Depo"},domProps:{value:t.event.place},on:{input:function(e){e.target.composing||t.$set(t.event,"place",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-md-4 col-form-label",attrs:{for:"hall"}},[t._v("Hall Price (RM)")]),a("div",{staticClass:"col-sm-10 col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.event.hall,expression:"event.hall"}],staticClass:"form-control",attrs:{type:"text",id:"hall",placeholder:"15"},domProps:{value:t.event.hall},on:{input:function(e){e.target.composing||t.$set(t.event,"hall",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-md-4 col-form-label",attrs:{for:"shuttlecockfees"}},[t._v("Shuttlecock / Person (RM)")]),a("div",{staticClass:"col-sm-10 col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.event.shuttlecockfees,expression:"event.shuttlecockfees"}],staticClass:"form-control",attrs:{type:"text",id:"shuttlecockfees",placeholder:"2"},domProps:{value:t.event.shuttlecockfees},on:{input:function(e){e.target.composing||t.$set(t.event,"shuttlecockfees",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-md-4 col-form-label",attrs:{for:"dateEvent"}},[t._v("Date")]),a("div",{staticClass:"col-sm-10 col-md-6"},[a("el-date-picker",{attrs:{type:"date",placeholder:"Pick a day","picker-options":t.pickerOption,format:"dd-MM-yyyy","value-format":"yyyy-MM-dd"},model:{value:t.event.date,callback:function(e){t.$set(t.event,"date",e)},expression:"event.date"}})],1)]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-md-4 col-form-label",attrs:{for:"timeEvent"}},[t._v("Time")]),a("div",{staticClass:"col-sm-10 col-md-6"},[a("el-time-select",{attrs:{"picker-options":{start:"18:00",step:"00:30",end:"23:00"},placeholder:"Select time"},model:{value:t.event.time,callback:function(e){t.$set(t.event,"time",e)},expression:"event.time"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 col-xs-6 col-md-6"},[a("button",{staticClass:"btn btn-success float-left",attrs:{type:"submit"},on:{click:function(e){t.createEvent()}}},[t._v("Submit")])])])])])])])},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("h4",[a("strong",[t._v("Create New Match")])])])}],U={data:function(){return{pickerOption:{disabledDate:function(t){return t<new Date}},event:{name:"",id:"",place:"",hall:"",shuttlecockfees:"",date:"",time:""}}},methods:{createEvent:function(){var t=this;O.collection("events").add({id:this.event.id,name:this.event.name,place:this.event.place,hall:this.event.hall,shuttlecockfees:this.event.shuttlecockfees,dateEvent:this.event.date,timeEvent:this.event.time}).then(function(e){t.$router.push("/")})},open:function(){this.$message({message:"Congrats, event successfully created!.",type:"success"})}}},V=U,q=Object(C["a"])(V,J,K,!1,null,null,null),B=q.exports;a("SYky"),a("R7xM"),s["default"].use(i["a"]),s["default"].use(c.a,o.a),s["default"].use(d.a,{locale:u.a});var Q=D.a.firestore(),W={timestampsInSnapshots:!0};Q.settings(W),s["default"].component("navbar",x);var X=[{path:"/",component:F},{path:"/event/create",component:B},{path:"/event/:event_id",component:Y,name:"event"}],Z=new i["a"]({routes:X,mode:"history"});new s["default"]({render:function(t){return t(y)},router:Z}).$mount("#app")},islP:function(t,e,a){"use strict";var s=a("MW8Y"),l=a.n(s);l.a}});
//# sourceMappingURL=app.1218ac29.js.map