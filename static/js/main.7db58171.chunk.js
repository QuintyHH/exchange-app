(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,n,t){e.exports=t(53)},52:function(e,n,t){},53:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(17),u=t(21),i=t(18),o=t.n(i),l=t(22),s=t(23),d=(new Date).toISOString().slice(0,10),f={currencyList:[],base:"GBP",selectedDate:d,currencyValueList:{}},b=function(e,n){var t=Object(s.a)({},e);switch(n.type){case"[CurrencyList] ==> INIT":t.currencyList=Object(l.a)(n.newCurrencyList);break;case"[CurrencyList] ==> UPDATE_BASE":t.base=n.base;break;case"[CurrencyList] ==> UPDATE_DATE":t.selectedDate=n.date;break;case"[CurrencyList] ==> UPDATE VALUE LIST":t.currencyValueList=n.currencyValueList;break;default:return t}return t},p=t(2),y=t(3);function v(){var e=Object(p.a)(["\n\n  font-size: 15px;\n  flex-grow: 1;\n  padding: 5px;\n  margin-right: 10px;\n  text-align: right;\n  justify-content: center;\n  color: white;\n  height: 100%;\n"]);return v=function(){return e},e}function g(){var e=Object(p.a)(["\n  background-color: white;\n  min-width: 30px;\n  border-radius: 10px;\n  padding: 5px;\n  font-size: 15px;\n  text-align: center;\n"]);return g=function(){return e},e}function m(){var e=Object(p.a)(["\n  display: flex;\n  background-color: #036;\n  font-size: 12px;\n  justify-content: space-between;\n  box-sizing: border-box;\n  border: 1px solid #000000;\n  border-radius : 10px;\n  margin-bottom: 6px;\n  transition: 0.25s;\n\n  &:hover {\n    transform: scale(1.06)\n  }\n"]);return m=function(){return e},e}var x=y.a.div(m()),E=y.a.div(g()),h=y.a.div(v()),L=function(e){var n=e.currency,t=e.value;return t=t.toFixed(2),a.a.createElement(x,null,a.a.createElement(E,null,n),a.a.createElement(h,null,t))};function j(){var e=Object(p.a)(["\n  margin: 20px;\n  text-align: center;\n"]);return j=function(){return e},e}function w(){var e=Object(p.a)(["\nmargin-left: 10px;\n"]);return w=function(){return e},e}function O(){var e=Object(p.a)(["\n  display:flex;\n  margin: 20px auto;\n  justify-content: center;\n"]);return O=function(){return e},e}function C(){var e=Object(p.a)(["\n  width: 100%;\n  border: 3px solid black;\n"]);return C=function(){return e},e}var k=y.a.div(C()),A=y.a.div(O()),D=y.a.div(w()),T=y.a.h1(j()),U=function(){var e=Object(r.useReducer)(b,f),n=Object(u.a)(e,2),t=n[0],c=(t=void 0===t?f:t).currencyList,i=t.base,l=t.selectedDate,s=t.currencyValueList,p=n[1];Object(r.useEffect)(function(){l&&o.a.get("https://api.exchangeratesapi.io/".concat(l,"?base=").concat(i)).then(function(e){var n=e.data;!c.length&&function(e){var n=Object.keys(e.rates);p(function(e){return{type:"[CurrencyList] ==> INIT",newCurrencyList:e}}(n))}(n),function(e){var n=e.rates;p({type:"[CurrencyList] ==> UPDATE VALUE LIST",currencyValueList:n})}(n)})},[i,l,c.length]);return a.a.createElement(k,null,a.a.createElement(T,null,a.a.createElement("h1",null,"exchangeRate")),a.a.createElement(A,null,a.a.createElement("input",{type:"date",style:{borderRadius:10},onChange:function(e){var n=e.target.value;p({type:"[CurrencyList] ==> UPDATE_DATE",date:n})},defaultValue:d,max:d}),a.a.createElement(D,null,a.a.createElement("select",{style:{padding:4,borderRadius:10},onChange:function(e){var n=e.target.value;p({type:"[CurrencyList] ==> UPDATE_BASE",base:n})}},c.map(function(e){return a.a.createElement("option",{key:e,selected:e===i,value:e},e)})))),a.a.createElement("div",{style:{columnCount:3,margin:5}},Object.keys(s).map(function(e){var n={currency:e,value:s[e]};return a.a.createElement(L,n)})))},V=(t(52),document.querySelector("#react-renders-here"));Object(c.render)(a.a.createElement(U,null),V)}},[[26,1,2]]]);
//# sourceMappingURL=main.7db58171.chunk.js.map