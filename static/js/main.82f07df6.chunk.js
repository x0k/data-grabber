(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){e.exports=a(273)},273:function(e,t,a){"use strict";a.r(t);for(var n=a(0),r=a.n(n),l=a(16),i=a.n(l),o=a(41),s=a(17),c=a(18),u=a(28),m=a(19),h=a(29),p=a(22),f=a.n(p),d=a(44),v=a.n(d),g=a(107),b=a.n(g),E=a(15),w=a(98),y=a.n(w),k=a(99),N=a.n(k),O=a(42),j=a.n(O),C=a(100),x=a.n(C),S=a(103),H=a.n(S),T=a(102),P=a.n(T),R=a(101),L=a.n(R),I=Object(E.withStyles)({appBar:{},grow:{flexGrow:1},avatar:{width:34,height:34}})(function(e){var t=e.classes,a=e.anchor,n=e.user,l=e.authHandler,i=e.menuHandler,o=Boolean(a);return r.a.createElement(y.a,{position:"static",className:t.appBar},r.a.createElement(N.a,null,r.a.createElement(j.a,{variant:"h6",color:"inherit",className:t.grow},"Data grabber"),n&&r.a.createElement("div",null,r.a.createElement(x.a,{"aria-owns":o?"menu-appbar":void 0,"aria-haspopup":"true",onClick:i(!0),color:"inherit"},r.a.createElement(L.a,{alt:n.getName(),src:n.getImageUrl(),className:t.avatar})),r.a.createElement(P.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:i(!1)},r.a.createElement(H.a,{onClick:l},"Logout"))),!n&&r.a.createElement(f.a,{className:t.button,color:"inherit",onClick:l},"Login")))}),W=a(30),B=a.n(W),z=function(e){var t=e.label,a=e.value,n=e.onChange;return r.a.createElement(B.a,{label:t,fullWidth:!0,multiline:!0,variant:"outlined",value:a,onChange:n})},A=a(104),D=a.n(A),$=Object(E.withStyles)({checkLabel:{margin:5,fontSize:"1em",textTransform:"uppercase",cursor:"pointer"}})(function(e){var t=e.classes,a=(e.className,e.children),n=e.value,l=e.checked,i=e.onChange;return r.a.createElement(j.a,{className:t.checkLabel,onClick:function(e){i(e,!l&&n)},style:{color:l?"#f50057":"#9e9e9e"}},a)}),_={row:{display:"flex",alignItems:"center",marginTop:10,marginBottom:10},flags:{marginLeft:20,minWidth:84},btn:{marginLeft:20,minWidth:84}},q=Object(E.withStyles)(_)(function(e){var t=e.className,a=e.classes,n=e.value,l=e.onChange,i=e.onCheck,o=e.onRemove,s=e.onTest,c=n.name,u=n.flags,m=n.pattern,h=n.item;return r.a.createElement("div",{className:t},r.a.createElement("div",{className:a.row},r.a.createElement(B.a,{fullWidth:!0,label:"Name",variant:"outlined",value:c,onChange:l("name")}),r.a.createElement(D.a,{row:!0,className:a.flags},Object.keys(u).map(function(e){return r.a.createElement($,{key:e,value:e,checked:u[e],onChange:i(e)},e)}))),r.a.createElement("div",{className:a.row},r.a.createElement(B.a,{fullWidth:!0,variant:"outlined",label:"Pattern",value:m,onChange:l("pattern")}),r.a.createElement(f.a,{className:a.btn,variant:"outlined",onClick:s},"Test")),r.a.createElement("div",{className:a.row},r.a.createElement(B.a,{fullWidth:!0,variant:"outlined",label:"Item",value:h,onChange:l("item")}),r.a.createElement(f.a,{className:a.btn,variant:"outlined",color:"secondary",onClick:o},"Remove")))}),M=Object(E.withStyles)({container:{borderStyle:"solid",border:1,borderRadius:4,borderColor:"rgba(0, 0, 0, 0.23)",whiteSpace:"pre-wrap",wordWrap:"break-word",padding:"20px 14px",fontFamily:"Roboto","&:hover":{borderColor:"rgba(0, 0, 0, 1)"}}})(function(e){var t=e.classes,a=e.children;return r.a.createElement("div",{className:t.container},a)}),V=a(108),J=a(60),F=Object(E.withStyles)({collapser:{},collapserDesc:{color:"blue"}})(function(e){var t,a=e.classes,n=e.value,l=e.key;if(n.length>340){var i=function(e){var t=-1,a=0,n=0;do{a=t,t=e.indexOf("\n",t+1),n++}while(-1!==t&&n<4&&t-a<161);var r=n<4?a+160:t;return e.slice(0,r)}(n),o=function(e){var t=e.length,a=t,n=0;do{a=t,t=e.lastIndexOf("\n",t-1),n++}while(-1!==t&&n<4&&a-t<161);var r=n<4?a-160:t;return e.slice(r,e.length)}(n);t=[i,r.a.createElement("div",{key:l+"_btn",className:a.collapserDesc},"Hidden part"),o]}else t=n;return r.a.createElement("span",{className:a.collapser},t)}),G={},Q=1;Q<5;Q++)G["hl-".concat(Q)]={background:"hsl(".concat(120*(1-Q/5),", 100%, 50%)"),borderRadius:3};var U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={status:null,lastRegExp:""},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.value,n=t.parameter,l=t.classes,i=this.state,o=i.status,s=i.lastRegExp,c=n.pattern+n.flagsToString(),u=function(t){var a=t.error;return e.setState({status:a,lastRegExp:c})};return s!==c&&function(e,t){return new Promise(function(a,n){var r=new RegExp(t.pattern,t.flagsToString()),l=e.match(r);l||n({error:"No matches"});var i=[],o=!0,s=!1,c=void 0;try{for(var u,m=function(){var t=u.value,a=-1,n=function(e){return e.from+e.len===a+t.length};do{a=e.indexOf(t,a+1)}while(i.find(n)&&-1!==a);if(-1===a)throw new Error("Cannot find ".concat(t));i.push({from:a,len:t.length,element:t,inner:[]})},h=l[Symbol.iterator]();!(o=(u=h.next()).done);o=!0)m()}catch(g){s=!0,c=g}finally{try{o||null==h.return||h.return()}finally{if(s)throw c}}(l=i).sort(function(e,t){return e.from+e.len-(t.from+t.len)});for(var p=l.length-1;p>0;){var f,d=l[p],v=l[p-1];v.from>=d.from&&v.from+v.len<=d.from+d.len?(f=d.inner).unshift.apply(f,Object(J.a)(l.splice(--p,1))):p--}a(l)})}(a,n).then(function(e){return function(e,t,a){return new Promise(function(n,l){n(function e(t,n){var l=[],i=t.element,o=0,s=!0,c=!1,u=void 0;try{for(var m,h=t.inner[Symbol.iterator]();!(s=(m=h.next()).done);s=!0){var p=m.value,f=i.split(p.element),d=Object(V.a)(f),v=d[0],g=d.slice(1),b=n<1?r.a.createElement(F,{key:p.element+o++,value:v}):v;l=[].concat(Object(J.a)(l),[b,e(p,n+1)]),i=g.join("")}}catch(E){c=!0,u=E}finally{try{s||null==h.return||h.return()}finally{if(c)throw u}}return i.length&&l.push(n<1?r.a.createElement(F,{key:t.element+"_end",value:i}):i),r.a.createElement("span",{key:t.element,className:a["hl-".concat(n)]},l.filter(function(e){return Boolean(e)}))}({inner:t,element:e},0))})}(a,e,l)}).catch(u).then(function(t){return e.setState({status:t,lastRegExp:c})}).catch(u),r.a.createElement("div",null,o||a)}}]),t}(n.Component),Y=Object(E.withStyles)(G)(U),K=a(110),X=a(109),Z={apiKey:"AIzaSyA0rvMrNVWVhm8HNd56eY64OXhVEVIxqlQ",clientId:"169025190639-ktoqejmqod0hcfh8pbt7hknbg8apfps9.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/script.external_request",discoveryDocs:["https://script.googleapis.com/$discovery/rest?version=v1"]},ee=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,Z,e))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"fetch",value:function(e){var a={function:"fetch",parameters:[e],devMode:!1};return Object(K.a)(Object(m.a)(t.prototype),"execute",this).call(this,function(e){return{root:"https://script.googleapis.com",path:"v1/scripts/M1qUJ-bECOgm4Y9z9evwE5gNpR_a-QLCI:run",method:"POST",body:e}}(a))}}]),t}(X.a),te=a(105),ae=function(){function e(t){var a=t.name,n=void 0===a?"Parameter":a,r=t.pattern,l=void 0===r?"":r,i=t.item,o=void 0===i?"":i,c=t.flags,u=void 0===c?null:c;Object(s.a)(this,e),this.name="Parameter",this.pattern="",this.item="",this.flags={i:!0,g:!1,m:!1,s:!1},this.name=n,this.pattern=l,this.item=o,u&&(this.flags=Object(te.a)({},this.flags,u))}return Object(c.a)(e,[{key:"flagsToString",value:function(){for(var e="",t=Object.keys(this.flags),a=0;a<t.length;a++){var n=t[a];this.flags[n]&&(e+=n)}return e}}]),e}(),ne=a(59),re=a.n(ne),le=a(106),ie=function(){function e(t){Object(s.a)(this,e),this.name=t.name,this.item=t.item,this.expression=new RegExp(t.pattern,t.flagsToString())}return Object(c.a)(e,[{key:"apply",value:function(e){var t=this,a="";return e.replace(this.expression,function(e){a+=e.replace(t.expression,t.item)}),a}}]),e}();function oe(e,t){var a=e.map(function(e){return new ie(e)});return function(e){var n=e.link,r=e.text,l=a.reduce(function(e,t){return e[t.name]=t.apply(r),e},{link:n});return t.replace(/%(.+?)%/g,function(e,t){return l[t]})}}function se(){return(se=Object(le.a)(re.a.mark(function e(t,a,n,r){var l,i;return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l=oe(n,r),e.next=3,Promise.all(a.map(function(e){return t(e)})).then(function(e){return e.map(function(e,t){return{link:a[t],text:e.result.response.result}})});case 3:return i=e.sent,e.abrupt("return",i.map(function(e){return l(e)}));case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var ce=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={links:"https://reactjs.org\nhttps://learn.javascript.ru",parameters:[new ae({name:"Title",pattern:"<title.*?>(.+)<\\/title>",item:"$1",flags:{s:!0}}),new ae({name:"Links",pattern:'<a.+?href="(http.+?)".*?>([^<>]+?)<\\/a>',item:'<li>$2: <a href="$1">$1</a></li>',flags:{g:!0}})],testText:null,testedParameter:null,stateName:"none",itemsContainer:"<b>%Title%</b><br><ul>%Links%</ul>",result:[],user:null,anchorEl:null},a.api=null,a.menuHandler=function(e){return function(t){a.setState({anchorEl:e?t.currentTarget:null})}},a.authHandler=function(){a.api.authorize()},a.changeHandler=function(e){return function(t){a.setState(Object(o.a)({},e,t.target.value))}},a.startLoading=function(){return new Promise(function(e){return a.setState({stateName:"loading"},e)})},a.runHandler=function(){var e=a.state,t=e.parameters,n=e.itemsContainer,r=e.links,l=a.api.fetch.bind(a.api),i=r.split("\n");a.startLoading().then(function(){return function(e,t,a,n){return se.apply(this,arguments)}(l,i,t,n)}).then(function(e){return a.setState({stateName:"show",result:e})})},a.parameterChangeHandler=function(e){return function(t){return function(n){var r=n.target.value;a.setState(function(a){var n=a.parameters;return n[e][t]=r,{parameters:n}})}}},a.parameterCheckHandler=function(e){return function(t){return function(n,r){a.setState(function(a){var n=a.parameters;return n[e].flags[t]=r,{parameters:n}})}}},a.parameterDeleteHandler=function(e){return function(){a.setState(function(t){var a=t.parameters;return a.splice(e,1),{parameters:a}})}},a.parameterAddHandler=function(){a.setState(function(e){var t=e.parameters;return t.push(new ae({})),{parameters:t}})},a.parameterTestHandler=function(e){return function(){var t=a.state,n=t.links,r=t.parameters[e];0===n.length&&a.setState({stateName:"test",testText:"No links",testedParameter:r});var l=n.split("\n")[0];a.startLoading().then(function(){return a.api.fetch(l)}).then(function(e){return e.result.response.result}).then(function(e){return a.setState({stateName:"test",testText:e,testedParameter:r})})}},a.parameterFocusHandler=function(e){return function(){return a.setState(function(t){return{stateName:"test",testedParameter:t.parameters[e]}})}},a.parameterBlurHandler=function(e){return function(){return a.setState(function(){return{stateName:"none",testedParameter:null}})}},a.api=new ee(function(e){return a.setState({user:e?a.api.user.getBasicProfile():null,anchorEl:null})}),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.links,l=a.parameters,i=a.itemsContainer,o=a.user,s=a.result,c=a.anchorEl,u=a.stateName,m=a.testText,h=a.testedParameter;return r.a.createElement("div",{className:t.root},r.a.createElement(I,{anchor:c,user:o,authHandler:this.authHandler,menuHandler:this.menuHandler}),r.a.createElement(v.a,{container:!0},r.a.createElement(v.a,{item:!0,xs:12,lg:6},r.a.createElement("div",{className:t.wrapper},r.a.createElement("div",{className:t.container},r.a.createElement(z,{label:"Links",value:n,onChange:this.changeHandler("links")})),r.a.createElement("div",{className:t.container},r.a.createElement(f.a,{variant:"outlined",color:"primary",className:t.button,onClick:this.runHandler,disabled:!o},"Run"),r.a.createElement(f.a,{variant:"outlined",className:t.button,onClick:this.parameterAddHandler},"Add")),l.map(function(a,n){return r.a.createElement(q,{key:n,className:t.container,value:a,onChange:e.parameterChangeHandler(n),onCheck:e.parameterCheckHandler(n),onRemove:e.parameterDeleteHandler(n),onTest:e.parameterTestHandler(n)})}))),r.a.createElement(v.a,{item:!0,xs:12,lg:6},r.a.createElement("div",{className:t.wrapper},r.a.createElement("div",{className:t.container},r.a.createElement(z,{label:"Items container",value:i,onChange:this.changeHandler("itemsContainer")})),"edit"===u&&r.a.createElement("div",{className:t.container},r.a.createElement(z,{label:"Test text",value:m,onChange:this.changeHandler("testText")})),"test"===u&&r.a.createElement("div",{className:t.container},r.a.createElement(M,null,r.a.createElement(Y,{parameter:h,value:m}))),"show"===u&&s.length>0&&s.map(function(e,a){return r.a.createElement("div",{key:a,className:t.container},r.a.createElement(M,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})))}),"loading"===u&&r.a.createElement("div",{className:t.container},r.a.createElement(M,null,r.a.createElement(b.a,null)))))))}}]),t}(n.Component),ue=Object(E.withStyles)({root:{flexGrow:1},wrapper:{width:"90%",margin:"0 auto"},container:{padding:20},button:{marginRight:20},progress:{margin:"10 auto"}})(ce);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,2,1]]]);
//# sourceMappingURL=main.82f07df6.chunk.js.map