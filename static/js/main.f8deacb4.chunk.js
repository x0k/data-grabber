(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a(252)},252:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(15),l=a.n(i),o=a(92),s=a(17),c=a(18),u=a(40),m=a(21),p=a(41),h=a(27),f=a.n(h),d=a(97),g=a.n(d),v=a(98),b=a.n(v),w=a(57),E=a.n(w),k=a(42),C=a.n(k),y=a(31),j=a(26),O=a.n(j),N=function(e){var t=e.label,a=e.value,n=e.onChange;return r.a.createElement(O.a,{label:t,fullWidth:!0,multiline:!0,variant:"outlined",value:a,onChange:n})},H=a(94),S=a.n(H),x=a(95),I=a.n(x),W=a(96),L=a.n(W),T=function(e){var t=e.className,a=e.value,n=e.onCheck;return r.a.createElement(S.a,{row:!0,className:t},Object.keys(a).map(function(e){return r.a.createElement(I.a,{key:e,label:e,control:r.a.createElement(L.a,{value:e,checked:a[e],onChange:n(e)})})}))},R=Object(y.withStyles)({row:{display:"flex",alignItems:"center",marginTop:10,marginBottom:10},flags:{marginLeft:30,minWidth:180}})(function(e){var t=e.className,a=e.classes,n=e.value,i=e.onChange,l=e.onCheck,o=e.onRemove,s=n.name,c=n.flags,u=n.pattern,m=n.item;return r.a.createElement("div",{className:t},r.a.createElement("div",{className:a.row},r.a.createElement(O.a,{fullWidth:!0,label:"Name",variant:"outlined",value:s,onChange:i("name")}),r.a.createElement(T,{className:a.flags,value:c,onCheck:l}),r.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:o},"Remove")),r.a.createElement("div",{className:a.row},r.a.createElement(O.a,{fullWidth:!0,variant:"outlined",label:"Pattern",value:u,onChange:i("pattern")})),r.a.createElement("div",{className:a.row},r.a.createElement(O.a,{fullWidth:!0,variant:"outlined",label:"Item",value:m,onChange:i("item")})))}),B=a(99),$=a(100),q={apiKey:"AIzaSyA0rvMrNVWVhm8HNd56eY64OXhVEVIxqlQ",clientId:"169025190639-ktoqejmqod0hcfh8pbt7hknbg8apfps9.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/script.external_request",discoveryDocs:["https://script.googleapis.com/$discovery/rest?version=v1"]},A=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,q,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"fetch",value:function(e){var a={function:"fetch",parameters:[e],devMode:!0};return Object(B.a)(Object(m.a)(t.prototype),"execute",this).call(this,function(e){return{root:"https://script.googleapis.com",path:"v1/scripts/M1qUJ-bECOgm4Y9z9evwE5gNpR_a-QLCI:run",method:"POST",body:e}}(a))}}]),t}($.a),P=function(){function e(t){var a=t.name,n=void 0===a?"Parameter":a,r=t.pattern,i=void 0===r?"":r,l=t.item,o=void 0===l?"":l,c=t.flags,u=void 0===c?{i:!0,g:!1,m:!1}:c;Object(s.a)(this,e),this.name="Parameter",this.pattern="",this.item="",this.flags={i:!0,g:!1,m:!1},this.name=n,this.pattern=i,this.item=o,this.flags=u}return Object(c.a)(e,[{key:"flagsToString",value:function(){for(var e="",t=Object.keys(this.flags),a=0;a<t.length;a++){var n=t[a];this.flags[n]&&(e+=n)}return e}}]),e}(),z=function(){function e(t){Object(s.a)(this,e),this.name=t.name,this.item=t.item,this.expression=new RegExp(t.pattern,t.flagsToString())}return Object(c.a)(e,[{key:"apply",value:function(e){var t=this,a="";return e.replace(this.expression,function(e){a+=e.replace(t.expression,t.item)}),a}}]),e}(),D=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"grab",value:function(e,t){var a=e.map(function(e){return new z(e)});return function(e){var n=a.reduce(function(t,a){return t[a.name]=a.apply(e),t},{});return t.replace(/%(.+?)%/g,function(e,t){return n[t]})}}}]),e}(),M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={links:"https://reactjs.org\nhttps://learn.javascript.ru",parameters:[new P({name:"Title",pattern:"<title.*?>(.+)<\\/title>",item:"$1"}),new P({name:"Links",pattern:'<a.+?href="(http.+?)".*?>([^<>]+?)<\\/a>',item:'<li>$2: <a href="$1">$1</a></li>',flags:{i:!0,g:!0,m:!1}})],itemsContainer:"<b>%Title%</b><br><ul>%Links%</ul>",result:[],user:null},a.api=null,a.authHandler=function(){a.api.authorize()},a.changeHandler=function(e){return function(t){a.setState(Object(o.a)({},e,t.target.value))}},a.runHandler=function(){var e=a.state,t=e.parameters,n=e.itemsContainer,r=e.links,i=D.grab(t,n);Promise.all(r.split("\n").map(function(e){return a.api.fetch(e)})).then(function(e){return e.map(function(e){return i(e.result.response.result)})}).then(function(e){return a.setState({result:e})})},a.parameterChangeHandler=function(e){return function(t){return function(n){var r=n.target.value;a.setState(function(a){var n=a.parameters;return n[e][t]=r,{parameters:n}})}}},a.parameterCheckHandler=function(e){return function(t){return function(n,r){a.setState(function(a){var n=a.parameters;return n[e].flags[t]=r,{parameters:n}})}}},a.parameterDeleteHandler=function(e){return function(){a.setState(function(t){var a=t.parameters;return a.splice(e,1),{parameters:a}})}},a.parameterAddHandler=function(){a.setState(function(e){var t=e.parameters;return t.push(new P({})),{parameters:t}})},a.api=new A(function(e){return a.setState({user:e?a.api.user:null})}),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.links,i=a.parameters,l=a.itemsContainer,o=a.user,s=a.result;return r.a.createElement("div",{className:t.root},r.a.createElement(g.a,{position:"static",className:t.appBar},r.a.createElement(b.a,null,r.a.createElement(E.a,{variant:"h6",color:"inherit",className:t.grow},"Data grabber"),r.a.createElement(f.a,{className:t.button,color:"inherit",onClick:this.authHandler},o?o.w3.ig:"Login"))),r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{item:!0,xs:12,lg:6},r.a.createElement("div",{className:t.wrapper},r.a.createElement("div",{className:t.container},r.a.createElement(N,{label:"Links",value:n,onChange:this.changeHandler("links")})),i.map(function(a,n){return r.a.createElement(R,{key:n,className:t.container,value:a,onChange:e.parameterChangeHandler(n),onCheck:e.parameterCheckHandler(n),onRemove:e.parameterDeleteHandler(n)})}),r.a.createElement("div",{className:t.container},r.a.createElement(f.a,{variant:"outlined",color:"primary",className:t.button,onClick:this.runHandler,disabled:!o},"Run"),r.a.createElement(f.a,{variant:"outlined",className:t.button,onClick:this.parameterAddHandler,disabled:!o},"Add")),r.a.createElement("div",{className:t.container},r.a.createElement(N,{label:"Items container",value:l,onChange:this.changeHandler("itemsContainer")})))),s.length>0&&r.a.createElement(C.a,{item:!0,xs:12,lg:6},r.a.createElement("div",{className:t.wrapper},s.map(function(e,a){return r.a.createElement("div",{key:a,className:t.container,dangerouslySetInnerHTML:{__html:e}})})))))}}]),t}(n.Component),V=Object(y.withStyles)({root:{flexGrow:1},appBar:{},grow:{flexGrow:1},wrapper:{width:"90%",margin:"0 auto"},container:{padding:20},button:{marginRight:20},icon:{fontSize:26,margin:5},row:{display:"flex",alignItems:"center",marginTop:10,marginBottom:10},flags:{marginLeft:30,minWidth:180}})(M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[101,2,1]]]);
//# sourceMappingURL=main.f8deacb4.chunk.js.map