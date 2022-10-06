(this["webpackJsonptotal-react"]=this["webpackJsonptotal-react"]||[]).push([[0],{18:function(t,e,r){},19:function(t,e,r){"use strict";r.r(e);var c=r(0),n=r.n(c),l=r(5),o=r.n(l),a=r(3),i=r(1),s=function(){var t=Object(a.b)(),e=function(){var t=new Date;return t.getMonth().toString()+t.getDate().toString()+t.getUTCMilliseconds()+Math.trunc(9e3*Math.random())}(),r=Object(a.c)((function(t){return t.todo.crTextWriting}));return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("h1",{children:"Todos"}),Object(i.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",onKeyDown:function(c){if(13===c.keyCode){var n=function(t){return{type:"ADD_TODO",payload:t}}({id:e,title:r,completed:!1,editing:!1,previousTitle:""});t(n)}},value:r,onChange:function(e){var r=function(t){return{type:"CHANGE_INPUT_VALUE",payload:t}}(e.target.value);t(r)}})]})},d=function(t){var e=Object(a.b)(),r=t.data;return Object(i.jsxs)("li",{id:r.id,className:function(t){var e="";return t.completed&&(e+="completed "),void 0!==t.editing&&t.editing&&(e+=" editing"),e}(r),children:[Object(i.jsxs)("div",{className:"view",children:[Object(i.jsx)("input",{className:"toggle",type:"checkbox",checked:r.completed,onChange:function(){return function(t){var r=function(t){return{type:"EDIT_ITEM_STATUS",payload:t}}(t);e(r)}(r)}}),Object(i.jsx)("label",{onDoubleClick:function(){return function(t){var r=function(t){return{type:"EDIT_ITEM",payload:t}}(t);e(r)}(r)},children:r.title}),Object(i.jsx)("button",{className:"destroy",onClick:function(){return function(t){var r=function(t){return{type:"DELETE_ITEM",payload:t}}(t);e(r)}(r)}})]}),Object(i.jsx)("input",{className:"edit",onKeyDown:function(t){if(13===t.keyCode){var c=function(t){return{type:"EDIT_ITEM_DONE",payload:t}}({id:r.id,title:t.target.value});e(c)}"Escape"===t.key&&e({type:"EDIT_DESTROY",payload:null})},defaultValue:r.previousTitle})]})};var u=function(t){var e=t.todoList,r=t.toggleCompleted,c=Object(a.b)();return Object(i.jsxs)("section",{className:"main",children:[Object(i.jsx)("input",{id:"toggle-all",name:"toggle-all",className:"toggle-all",type:"checkbox",onChange:function(){c({type:"TOGGLE_ITEMS_COMPLETED",payload:null})},checked:r}),Object(i.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"}),Object(i.jsx)("ul",{className:"todo-list",children:e.map((function(t,e){return Object(i.jsx)(d,{data:t},e)}))})]})},b=function(){var t=Object(a.c)((function(t){return t.todo.crFilter})),e=Object(a.c)((function(t){return t.todo.list})),r=Object(a.b)(),c=function(t){var e=function(t){return{type:"FILTER_ITEMS",payload:t}}(t);r(e)},n=function(t){return t.filter((function(t){return!1===t.completed})).length};return Object(i.jsxs)("footer",{className:"footer",children:[Object(i.jsxs)("span",{className:"todo-count",children:[" ",n(e)," ",1===n(e)?"item":"items"," left"]}),Object(i.jsxs)("ul",{className:"filters",children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#all",className:"all"===t?"selected":"",onClick:function(){return c("all")},children:"All"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#active",className:"active"===t?"selected":"",onClick:function(){return c("active")},children:"Active"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#completed",className:"completed"===t?"selected":"",onClick:function(){return c("completed")},children:"Completed"})})]}),Object(i.jsx)("button",{className:"clear-completed",onClick:function(){r({type:"REMOVE_COMPLETED",payload:null})},children:"Clear completed"})]})},f=function(){var t=Object(a.c)((function(t){return t.todo.list})),e=Object(a.c)((function(t){return t.todo.crList})),r=Object(a.c)((function(t){return t.todo.toggleCompleted})),n=Object(a.b)();return Object(c.useEffect)((function(){var t=function(t){return{type:"INITIAL_TODO",payload:t}}();n(t)}),[n]),Object(i.jsxs)("div",{className:"todoapp",children:[Object(i.jsx)(s,{}),t.length?Object(i.jsx)(u,{todoList:e,toggleCompleted:r}):"",t.length?Object(i.jsx)(b,{}):""]})},O=(r(18),function(){return Object(i.jsx)(f,{})}),j=r(6),g=r(2),p=r(4),m={list:[],crList:[],crFilter:"all",crTextWriting:"",toggleCompleted:!1},h=function(t,e){var r=t,c=function(t){var e=null;switch(t){case"completed":e=!0;break;case"active":e=!1;break;default:e=null}return e}(e);return null!==c&&(r=r.filter((function(t){return t.completed===c}))),r},v=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t,c=r.filter((function(t){return!0===t.completed}));return r.length===c.length&&(e=!0),e},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":var r=Object(p.a)(t.list);r.push(e.payload);var c=h(r,t.crFilter);return localStorage.setItem("nb-todos",JSON.stringify(r)),localStorage.setItem("nb-filter-todos",JSON.stringify(c)),Object(g.a)(Object(g.a)({},t),{},{list:r,crList:c,crTextWriting:""});case"INITIAL_TODO":var n=localStorage.getItem("nb-todos")?JSON.parse(localStorage.getItem("nb-todos")):[],l=localStorage.getItem("nb-filter-todos")?JSON.parse(localStorage.getItem("nb-filter-todos")):[],o=t.crFilter;o=n.length===l.length?"all":l[0].completed?"completed":"active";var a=n.filter((function(t){return!0===t.completed})),i=t.toggleCompleted;return n.length===a.length&&(i=!0),Object(g.a)(Object(g.a)({},t),{},{list:n,crList:l,crFilter:o,toggleCompleted:i});case"EDIT_ITEM":var s=Object(p.a)(t.crList);return s.forEach((function(t){t.editing=!1,t.id===e.payload.id&&(t.editing=!0,t.previousTitle=e.payload.title)})),localStorage.setItem("nb-filter-todos",JSON.stringify(s)),Object(g.a)(Object(g.a)({},t),{},{crList:s});case"EDIT_ITEM_DONE":var d=Object(p.a)(t.list);""===e.payload.title?d=d.filter((function(t){return t.id!==e.payload.id})):d.forEach((function(t){t.id===e.payload.id&&(t.title=e.payload.title,t.editing=!1,t.previousTitle="")}));var u=h(d,t.crFilter);return localStorage.setItem("nb-todos",JSON.stringify(d)),localStorage.setItem("nb-filter-todos",JSON.stringify(u)),Object(g.a)(Object(g.a)({},t),{},{list:d,crList:u});case"EDIT_ITEM_STATUS":var b=Object(p.a)(t.list);b.forEach((function(t){t.id===e.payload.id&&(t.completed=!t.completed)}));var f=h(b,t.crFilter),O=v(b);return localStorage.setItem("nb-todos",JSON.stringify(b)),localStorage.setItem("nb-filter-todos",JSON.stringify(f)),Object(g.a)(Object(g.a)({},t),{},{list:b,crList:f,toggleCompleted:O});case"EDIT_DESTROY":var j=Object(p.a)(t.list);j.forEach((function(t){t.editing=!1,t.previousTitle=""}));var y=h(j,t.crFilter);return localStorage.setItem("nb-todos",JSON.stringify(j)),localStorage.setItem("nb-filter-todos",JSON.stringify(y)),Object(g.a)(Object(g.a)({},t),{},{list:j,crList:y});case"DELETE_ITEM":var E=Object(p.a)(t.list);E=E.filter((function(t){return t.id!==e.payload.id}));var T=h(E,t.crFilter);return localStorage.setItem("nb-todos",JSON.stringify(E)),localStorage.setItem("nb-filter-todos",JSON.stringify(T)),Object(g.a)(Object(g.a)({},t),{},{list:E,crList:T});case"REMOVE_COMPLETED":var I=Object(p.a)(t.list);I=I.filter((function(t){return!0!==t.completed}));var S=h(I,t.crFilter);return localStorage.setItem("nb-todos",JSON.stringify(I)),localStorage.setItem("nb-filter-todos",JSON.stringify(S)),Object(g.a)(Object(g.a)({},t),{},{list:I,crList:S});case"FILTER_ITEMS":var N=h(Object(p.a)(t.list),e.payload);return localStorage.setItem("nb-filter-todos",JSON.stringify(N)),Object(g.a)(Object(g.a)({},t),{},{crList:N,crFilter:e.payload});case"CHANGE_INPUT_VALUE":var x=e.payload;return Object(g.a)(Object(g.a)({},t),{},{crTextWriting:x});case"TOGGLE_ITEMS_COMPLETED":var D=Object(p.a)(t.list),_=v(D);D.forEach((function(t){return t.editing=!1})),_?D.forEach((function(t){return t.completed=!1})):D.forEach((function(t){return t.completed=!0}));var L=h(D,t.crFilter);return localStorage.setItem("nb-todos",JSON.stringify(D)),localStorage.setItem("nb-filter-todos",JSON.stringify(L)),Object(g.a)(Object(g.a)({},t),{},{list:D,crList:L,crFilter:"all",toggleCompleted:!_});default:return t}},E=Object(j.a)({todo:y}),T=Object(j.b)(E);o.a.render(Object(i.jsx)(a.a,{store:T,children:Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(O,{})})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ae3d434b.chunk.js.map