(this.webpackJsonpbuttongame=this.webpackJsonpbuttongame||[]).push([[0],{120:function(e,t){},123:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),s=a.n(c),o=(a(67),a(68),a(5)),l=a(8),u=a.n(l),i=a(13),m=a(9),p=function(e){return{type:"ADD_USERNAME",data:{username:e}}},E=a(21),d=a.n(E),v=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("In login"),e.next=3,d.a.post("https://buttongame2020.herokuapp.com/login",t);case 3:return a=e.sent,console.log(a),e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=a(6),g=a(10),b=a(17),O=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(""),l=Object(m.a)(s,2),E=l[0],d=l[1],O=Object(r.useState)(null),S=Object(m.a)(O,2),h=S[0],w=S[1],_=Object(o.b)(),C=function(){var e=Object(i.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v({username:a,password:E});case 4:r=e.sent,_(p(r.username)),_({type:"ADD_SCORE",data:{score:r.score}}),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Problems with login: ".concat(e.t0)),w("Username or password incorrect. Try again!"),c(""),d("");case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"form"},n.a.createElement("h2",null,"Login"),h&&n.a.createElement(b.a,{variant:"info"},h),n.a.createElement(f.a,{onSubmit:C},n.a.createElement(f.a.Group,null,n.a.createElement(f.a.Label,{htmlFor:"usernameLogin"},"Username"),n.a.createElement(f.a.Control,{type:"text",value:a,name:"username",id:"usernameLogin",required:!0,onChange:function(e){var t=e.target;return c(t.value)}})),n.a.createElement(f.a.Group,null,n.a.createElement(f.a.Label,{htmlFor:"passwordLogin"},"Password"),n.a.createElement(f.a.Control,{type:"password",value:E,name:"password",id:"passwordLogin",required:!0,onChange:function(e){var t=e.target;return d(t.value)}})),n.a.createElement(g.a,{variant:"light",className:"green-button",type:"submit"},"Login")))},S=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("https://buttongame2020.herokuapp.com/register",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(""),l=Object(m.a)(s,2),E=l[0],d=l[1],v=Object(r.useState)(""),O=Object(m.a)(v,2),h=O[0],w=O[1],_=Object(r.useState)(null),C=Object(m.a)(_,2),y=C[0],j=C[1],P=Object(o.b)(),k=function(){var e=Object(i.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),E!==h){e.next=18;break}return e.prev=2,e.next=5,S({username:a,password:E});case 5:(r=e.sent).data.errors?(console.log("Username already in use. Pick another username."),j("Username already in use. Pick another one."),c(""),d(""),w("")):(P(p(r.data.username)),P({type:"CREATE_SCORE",data:{score:20}})),e.next=16;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("Could not register user: ".concat(e.t0)),j("Could not register user. Try again!"),c(""),d(""),w("");case 16:e.next=22;break;case 18:console.log("Passwords do not match"),j("Passwords do not match. Try again!"),d(""),w("");case 22:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"form"},n.a.createElement("p",{id:"instruction"},"Or if this is your first time here:"),n.a.createElement("h2",null,"Register"),y&&n.a.createElement(b.a,{variant:"info"},y),n.a.createElement(f.a,{onSubmit:k},n.a.createElement(f.a.Group,null,n.a.createElement(f.a.Label,{htmlFor:"usernameRegister"},"Username"),n.a.createElement(f.a.Control,{type:"text",value:a,name:"username",id:"usernameRegister",required:!0,onChange:function(e){var t=e.target;return c(t.value)}})),n.a.createElement(f.a.Group,null,n.a.createElement(f.a.Label,{htmlFor:"passwordRegister"},"Password"),n.a.createElement(f.a.Control,{type:"password",value:E,name:"password",id:"passwordRegister",required:!0,onChange:function(e){var t=e.target;return d(t.value)}})),n.a.createElement(f.a.Group,null,n.a.createElement(f.a.Label,{htmlFor:"passwordAgain"},"Password again"),n.a.createElement(f.a.Control,{type:"password",value:h,name:"passwordAgain",id:"passwordAgain",required:!0,onChange:function(e){var t=e.target;return w(t.value)}})),n.a.createElement(g.a,{variant:"light",className:"green-button",type:"submit"},"Register")))},w=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.username}));return n.a.createElement("div",null,n.a.createElement("p",null,"Game over"),n.a.createElement(g.a,{variant:"light",className:"green-button",onClick:function(){e(function(e){return{type:"server/RESTORE_SCORE",data:{username:e,score:20}}}(t))}},"Restart"))},_=function(){var e=Object(o.b)();return n.a.createElement(g.a,{variant:"dark",size:"sm",id:"logout-button",onClick:function(){window.localStorage.removeItem("appState"),e({type:"REMOVE_USERNAME"}),e({type:"REMOVE_SCORE"})}},"Logout")},C=function(){var e=Object(o.c)((function(e){return e.allClicks})),t=null;if(e%10===0)t=10;else for(;e%10!==0;)t++,e++;return n.a.createElement("p",{className:"info-text"},"Next award is only ",n.a.createElement("br",null),n.a.createElement("span",null,t),n.a.createElement("br",null)," click",1!==t?"s":""," away!")},y=function(){var e=Object(o.c)((function(e){return e.score}));return n.a.createElement("div",null,n.a.createElement("p",{className:"info-text"},"Your points:"),n.a.createElement("p",{id:"score"},e))},j=function(){var e=Object(r.useState)(null),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(o.b)(),l=Object(o.c)((function(e){return e.allClicks})),u=Object(o.c)((function(e){return e.score})),i=Object(o.c)((function(e){return e.username}));return n.a.createElement("div",null,a&&n.a.createElement(b.a,{variant:"success",id:"award"},n.a.createElement("p",null,a)),n.a.createElement(g.a,{variant:"light",id:"gamebutton",onClick:function(){s(function(e,t,a){var r=t+1;return console.log("Action has clicksBefore: ",t," and adds it to clicks: ",r),r%500===0?{type:"server/PUSH_249_POINTS",data:{username:e,allClicks:r,score:a+249}}:r%100===0?{type:"server/PUSH_39_POINTS",data:{username:e,allClicks:r,score:a+39}}:r%10===0?{type:"server/PUSH_4_POINTS",data:{username:e,allClicks:r,score:a+4}}:{type:"server/PUSH",data:{username:e,allClicks:r,score:a-1}}}(i,l,u));var e=l+1;e%500===0?(c("+ 250"),setTimeout((function(){c(null)}),2e3)):e%100===0?(c("+ 40"),setTimeout((function(){c(null)}),2e3)):e%10===0&&(c("+ 5"),setTimeout((function(){c(null)}),2e3))}}))},P=a(34),k=function(){var e,t,a,r,c=Object(o.c)((function(e){return e.username})),s=Object(o.c)((function(e){return e.score}));return c?(t=n.a.createElement(_,null),s<=0?a=n.a.createElement(w,null):r=n.a.createElement(n.a.Fragment,null,n.a.createElement(C,null),n.a.createElement("div",{id:"score-award-button"},n.a.createElement(y,null),n.a.createElement(j,null)))):e=n.a.createElement(n.a.Fragment,null,n.a.createElement(O,null),n.a.createElement(h,null)),n.a.createElement(P.a,null,t,n.a.createElement(P.a,{id:"game"},n.a.createElement("h1",null,"Button game"),e,a,r))},R=a(14),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USERNAME":return t.data.username;case"REMOVE_USERNAME":return null;default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_SCORE":case"ADD_SCORE":case"server/PUSH":case"server/PUSH_4_POINTS":case"server/PUSH_39_POINTS":case"server/PUSH_249_POINTS":case"server/ADD_20_POINTS":return t.data.score;case"REMOVE_SCORE":return null;case"server/RESTORE_SCORE":return t.data.score;default:return e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"server/PUSH":case"server/PUSH_4_POINTS":case"server/PUSH_39_POINTS":case"server/PUSH_249_POINTS":case"server/PUSH_20_POINTS":return e+1;case"server/ALL_CLICKS":return t.allClicks;case"server/ADD_CLICK":return e+1;default:return e}},x=Object(R.c)({username:N,score:T,allClicks:U}),I=a(60),A=a.n(I),L=a(61),D=a.n(L),H=function(){try{var e=window.localStorage.getItem("appState");if(!e)return;return JSON.parse(e)}catch(t){console.log("Error on checking the app state from the browser's local sotrage: ".concat(t))}}(),M=A()("https://buttongame2020.herokuapp.com"),F=[D()(M,"server/")],G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.d,q=Object(R.e)(x,H,G(R.a.apply(void 0,F)));q.subscribe((function(){console.log("New state in Redux store: ",q.getState()),function(e){try{var t=JSON.stringify(e);window.localStorage.setItem("appState",t)}catch(a){console.log(a)}}(q.getState())}));var V=q;s.a.render(n.a.createElement(o.a,{store:V},n.a.createElement(k,null)),document.getElementById("root"))},62:function(e,t,a){e.exports=a(123)},67:function(e,t,a){},68:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.db19be70.chunk.js.map