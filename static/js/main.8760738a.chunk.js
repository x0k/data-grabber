(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{229:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),o=n(15),r=n.n(o),c=n(81),s=n(32),l=n(33),u=n(85),h=n(82),g=n(86),d=n(83),p=n.n(d),w=n(48),m=n.n(w),f=n(47),v=new(function(){function t(e){var n=this;Object(s.a)(this,t),this.isAuthorized=!1,this.user=null,this.scriptId="M1qUJ-bECOgm4Y9z9evwE5gNpR_a-QLCI";var i=function(){n.gapi=window.gapi,n.gapi.load("client:auth2",a)},a=function(){n.gapi.client.init(e).then(o)},o=function(){n.googleAuth=n.gapi.auth2.getAuthInstance(),n.googleAuth.isSignedIn.listen(r)},r=function(t){t?(n.isAuthorized=!0,n.user=n.googleAuth.currentUser.get()):(n.isAuthorized=!1,n.user=null)};window.gapi?i():window.addEventListener("gapiLoaded",i)}return Object(l.a)(t,[{key:"authorize",value:function(){this.isAuthorized?this.googleAuth.signOut():this.googleAuth.signIn()}}]),t}())({apiKey:"AIzaSyA0rvMrNVWVhm8HNd56eY64OXhVEVIxqlQ",clientId:"169025190639-ktoqejmqod0hcfh8pbt7hknbg8apfps9.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/userinfo.email",discoveryDocs:["https://script.googleapis.com/$discovery/rest?version=v1"]}),b=function(t){function e(){var t,n;Object(s.a)(this,e);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(a)))).state={link:"https://reactjs.org"},n.clickHandler=function(){console.log(v)},n.authHandler=function(){v.authorize()},n.changeHandler=function(t){return function(e,i){n.setState(Object(c.a)({},t,e.target.value))}},n}return Object(g.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props.classes,e=this.state.link;return a.a.createElement("div",{className:"App"},a.a.createElement(p.a,{label:"Link",fullWidth:!0,margin:"normal",variant:"outlined",value:e,onChange:this.changeHandler("link")}),a.a.createElement(m.a,{color:"primary",className:t.button,onClick:this.clickHandler},"Fetch"),a.a.createElement(m.a,{className:t.button,onClick:this.authHandler},v.isAuthorized?"LOG OUT ".concat(v.user.w3.U3):"LOG IN"))}}]),e}(i.Component),k=Object(f.withStyles)(function(t){return{button:{}}})(b);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},87:function(t,e,n){t.exports=n(229)}},[[87,2,1]]]);
//# sourceMappingURL=main.8760738a.chunk.js.map