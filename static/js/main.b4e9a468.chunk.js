(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{35:function(e,a,t){e.exports=t(75)},40:function(e,a,t){},66:function(e,a){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(31),c=t.n(r),s=(t(40),t(16)),i=t(32),l=t.n(i),d=t(34),u=Object(d.a)({root:{width:"90%",margin:"0 auto"},chatWindow:{height:"500px",boxShadow:"2px 2px 7px #aaaaaa inset",overflowY:"scroll",scrollSnapAlign:"end"},myChatMesageRow:{width:"100%",display:"flex",justifyContent:"flex-end"},myChatMessageBox:{margin:"8px",background:"dodgerblue",padding:"10px",color:"white",borderRadius:"10px",minWidth:"50px",textAlign:"right"},chatMesageRow:{width:"100%",display:"flex"},chatMessageBox:{margin:"10px",background:"#F93D66",padding:"8px",color:"white",borderRadius:"10px",minWidth:"50px"},sendBtn:{border:"none",background:"dodgerblue",color:"white",fontWeight:"bold",padding:"12px",marginLeft:"8px"},input:{border:"none",background:"#f5f5f5",padding:"12px",width:"calc(100% - 90px)"},actionsBar:{marginTop:"8px",width:"100%"},userNameShow:{fontSize:"0.7em",paddingBottom:"5px"}}),m=window.location.pathname.replace("/",""),h=l.a.connect("socket-chat-app-backend.herokuapp.com",{query:{user:m}});var p=function(){var e=u(),a=o.a.useState([{sender:m,message:"Joined!"}]),t=Object(s.a)(a,2),r=t[0],c=t[1],i=o.a.useState(""),l=Object(s.a)(i,2),d=l[0],p=l[1],g=Object(n.useRef)(null);return o.a.useEffect((function(){return h.on("onConnect",(function(e){c(e)})),h.on("chatMessage",(function(e){console.log(e),c((function(a){return a.concat(e)})),console.log(r)})),function(){h.off()}}),[]),o.a.useEffect((function(){g.current.scrollIntoView({behavior:"smooth"})}),[r]),o.a.createElement("div",{className:e.root},o.a.createElement("center",null,o.a.createElement("h1",null,"GupShup.online",o.a.createElement("br",null),"Hi, ",m)),o.a.createElement("div",{className:e.chatWindow},r.map((function(a,t){return a.sender==m?o.a.createElement("div",{className:e.myChatMesageRow,key:t},o.a.createElement("div",{className:e.myChatMessageBox},o.a.createElement("div",{className:e.userNameShow},"Me"),a.message)):o.a.createElement("div",{className:e.chatMesageRow,key:t},o.a.createElement("div",{className:e.chatMessageBox},o.a.createElement("div",{className:e.userNameShow},a.sender),a.message))})),o.a.createElement("div",{ref:g})),o.a.createElement("div",{className:e.actionsBar},o.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),""==d||(h.emit("chatMessage",{sender:m,message:d}),p(""))}(e)}},o.a.createElement("input",{type:"text",placeholder:"Enter a message",className:e.input,onChange:function(e){return p(e.target.value)},value:d}),o.a.createElement("button",{className:e.sendBtn,type:"submit"},"Send"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.b4e9a468.chunk.js.map