(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{430:function(e,t,a){e.exports=a(640)},435:function(e,t,a){},61:function(e,t,a){},640:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),o=a.n(r),c=(a(435),a(15)),u=(a(61),a(46)),i=a(289),m=a(290),d=a.n(m),s=a(291),v={displayLine:!0},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LINE_CANDLE":return{displayLine:t.payload};default:return e}},h=a(24),f=new Date,p=(f.setTime(f.getTime()-157248e5),{startDate:f,endDate:new Date}),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_START_DATE":return Object(h.a)({},e,{startDate:t.payload});case"ADD_END_DATE":return Object(h.a)({},e,{endDate:t.payload});default:return e}},b=a(169),k=a.n(b);var g=function(e){return{type:"FETCH_MOMENTUM_DATA_SUCCESS",payload:e}},C=function(e){return{type:"FETCH_MOMENTUM_DATA_FAILURE",payload:e}},S={displayRSI:!0,nForRSI:10,displayTSI:!1,rForTSI:25,sForTSI:13,momentumLoads:0},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,a=e.momentumLoads;switch(t.type){case"DISPLAY_RSI":return Object(h.a)({},e,{displayRSI:t.payload});case"N_FOR_RSI":return Object(h.a)({},e,{nForRSI:t.payload});case"DISPLAY_TSI":return Object(h.a)({},e,{displayTSI:t.payload});case"R_FOR_TSI":return Object(h.a)({},e,{rForTSI:t.payload});case"S_FOR_TSI":return Object(h.a)({},e,{sForTSI:t.payload});case"FETCH_MOMENTUM_DATA_REQUEST":return Object(h.a)({},e,{loading:!0});case"FETCH_MOMENTUM_DATA_SUCCESS":return Object(h.a)({},e,{loading:!1,momentumData:t.payload,error:"",momentumLoads:a+1});case"FETCH_MOMENTUM_DATA_FAILURE":return Object(h.a)({},e,{loading:!1,momentumData:[],error:t.payload});default:return e}},w={tickers:"AAPL"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TICKER":return{tickers:t.payload};default:return e}},D={loading:!1,stockData:[],error:"",apiString:"AAPL/2020-4-21/2020-10-20",loads:0},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,a=e.loads;switch(t.type){case"FETCH_STOCK_DATA_REQUEST":return Object(h.a)({},e,{loading:!0});case"FETCH_STOCK_DATA_SUCCESS":return{loading:!1,stockData:t.payload,error:"",loads:a+1};case"FETCH_STOCK_DATA_FAILURE":return{loading:!1,stockData:[],error:t.payload};case"REQUEST_API_CALL_INFO":return{apiString:t.payload};default:return e}},R=Object(u.combineReducers)({tickersFromRootReducer:O,datesFromRootReducer:y,chartsFromRootReducer:E,momentumFromRootReducer:x,stockDataFromRootReducer:j}),T=Object(u.createStore)(R,Object(i.composeWithDevTools)(Object(u.applyMiddleware)(d.a,s.a))),F=a(11),I=function(e){return{type:"ADD_START_DATE",payload:e}},A=function(e){return{type:"ADD_END_DATE",payload:e}};var _=function(e){return{type:"FETCH_STOCK_DATA_SUCCESS",payload:e}},L=function(e){return{type:"FETCH_STOCK_DATA_FAILURE",payload:e}},M=a(657),P=a(655),U=a(645),Y=a(58);var N=Object(c.b)((function(e){return{tickers:e.tickersFromRootReducer.tickers}}),(function(e){return{addTickerDispatch:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"AAPL";return{type:"ADD_TICKER",payload:e}}(t))}}}))((function(e){var t=Object(n.useState)(""),a=Object(F.a)(t,2),r=a[0],o=a[1];return l.a.createElement("div",null,l.a.createElement(M.a,null,l.a.createElement(P.a,{placeholder:"Add ticker ex) APPL",value:r,name:"newTicker",onChange:function(e){return o(e.target.value)},isClearable:!0}),l.a.createElement(U.a,{animated:!0,primary:!0,onClick:function(t){return e.addTickerDispatch(r)}},l.a.createElement(U.a.Content,{visible:!0},"Go!"),l.a.createElement(U.a.Content,{hidden:!0},l.a.createElement(Y.a,{name:"arrow right"})))))})),H=a(661);var q=Object(c.b)(null,(function(e){return{addStartDateDispatch:function(t){return e(I(t))},addEndDateDispatch:function(t){return e(A(t))}}}))((function(e){var t=Object(n.useState)("6m"),a=Object(F.a)(t,2),r=a[0],o=a[1],c=new Date,u=(c.setTime(c.getTime()-157248e5),Object(n.useState)(c)),i=Object(F.a)(u,2),m=(i[0],i[1]),d=Object(n.useState)(new Date),s=Object(F.a)(d,2),v=s[0];function E(t,a){o(a);var n=new Date;n.setTime(n.getTime()-864e5*t);m(n),e.addStartDateDispatch(n),e.addEndDateDispatch(v)}return s[1],l.a.createElement("div",null,l.a.createElement(H.a,{widths:4},l.a.createElement(H.a.Item,{name:"5d",active:"5d"===r,onClick:function(){return E(8,"5d")}},"5 d"),l.a.createElement(H.a.Item,{name:"1m",active:"1m"===r,onClick:function(){return E(30,"1m")}},"1 m"),l.a.createElement(H.a.Item,{name:"6m",active:"6m"===r,onClick:function(){return E(180,"6m")}},"6 m"),l.a.createElement(H.a.Item,{name:"1y",active:"1y"===r,onClick:function(){return E(365,"1y")}},"1 y")))})),B=a(190),K=a.n(B),W=(a(92),a(662));var V=Object(c.b)(null,(function(e){return{addStartDateDispatch:function(t){return e(I(t))},addEndDateDispatch:function(t){return e(A(t))}}}))((function(e){var t=new Date,a=(t.setTime(t.getTime()-157248e5),Object(n.useState)(t)),r=Object(F.a)(a,2),o=r[0],c=r[1],u=Object(n.useState)(new Date),i=Object(F.a)(u,2),m=i[0],d=i[1];return l.a.createElement("div",null,l.a.createElement(W.a,{as:"h4"},"Custom Dates"),l.a.createElement("br",null),"Start:",l.a.createElement(K.a,{selected:o,maxDate:new Date,onChange:function(t){return function(t){t!==o&&(c(t),e.addStartDateDispatch(t))}(t)},placeholderText:"MM/DD/YYYY",isClearable:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0}),l.a.createElement("br",null),"End:",l.a.createElement(K.a,{selected:m,maxDate:new Date,onChange:function(t){return function(t){t!==m&&(d(t),e.addEndDateDispatch(t))}(t)},placeholderText:"MM/DD/YYYY",isClearable:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0}))}));var J=Object(c.b)(null,(function(e){return{addLineCandleDispatch:function(t){return e({type:"ADD_LINE_CANDLE",payload:t})}}}))((function(e){var t=Object(n.useState)(!0),a=Object(F.a)(t,2),r=a[0],o=a[1];return l.a.createElement("div",null,l.a.createElement(M.a,null,l.a.createElement(M.a.Field,null,l.a.createElement(U.a,{toggle:!0,active:r,onClick:function(t,a){a.value;1!=r&&(o(!0),e.addLineCandleDispatch(!0))}},"Line Chart"),l.a.createElement(U.a,{toggle:!0,active:!r,onClick:function(t,a){a.value;0!=r&&(o(!1),e.addLineCandleDispatch(!1))}},"Candle Stick"))))})),Q=a(167),G=a(286),$=a(285),z=a(7);var X=Object(c.b)((function(e){return{tickers:e.tickersFromRootReducer.tickers,startDate:e.datesFromRootReducer.startDate,endDate:e.datesFromRootReducer.endDate,stockData:e.stockDataFromRootReducer.stockData,fetchStockData:e.stockDataFromRootReducer.fetchStockData,displayLine:e.chartsFromRootReducer.displayLine}}),(function(e){return{fetchStockData:function(t){return e((a=t,function(e){k()({method:"get",url:"/get_stock_data/"+a}).then((function(t){var a=t.data;e(_(a))})).catch((function(t){e(L(t.message))}))}));var a}}}))((function(e){var t=Object(n.useRef)(null),a=Object(n.useRef)(null);function r(e){return String(e.getFullYear())+"-"+String(e.getMonth()+1)+"-"+String(e.getDate())}return Object(n.useRef)(null),Object(n.useEffect)((function(){e.fetchStockData(String(e.tickers+"/"+r(e.startDate)+"/"+r(e.endDate)))}),[e.tickers,e.startDate,e.endDate]),e.stockData.length>1&&(function(t){var a=e.stockData,n=Object(z.k)(t.current);n.selectAll("g").remove();var l=z.o("%Y-%m-%d"),r={top:10,right:30,bottom:5,left:40},o=Object(z.h)().domain(z.l.range(l(a[0].date),+l(a[a.length-1].date)+1).filter((function(e){return 0!==e.getUTCDay()&&6!==e.getUTCDay()}))).range([r.left,700-r.right]).padding(.2),c=Object(z.i)().domain([z.g(a,(function(e){return e.low})),z.f(a,(function(e){return e.high}))]).rangeRound([350-r.bottom,r.top]);if(n.attr("viewBox",[0,0,700,350]),n.append("g").call((function(e){return e.attr("transform","translate(0,".concat(350-r.bottom,")")).call(z.a(o).tickValues(z.n.every(a.length>2?a.length>15?4:2:1).range(l(a[0].date),l(a[a.length-1].date))).tickFormat(z.m("%-m/%-d"))).call((function(e){return e.select(".domain").remove()}))})),n.append("g").call((function(e){return e.attr("transform","translate(".concat(r.left,",0)")).call(z.b(c).tickFormat(z.d("$~f")).tickValues(z.i().domain(c.domain()).ticks())).call((function(e){return e.selectAll(".tick line").clone().attr("stroke-opacity",0).attr("x2",700-r.left-r.right)})).call((function(e){return e.select(".domain").remove()}))})),e.displayLine){n.selectAll("g").selectAll(".candleStick").remove();var u=n.append("g").attr("stroke-linecap","round").attr("stroke","black").selectAll("g").data(a).join("g"),i=Object(z.e)().x((function(e){return o(l(e.date))+o.bandwidth()/2})).y((function(e){return c(e.close)})).curve(z.c);u.append("path").attr("class","line-path").attr("d",i(a)).attr("id","lineChart").attr("fill","none").attr("stroke-width",3).attr("stroke-linecap","round")}else{n.selectAll("g").selectAll(".lineChart").remove();var m=n.append("g").attr("stroke-linecap","round").attr("stroke","black").selectAll("g").data(a).join("g").attr("transform",(function(e){return"translate(".concat(o(l(e.date))+o.bandwidth()/2,",0)")}));m.append("line").attr("y1",(function(e){return c(e.low)})).attr("y2",(function(e){return c(e.high)})),m.append("line").attr("y1",(function(e){return c(e.open)})).attr("y2",(function(e){return c(e.close)})).attr("id","candleStick").attr("stroke-width",o.bandwidth()).attr("stroke",(function(e){return e.open>e.close?z.j[0]:e.close>e.open?z.j[2]:z.j[8]}))}n.node()}(t),function(e,t){var a=Object($.a)(t.current);a.selectAll("g").remove();var n=5,l=30,r=50,o=40,c=z.o("%Y-%m-%d");a.attr("viewBox",[0,0,700,150]);var u=150-n-r,i=Object(Q.a)().domain(z.l.range(c(e[0].date),+c(e[e.length-1].date)+1).filter((function(e){return 0!==e.getUTCDay()&&6!==e.getUTCDay()}))).range([o,700-l]).padding(.2),m=Object(G.a)().domain([0,z.f(e,(function(e){return e.volume}))]).rangeRound([0,u]);a.append("g").call((function(t){return t.attr("transform","translate(0,".concat(150-r,")")).call(z.a(i).tickValues(z.n.every(e.length>2?e.length>15?4:2:1).range(c(e[0].date),c(e[e.length-1].date))).tickFormat(z.m("%-m/%-d"))).call((function(e){return e.select(".domain").remove()}))})),a.append("g").call((function(e){return e.attr("transform","translate(".concat(o,",0)")).call(z.b(m).ticks(0)).call((function(e){return e.select(".domain").remove()}))})),a.append("g").selectAll("g").data(e).join("g").attr("transform",(function(e){return"translate(".concat(i(c(e.date)),",0)")})).append("rect").attr("width",(function(e){return i.bandwidth()+i.padding()})).attr("height",(function(e){return m(e.volume)})).attr("fill",(function(e){return e.open>e.close?z.j[0]:e.close>e.open?z.j[2]:z.j[8]})).attr("transform","translate(".concat(i.bandwidth(),",").concat(u,")  rotate(180)")),a.node()}(e.stockData,a)),e.stockData.loading?l.a.createElement("h2",null,"Loading"):e.stockData.error?l.a.createElement("h2",null,e.stockData.error):l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("svg",{ref:t})))}));var Z=Object(c.b)((function(e){return{stockData:e.stockDataFromRootReducer.stockData,displayLine:e.chartsFromRootReducer.displayLine}}),null)((function(e){var t=Object(n.useRef)(null);return e.stockData.length>1&&function(t){var a=e.stockData,n=Object(z.k)(t.current);n.selectAll("g").remove();var l={top:5,right:30,bottom:50,left:40},r=z.o("%Y-%m-%d");n.attr("viewBox",[0,0,700,150]);var o=150-l.top-l.bottom,c=Object(z.h)().domain(z.l.range(r(a[0].date),+r(a[a.length-1].date)+1).filter((function(e){return 0!==e.getUTCDay()&&6!==e.getUTCDay()}))).range([l.left,700-l.right]).padding(.2),u=Object(z.i)().domain([0,z.f(a,(function(e){return e.volume}))]).rangeRound([0,o]);n.append("g").call((function(e){return e.attr("transform","translate(0,".concat(150-l.bottom,")")).call(z.a(c).tickValues(z.n.every(a.length>2?a.length>15?4:2:1).range(r(a[0].date),r(a[a.length-1].date))).tickFormat(z.m("%-m/%-d"))).call((function(e){return e.select(".domain").remove()}))})),n.append("g").call((function(e){return e.attr("transform","translate(".concat(l.left,",0)")).call(z.b(u).ticks(0)).call((function(e){return e.select(".domain").remove()}))})),n.append("g").selectAll("g").data(a).join("g").attr("transform",(function(e){return"translate(".concat(c(r(e.date)),",0)")})).append("rect").attr("width",(function(e){return c.bandwidth()+c.padding()})).attr("height",(function(e){return u(e.volume)})).attr("fill",(function(e){return e.open>e.close?z.j[0]:e.close>e.open?z.j[2]:z.j[8]})).attr("transform","translate(".concat(c.bandwidth(),",").concat(o,")  rotate(180)")),n.node()}(t),e.stockData.loading?l.a.createElement("h2",null,"Loading"):e.stockData.error?l.a.createElement("h2",null,e.stockData.error):l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("svg",{ref:t})))})),ee=a(663),te=a(658),ae=a(654),ne=a(656),le=a(659),re=a(311),oe=a.n(re);var ce=Object(c.b)((function(e){return{nForRSI:e.momentumFromRootReducer.nForRSI}}),(function(e){return{nForRSIdispatch:function(t){return e({type:"N_FOR_RSI",payload:t})}}}))((function(e){return l.a.createElement(ee.a,{columns:"equal"},l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),"'Period in Trading Days (n):'"),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:[{key:"one",text:"1",value:1},{key:"two",text:"2",value:2},{key:"three",text:"3",value:3},{key:"four",text:"4",value:4},{key:"five",text:"5",value:5},{key:"six",text:"6",value:6},{key:"seven",text:"7",value:7},{key:"eight",text:"8",value:8},{key:"nine",text:"9",value:9},{key:"ten",text:"10",value:10},{key:"eleven",text:"11",value:11},{key:"twelve",text:"12",value:12},{key:"thirteen",text:"13",value:13},{key:"fourteen",text:"14",value:14},{key:"fifteen",text:"15",value:15},{key:"sixteen",text:"16",value:16},{key:"seventeen",text:"17",value:17},{key:"eighteen",text:"18",value:18},{key:"ninteen",text:"19",value:19},{key:"twenty",text:"20",value:20},{key:"twentyone",text:"21",value:21},{key:"twentytwo",text:"22",value:22},{key:"twentythree",text:"23",value:23},{key:"twentyfour",text:"24",value:24},{key:"twentyfive",text:"25",value:25},{key:"twentysix",text:"26",value:26},{key:"twentyseven",text:"27",value:27},{key:"twentyeight",text:"28",value:28},{key:"twentynine",text:"29",value:29},{key:"thirty",text:"30",value:30},{key:"thirtyone",text:"31",value:31},{key:"thirtytwo",text:"32",value:32},{key:"thirtythree",text:"33",value:33},{key:"thirtyfour",text:"34",value:34},{key:"thirtyfive",text:"35",value:35}],placeholder:"10",compact:!0,onChange:function(t,a){e.nForRSIdispatch(a.value)}})))}));var ue=Object(c.b)((function(e){return{rForTSI:e.momentumFromRootReducer.rForTSI,sForTSI:e.momentumFromRootReducer.sForTSI}}),(function(e){return{rForTSIdispatch:function(t){return e({type:"R_FOR_TSI",payload:t})},sForTSIdispatch:function(t){return e({type:"S_FOR_TSI",payload:t})}}}))((function(e){var t=[{key:"one",text:"1",value:1},{key:"two",text:"2",value:2},{key:"three",text:"3",value:3},{key:"four",text:"4",value:4},{key:"five",text:"5",value:5},{key:"six",text:"6",value:6},{key:"seven",text:"7",value:7},{key:"eight",text:"8",value:8},{key:"nine",text:"9",value:9},{key:"ten",text:"10",value:10},{key:"eleven",text:"11",value:11},{key:"twelve",text:"12",value:12},{key:"thirteen",text:"13",value:13},{key:"fourteen",text:"14",value:14},{key:"fifteen",text:"15",value:15},{key:"sixteen",text:"16",value:16},{key:"seventeen",text:"17",value:17},{key:"eighteen",text:"18",value:18},{key:"ninteen",text:"19",value:19},{key:"twenty",text:"20",value:20},{key:"twentyone",text:"21",value:21},{key:"twentytwo",text:"22",value:22},{key:"twentythree",text:"23",value:23},{key:"twentyfour",text:"24",value:24},{key:"twentyfive",text:"25",value:25},{key:"twentysix",text:"26",value:26},{key:"twentyseven",text:"27",value:27},{key:"twentyeight",text:"28",value:28},{key:"twentynine",text:"29",value:29},{key:"thirty",text:"30",value:30},{key:"thirtyone",text:"31",value:31},{key:"thirtytwo",text:"32",value:32},{key:"thirtythree",text:"33",value:33},{key:"thirtyfour",text:"34",value:34},{key:"thirtyfive",text:"35",value:35}];return l.a.createElement(ee.a,{columns:"equal"},l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),"'High Period (r):'"),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:t,placeholder:"25",compact:!0,onChange:function(t,a){e.rForTSIdispatch(a.value)}})),l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),"'Low Period (s):'"),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:t,placeholder:"13",compact:!0,onChange:function(t,a){e.sForTSIdispatch(a.value)}})))}));var ie=Object(c.b)((function(e){return{displayRSI:e.momentumFromRootReducer.displayRSI,nForRSI:e.momentumFromRootReducer.nForRSI}}),(function(e){return{displayRSIdispatch:function(t){return e({type:"DISPLAY_RSI",payload:t})},displayTSIdispatch:function(t){return e({type:"DISPLAY_TSI",payload:t})}}}))((function(e){var t,a=Object(n.useState)(-1),r=Object(F.a)(a,2),o=r[0],c=r[1],u=Object(n.useState)(-1),i=Object(F.a)(u,2),m=i[0],d=i[1],s=Object(n.useState)(!1),v=Object(F.a)(s,2),E=v[0],h=v[1],f=Object(n.useState)(7),p=Object(F.a)(f,2),y=(p[0],p[1]),b=Object(n.useState)(14),k=Object(F.a)(b,2),g=(k[0],k[1]),C=Object(n.useState)(28),S=Object(F.a)(C,2),x=(S[0],S[1]),w=Object(n.useState)(4),O=Object(F.a)(w,2),D=(O[0],O[1]),j=Object(n.useState)(2),R=Object(F.a)(j,2),T=(R[0],R[1]),I=Object(n.useState)(1),A=Object(F.a)(I,2),_=(A[0],A[1]),L=Object(n.useState)(-1),P=Object(F.a)(L,2),U=P[0],Y=P[1],N=Object(n.useState)(!1),q=Object(F.a)(N,2),B=q[0],K=q[1],W=Object(n.useState)(14),V=Object(F.a)(W,2),J=(V[0],V[1]),Q=Object(n.useState)(3),G=Object(F.a)(Q,2),$=(G[0],G[1]),z=Object(n.useState)(-1),X=Object(F.a)(z,2),Z=X[0],re=X[1],ie=Object(n.useState)(!1),me=Object(F.a)(ie,2),de=me[0],se=me[1],ve=Object(n.useState)(14),Ee=Object(F.a)(ve,2),he=(Ee[0],Ee[1]),fe=Object(n.useState)(3),pe=Object(F.a)(fe,2),ye=(pe[0],pe[1]),be=Object(n.useState)(-1),ke=Object(F.a)(be,2),ge=ke[0],Ce=ke[1],Se=Object(n.useState)(!1),xe=Object(F.a)(Se,2),we=xe[0],Oe=xe[1],De=Object(n.useState)(14),je=Object(F.a)(De,2),Re=(je[0],je[1]),Te=Object(n.useState)(-1),Fe=Object(F.a)(Te,2),Ie=Fe[0],Ae=Fe[1],_e=Object(n.useState)(!1),Le=Object(F.a)(_e,2),Me=Le[0],Pe=Le[1],Ue=Object(n.useState)(5),Ye=Object(F.a)(Ue,2),Ne=(Ye[0],Ye[1]),He=Object(n.useState)(34),qe=Object(F.a)(He,2),Be=(qe[0],qe[1]),Ke=Object(n.useState)(-1),We=Object(F.a)(Ke,2),Ve=We[0],Je=We[1],Qe=Object(n.useState)(!1),Ge=Object(F.a)(Qe,2),$e=Ge[0],ze=Ge[1],Xe=Object(n.useState)(10),Ze=Object(F.a)(Xe,2),et=(Ze[0],Ze[1]),tt=Object(n.useState)(2),at=Object(F.a)(tt,2),nt=(at[0],at[1]),lt=Object(n.useState)(30),rt=Object(F.a)(lt,2),ot=(rt[0],rt[1]),ct=Object(n.useState)(-1),ut=Object(F.a)(ct,2),it=ut[0],mt=ut[1],dt=Object(n.useState)(!1),st=Object(F.a)(dt,2),vt=st[0],Et=st[1],ht=Object(n.useState)(12),ft=Object(F.a)(ht,2),pt=(ft[0],ft[1]),yt=Object(n.useState)(-1),bt=Object(F.a)(yt,2),kt=bt[0],gt=bt[1],Ct=l.a.createElement(ee.a,{columns:"equal"},l.a.createElement(ee.a.Column,{width:2},l.a.createElement(ae.a,{borderless:!0,index:1,defaultChecked:!0,onClick:function(t){t.stopPropagation(),e.displayRSIdispatch(!e.displayRSI)}})),l.a.createElement(ee.a.Column,null,l.a.createElement("h5",null,"Relative Strength Index"))),St=l.a.createElement(ee.a,{columns:"equal"},l.a.createElement(ee.a.Column,{width:2},l.a.createElement(ae.a,{borderless:!0,index:1,onClick:function(t){t.stopPropagation(),e.displayTSIdispatch(!e.displayTSI)}})),l.a.createElement(ee.a.Column,null,l.a.createElement("h5",null,"True Strength Index"))),xt=Ut(h,E,"Ultimate Oscillator"),wt=Ut(K,B,"Stochastic Oscillator"),Ot=Ut(se,de,"Stochastic Oscillator Signal"),Dt=Ut(Oe,we,"Williams %R"),jt=Ut(Pe,Me,"Awesome Oscillator"),Rt=Ut(ze,$e,"Kaufmans Adaptive Moving Average"),Tt=Ut(Et,vt,"Rate-of-Change (ROC) indicator"),Ft=[{key:"one",text:"1",value:1},{key:"two",text:"2",value:2},{key:"three",text:"3",value:3},{key:"four",text:"4",value:4},{key:"five",text:"5",value:5},{key:"six",text:"6",value:6},{key:"seven",text:"7",value:7},{key:"eight",text:"8",value:8},{key:"nine",text:"9",value:9},{key:"ten",text:"10",value:10},{key:"eleven",text:"11",value:11},{key:"twelve",text:"12",value:12},{key:"thirteen",text:"13",value:13},{key:"fourteen",text:"14",value:14},{key:"fifteen",text:"15",value:15},{key:"sixteen",text:"16",value:16},{key:"seventeen",text:"17",value:17},{key:"eighteen",text:"18",value:18},{key:"ninteen",text:"19",value:19},{key:"twenty",text:"20",value:20},{key:"twentyone",text:"21",value:21},{key:"twentytwo",text:"22",value:22},{key:"twentythree",text:"23",value:23},{key:"twentyfour",text:"24",value:24},{key:"twentyfive",text:"25",value:25},{key:"twentysix",text:"26",value:26},{key:"twentyseven",text:"27",value:27},{key:"twentyeight",text:"28",value:28},{key:"twentynine",text:"29",value:29},{key:"thirty",text:"30",value:30},{key:"thirtyone",text:"31",value:31},{key:"thirtytwo",text:"32",value:32},{key:"thirtythree",text:"33",value:33},{key:"thirtyfour",text:"34",value:34},{key:"thirtyfive",text:"35",value:35}],It=Yt(["Short Period (s):","Medium Period (m): ","Long Period (l)","Weight of Short BP Average (ws):","Weight of Medium BP Average (wm):","Weight of Long BP Average"],["7","14","28","4","2","1"],[y,g,x,D,T,_]),At=Yt(["Period of Trading Days:","Simple Moving Average Period:"],["14","3"],[J,$]),_t=Yt(["Period of Trading Days:","Simple Moving Average Period:"],["14","3"],[he,ye]),Lt=Yt(["Lookback Period:"],["14"],[Re]),Mt=Yt(["Short Period (s):","Long Period (l):"],["5","34"],[Ne,Be]),Pt=(Yt(["Periods for Efficiency Ratio (n):","Periods for Fast EMA Constant:","Periods for Slow EMA Constant:"],["10","2","30"],[et,nt,ot]),Yt(["Number of Periods (n):"],["12"],[pt]));function Ut(e,t,a){return l.a.createElement(ee.a,{columns:"equal"},l.a.createElement(ee.a.Column,{width:2},l.a.createElement(ae.a,{borderless:!0,index:1,onClick:function(a){a.stopPropagation(),e(!t)}})),l.a.createElement(ee.a.Column,null,l.a.createElement("h5",null,a)))}function Yt(e,t,a){return 1==e.length?l.a.createElement(ee.a,{columns:"equal"},l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[0]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[0],compact:!0,onChange:function(e,t){a[0](t.value)}}))):2==e.length?l.a.createElement(ee.a,{columns:"equal"},l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[0]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[0],compact:!0,onChange:function(e,t){a[0](t.value)}}))),l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[1]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[1],compact:!0,onChange:function(e,t){a[1](t.value)}})))):3==e.length?l.a.createElement(ee.a,{columns:"equal"},l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[0]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[0],compact:!0,onChange:function(e,t){a[0](t.value)}}))),l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[1]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[1],compact:!0,onChange:function(e,t){a[1](t.value)}}))),l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[2]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[2],compact:!0,onChange:function(e,t){a[2](t.value)}})))):4==e.length?l.a.createElement(ee.a,{columns:"equal"},l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[0]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[0],compact:!0,onChange:function(e,t){a[0](t.value)}}))),l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[1]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[1],compact:!0,onChange:function(e,t){a[1](t.value)}}))),l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[2]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[2],compact:!0,onChange:function(e,t){a[2](t.value)}}))),l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[3]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[3],compact:!0,onChange:function(e,t){a[3](t.value)}})))):5==e.length?l.a.createElement(ee.a,{columns:"equal"},l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[0]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[0],compact:!0,onChange:function(e,t){a[0](t.value)}}))),l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[1]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[1],compact:!0,onChange:function(e,t){a[1](t.value)}}))),l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[2]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[2],compact:!0,onChange:function(e,t){a[2](t.value)}}))),l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[3]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[3],compact:!0,onChange:function(e,t){a[3](t.value)}}))),l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[4]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[4],compact:!0,onChange:function(e,t){a[4](t.value)}})))):6==e.length?l.a.createElement(ee.a,{columns:"equal"},l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[0]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[0],compact:!0,onChange:function(e,t){a[0](t.value)}}))),l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[1]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[1],compact:!0,onChange:function(e,t){a[1](t.value)}}))),l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[2]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[2],compact:!0,onChange:function(e,t){a[2](t.value)}}))),l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[3]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[3],compact:!0,onChange:function(e,t){a[3](t.value)}}))),l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[4]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[4],compact:!0,onChange:function(e,t){a[4](t.value)}}))),l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.Column,null,l.a.createElement("br",null),e[5]),l.a.createElement(ee.a.Column,{width:4},l.a.createElement(M.a.Field,{control:ne.a,options:Ft,placeholder:t[5],compact:!0,onChange:function(e,t){a[5](t.value)}})))):void 0}return l.a.createElement("div",null,l.a.createElement(ee.a,null,l.a.createElement(oe.a,{trigger:(t="Momentum",l.a.createElement(te.a.Group,null,l.a.createElement(te.a,null,l.a.createElement(te.a.Content,null,l.a.createElement(te.a.Header,{as:"a"},t),l.a.createElement("br",null)))))},l.a.createElement(ee.a.Row,{stretched:!0},l.a.createElement("div",{id:"accordionIndicators"},l.a.createElement(le.a,{as:H.a,vertical:!0,fluid:!0,borderless:!0},l.a.createElement(H.a.Item,{borderless:!0},l.a.createElement(le.a.Title,{active:0===o,content:Ct,index:0,borderless:!0,onClick:function(e,t){c(t.index===o?-1:t.index)}}),l.a.createElement(le.a.Content,{borderless:!0,active:0===o,content:l.a.createElement(ce,null)})),l.a.createElement(H.a.Item,{borderless:!0},l.a.createElement(le.a.Title,{active:0===m,content:St,index:0,borderless:!0,onClick:function(e,t){d(t.index===m?-1:t.index)}}),l.a.createElement(le.a.Content,{borderless:!0,active:0===m,content:l.a.createElement(ue,null)})),l.a.createElement(H.a.Item,{borderless:!0},l.a.createElement(le.a.Title,{active:0===U,content:xt,index:0,borderless:!0,onClick:function(e,t){Y(t.index===U?-1:t.index)}}),l.a.createElement(le.a.Content,{borderless:!0,active:0===U,content:It})),l.a.createElement(H.a.Item,{borderless:!0},l.a.createElement(le.a.Title,{active:0===Ve,content:jt,index:0,borderless:!0,onClick:function(e,t){Je(t.index===Ve?-1:t.index)}}),l.a.createElement(le.a.Content,{borderless:!0,active:0===Ve,content:Mt})),l.a.createElement(H.a.Item,{borderless:!0},l.a.createElement(le.a.Title,{active:0===Z,content:wt,index:0,borderless:!0,onClick:function(e,t){re(t.index===Z?-1:t.index)}}),l.a.createElement(le.a.Content,{borderless:!0,active:0===Z,content:At})),l.a.createElement(H.a.Item,{borderless:!0},l.a.createElement(le.a.Title,{active:0===ge,content:Ot,index:0,borderless:!0,onClick:function(e,t){Ce(t.index===ge?-1:t.index)}}),l.a.createElement(le.a.Content,{borderless:!0,active:0===ge,content:_t})),l.a.createElement(H.a.Item,{borderless:!0},l.a.createElement(le.a.Title,{active:0===Ie,content:Dt,index:0,borderless:!0,onClick:function(e,t){Ae(t.index===Ie?-1:t.index)}}),l.a.createElement(le.a.Content,{borderless:!0,active:0===Ie,content:Lt})),l.a.createElement(H.a.Item,{borderless:!0},l.a.createElement(le.a.Title,{active:0===it,content:Rt,index:0,borderless:!0,onClick:function(e,t){mt(t.index===it?-1:t.index)}}),l.a.createElement(le.a.Content,{borderless:!0,active:0===it,content:Pt})),l.a.createElement(H.a.Item,{borderless:!0},l.a.createElement(le.a.Title,{active:0===kt,content:Tt,index:0,borderless:!0,onClick:function(e,t){gt(t.index===kt?-1:t.index)}}),l.a.createElement(le.a.Content,{borderless:!0,active:0===kt,content:Pt}))))))))}));var me=Object(c.b)((function(e){return{stockData:e.stockDataFromRootReducer.stockData,loads:e.stockDataFromRootReducer.loads,momentumLoads:e.momentumFromRootReducer.momentumLoads,momentumData:e.momentumFromRootReducer.momentumData,fetchMomentumData:e.momentumFromRootReducer.fetchMomentumData,displayRSI:e.momentumFromRootReducer.displayRSI,nForRSI:e.momentumFromRootReducer.nForRSI,displayTSI:e.momentumFromRootReducer.displayTSI,rForTSI:e.momentumFromRootReducer.rForTSI,sForTSI:e.momentumFromRootReducer.sForTSI}}),(function(e){return{fetchMomentumData:function(t){return e((a=t,function(e){fetch("/calculate_Momentum_Indicators/",{method:"POST",headers:{"Content-Type":"application/json"},body:a}).then((function(e){return e.json()})).then((function(t){console.log(t),e(g(t))})).catch((function(t){e(C(t.message))}))}));var a}}}))((function(e){var t=Object(n.useRef)(null);if(Object(n.useEffect)((function(){if(e.loads>0){var t={N:e.nForRSI},a={displayTSI:e.displayTSI,rTSI:e.rForTSI,sTSI:e.sForTSI};e.fetchMomentumData(JSON.stringify([e.stockData,t,a]))}}),[e.stockData,e.displayTSI,e.displayRSI]),e.momentumLoads>0){!function(t){var a=e.momentumData,n=Object(z.k)(t.current);n.selectAll("g").remove();var l=5,r=30,o=50,c=40,u=z.o("%Y-%m-%d"),i=Object(z.h)().domain(z.l.range(u(a[0].date),+u(a[a.length-1].date)+1).filter((function(e){return 0!==e.getUTCDay()&&6!==e.getUTCDay()}))).range([c,700-r]).padding(.2),m=Object(z.i)().domain([z.g(a,(function(e){return e.rsi})),z.f(a,(function(e){return e.rsi}))]).rangeRound([150-o,l]);n.attr("viewBox",[0,0,700,150]),n.append("g").call((function(e){return e.attr("transform","translate(0,".concat(150-o,")")).call(z.a(i).tickValues(z.n.every(a.length>2?a.length>15?4:2:1).range(u(a[0].date),u(a[a.length-1].date))).tickFormat(z.m("%-m/%-d"))).call((function(e){return e.select(".domain").remove()}))})),n.append("g").call((function(e){return e.attr("transform","translate(".concat(c,",0)")).call(z.b(m).tickFormat(z.d("~f")).tickValues(z.i().domain(m.domain()).ticks())).call((function(e){return e.selectAll(".tick line").clone().attr("stroke-opacity",0).attr("x2",700-c-r)})).call((function(e){return e.select(".domain").remove()}))}));var d=n.append("g").attr("stroke-linecap","round").attr("stroke","red").selectAll("g").data(a).join("g"),s=Object(z.e)().x((function(e){return i(u(e.date))+i.bandwidth()/2})).y((function(e){return m(e.rsi)})).curve(z.c);if(e.displayRSI?d.append("path").attr("class","line-path").attr("id","rsi").attr("d",s(a)).attr("fill","none").attr("stroke-width",3).attr("stroke-linecap","round"):n.selectAll("g").selectAll(".rsi").remove(),e.displayTSI){var v=n.append("g").attr("stroke-linecap","round").attr("stroke","blue").selectAll("g").data(a).join("g"),E=Object(z.e)().x((function(e){return i(u(e.date))+i.bandwidth()/2})).y((function(e){return m(e.tsi)})).curve(z.c);v.append("path").attr("class","line-path").attr("id","tsi").attr("d",E(a)).attr("fill","none").attr("stroke-width",3).attr("stroke-linecap","round")}else n.selectAll("g").selectAll(".tsi").remove();n.node()}(t)}return e.stockData.loading?l.a.createElement("h2",null,"Loading"):e.stockData.error?l.a.createElement("h2",null,e.stockData.error):l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("svg",{ref:t})))}));var de=function(){return l.a.createElement(c.a,{store:T},l.a.createElement("div",{className:"App"},l.a.createElement(ee.a,{celled:!0},l.a.createElement(ee.a.Column,{width:4},l.a.createElement(ee.a.Row,{stretched:!0},l.a.createElement(N,null),l.a.createElement("br",null),l.a.createElement(q,null),l.a.createElement("br",null),l.a.createElement(V,null),l.a.createElement("br",null),l.a.createElement(J,null),l.a.createElement("br",null),l.a.createElement(ie,null))),l.a.createElement(ee.a.Column,{width:12},l.a.createElement(X,null),l.a.createElement("br",null),l.a.createElement(Z,null),l.a.createElement("br",null),l.a.createElement(me,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(639);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[430,1,2]]]);
//# sourceMappingURL=main.51c55968.chunk.js.map