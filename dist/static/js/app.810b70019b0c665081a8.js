webpackJsonp([1],{DNnO:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},a,!1,function(e){n("s3jv")},null,null).exports,o=n("/ocq"),s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",{staticStyle:{color:"blue"}},[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),n("button",{on:{click:e.yulan}},[e._v("预览pdf")])])},staticRenderFns:[]};var c=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Demo A",url:""}},methods:{yulan:function(){this.$router.push({name:"pdf-view"})}}},s,!1,function(e){n("DNnO")},"data-v-4f8218c8",null).exports,u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("iframe",{attrs:{src:"../../static/pdf/web/viewer.html?file="+this.url,height:"1000px",width:"100%"}})])},staticRenderFns:[]};var l=n("VU/8")({name:"PdfView",data:function(){return{url:""}},created:function(){this.url="/static/test.pdf"},methods:{}},u,!1,function(e){n("U9fk")},"data-v-18e725ae",null).exports;r.a.use(o.a);var p=new o.a({mode:"hash",base:"/project1/",routes:[{path:"/",redirect:"a-home"},{path:"/a-home",name:"a-home",component:c},{path:"/pdf-view",name:"pdf-view",component:l}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:p,components:{App:i},template:"<App/>"})},U9fk:function(e,t){},s3jv:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.810b70019b0c665081a8.js.map