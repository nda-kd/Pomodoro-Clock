(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(4),r=c.n(i),a=(c(10),c(2)),l=(c(11),c.p+"static/media/clock.f1689ff2.svg"),o=c.p+"static/media/pause.209d34a8.svg",d=c.p+"static/media/play.676bed86.svg",j=c.p+"static/media/reset.701f70f9.svg",b=c(5),u=c(0);var O=function(){var e=Object(s.useRef)(null),t=Object(s.useState)(300),c=Object(a.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(1500),O=Object(a.a)(r,2),m=O[0],h=O[1],f=Object(s.useState)(!1),p=Object(a.a)(f,2),v=p[0],x=p[1],g=Object(s.useState)(60),k=Object(a.a)(g,2),S=k[0],C=k[1],N=Object(s.useState)(!1),I=Object(a.a)(N,2),w=I[0],y=I[1],B=Object(s.useState)(!1),E=Object(a.a)(B,2),T=E[0],F=E[1],L=Object(s.useState)(null),P=Object(a.a)(L,2),A=P[0],J=P[1],M=function(e){null===A?(x(!0),R()):(console.log("time",S),x(!1),F(!1),clearInterval(A),J(null))},R=function(){F(!0);var e=setInterval((function(){C((function(e){return e-1}))}),1e3);J(e)};return Object(s.useEffect)((function(){0===S&&(e.current.play(),setTimeout((function(){e.current.pause(),e.current.currentTime=0}),2e3),clearInterval(A),J(null),F(!1),y((function(e){return!e})),w?(C(m),R()):(C(n),R()))}),[S]),Object(s.useEffect)((function(){T||w||C(parseInt(m))}),[m]),Object(s.useEffect)((function(){!T&&w&&C(parseInt(n))}),[n]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b.a,{position:"bottom-left",reverseOrder:!1}),Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:"Pomodoro Clock"})}),Object(u.jsxs)("section",{children:[Object(u.jsxs)("div",{className:"section-wrap",children:[Object(u.jsxs)("div",{className:"image-wrap",children:[Object(u.jsx)("img",{src:l,alt:"clock"}),Object(u.jsx)("div",{id:"time-left",className:"".concat(S<60?"under-one-minute":w?"breakColor":"sessionColor"),children:function(){var e=Math.floor(S/60),t=S-60*e;return(e=e<10?"0"+e:e)+":"+(t=t<10?"0"+t:t)}()})]}),Object(u.jsx)("audio",{src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav",id:"beep",ref:e}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"session-label",id:"".concat(w?"":"my-timer-label"),children:"SESSION"}),Object(u.jsxs)("div",{style:{position:"relative"},children:[Object(u.jsx)("span",{className:"break-label",id:"".concat(w?"my-timer-label":""),children:"BREAK"}),Object(u.jsx)("div",{id:"timer-label",children:w?"Break":"Session"})]})]})]}),Object(u.jsxs)("div",{className:"timer-control",children:[Object(u.jsx)("div",{id:"start_stop",onClick:function(){M()},children:v?Object(u.jsx)("img",{src:o,id:"stop",alt:"pause"}):Object(u.jsx)("img",{src:d,id:"start",alt:"play"})}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{id:"reset",src:j,alt:"reset",onClick:function(){return e.current.pause(),e.current.currentTime=0,h(1500),i(300),C(1500),y(!1),x(!1),clearInterval(A),J(null),void F(!1)}})})]})]}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsxs)("div",{className:"session",children:[Object(u.jsx)("span",{id:"session-label",children:"Session Length"}),Object(u.jsxs)("div",{className:"session-wrap",children:[Object(u.jsx)("div",{id:"session-increment",onClick:function(){T||h(m>=3600?m:m+60)},children:"+"}),Object(u.jsx)("div",{id:"session-length",children:parseInt(m)/60}),Object(u.jsx)("div",{id:"session-decrement",onClick:function(){T||h(m<=60?m:m-60)},children:"-"})]})]}),Object(u.jsxs)("div",{className:"break",children:[Object(u.jsx)("span",{id:"break-label",children:"Break Length"}),Object(u.jsxs)("div",{className:"break-wrap",children:[Object(u.jsx)("div",{id:"break-increment",onClick:function(){T||i(n>=3600?n:n+60)},children:"+"}),Object(u.jsx)("div",{id:"break-length",children:parseInt(n)/60}),Object(u.jsx)("div",{id:"break-decrement",onClick:function(){T||i(n<=60?n:n-60)},children:"-"})]})]})]})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),m()}},[[13,1,2]]]);
//# sourceMappingURL=main.49e2f405.chunk.js.map