(this["webpackJsonphooks-study"]=this["webpackJsonphooks-study"]||[]).push([[0],{12:function(t,e,n){t.exports=n(26)},17:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),u=(n(17),n(4)),s=n(6),i=n.n(s),l=n(11),m=n(5),d=n.n(m),p=n(10),f=n.n(p);var _=function(t){var e=t.setProduct,n=t.products,r=Object(a.useState)(""),c=Object(u.a)(r,2),s=c[0],i=c[1];return o.a.createElement("form",{action:"#",className:d.a.form,onSubmit:function(t){t.preventDefault(),""!==s&&(e([].concat(Object(l.a)(n),[{id:f.a.generate(),name:s}])),i(""))}},o.a.createElement("label",{htmlFor:"product-name"},"Nombre producto"),o.a.createElement("input",{type:"text",name:"product-name",id:"product-name",className:d.a.input,value:s,onChange:function(t){return i(t.target.value.trim())}}),o.a.createElement("input",{type:"submit",value:"Agregar",className:d.a.button}))},g=n(7),v=n.n(g);var h=function(t){var e=t.products;return 0===e.length?o.a.createElement("div",{className:v.a.noItems},o.a.createElement("p",null,"No hay productos a\xfan. Comience agregando uno")):o.a.createElement("ul",{className:v.a.productList},e.map((function(t){return o.a.createElement("li",{key:t.id},t.name)})))};var E=function(){var t=Object(a.useState)(localStorage.getItem("products")?JSON.parse(localStorage.getItem("products")):[]),e=Object(u.a)(t,2),n=e[0],r=e[1];return Object(a.useEffect)((function(){localStorage.setItem("products",JSON.stringify(n))}),[n]),o.a.createElement("div",{className:i.a.content},o.a.createElement("h1",{className:i.a.title},"Aplicaci\xf3n de Productos"),o.a.createElement(_,{setProduct:r,products:n}),o.a.createElement(h,{products:n}))};var b=function(){return o.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},5:function(t,e,n){t.exports={form:"Form_form__IOxL5",input:"Form_input__1B_dP",button:"Form_button__367GK"}},6:function(t,e,n){t.exports={content:"Content_content__3SvOu",title:"Content_title__3gAht"}},7:function(t,e,n){t.exports={productList:"ProductList_productList__2Kwxw",noItems:"ProductList_noItems__sXMe1"}}},[[12,1,2]]]);
//# sourceMappingURL=main.ffc4492d.chunk.js.map