(window["webpackJsonpweb-app"]=window["webpackJsonpweb-app"]||[]).push([[0],{242:function(e,t,n){e.exports=n(482)},253:function(e,t,n){},305:function(e,t){},307:function(e,t){},342:function(e,t){},343:function(e,t){},482:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),i=n(24),c=n(68),o=n(69),u=n(70);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(u.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map(function(e){return e.id===t.id?s({},e,{completed:!e.completed}):e});case"DELETE_TODO":return e.filter(function(e){return e.id!==t.id});case"EDIT_TODO":return e.map(function(e){return e.id===t.id?s({},e,{text:t.text}):e});default:return e}};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var h={isSignedIn:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNUP":return[].concat(Object(u.a)(e),[{id:t.id,name:t.values.name,password:t.values.password}]);default:return e}};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b=[],O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":return[].concat(Object(u.a)(e),[{id:t.id,name:t.name,description:t.description,price:t.price,length:t.length,width:t.width,height:t.height}]);case"DELETE_TODO":return e.filter(function(e){return e.id!==t.id});case"EDIT_TODO":return e.map(function(e){return e.id===t.id?E({},e,{text:t.text}):e});default:return e}},v=Object(c.b)({todos:p,userAuth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER":return g({},e,{isSignedIn:!0});case"LOGOUT_USER":return g({},e,{isSignedIn:!1});default:return e}},signup:f,userData:O}),x=n(238),w=n(492),j=n(22),S=n(493),D=n(490),P=n(5),T=n(28),L=n(486),A=function(){return{type:"LOGOUT_USER"}},I=n(44),k=Object(I.a)(),N=(n(252),n(253),Object(i.b)(function(e){return{userAuth:e.userAuth}},{loginUser:function(){return{type:"LOGIN_USER"}},logoutUser:A})(function(e){var t=Object(a.useState)(!1),n=Object(j.a)(t,2),l=(n[0],n[1],Object(a.useState)("")),i=Object(j.a)(l,2),c=i[0],o=i[1],u=Object(a.useState)(""),d=Object(j.a)(u,2),s=d[0],p=d[1];Object(a.useEffect)(function(){localStorage.setItem("username1","manish"),localStorage.setItem("password1","1234")},[]);var m=function(){c===localStorage.getItem("username1")===!0&&s===localStorage.getItem("password1")===!0||c===localStorage.getItem("username2")===!0&&s===localStorage.getItem("password2")===!0?(e.loginUser(),k.push("/home"),S.a.success("login sucessfully")):S.a.warning("please enter valid user"),e.userAuth.isSignedIn&&k.push("/home")};return r.a.createElement("div",null,r.a.createElement("div",{className:"container",style:{margin:"15% auto"}},r.a.createElement("div",{style:{maxWidth:"500px",margin:"0px auto",padding:"30px",borderRadius:"5px",background:"#ffff",boxShadow:" 1px 0 35px 2px #777"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Login")),r.a.createElement("div",{style:{margin:"30px"}},r.a.createElement(D.a,{onChange:function(e){o(e.target.value)},prefix:r.a.createElement(P.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username",className:"input1",style:{background:"#eee !important"}})),r.a.createElement("div",{style:{margin:"30px"}},r.a.createElement(D.a,{onChange:function(e){p(e.target.value)},prefix:r.a.createElement(P.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password",className:"input2"})),r.a.createElement("div",{style:{textAlign:"center",width:"50% !important"}},r.a.createElement(T.a,{onClick:m,type:"primary",className:"login-form-button",style:{width:"400px !important",color:"white"}},r.a.createElement(P.a,{type:"login"}),"Log in")),r.a.createElement(L.a,null,"OR"),r.a.createElement("div",{style:{textAlign:"center",width:"50% !important"}},r.a.createElement(T.a,{onClick:m,type:"success",className:"login-form-button",style:{width:"400px !important",background:"#00ad45",color:"white"}},r.a.createElement(P.a,{type:"user"}),"Sign Up")))))})),C=Object(i.b)(null,{logoutUser:A})(function(e){return r.a.createElement("div",null,r.a.createElement("div",{style:{padding:"15px",background:"#000000bf"}},r.a.createElement("span",{style:{color:"#fff",fontSize:"22px"}},"Assignment"),r.a.createElement(T.a,{style:{float:"right"},onClick:function(){e.logoutUser(),k.push("/login")}},"Logout")))}),W=n(489),U=n(488),_=n(491),R=n(83),B=n(229),G=(D.a.TextArea,R.a.Option,Object(i.b)()(function(e){var t=e.dispatch,n=e.setCreateNewModalShow,l=e.setLoadAgain,i=e.loadAgain,c=Object(a.useState)(""),o=Object(j.a)(c,2),u=o[0],d=o[1],s=Object(a.useState)(""),p=Object(j.a)(s,2),m=p[0],g=p[1],h=Object(a.useState)(""),f=Object(j.a)(h,2),y=f[0],E=f[1],b=Object(a.useState)(""),O=Object(j.a)(b,2),v=O[0],x=O[1],w=Object(a.useState)(""),P=Object(j.a)(w,2),L=P[0],A=P[1],I=Object(a.useState)(""),k=Object(j.a)(I,2),N=k[0],C=k[1],W=function(){return""===u||" "===u||void 0===u||null===u?(d(null),void S.a.warning("Please Enter Name")):""===m||" "===m||void 0===m||null===m?(g(null),void S.a.warning("Please Enter description")):""===y||" "===y||void 0===y||null===y?(E(null),void S.a.warning("Please Enter price")):""===v||" "===v||void 0===v||null===v?(x(null),void S.a.warning("Please Enter length")):""===L||" "===L||void 0===L||null===L?(A(null),void S.a.warning("Please enter width")):""===N||" "===N||void 0===N||null===N?(C(null),void S.a.warning("Please Select height")):(t(function(e,t,n,a,r,l){return{type:"ADD_USER",id:Object(B.v4)(),name:e,description:t,price:n,length:a,width:r,height:l}}(u,m,y,v,L,N)),S.a.success("Details Added Succesfully"),n(!1),void l(!i))};return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},r.a.createElement("div",{style:{width:"140px",fontWeight:600}},r.a.createElement("p",null,"Name ",r.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*"))),r.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},r.a.createElement("div",null,r.a.createElement(D.a,{type:"text",placeholder:"Full Name",style:null===u?{width:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){d(e.target.value)}})),null===u?r.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Required"):null)),r.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},r.a.createElement("div",{style:{width:"140px",fontWeight:600}},r.a.createElement("p",null,"Description ",r.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*"))),r.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},r.a.createElement("div",null,r.a.createElement(D.a,{type:"text",placeholder:"Description",style:null===m?{width:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){g(e.target.value)}})),null===m?r.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Required"):null)),r.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},r.a.createElement("div",{style:{width:"140px",fontWeight:600}},r.a.createElement("p",null,"Price ",r.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*"))),r.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},r.a.createElement("div",null,r.a.createElement(D.a,{type:"number",placeholder:"Price",style:null===y?{width:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){E(e.target.value)}})),null===y?r.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Required"):null)),r.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},r.a.createElement("div",{style:{width:"140px",fontWeight:600}},r.a.createElement("p",null,"Length",r.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*"))),r.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},r.a.createElement("div",null,r.a.createElement(D.a,{type:"text",placeholder:"Length",style:null===v?{width:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){x(e.target.value)}})),null===v?r.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Required"):null)),r.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},r.a.createElement("div",{style:{width:"140px",fontWeight:600}},r.a.createElement("p",null,"Width",r.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*"))),r.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},r.a.createElement("div",null,r.a.createElement(D.a,{type:"text",placeholder:"Width",style:null===L?{width:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){A(e.target.value)}})),null===L?r.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Required"):null)),r.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},r.a.createElement("div",{style:{width:"140px",fontWeight:600}},r.a.createElement("p",null,"Height",r.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*"))),r.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},r.a.createElement("div",null,r.a.createElement(D.a,{type:"text",placeholder:"Height",style:null===L?{height:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){C(e.target.value)}})),null===N?r.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Required"):null)),r.a.createElement("div",{style:{margin:"60px 0px 30px 0px",textAlign:"center"}},r.a.createElement(T.a,{type:"primary",onClick:function(){return W()}},"Add New")))})),q=n(487),z=(Object(i.b)(null,{deleteTodo:function(e){return{type:"DELETE_TODO",id:e}}})(function(e){return r.a.createElement("div",null,r.a.createElement(q.a,{title:"Are you sure delete this task?",onConfirm:function(){console.log(e),e.deleteTodo(e.itemId)},okText:"Yes",cancelText:"No"},r.a.createElement(P.a,{style:{color:"#fff",fontSize:"20px"},type:"delete"})))}),function(){var e=Object(i.d)(function(e){return e.userData}),t=Object(a.useState)(!1),n=Object(j.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)(!1),u=Object(j.a)(o,2),d=u[0],s=u[1],p=Object(a.useState)([]),m=Object(j.a)(p,2),g=m[0],h=m[1],f=Object(a.useState)([]),y=Object(j.a)(f,2),E=(y[0],y[1]),b=Object(a.useState)(!1),O=Object(j.a)(b,2),v=O[0],x=O[1],w=Object(a.useState)([]),S=Object(j.a)(w,2),D=(S[0],S[1],Object(a.useState)("")),P=Object(j.a)(D,2);P[0],P[1];Object(a.useEffect)(function(){return x(!0),h(e),E(e),x(!1),function(){h([])}},[d]);var A=[{title:"Name",dataIndex:"name",key:"name",width:200,minWidth:200,render:function(e){return""===e||null===e||void 0===e?"-":r.a.createElement("span",null,e)}},{title:"Description",dataIndex:"description",key:"description",width:200,minWidth:200,render:function(e){return""===e||null===e||void 0===e?"-":r.a.createElement("span",null,e)}},{title:"Price",dataIndex:"price",key:"price",width:200,minWidth:200,render:function(e){return""===e||null===e||void 0===e?"-":r.a.createElement("span",null,e)}},{title:"Length",dataIndex:"length",key:"length",width:200,minWidth:200,render:function(e){return""===e||null===e||void 0===e?"-":r.a.createElement("span",null,e)}},{title:"Width",dataIndex:"width",key:"width",width:200,minWidth:200,render:function(e){return""===e||null===e||void 0===e?"-":r.a.createElement("span",null,e)}},{title:"Height",dataIndex:"height",key:"height",width:200,minWidth:200,render:function(e){return""===e||null===e||void 0===e?"-":r.a.createElement("span",null,e)}}];return r.a.createElement("div",{style:{padding:24,boxShadow:"3px 3px 5px 6px #ccc",marginTop:"5%"}},r.a.createElement("div",{className:"log__header"},r.a.createElement("div",{class:"ui top attached tabular menu"},r.a.createElement("h4",null,"Yantraksh Logistics Pvt. Ltd."))),r.a.createElement("div",{style:{marginTop:"40px"}}),r.a.createElement(L.a,null),r.a.createElement("div",{class:"ui grid",style:{marginTop:"30px",display:"flex",justifyContent:"space-around",flexWrap:"wrap"}},r.a.createElement("div",{class:"two column row"},r.a.createElement("div",{class:"column",style:{textAlign:"center"}},r.a.createElement(T.a,{size:"large",type:"primary",onClick:function(){c(!0)}},r.a.createElement(W.a,null)," Add Products")))),r.a.createElement(L.a,null),r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement(U.a,{className:"theadDark",columns:A,dataSource:g,loading:v,rowKey:function(e,t){return e.id},pagination:{pageSize:5},scroll:{x:1300}})),!0===l?r.a.createElement(_.a,{style:{minWidth:"600px"},title:"Add New User",closable:!0,footer:null,onCancel:function(){return c(!1)},visible:l,destroyOnClose:!0},r.a.createElement(G,{setLoadAgain:s,loadAgain:d,setCreateNewModalShow:c})):null)}),J=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement("div",{style:{textAlign:"center",margin:"0px auto",marginTop:"50px",maxWidth:"80%"}},r.a.createElement(z,null)))},H=function(e){var t=e.component,n=e.user,a=(e.dispatch,Object(x.a)(e,["component","user","dispatch"]));return r.a.createElement(w.b,Object.assign({},a,{render:function(e){return!0===n.isSignedIn?r.a.createElement(t,e):r.a.createElement(w.a,{to:"/login"})}}))},M=Object(i.b)(function(e){return{userAuth:e.userAuth}})(function(e){var t=Object(i.c)(),n=e.userAuth;return console.log(e.userAuth.isSignedIn),r.a.createElement(w.c,{history:k},r.a.createElement(w.d,null,r.a.createElement(H,{path:"/home",exact:!0,component:J,user:n,dispatch:t}),r.a.createElement(w.b,{path:"/login",component:N}),r.a.createElement(w.b,{path:"/",exact:!0,component:N,user:n})))}),Y=n(237),F=n.n(Y),K=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Q=Object(c.c)(v,K);Q.subscribe(F()(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}({todos:Q.getState().todos,signup:Q.getState().signup})},1e3)),Object(l.render)(r.a.createElement(i.a,{store:Q},r.a.createElement(M,null)),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.e11f519b.chunk.js.map