(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(264)},264:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(16),l=a.n(i),s=a(97),c=a(106),o=a(98),u=a(107),m=a(18),h=a(19),d=a(28),p=a.n(d),f=a(41),g=a.n(f),b=a(99),v=a.n(b),O=a(101),j=a.n(O),w=a(56),E=a.n(w),y=a(22),k=a.n(y),S=a(103),N=a.n(S),x=a(104),H=a.n(x),C=a(105),P=a.n(C),I=a(58),W=a.n(I),U=a(102),A=a.n(U),B=a(57),R=a(27),q=a(15),z=function(){function e(t){var a=this;Object(m.a)(this,e),Object.defineProperty(this,L,{writable:!0,value:void 0}),Object.defineProperty(this,T,{writable:!0,value:void 0}),Object.defineProperty(this,M,{writable:!0,value:!1}),Object.defineProperty(this,D,{writable:!0,value:null}),Object.defineProperty(this,J,{writable:!0,value:function(e){Object(q.a)(a,M)[M]=e,Object(q.a)(a,D)[D]&&Object(q.a)(a,D)[D](e)}});var n=function(){Object(q.a)(a,T)[T]=Object(q.a)(a,L)[L].auth2.getAuthInstance(),Object(q.a)(a,T)[T].isSignedIn.listen(Object(q.a)(a,J)[J]),Object(q.a)(a,J)[J](Object(q.a)(a,T)[T].isSignedIn.get())},r=function(){Object(q.a)(a,L)[L].client.init(t).then(n)},i=function(){Object(q.a)(a,L)[L]=window.gapi,Object(q.a)(a,L)[L].load("client:auth2",r)};window.gapi?i():window.addEventListener("gapiLoaded",i)}return Object(h.a)(e,[{key:"authorize",value:function(){return Object(q.a)(this,M)[M]?Object(q.a)(this,T)[T].signOut():Object(q.a)(this,T)[T].signIn()}},{key:"fetch",value:function(e){var t={function:"fetch",parameters:[e],devMode:!0},a=Object(q.a)(this,L)[L].client.request({root:"https://script.googleapis.com",path:"v1/scripts/M1qUJ-bECOgm4Y9z9evwE5gNpR_a-QLCI:run",method:"POST",body:t});return new Promise(function(e,t){a.execute(function(a){if(a.error&&a.error.status)t("Error calling API: "+JSON.stringify(a,null,2));else if(a.error){var n=a.error.details[0];t("Script error! Message: "+n.errorMessage)}else e(a.response.result)})})}},{key:"onStatusUpdate",set:function(e){Object(q.a)(this,D)[D]=e}},{key:"user",get:function(){return Object(q.a)(this,T)[T].currentUser.get()}}]),e}(),L=Object(R.a)("gapi"),T=Object(R.a)("googleAuth"),M=Object(R.a)("isAuthorized"),D=Object(R.a)("onStatusUpdate"),J=Object(R.a)("satusUpdate"),V=new z({apiKey:"AIzaSyA0rvMrNVWVhm8HNd56eY64OXhVEVIxqlQ",clientId:"169025190639-ktoqejmqod0hcfh8pbt7hknbg8apfps9.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/script.external_request",discoveryDocs:["https://script.googleapis.com/$discovery/rest?version=v1"]}),_=function(){function e(t){Object(m.a)(this,e),this.name=t.name,this.expression=new RegExp(t.pattern,t.flagsToString())}return Object(h.a)(e,[{key:"apply",value:function(e){return e.match(this.expression)[1]}}]),e}(),F=function(){function e(t){Object(m.a)(this,e),this.parameters=[],this.string=t;for(var a,n=/%(.+?)%/g;a=n.exec(t);){var r=a[1];this.parameters.push({name:r,regexp:new RegExp("%".concat(r,"%"),"g")})}}return Object(h.a)(e,[{key:"build",value:function(e){var t=this.string.slice(),a=!0,n=!1,r=void 0;try{for(var i,l=this.parameters[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var s=i.value;t=t.replace(s.regexp,e[s.name])}}catch(c){n=!0,r=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}return t}}]),e}(),G=function(){function e(){Object(m.a)(this,e)}return Object(h.a)(e,null,[{key:"grab",value:function(e,t){var a=e.map(function(e){return new _(e)}),n=new F(t);return function(e){var t=a.reduce(function(t,a){return t[a.name]=a.apply(e),t},{});return n.build(t)}}}]),e}(),Q=function(){function e(t,a){Object(m.a)(this,e),this.name="Parameter",this.pattern="",this.flags={i:!0,g:!1,m:!1},this.name=t,this.pattern=a}return Object(h.a)(e,[{key:"flagsToString",value:function(){for(var e="",t=Object.keys(this.flags),a=0;a<t.length;a++){var n=t[a];this.flags[n]&&(e+=n)}return e}}]),e}(),Y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={links:"https://reactjs.org",parameters:[new Q("Title","<title.*>(.+)<\\/title>")],resultString:"Title: %Title%",result:"",user:null},a._userUpdate=function(e){a.setState({user:e?V.user:null})},a.authHandler=function(){V.authorize()},a.runHandler=function(){var e=G.grab(a.state.parameters,a.state.resultString);Promise.all(a.state.links.split("\n").map(function(e){return V.fetch(e)})).then(function(t){return t.map(function(t){return e(t)}).join("\n")}).then(function(e){return a.setState({result:e})})},a.changeHandler=function(e){return function(t){a.setState(Object(s.a)({},e,t.target.value))}},a.parameterChangeHandler=function(e,t){return function(n,r){a.setState(function(a,n){return a.parameters[e][t]=r,a})}},a.parameterFlagHandler=function(e,t){return function(n,r){a.setState(function(a,n){return a.parameters[e].flags[t]=r,a})}},a.parameterDeleteHandler=function(e){return function(){a.setState(function(t,a){return t.parameters.splice(e,1),t})}},a.addParameterHandler=function(){a.setState(function(e,t){return e.parameters.push(new Q("Parameter","")),e})},V.onStatusUpdate=a._userUpdate,a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.links,i=a.parameters,l=a.resultString,s=a.user,c=a.result;return r.a.createElement("div",{className:t.root},r.a.createElement(v.a,{position:"static",className:t.appBar},r.a.createElement(j.a,null,r.a.createElement(E.a,{variant:"h6",color:"inherit",className:t.grow},"Data grabber"),r.a.createElement(g.a,{className:t.button,color:"inherit",onClick:this.authHandler},s?s.w3.ig:"Login"))),r.a.createElement(k.a,{container:!0,className:t.grid},r.a.createElement(k.a,{item:!0,xs:8},r.a.createElement("div",{className:t.container},r.a.createElement(p.a,{variant:"outlined",fullWidth:!0,label:"Result string",value:l,onChange:this.changeHandler("resultString")})),r.a.createElement("div",{className:t.container},r.a.createElement(g.a,{variant:"outlined",color:"primary",className:t.button,onClick:this.runHandler,disabled:!s},"Run"),r.a.createElement(g.a,{variant:"outlined",className:t.button,onClick:this.addParameterHandler,disabled:!s},"Add")),i.map(function(a,n){return r.a.createElement("div",{className:t.container},r.a.createElement(k.a,{container:!0,spacing:24},r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement("div",{className:t.variableBar},r.a.createElement(p.a,{fullWidth:!0,label:"Name",variant:"outlined",value:a.name,onChange:e.parameterChangeHandler(n,"name")}),r.a.createElement(W.a,{className:t.button,onClick:e.parameterDeleteHandler(n)},r.a.createElement(A.a,{className:t.icon})))),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement("div",{className:t.variableBar},r.a.createElement(p.a,{fullWidth:!0,variant:"outlined",label:"Pattern",value:a.pattern,onChange:e.parameterChangeHandler(n,"pattern")}),r.a.createElement(N.a,{row:!0,style:{marginLeft:30,minWidth:180}},Object.keys(a.flags).map(function(t){return r.a.createElement(H.a,{control:r.a.createElement(P.a,{value:t,checked:a.flags[t],onChange:e.parameterFlagHandler(n,t)}),label:t})}))))))})),r.a.createElement(k.a,{item:!0,xs:4},r.a.createElement("div",{className:t.container},r.a.createElement(p.a,{label:"Links",fullWidth:!0,multiline:!0,variant:"outlined",value:n,onChange:this.changeHandler("links")}))),c.length>0&&r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement("div",{className:t.container},r.a.createElement(p.a,{label:"Result",fullWidth:!0,multiline:!0,rows:c.split("\n").length,variant:"outlined",value:c})))))}}]),t}(n.Component),$=Object(B.withStyles)(function(e){return{root:{flexGrow:1},appBar:{},grow:{flexGrow:1},container:{padding:20},button:{marginRight:20},icon:{fontSize:26,margin:5},variableBar:{display:"flex",alignItems:"center"},grid:{}}})(Y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,2,1]]]);
//# sourceMappingURL=main.5b21696b.chunk.js.map