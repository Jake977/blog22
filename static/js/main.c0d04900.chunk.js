(this.webpackJsonpblog22=this.webpackJsonpblog22||[]).push([[0],{11:function(e,t,a){"use strict";var n=a(74),r=a.n(n),o="https://conduit.productionready.io/api",c=function(e){return e.body},i=null,l=function(e){i&&e.set("authorization","Token ".concat(i))},s={current:function(){return u.get("/user")},login:function(e,t){return u.post("/users/login",{user:{email:e,password:t}})},signup:function(e,t,a){return u.post("/users",{user:{username:e,email:t,password:a}})},save:function(e){return u.put("/user",{user:e})}},u={del:function(e){return r.a.del("".concat(o).concat(e)).use(l).then(c)},get:function(e){return r.a.get("".concat(o).concat(e)).use(l).then(c)},put:function(e,t){return r.a.put("".concat(o).concat(e),t).use(l).then(c)},post:function(e,t){return r.a.post("".concat(o).concat(e),t).use(l).then(c)}},p={getTags:function(){return u.get("/tags")}},d=function(e){return Object.assign({},e,{slug:void 0})},m={all:function(e){return u.get("/articles?".concat(function(e,t){return"limit=".concat(e,"&offset=").concat(t?t*e:0)}(10,e)))},userArticles:function(){return u.get("/articles/feed?limit=10&offset=0")},get:function(e){return u.get("/articles/".concat(e))},create:function(e){return u.post("/articles",{article:e})},update:function(e){return u.put("/articles/".concat(e.slug),{article:d(e)})},del:function(e){return u.del("/articles/".concat(e))},favorite:function(e){return u.post("/articles/".concat(e,"/favorite"))},unfavorite:function(e){return u.del("/articles/".concat(e,"/favorite"))}};t.a={authorization:s,articles:m,tags:p,setToken:function(e){i=e}}},119:function(e,t,a){},122:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(4),r=a(0),o=a.n(r),c=a(31),i=a(87),l=function(e){var t=e.article;return o.a.createElement("div",{className:"articlePreview"},o.a.createElement(c.a,{to:"/article/".concat(t.slug)},o.a.createElement(i.a,{article:t}),o.a.createElement("div",{className:"articlePreview__text"},t.description)))},s=a(11),u=a(7),p=a(10),d=Object(p.c)((function(){return{}}),(function(e){return{onSetPage:function(t,a){return e(u.a.doSetPage(t,a))}}}))((function(e){if(e.articlesCount<=10)return null;for(var t=[],a=0;a<Math.ceil(e.articlesCount/10);++a)t.push(a);return o.a.createElement("nav",null,o.a.createElement("ul",{className:"pagination"},t.map((function(t){var a=t===e.currentPage;return o.a.createElement("li",{className:"pagination-item",onClick:function(a){var n;a.preventDefault(),n=t,e.pager?e.onSetPage(n,e.pager(n)):e.onSetPage(n,s.a.articles.all(n))},key:t.toString()},o.a.createElement("button",{className:a?"pagination-btn active":"pagination-btn"},t+1))}))))})),m=(a(119),function(e){var t=e.articles,a=e.pager,n=e.articlesCount,r=e.currentPage;return t?0===t.length?o.a.createElement("div",{className:"articlePreview"},"Have no articles"):o.a.createElement("div",null,t.map((function(e){return o.a.createElement(l,{key:e.slug,article:e})})),o.a.createElement(d,{pager:a,articlesCount:n,currentPage:r})):o.a.createElement("div",{className:"articlePreview"},o.a.createElement("div",{className:"loadingPlaceHolder"},"Loading",o.a.createElement("div",{className:"spinner"},o.a.createElement("div",{className:"bounce1"}),o.a.createElement("div",{className:"bounce2"}),o.a.createElement("div",{className:"bounce3"}))))});t.a=Object(p.c)((function(e){return Object(n.a)(Object(n.a)({},e.articlesList),{},{token:e.mainstate.token})}))((function(e){return o.a.createElement("div",null,o.a.createElement(m,{loading:e.loading,articles:e.articles,pager:e.pager,articlesCount:e.articlesCount,currentPage:e.currentPage}))}))},157:function(e,t,a){e.exports=a(292)},173:function(e,t,a){},291:function(e,t,a){},292:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(10),o=a(0),c=a.n(o),i=a(52),l=a(135),s=a(136),u=a(11),p={setToLocalStorage:function(e,t){return window.localStorage.setItem(e,t)},getFromLocalStorage:function(e){return window.localStorage.getItem(e)}},d=function(e){return function(t){return function(a){var n;(n=a.payload)&&"function"===typeof n.then?a.payload.then((function(t){console.log("RESULT",t),a.payload=t,e.dispatch(a)}),(function(t){console.log("ERROR",t),a.error=!0,a.payload=t.response.body,e.dispatch(a)})):t(a)}}},m=function(e){return function(e){return function(t){"LOGOUT"===t.type&&(p.setToLocalStorage("jwt",""),u.a.setToken(null)),"SIGNUP"!==t.type&&"LOGIN"!==t.type||t.error||(p.setToLocalStorage("jwt",t.payload.user.token),u.a.setToken(t.payload.user.token)),e(t)}}};var g,E=a(61),f=a(4),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":case"SIGNUP":return Object(f.a)(Object(f.a)({},e),{},{inProgress:!1,errors:t.error?t.payload.errors:null});case"UPDATE_FIELD_AUTH":return Object(f.a)(Object(f.a)({},e),{},Object(E.a)({},t.key,t.value));default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":return Object(f.a)(Object(f.a)({},e),{},{articles:t.payload.articles,articlesCount:t.payload.articlesCount,currentPage:t.page});case"APPLY_TAG_FILTER":return Object(f.a)(Object(f.a)({},e),{},{pager:t.pager,articles:t.payload.articles,articlesCount:t.payload.articlesCount,tab:null,tag:t.tag,currentPage:0});case"HOME_PAGE_LOADED":return Object(f.a)(Object(f.a)({},e),{},{articles:t.payload[1].articles,articlesCount:t.payload[1].articlesCount,pager:t.pager,currentPage:0});case"HOME_PAGE_UNLOADED":return{};case"CHANGE_ARTICLES_LIST":return Object(f.a)(Object(f.a)({},e),{},{articles:t.payload.articles,articlesCount:t.payload.articlesCount,tab:t.tab,pager:t.pager,currentPage:0,tag:null});default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDITOR_PAGE_LOADED":return Object(f.a)(Object(f.a)({},e),{},{articleSlug:t.payload?t.payload.article.slug:"",title:t.payload?t.payload.article.title:"",description:t.payload?t.payload.article.description:"",body:t.payload?t.payload.article.body:"",tagInput:"",tagList:t.payload?t.payload.article.tagList:[]});case"EDITOR_PAGE_UNLOADED":return{};case"ARTICLE_SUBMITTED":return Object(f.a)(Object(f.a)({},e),{},{inProgress:null,errors:t.error?t.payload.errors:null});case"ASYNC_START":if("ARTICLE_SUBMITTED"===t.subtype)return Object(f.a)(Object(f.a)({},e),{},{inProgress:!0});break;case"UPDATE_FIELD_EDITOR":return Object(f.a)(Object(f.a)({},e),{},Object(E.a)({},t.key,t.value));default:return e}return e},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ARTICLE_PAGE_LOADED":return Object(f.a)(Object(f.a)({},e),{},{article:t.payload[0].article});case"ARTICLE_PAGE_UNLOADED":return{};default:return e}},L={token:null,viewChangeCounter:0},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP_LOAD":return Object(f.a)(Object(f.a)({},e),{},{token:t.token||null,appLoaded:!0,currentUser:t.payload?t.payload.user:null});case"REDIRECT":return Object(f.a)(Object(f.a)({},e),{},{redirectTo:null});case"LOGOUT":return Object(f.a)(Object(f.a)({},e),{},{redirectTo:"/",token:null,currentUser:null});case"LOGIN":case"SIGNUP":return Object(f.a)(Object(f.a)({},e),{},{redirectTo:t.error?null:"/",token:t.error?null:t.payload.user.token,currentUser:t.error?null:t.payload.user});case"DELETE_ARTICLE":return Object(f.a)(Object(f.a)({},e),{},{redirectTo:"/"});case"ARTICLE_PAGE_UNLOADED":return Object(f.a)(Object(f.a)({},e),{},{viewChangeCounter:e.viewChangeCounter+1});default:return e}},C=a(71),y=a(137),j=a(108),U=Object(y.a)(),P=Object(j.a)(U),w=Object(i.createStore)((g=U,Object(i.combineReducers)({authorization:h,article:A,articlesList:b,editor:v,mainstate:O,router:Object(C.b)(g)})),{},Object(s.composeWithDevTools)(Object(i.applyMiddleware)(P,d,m,Object(l.createLogger)()))),I=a(12),T=a(23),N=a(24),D=a(26),F=a(25),S=a(31),k=a(294),G=a(94),R=a(82),B=a.n(R),Y=(a(173),a(7)),Q=function(e){return e.currentUser?null:c.a.createElement(c.a.Fragment,null,c.a.createElement(S.b,{to:"/login",className:"topBar__link"},"Log In"),c.a.createElement(S.b,{to:"/signup",className:"topBar__link"},"Sign Up"))},x=function(e){var t=e.currentUser;return t?c.a.createElement(c.a.Fragment,null,c.a.createElement(S.b,{exact:!0,to:"/add",className:"topBar__link"},"Create article"),c.a.createElement("div",{className:"topBar__userName"},t.username),c.a.createElement(k.a,{src:B.a,size:46,alt:t.username}),c.a.createElement(G.a,{style:{marginLeft:"10px"},danger:!0,onClick:e.onClickLogout},"Log Out")):null},X=function(e){Object(D.a)(a,e);var t=Object(F.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){var e=this.props,t=e.currentUser,a=e.onClickLogout;return c.a.createElement("div",{className:"topBar"},c.a.createElement("div",{className:"topBar__title"},c.a.createElement(S.b,{exact:!0,to:"/",className:"topBar__link"},"Realworld Blog")),c.a.createElement(Q,{currentUser:t}),c.a.createElement(x,{currentUser:t,onClickLogout:a}))}}]),a}(c.a.Component),W=Object(r.c)((function(e){return Object(f.a)(Object(f.a)({},e),{},{currentUser:e.mainstate.currentUser})}),(function(e){return{onClickLogout:function(){return e(Y.a.doLogOut())}}}))(X),M=a(93),H=a(87),Z=a(67),z=Object(r.c)((function(){return{}}),(function(e){return{onClickDelete:function(t){return e(Y.a.doArticleDelete(t))}}}))((function(e){var t=e.article;return c.a.createElement("div",{className:"articlePage__buttons"},c.a.createElement(S.a,{to:"/article/".concat(t.slug,"/edit")},c.a.createElement(G.a,null,"Edit")),c.a.createElement(G.a,{onClick:function(){e.onClickDelete(u.a.articles.del(t.slug)),w.dispatch(Object(Z.push)("/"))},danger:!0},"Delete"))})),K=function(e){Object(D.a)(a,e);var t=Object(F.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"componentDidMount",value:function(){this.props.onLoad(Promise.all([u.a.articles.get(this.props.match.params.id)]))}},{key:"componentWillUnmount",value:function(){this.props.onUnload()}},{key:"render",value:function(){var e=this.props.article,t=this.props.currentUser;if(!e)return null;var a=t&&t.username===e.author.username;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"articlePage"},c.a.createElement("div",{className:"articlePage__header"},c.a.createElement(H.a,{article:e})),a?c.a.createElement(z,{article:e}):null,c.a.createElement("div",{className:"articleContent"},c.a.createElement("div",null,e.body))))}}]),a}(c.a.Component),V=Object(r.c)((function(e){return Object(f.a)(Object(f.a)({},e.article),{},{currentUser:e.mainstate.currentUser})}),(function(e){return{onLoad:function(t){return e(Y.a.doArticlePageLoaded(t))},onUnload:function(){return e(Y.a.doArticlePageUnloaded())}}}))(K),q=a(301),_=function(e){Object(D.a)(a,e);var t=Object(F.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){var e=this.props.errors;return e?c.a.createElement(q.a,{message:Object.keys(e).map((function(t){return c.a.createElement("div",{key:t}," ",t," ",e[t]," ")})),type:"error"}):null}}]),a}(c.a.Component),J=a(298),$=a(299),ee=(a(122),{labelCol:{span:24},wrapperCol:{span:24}}),te={wrapperCol:{span:24,offset:0}},ae=function(e){Object(D.a)(a,e);var t=Object(F.a)(a);function a(e){var n;return Object(T.a)(this,a),(n=t.call(this,e)).changeEmail=function(e){return n.props.onChangeEmail(e.target.value)},n.changePassword=function(e){return n.props.onChangePassword(e.target.value)},n.submitForm=function(e,t){return function(a){n.props.onSubmit(e,t)}},n}return Object(N.a)(a,[{key:"render",value:function(){var e=this.props,t=e.email,a=e.password;return c.a.createElement("div",{className:"login-form"},c.a.createElement("div",{className:"login-form__title"},"Log In"),c.a.createElement(_,{errors:this.props.errors}),c.a.createElement(J.a,Object.assign({},ee,{onFinish:this.submitForm(t,a)}),c.a.createElement(J.a.Item,{label:"E-mail",name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},c.a.createElement($.a,{value:t,onChange:this.changeEmail})),c.a.createElement(J.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},c.a.createElement($.a.Password,{value:a,onChange:this.changePassword})),c.a.createElement(J.a.Item,te,c.a.createElement(G.a,{className:"login-form__btn",type:"primary",htmlType:"submit",disabled:this.props.inProgress},"Log in"))),c.a.createElement("p",{className:"login-form__tailText"},"Don't have an account? ",c.a.createElement(S.a,{to:"/signup"},"Sign Up.")))}}]),a}(c.a.Component),ne=Object(r.c)((function(e){return Object(f.a)({},e.authorization)}),(function(e){return{onChangeEmail:function(t){return e(Y.a.doUpdateFieldAuth("email",t))},onChangePassword:function(t){return e(Y.a.doUpdateFieldAuth("password",t))},onSubmit:function(t,a){var n=u.a.authorization.login(t,a);e(Y.a.doLogIn(n))}}}))(ae),re={labelCol:{span:24},wrapperCol:{span:24}},oe={wrapperCol:{span:24,offset:0}},ce=function(e){Object(D.a)(a,e);var t=Object(F.a)(a);function a(e){var n;return Object(T.a)(this,a),(n=t.call(this,e)).changeEmail=function(e){return n.props.onChangeEmail(e.target.value)},n.changePassword=function(e){return n.props.onChangePassword(e.target.value)},n.changeUsername=function(e){return n.props.onChangeUsername(e.target.value)},n.submitForm=function(e,t,a){return function(r){n.props.onSubmit(e,t,a)}},n}return Object(N.a)(a,[{key:"render",value:function(){var e=this.props,t=e.email,a=e.password,n=e.username,r=e.errors;return c.a.createElement("div",{className:"login-form"},c.a.createElement("div",{className:"login-form__title"},"Sign Up"),c.a.createElement(_,{errors:r}),c.a.createElement(J.a,Object.assign({},re,{onFinish:this.submitForm(n,t,a)}),c.a.createElement(J.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},c.a.createElement($.a,{value:n,onChange:this.changeUsername})),c.a.createElement(J.a.Item,{label:"E-mail",name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},c.a.createElement($.a,{value:t,onChange:this.changeEmail})),c.a.createElement(J.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},c.a.createElement($.a.Password,{value:a,onChange:this.changePassword})),c.a.createElement(J.a.Item,oe,c.a.createElement(G.a,{className:"login-form__btn",type:"primary",htmlType:"submit",disabled:this.props.inProgress},"Sign Up"))),c.a.createElement("p",{className:"login-form__tailText"},"Already have an account? ",c.a.createElement(S.a,{to:"/login"},"Log In.")))}}]),a}(c.a.Component),ie=Object(r.c)((function(e){return Object(f.a)({},e.authorization)}),(function(e){return{onChangeUsername:function(t){return e(Y.a.doUpdateFieldAuth("username",t))},onChangeEmail:function(t){return e(Y.a.doUpdateFieldAuth("email",t))},onChangePassword:function(t){return e(Y.a.doUpdateFieldAuth("password",t))},onSubmit:function(t,a,n){var r=u.a.authorization.signup(t,a,n);e(Y.a.doSignUp(r))}}}))(ce),le=(a(290),a(291),a(119),{labelCol:{span:24},wrapperCol:{span:24}}),se={wrapperCol:{span:24,offset:0}},ue=function(e){Object(D.a)(a,e);var t=Object(F.a)(a);function a(e){var n;Object(T.a)(this,a),(n=t.call(this,e)).id=n.props.match.params.id;var r=function(e){return function(t){return n.props.onUpdateField(e,t.target.value)}};return n.changeTitle=r("title"),n.changeDescription=r("description"),n.changeBody=r("body"),n.changeTagInput=r("tagInput"),n.isLoading=!0,n.submitForm=function(){var e={title:n.props.title,description:n.props.description,body:n.props.body,tagList:n.props.tagInput.split(",")},t={slug:n.props.articleSlug},a=n.props.articleSlug?u.a.articles.update(Object.assign(e,t)):u.a.articles.create(e);n.props.onSubmit(a,n.props.articleSlug)},n}return Object(N.a)(a,[{key:"componentDidUpdate",value:function(e,t){if(console.log("id",e.match.params.id),e.match.params.id!==e.match.params.id){if(e.match.params.id)return this.props.onUnload(),this.props.onLoad(u.a.articles.get(this.props.match.params.id));this.props.onLoad(null)}this.isLoading=!1}},{key:"componentDidMount",value:function(){if(this.id)return this.isLoading=!0,this.props.onLoad(u.a.articles.get(this.id));this.isLoading=!1,this.props.onLoad(null)}},{key:"componentWillUnmount",value:function(){this.props.onUnload()}},{key:"render",value:function(){var e,t,a,n,r=this.props.errors;console.log(this.props.location.pathname);var o="/add"===this.props.location.pathname?{}:{title:null===(e=this.props)||void 0===e?void 0:e.title,body:null===(t=this.props)||void 0===t?void 0:t.body,description:null===(a=this.props)||void 0===a?void 0:a.description,tags:null===(n=this.props)||void 0===n?void 0:n.tagList},i=c.a.createElement("div",{className:"loadingPlaceHolder"},"Loading",c.a.createElement("div",{className:"spinner"},c.a.createElement("div",{className:"bounce1"}),c.a.createElement("div",{className:"bounce2"}),c.a.createElement("div",{className:"bounce3"})));return this.isLoading?i:c.a.createElement("div",{className:"editor-page"},c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:""},c.a.createElement("div",{className:""},c.a.createElement(_,{errors:r}),c.a.createElement(J.a,Object.assign({},le,{initialValues:o,onFinish:this.submitForm}),c.a.createElement(J.a.Item,{label:"Title",name:"title",placeholder:"Article Title",rules:[{required:!0,message:"Please input article title"}]},c.a.createElement($.a,{onChange:this.changeTitle})),c.a.createElement(J.a.Item,{label:"Description",name:"description",placeholder:"Short description",rules:[{required:!0,message:"Please input article description"}]},c.a.createElement($.a,{onChange:this.changeDescription})),c.a.createElement(J.a.Item,{name:"body",label:"Article Text",placeholder:"article text"},c.a.createElement($.a.TextArea,{onChange:this.changeBody})),c.a.createElement(J.a.Item,{name:"tags",label:"Tags",placeholder:"Enter tags"},c.a.createElement($.a,{onChange:this.changeTagInput})),c.a.createElement(J.a.Item,se,c.a.createElement(G.a,{className:"editor-form__btn",type:"primary",htmlType:"submit",disabled:this.props.inProgress},"Submit Article")))))))}}]),a}(c.a.Component),pe=Object(r.c)((function(e){return Object(f.a)({},e.editor)}),(function(e){return{onLoad:function(t){return e(Y.a.doEditorLoaded(t))},onUnload:function(){return e(Y.a.doEditorUnloaded())},onUpdateField:function(t,a){return e(Y.a.doUpdateFieldEditor(t,a))},onSubmit:function(t,a){e(Y.a.doArticleSubmitted(t)),w.dispatch(Object(Z.push)("/"))},onRedirect:function(){return e(Y.a.doRedirect())}}}))(ue),de=function(e){Object(D.a)(a,e);var t=Object(F.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.redirectTo&&(w.dispatch(Object(Z.push)(e.redirectTo)),this.props.onRedirect())}},{key:"componentDidMount",value:function(){var e=p.getFromLocalStorage("jwt");e&&u.a.setToken(e),this.props.onLoad(e?u.a.authorization.current():null,e)}},{key:"render",value:function(){var e=this.props,t=e.currentUser;return e.appLoaded?c.a.createElement("div",{className:"app"},c.a.createElement(W,{currentUser:t}),c.a.createElement(I.c,null,c.a.createElement(I.a,{exact:!0,path:"/",component:M.a}),c.a.createElement(I.a,{path:"/login",component:t?M.a:ne}),c.a.createElement(I.a,{path:"/add",component:t?pe:ne}),c.a.createElement(I.a,{path:"/article/:id/edit",component:t?pe:ne}),c.a.createElement(I.a,{path:"/signup",component:t?M.a:ie}),c.a.createElement(I.a,{path:"/article/:id",component:t?V:ne}))):c.a.createElement("div",{className:"app"},c.a.createElement(W,{currentUser:t}))}}]),a}(c.a.Component),me=Object(r.c)((function(e){return{currentUser:e.mainstate.currentUser,appLoaded:e.mainstate.appLoaded,redirectTo:e.mainstate.redirectTo}}),(function(e){return{onLoad:function(t,a){return e(Y.a.doAppLoad(t,a))},onRedirect:function(){return e(Y.a.doRedirect())}}}))(de);Object(n.render)(c.a.createElement(r.a,{store:w},c.a.createElement(C.a,{history:U,context:r.b},c.a.createElement(I.c,null,c.a.createElement(I.a,{path:"/",component:me})))),document.getElementById("root"))},7:function(e,t,a){"use strict";t.a={doSignUp:function(e){return{type:"SIGNUP",payload:e}},doUpdateFieldAuth:function(e,t){return{type:"UPDATE_FIELD_AUTH",key:e,value:t}},doLogIn:function(e){return{type:"LOGIN",payload:e}},doLogOut:function(){return{type:"LOGOUT"}},doAppLoad:function(e,t){return{type:"APP_LOAD",payload:e,token:t}},doHomeLoaded:function(e,t){return{type:"HOME_PAGE_LOADED",pager:e,payload:t}},doHomeUnloaded:function(){return{type:"HOME_PAGE_UNLOADED"}},doRedirect:function(e){return{type:"REDIRECT",payload:e}},doSetPage:function(e,t){return{type:"SET_PAGE",page:e,payload:t}},doArticlePageLoaded:function(e){return{type:"ARTICLE_PAGE_LOADED",payload:e}},doArticlePageUnloaded:function(){return{type:"ARTICLE_PAGE_UNLOADED"}},doArticleDelete:function(e){return{type:"DELETE_ARTICLE",payload:e}},doArticleLike:function(e){return{type:"ARTICLE_LIKE",payload:e}},doArticleUnlike:function(e){return{type:"ARTICLE_UNLIKE",payload:e}},doArticleSubmitted:function(e){return{type:"ARTICLE_SUBMITTED",payload:e}},doUpdateFieldEditor:function(e,t){return{type:"UPDATE_FIELD_EDITOR",key:e,value:t}},doEditorUnloaded:function(){return{type:"EDITOR_PAGE_UNLOADED"}},doEditorLoaded:function(e){return{type:"EDITOR_PAGE_LOADED",payload:e}}}},82:function(e,t){e.exports="data:image/png;base64,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"},87:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(94),c=a(294),i=a(82),l=a.n(i),s=a(11),u=a(293),p=a(10),d=a(7),m=a(295);t.a=Object(p.c)((function(){return{}}),(function(e){return{favorite:function(t){return e(d.a.doArticleLike(s.a.articles.favorite(t)))},unfavorite:function(t){return e(d.a.doArticleUnlike(s.a.articles.unfavorite(t)))}}}))((function(e){var t=e.article,a=t.author.image;return r.a.createElement("div",{className:"articlePreview__info"},r.a.createElement("div",{className:"articlePreview__info-left"},r.a.createElement("div",{className:"articlePreview__titleBlock"},r.a.createElement("div",{className:"articlePreview__title"},t.title),r.a.createElement("div",{className:"articlePreview__like"},r.a.createElement(o.a,{onClick:function(a){a.preventDefault(),t.favorited?e.unfavorite(t.slug):e.favorite(t.slug)}},r.a.createElement(m.a,{twoToneColor:t.favorited?"red":"gray"})," ",t.favoritesCount))),r.a.createElement("div",{className:"articlePreview__date"},r.a.createElement("span",null,"created: ",Object(u.a)(new Date(t.createdAt),new Date)," ago")),t.tagList?function(e){var t=e.map((function(e){return r.a.createElement("li",{className:"articlePreview__tag",key:e},e)}));return r.a.createElement("ul",{className:"articlePreview__tagsList"},t)}(t.tagList):null),r.a.createElement("div",{className:"articlePreview__info-right"},r.a.createElement("div",{className:"articlePreview__author"},r.a.createElement("div",{className:"articlePreview__author-name"},t.author.username),r.a.createElement(c.a,{src:a||l.a,size:46,alt:t.author.username}))))}))},93:function(e,t,a){"use strict";(function(e){var n=a(23),r=a(24),o=a(26),c=a(25),i=a(4),l=a(0),s=a.n(l),u=a(155),p=a(10),d=a(7),m=a(11),g=e.Promise,E=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=m.a.articles.all;this.props.onLoad("all",e,g.all([m.a.tags.getTags(),e()]))}},{key:"componentWillUnmount",value:function(){this.props.onUnload()}},{key:"render",value:function(){return s.a.createElement("div",{className:"articlesContainer"},s.a.createElement(u.a,null))}}]),a}(s.a.Component);t.a=Object(p.c)((function(e){return Object(i.a)(Object(i.a)({},e.home),{},{token:e.mainstate.token})}),(function(e){return{onLoad:function(t,a,n){return e(d.a.doHomeLoaded(a,n))},onUnload:function(){return e(d.a.doHomeUnloaded())}}}))(E)}).call(this,a(55))}},[[157,1,2]]]);
//# sourceMappingURL=main.c0d04900.chunk.js.map