(this["webpackJsonptodo-react-ts"]=this["webpackJsonptodo-react-ts"]||[]).push([[0],{21:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(18),r=n.n(l),o=(n(26),n(7)),u=n(1),i=function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement("a",{href:"/todo-react-ts",className:"brand-logo"},"TypeScript"),c.a.createElement("ul",{className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement(o.b,{to:"/todo-react-ts"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/about"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")))))},m=n(15),s=n(20),d=n(11),f=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),l=n[0],r=n[1];return c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{onChange:function(e){r(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&(e.onAdd(l),r(""))},value:l,id:"title",type:"text",placeholder:"\u041f\u043e\u043c\u044b\u0442\u044c \u043c\u0430\u0448\u0438\u043d\u0443"}),c.a.createElement("label",{htmlFor:"title",className:"active"},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0437\u0430\u0434\u0430\u0447\u0438"))},E=function(e){var t=e.todos,n=e.onRemove,a=e.onToggle;if(0===t.length)return c.a.createElement("p",{className:"center"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442");return c.a.createElement("ul",null,t.map((function(e){var t=["todo"];return e.completed&&t.push("completed"),c.a.createElement("li",{key:e.id,className:t.join(" ")},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",checked:e.completed,onChange:function(){return a(e.id)}}),c.a.createElement("span",null,e.title),c.a.createElement("i",{className:"material-icons red-text",onClick:function(t){return function(e,t){e.preventDefault(),n(t)}(t,e.id)}},"delete")))})))},p=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");l(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return c.a.createElement("div",null,c.a.createElement(f,{onAdd:function(e){var t={title:e,id:Date.now(),completed:!1};l((function(e){return[t].concat(Object(s.a)(e))}))}}),c.a.createElement(E,{todos:n,onRemove:function(e){window.confirm("\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430")&&l((function(t){return t.filter((function(t){return t.id!==e}))}))},onToggle:function(e){l((function(t){return t.map((function(t){return t.id===e?Object(m.a)(Object(m.a)({},t),{},{completed:!t.completed}):t}))}))}}))},b=function(){var e=Object(u.f)();return c.a.createElement("div",null,c.a.createElement("button",{className:"btn",onClick:function(){return e.push("/todo-react-ts")}},"To List"))},v=function(){return c.a.createElement(o.a,null,c.a.createElement(i,null),c.a.createElement("div",{className:"container"},c.a.createElement(u.c,null,c.a.createElement(u.a,{component:p,path:"/todo-react-ts",exact:!0}),c.a.createElement(u.a,{component:b,path:"/about",exact:!0}))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.87d6d59b.chunk.js.map