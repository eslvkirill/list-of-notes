(this["webpackJsonplist-of-notes"]=this["webpackJsonplist-of-notes"]||[]).push([[0],{23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(6),s=n.n(r),a=(n(23),n(3)),i=n(0),l=o.a.createContext(),u=function(){return Object(c.useContext)(l)},d=function(e){var t=e.children,n=Object(c.useState)(!1),o=Object(a.a)(n,2),r=o[0],s=o[1],u=Object(c.useState)("create"),d=Object(a.a)(u,2),j=d[0],f=d[1];return Object(i.jsx)(l.Provider,{value:{modal:r,changeModal:function(){return s(!r)},modalType:j,setModalType:f},children:t})};function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{autoComplete:"off",placeholder:e,type:t,value:n}}function f(){return{title:j("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),color:j("\u0426\u0432\u0435\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0438","color","#e9e4eb"),description:j("\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0438")}}var m=o.a.createContext(),b=function(){return Object(c.useContext)(m)},h=function(e){var t=e.children,n=Object(c.useState)(f()),o=Object(a.a)(n,2),r=o[0],s=o[1],l=Object(c.useState)(!1),u=Object(a.a)(l,2),d=u[0],j=u[1];return Object(i.jsx)(m.Provider,{value:{notesFields:r,setNotesFields:s,isFormValid:d,setFormValid:j,clearForm:function(){return s(f())}},children:t})},O=[{id:1,title:"\u041f\u0435\u0440\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043c\u043e\u0435\u0439 \u0437\u0430\u043c\u0435\u0442\u043a\u0438",color:"#dcadff"},{id:2,title:"\u0412\u0442\u043e\u0440\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430",description:"******\n######\n******\n######\n******\n######\n******",color:"#c1f5ff"}],p=o.a.createContext(),v=function(){return Object(c.useContext)(p)},x=function(e){var t=e.children,n=Object(c.useState)(O),o=Object(a.a)(n,2),r=o[0],s=o[1],l=Object(c.useState)(r),u=Object(a.a)(l,2),d=u[0],j=u[1],f=Object(c.useState)(""),m=Object(a.a)(f,2),b=m[0],h=m[1];return Object(i.jsx)(p.Provider,{value:{notes:r,setNotes:s,filterNotes:d,setFilterNotes:j,notesTextInput:b,setNotesTextInput:h,funcToSetState:function(e){var t=e?e(r):r;j&&(s(t),j(t),h(""))}},children:t})},_=n(15),N=n(16),C=(n(30),function(e){return Object(i.jsx)("div",{className:"form-items__wrapper",children:e.children})}),g=(n(31),function(e){return Object(i.jsx)(C,{children:Object(i.jsx)("input",{type:e.type,value:e.value,placeholder:e.placeholder,disabled:e.disabled,autoComplete:e.autoComplete,className:[e.className,"form-field__input, input"].join(" "),onChange:e.onChange,children:e.children})})}),y=(n(32),function(e){return Object(i.jsx)("button",{onClick:e.onClick,type:e.type,className:[e.className,"button button".concat(void 0!==e.disabled?"_disabled_"+e.disabled:"")].join(" "),disabled:e.disabled,children:e.children})}),S=(n(33),function(){var e=v(),t=e.notes,n=e.filterNotes,o=e.setNotes,r=e.setFilterNotes,s=e.setNotesTextInput,l=e.notesTextInput,u=Object(c.useState)([]),d=Object(a.a)(u,2),j=d[0],f=d[1];return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("hr",{className:"header__hr-line hr-line"}),Object(i.jsxs)("form",{action:"",method:"get",className:"header__search-form search-form",children:[Object(i.jsx)(y,{type:"submit",className:"search-form__search-button",onClick:function(e){return function(e){e.preventDefault(),""!==l.trim()?(r(j),o(t)):r(t)}(e)},children:Object(i.jsx)(_.a,{icon:N.a,className:"search-form__icon-logo"})}),Object(i.jsx)(g,{type:"search",placeholder:"\u041f\u043e\u0438\u0441\u043a",autoComplete:"off",value:l,className:"search-form__input",onChange:function(e){return function(e){var n=e.target.value,c=n.toLowerCase().trim(),o=["id","color"];if(s(n),""!==c){var a=t.filter((function(e){return Object.keys(e).some((function(t){return!o.includes(t)&&e[t].toLowerCase().includes(c)}))}));f(a)}else r(t)}(e)}})]}),0!==n.length&&n.length===t.length||0===t.length?"":Object(i.jsx)("div",{className:"header_notes-not-found",children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0432\u0441\u0435 \u0412\u0430\u0448\u0438 \u0437\u0430\u043c\u0435\u0442\u043a\u0438"}),Object(i.jsx)("hr",{className:"header__hr-line hr-line"})]})}),F=(n(34),function(e){var t=u(),n=t.modal,c=t.changeModal,o=t.setModalType;return Object(i.jsx)(y,{className:"create-notes-button".concat(n&&!e.scaleButton?"_modal_open":""),onClick:function(){o("create"),e.setScaleButton(!1),c()},children:"+"})}),k=n(43),T=n(42),w=(n(35),function(e){return Object(i.jsx)(k.a,{className:"notes-list__wrapper",component:"section",children:e.notes.map((function(t,n){return Object(i.jsx)(T.a,{mountOnEnter:!0,unmountOnExit:!0,timeout:{enter:500,exit:300},classNames:"note",children:Object(i.jsxs)("article",{style:{backgroundColor:t.color},className:"notes-list__notes-card notes-card",onClick:function(){return e.editNotesCard(t.id)},children:[Object(i.jsx)("h2",{className:"notes-card__title",children:t.title}),Object(i.jsx)("p",{className:"notes-card__description",children:t.description}),Object(i.jsx)(y,{className:"notes-card__trash-can",onClick:function(n){return e.removeNotesCard(n,t.id)},children:"\ud83d\uddd1"})]},n)},t.id)}))})}),I=(n(36),function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],o=t[1],r=v(),s=r.notes,l=r.filterNotes,d=r.funcToSetState,j=u(),f=j.changeModal,m=j.modalType,h=j.setModalType,O=b(),p=O.notesFields,x=O.setNotesFields,_=O.setFormValid;return Object(i.jsxs)("main",{className:"notes-list",children:[l.length?Object(i.jsx)(w,{notes:l,modalType:m,removeNotesCard:function(e,t){e.stopPropagation();var n=window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u0443 \u0437\u0430\u043c\u0435\u0442\u043a\u0443?");d((function(e){return n?e.filter((function(e){return e.id!==t})):e}))},editNotesCard:function(e){f(),h("save"),o(!0),l.map((function(t){return t.id===e&&Object.keys(p).map((function(e){return p[e].noteId=t.id,p[e].value=t[e],_(!0),e})),p})),x(p)}}):Object(i.jsx)("div",{className:"notes-list__empty-notes",children:0===l.length&&0!==s.length?"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e :(":"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0412\u0430\u0448\u0443 \u043f\u0435\u0440\u0432\u0443\u044e \u0437\u0430\u043c\u0435\u0442\u043a\u0443!"}),Object(i.jsx)(F,{scaleButton:n,setScaleButton:o})]})}),M=(n(37),function(e){return Object(i.jsx)("div",{className:"content",children:e.children})}),P=n(12),B=n(17);n(38);var E=function(e){return Object(i.jsx)(C,{children:Object(i.jsx)("textarea",{placeholder:e.placeholder,value:e.value,autoComplete:e.autoComplete,disabled:e.disabled,className:[e.className,"textarea"].join(" "),onChange:e.onChange,children:e.children})})},V=(n(39),"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e \u043f\u043e\u043b\u0435"),L=function(){var e=b(),t=e.notesFields,n=e.setNotesFields,o=e.isFormValid,r=e.setFormValid,s=e.clearForm,l=v(),d=l.notes,j=l.funcToSetState,f=u(),m=f.modal,h=f.changeModal,O=f.modalType,p=Object(c.useState)(V),x=Object(a.a)(p,2),_=x[0],N=x[1],C=function(){N("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e \u043f\u043e\u043b\u0435"),r(!1),h(),s()},S=function(e,c){var s=t[c],a=t.title.value.length<30;s.value=e.target.value,N(a?V:"\u0414\u043b\u0438\u043d\u0430 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),r(function(e){var t=!0;return Object.keys(e).some((function(n){return t="color"!==e[n].type&&""!==e[n].value.trim()})),t}(t)&&a),s.valid=o,t[c]=s,n((function(e){return Object(P.a)(Object(P.a)({},e),t)}))};return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"modal-window".concat(m?"_active":""),onClick:C,children:Object(i.jsxs)("form",{className:"modal-window__notes-form notes-form notes-form".concat("create"===O?"_create":"_save"),onSubmit:function(e){e.preventDefault(),C()},onClick:function(e){return e.stopPropagation()},children:[Object(i.jsx)("div",{className:"notes-form__form-items form-items",children:Object.keys(t).map((function(e,n){var c=t[e],r="description"===e?E:g;return Object(i.jsx)(r,{type:c.type,placeholder:c.placeholder,value:c.value,valid:c.valid,className:"form-items__".concat(e," form-items__field form-items__fields").concat(o||"color"===e?"":"_onError"),onChange:function(t){return S(t,e)}},n)}))}),Object(i.jsxs)("div",{className:"notes-form__buttons-section".concat(o?"":"_onError"," buttons-section"),children:[o?null:Object(i.jsxs)("div",{className:"notes-form__error-message error-message",children:["*",_]}),Object(i.jsxs)("div",{className:"buttons-section__wrapper",children:[Object(i.jsx)(y,{type:"submit",disabled:!o,className:"buttons-section__create-button",onClick:"create"===O?function(){var e={id:Math.random().toString(26),title:t.title.value,description:t.description.value,color:t.color.value};j((function(t){return[Object(P.a)({},e)].concat(Object(B.a)(t))}))}:function(){d.map((function(e){return Object.keys(t).map((function(n){return e.id===t[n].noteId&&(e[n]=t[n].value,d.splice(0,0,d.splice(d.findIndex((function(t){return t.id===e.id})),1)[0])),d})),e})),j()},children:"create"===O?"\u0421\u043e\u0437\u0434\u0430\u0442\u044c":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(i.jsx)(y,{type:"button",className:"buttons-section__close-button",onClick:C,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})]})]})})})};var D=function(){return Object(i.jsx)(M,{children:Object(i.jsx)(d,{children:Object(i.jsx)(h,{children:Object(i.jsxs)(x,{children:[Object(i.jsx)(S,{}),Object(i.jsx)(I,{}),Object(i.jsx)(L,{})]})})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(D,{}),document.getElementById("root")),J()}},[[40,1,2]]]);
//# sourceMappingURL=main.cf4da56c.chunk.js.map