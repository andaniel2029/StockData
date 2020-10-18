(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{210:function(e,t,a){e.exports=a(404)},215:function(e,t,a){},220:function(e,t,a){},404:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),c=a(18),l=a.n(c),o=(a(215),a(24)),i=(a(220),a(35)),u=a(177),d=a(178),m=a.n(d),s=a(179),D={displayLine:!0},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LINE_CANDLE":return{displayLine:t.payload};default:return e}},h=new Date,p=(h.setTime(h.getTime()-157248e5),{startDate:h,endDate:new Date}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_START_DATE":return{startDate:t.payload};case"ADD_END_DATE":return{endDate:t.payload};default:return e}},v={tickers:"AAPL"},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TICKER":return{tickers:t.payload};default:return e}},w=Object(i.combineReducers)({tickersFromRootReducer:b,datesFromRootReducer:f,chartsFromRootReducer:E}),C=Object(i.createStore)(w,Object(u.composeWithDevTools)(Object(i.applyMiddleware)(m.a,s.a))),g=a(21),y=function(e){return{type:"ADD_START_DATE",payload:e}},T=function(e){return{type:"ADD_END_DATE",payload:e}},A=a(418),j=a(417),k=a(409),O=a(45);var S=Object(o.b)((function(e){return{tickers:e.tickersFromRootReducer.tickers}}),(function(e){return{addTickerDispatch:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"AAPL";return{type:"ADD_TICKER",payload:e}}(t))}}}))((function(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(A.a,null,r.a.createElement(j.a,{placeholder:"Add ticker ex) APPL",value:c,name:"newTicker",onChange:function(e){return l(e.target.value)},isClearable:!0}),r.a.createElement(k.a,{animated:!0,primary:!0,onClick:function(t){return e.addTickerDispatch(c)}},r.a.createElement(k.a.Content,{visible:!0},"Go!"),r.a.createElement(k.a.Content,{hidden:!0},r.a.createElement(O.a,{name:"arrow right"})))))})),R=a(420);var _=Object(o.b)(null,(function(e){return{addStartDateDispatch:function(t){return e(y(t))},addEndDateDispatch:function(t){return e(T(t))}}}))((function(e){var t=Object(n.useState)("6m"),a=Object(g.a)(t,2),c=a[0],l=a[1],o=new Date,i=(o.setTime(o.getTime()-157248e5),Object(n.useState)(o)),u=Object(g.a)(i,2),d=(u[0],u[1]),m=Object(n.useState)(new Date),s=Object(g.a)(m,2),D=s[0];function E(t,a){l(a);var n=new Date;n.setTime(n.getTime()-864e5*t);d(n),e.addStartDateDispatch(n),e.addEndDateDispatch(D)}return s[1],r.a.createElement("div",null,r.a.createElement(R.a,{widths:4},r.a.createElement(R.a.Item,{name:"5d",active:"5d"===c,onClick:function(){return E(8,"5d")}},"5 d"),r.a.createElement(R.a.Item,{name:"1m",active:"1m"===c,onClick:function(){return E(30,"1m")}},"1 m"),r.a.createElement(R.a.Item,{name:"6m",active:"6m"===c,onClick:function(){return E(180,"6m")}},"6 m"),r.a.createElement(R.a.Item,{name:"1y",active:"1y"===c,onClick:function(){return E(365,"1y")}},"1 y")))})),L=a(131),Y=a.n(L),I=(a(344),a(421));var M=Object(o.b)(null,(function(e){return{addStartDateDispatch:function(t){return e(y(t))},addEndDateDispatch:function(t){return e(T(t))}}}))((function(e){var t=new Date,a=(t.setTime(t.getTime()-157248e5),Object(n.useState)(t)),c=Object(g.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(new Date),u=Object(g.a)(i,2),d=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement(I.a,{as:"h4"},"Custom Dates"),r.a.createElement("br",null),"Start:",r.a.createElement(Y.a,{selected:l,maxDate:new Date,onChange:function(t){return function(t){t!==l&&(o(t),e.addStartDateDispatch(t))}(t)},placeholderText:"MM/DD/YYYY",isClearable:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0}),r.a.createElement("br",null),"End:",r.a.createElement(Y.a,{selected:d,maxDate:new Date,onChange:function(t){return function(t){t!==d&&(m(t),e.addEndDateDispatch(t))}(t)},placeholderText:"MM/DD/YYYY",isClearable:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0}))}));var N=Object(o.b)(null,(function(e){return{addLineCandleDispatch:function(t){return e({type:"ADD_LINE_CANDLE",payload:t})}}}))((function(e){var t=Object(n.useState)(!0),a=Object(g.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(A.a,null,r.a.createElement(A.a.Field,null,r.a.createElement(k.a,{toggle:!0,active:c,onClick:function(t,a){a.value;l(!0),e.addLineCandleDispatch(!0)}},"Line Chart"),r.a.createElement(k.a,{toggle:!0,active:!c,onClick:function(t,a){a.value;l(!1),e.addLineCandleDispatch(!1)}},"Candle Stick"))))})),x=a(422);var F=function(){return r.a.createElement(o.a,{store:C},r.a.createElement("div",{className:"App"},r.a.createElement(x.a,{celled:!0},r.a.createElement(x.a.Column,{width:4},r.a.createElement(x.a.Row,{stretched:!0},r.a.createElement(S,null),r.a.createElement("br",null),r.a.createElement(_,null),r.a.createElement("br",null),r.a.createElement(M,null),r.a.createElement("br",null),r.a.createElement(N,null))),r.a.createElement(x.a.Column,{width:12},r.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(403);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[210,1,2]]]);
//# sourceMappingURL=main.6c52f877.chunk.js.map