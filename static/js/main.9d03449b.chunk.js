(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{229:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),i=n(15),r=n.n(i),c=n(81),s=n(32),l=n(33),u=n(85),h=n(82),g=n(86),d=n(83),p=n.n(d),w=n(48),m=n.n(w),v=n(47),f=new(function(){function t(e){var n=this;Object(s.a)(this,t),this.scriptId="M1qUJ-bECOgm4Y9z9evwE5gNpR_a-QLCI";var o=function(){n.gapi=window.gapi,n.gapi.load("client:auth2",a)},a=function(){n.gapi.client.init(e).then(i)},i=function(){n.googleAuth=n.gapi.auth2.getAuthInstance(),n.googleAuth.isSignedIn.listen(r)},r=function(t){t?(n.isAuthorized=!0,n.user=n.googleAuth.currentUser.get()):(n.isAuthorized=!1,n.user=null)};window.gapi?o():window.addEventListener("gapiLoaded",o)}return Object(l.a)(t,[{key:"authorize",value:function(){this.isAuthorized?this.googleAuth.signOut():this.googleAuth.signIn()}}]),t}())({apiKey:"AIzaSyDNcvzF_oOt9JD6Dw_1lIdJWPjMlHoVoX4",clientId:"18688042344-qlttf3r6hsajjk2oqpr12gqflmumks2s.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/script.projects",discoveryDocs:["https://script.googleapis.com/$discovery/rest?version=v1"]}),b=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(a)))).state={link:"https://reactjs.org"},n.clickHandler=function(){console.log(f)},n.authHandler=function(){f.authorize()},n.changeHandler=function(t){return function(e,o){n.setState(Object(c.a)({},t,e.target.value))}},n}return Object(g.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props.classes,e=this.state.link;return a.a.createElement("div",{className:"App"},a.a.createElement(p.a,{label:"Link",fullWidth:!0,margin:"normal",variant:"outlined",value:e,onChange:this.changeHandler("link")}),a.a.createElement(m.a,{color:"primary",className:t.button,onClick:this.clickHandler},"Fetch"),a.a.createElement(m.a,{className:t.button,onClick:this.authHandler},f.isAuthorized?"LOG OUT ".concat(f.user.w3.U3):"LOG IN"))}}]),e}(o.Component),k=Object(v.withStyles)(function(t){return{button:{}}})(b);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},87:function(t,e,n){t.exports=n(229)}},[[87,2,1]]]);
//# sourceMappingURL=main.9d03449b.chunk.js.map