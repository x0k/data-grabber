(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{229:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),o=n(15),r=n.n(o),s=n(81),u=n(32),c=n(33),l=n(85),h=n(82),g=n(86),d=n(83),p=n.n(d),f=n(34),w=n.n(f),m=n(48),v=new(function(){function t(e){var n=this;Object(u.a)(this,t),this.isAuthorized=!1,this.onStatusUpdate=null,this.scriptId="M1qUJ-bECOgm4Y9z9evwE5gNpR_a-QLCI",this._updateStatus=function(t){n.isAuthorized!=t&&(n.isAuthorized=t,n.onStatusUpdate&&n.onStatusUpdate(t))};var a=function(){n.googleAuth=n.gapi.auth2.getAuthInstance(),n.googleAuth.isSignedIn.listen(n._updateStatus),n._updateStatus(n.googleAuth.isSignedIn.get())},i=function(){n.gapi.client.init(e).then(a)},o=function(){n.gapi=window.gapi,n.gapi.load("client:auth2",i)};window.gapi?o():window.addEventListener("gapiLoaded",o)}return Object(c.a)(t,[{key:"authorize",value:function(){return this.isAuthorized?this.googleAuth.signOut():this.googleAuth.signIn()}},{key:"fetch",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.gapi.client.script.scripts.run({scriptId:this.scriptId,resource:{function:"fetch",parameters:e}})}},{key:"user",get:function(){return this.googleAuth?this.googleAuth.currentUser.get():null}}]),t}())({apiKey:"AIzaSyA0rvMrNVWVhm8HNd56eY64OXhVEVIxqlQ",clientId:"169025190639-ktoqejmqod0hcfh8pbt7hknbg8apfps9.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/script.external_request",discoveryDocs:["https://script.googleapis.com/$discovery/rest?version=v1"]}),k=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={link:"https://reactjs.org",user:v.isAuthorized?v.user:null},n.clickHandler=function(){console.log(v)},n.authHandler=function(){v.authorize().then(function(t){return n.setState({user:t})})},n.runHandler=function(){v.fetch(n.state.link).then(function(t){return console.log(t)})},n.changeHandler=function(t){return function(e){n.setState(Object(s.a)({},t,e.target.value))}},v.onStatusUpdate=function(t){return n.setState({user:t?v.user:null})},n}return Object(g.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.classes,e=this.state,n=e.link,a=e.user;return i.a.createElement("div",{className:"App"},i.a.createElement(p.a,{label:"Link",fullWidth:!0,margin:"normal",variant:"outlined",value:n,onChange:this.changeHandler("link")}),i.a.createElement(w.a,{color:"primary",className:t.button,onClick:this.clickHandler},"Fetch"),i.a.createElement(w.a,{className:t.button,onClick:this.authHandler},a?"LOG OUT ".concat(a.w3.ig):"LOG IN"),i.a.createElement(w.a,{className:t.button,onClick:this.authHandler},a?"LOG OUT ".concat(a.w3.ig):"LOG IN"))}}]),e}(a.Component),b=Object(m.withStyles)(function(t){return{button:{}}})(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},87:function(t,e,n){t.exports=n(229)}},[[87,2,1]]]);
//# sourceMappingURL=main.bbc6f47f.chunk.js.map