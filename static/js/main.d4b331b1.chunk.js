(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t){e.exports={SERVER_URL:"http://localhost:4445",SERVER_PORT:""}},120:function(e,t,a){e.exports=a(301)},125:function(e,t,a){},127:function(e,t,a){},294:function(e,t,a){},298:function(e,t,a){},301:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"doCreateUserWithEmailAndPassword",function(){return T}),a.d(n,"doSignInWithEmailAndPassword",function(){return L}),a.d(n,"doSignOut",function(){return D}),a.d(n,"doPasswordReset",function(){return F}),a.d(n,"doPasswordUpdate",function(){return K});var r=a(0),i=a.n(r),o=a(18),l=a.n(o),s=(a(125),a(19)),c=a(20),u=a(22),m=a(21),d=a(23),p=(a(127),a(109)),h=a.n(p),f=a(110),g=a.n(f),b=a(28),w=a.n(b),E=a(16),v=a.n(E),y=a(111),O=a.n(y),j=a(39),k=a(34),S=a(33),C=a.n(S),z=a(38),x=a.n(z),A=a(26),R=a.n(A),P=a(47),U=a.n(P),I=(a(135),{apiKey:"AIzaSyAsbxCcuyjKRzofKLwTcI1dUQe72WwV8KU",authDomain:"recipes-list-2b9dc.firebaseapp.com",databaseURL:"https://recipes-list-2b9dc.firebaseio.com",projectId:"recipes-list-2b9dc",storageBucket:"recipes-list-2b9dc.appspot.com",messagingSenderId:"905012140494"});U.a.apps.length||U.a.initializeApp(I);var W=U.a.auth(),T=function(e,t){return W.createUserWithEmailAndPassword(e,t)},L=function(e,t){return W.signInWithEmailAndPassword(e,t)},D=function(){return W.signOut()},F=function(e){return W.sendPasswordResetEmail(e)},K=function(e){return W.currentUser.updatePassword(e)},V=function(e,t){return function(){return Object(k.a)({},e,t)}},B={email:"",password:"",error:null},M=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={open:!1,pseudo:"",password:""},a.handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.onSubmit=function(e){var t=a.state,r=t.email,i=t.password;n.doSignInWithEmailAndPassword(r,i).then(function(){a.setState(Object(j.a)({},B)),console.log("happy")}).catch(function(e){a.setState(V("error",e))}),e.preventDefault()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,r=t.error;return i.a.createElement("div",null,i.a.createElement(C.a,{onClick:this.handleOpen},"Login"),i.a.createElement(x.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose},i.a.createElement("div",{style:{position:"absolute",width:500,backgroundColor:"#FF0"}},i.a.createElement(v.a,{variant:"h6",id:"modal-title"},"Register"),i.a.createElement(v.a,{variant:"subtitle1",id:"simple-modal-description"},"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."),i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement(R.a,{id:"standard-name",label:"email",value:a,onChange:function(t){return e.setState(V("email",t.target.value))},margin:"normal"}),i.a.createElement(R.a,{id:"standard-uncontrolled",label:"Password",value:n,type:"password",onChange:function(t){return e.setState(V("password",t.target.value))},margin:"normal"}),i.a.createElement("input",{type:"submit",value:"Submit"}),r&&i.a.createElement("p",null,r.message)))))}}]),t}(r.Component),N=function(e,t){return function(){return Object(k.a)({},e,t)}},_={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state=Object(j.a)({},_),a.handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleSubmit=function(e){var t=a.state,r=(t.username,t.email),i=t.passwordOne;n.doCreateUserWithEmailAndPassword(r,i).then(function(e){a.setState(Object(j.a)({},_))}).catch(function(e){a.setState(N("error",e))}),e.preventDefault()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.email,r=t.passwordOne,o=t.passwordTwo,l=t.error;return i.a.createElement("div",null,i.a.createElement(C.a,{onClick:this.handleOpen},"Register"),i.a.createElement(x.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose},i.a.createElement("div",{style:{position:"absolute",width:500,backgroundColor:"#FF0"}},i.a.createElement(v.a,{variant:"h6",id:"modal-title"},"Register"),i.a.createElement(v.a,{variant:"subtitle1",id:"simple-modal-description"},"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement(R.a,{id:"standard-name",label:"email",value:n,onChange:function(t){return e.setState(N("email",t.target.value))},margin:"normal"}),i.a.createElement(R.a,{id:"standard-name",label:"username",value:a,onChange:function(t){return e.setState(N("username",t.target.value))},margin:"normal"}),i.a.createElement(R.a,{id:"standard-uncontrolled",label:"Password",value:r,type:"password",onChange:function(t){return e.setState(N("passwordOne",t.target.value))},margin:"normal"}),i.a.createElement(R.a,{id:"standard-uncontrolled",label:"Password conf",value:o,type:"password",onChange:function(t){return e.setState(N("passwordTwo",t.target.value))},margin:"normal"}),i.a.createElement("input",{type:"submit",value:"Submit"}),l&&i.a.createElement("p",null,l.message)))))}}]),t}(r.Component),J=function(){return i.a.createElement("button",{type:"button",onClick:n.doSignOut},"Sign Out")},q=a(107),Q=a.n(q),$=a(108);var G=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t;return e="axel4@axel4.com",t="axel4",Q.a.post("".concat($.SERVER_URL,"/users/sign-in"),{email:e,password:t}).then(function(e,t){console.log(t),console.log(e)}),i.a.createElement(h.a,{position:"static"},i.a.createElement(g.a,null,i.a.createElement(w.a,{color:"inherit","aria-label":"Menu"},i.a.createElement(O.a,null)),i.a.createElement(v.a,{variant:"h6",color:"inherit"},"My Recipes List"),i.a.createElement(M,null),i.a.createElement(H,null),i.a.createElement(J,null)))}}]),t}(r.Component),X=a(66),Y=a.n(X),Z=a(112),ee=a.n(Z),te=a(114),ae=a.n(te),ne=a(67),re=a.n(ne),ie=a(115),oe=a.n(ie),le=a(119),se=a.n(le),ce=a(116),ue=a.n(ce),me=a(117),de=a.n(me),pe=a(118),he=a.n(pe),fe=a(113),ge=a.n(fe),be=(a(294),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={expanded:!1},a.handleExpandClick=function(){a.setState(function(e){return{expanded:!e.expanded}})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(Y.a,{className:"cardRecipes"},i.a.createElement(ee.a,{action:i.a.createElement(w.a,null,i.a.createElement(ge.a,null)),title:this.props.recipe.title,subheader:"September 14, 2016"}),i.a.createElement(ae.a,{image:"/static/images/cards/paella.jpg",title:"Contemplative Reptile"}),i.a.createElement(re.a,null,i.a.createElement(v.a,{component:"p"},"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")),i.a.createElement(oe.a,{disableActionSpacing:!0},i.a.createElement(w.a,{"aria-label":"Add to favorites"},i.a.createElement(ue.a,null)),i.a.createElement(w.a,{"aria-label":"Share"},i.a.createElement(de.a,null)),i.a.createElement(w.a,{onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},i.a.createElement(he.a,null))),i.a.createElement(se.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},i.a.createElement(re.a,null,i.a.createElement(v.a,{paragraph:!0},"Method:"),i.a.createElement(v.a,{paragraph:!0},"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."),i.a.createElement(v.a,{paragraph:!0},"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."),i.a.createElement(v.a,{paragraph:!0},"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"),i.a.createElement(v.a,null,"Set aside off of the heat to let rest for 10 minutes, and then serve."))))}}]),t}(r.Component)),we=a(48),Ee=a.n(we),ve=(a(298),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).recipes=[{title:"Rizzoto",image:"https://f.wszelkieprzepisy.pl/images/ywoj5xrm/rizotto-miesno-warzywne-orig.png"},{title:"Carbo",image:"https://f.wszelkieprzepisy.pl/images/ywoj5xrm/rizotto-miesno-warzywne-orig.png"},{title:"Pates",image:"https://f.wszelkieprzepisy.pl/images/ywoj5xrm/rizotto-miesno-warzywne-orig.png"},{title:"Pates",image:"https://f.wszelkieprzepisy.pl/images/ywoj5xrm/rizotto-miesno-warzywne-orig.png"},{title:"Pates",image:"https://f.wszelkieprzepisy.pl/images/ywoj5xrm/rizotto-miesno-warzywne-orig.png"}],a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"recipesList"},i.a.createElement(Ee.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start"},i.a.createElement(Ee.a,{container:!0,item:!0,md:9},this.recipes.map(function(e,t){return i.a.createElement(Ee.a,{item:!0,md:4,sm:6,key:t},i.a.createElement(be,{recipe:e,key:t}))}))))}}]),t}(r.Component)),ye=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(G,null),i.a.createElement(ve,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[120,2,1]]]);
//# sourceMappingURL=main.d4b331b1.chunk.js.map