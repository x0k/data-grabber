(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{229:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),o=n(15),r=n.n(o),s=n(80),c=n(32),u=n(33),l=n(85),h=n(81),d=n(86),p=n(82),g=n.n(p),w=n(84),v=n.n(w),m=n(47),f=function(){function t(){var e=this;Object(c.a)(this,t),this._data={apiKey:"AIzaSyCkAfKa8_ihDjgXOmPAL2Kt6u-rLIjrt7M",clientId:"410461802739-7v5t433ruper4kiad0h0kocg2j659rg7.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/drive.metadata.readonly",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]};var n=function(){e.gapi=window.gapi;e.gapi.load("client:auth2",function(){e.gapi.client.init(e._data).then(function(){e.googleAuth=e.gapi.auth2.getAuthInstance(),e.googleAuth.isSignedIn.listen(e.updateStatus)})})};window.gapi?n():(window.addEventListener("gapiLoaded",n),console.log("gapiLoaded"))}return Object(u.a)(t,[{key:"sendRequest",value:function(t){this.currentApiRequest=t,this.isAuthorized?(this.gapi.client.request(t),this.currentApiRequest={}):this.googleAuth.signIn()}},{key:"updateStatus",value:function(t){t?(this.isAuthorized=!0,this.currentApiRequest&&this.sendRequest(this.currentApiRequest)):this.isAuthorized=!1}}]),t}(),k=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={link:"https://reactjs.org"},n.api=new f,n.clickHandler=function(){console.log(n.api)},n.changeHandler=function(t){return function(e,a){n.setState(Object(s.a)({},t,e.target.value))}},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props.classes,e=this.state.link;return i.a.createElement("div",{className:"App"},i.a.createElement(g.a,{label:"Link",fullWidth:!0,margin:"normal",variant:"outlined",value:e,onChange:this.changeHandler("link")}),i.a.createElement(v.a,{color:"primary",className:t.button,onClick:this.clickHandler},"Fetch"))}}]),e}(a.Component),A=Object(m.withStyles)(function(t){return{button:{}}})(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},87:function(t,e,n){t.exports=n(229)}},[[87,2,1]]]);
//# sourceMappingURL=main.6a6bdade.chunk.js.map