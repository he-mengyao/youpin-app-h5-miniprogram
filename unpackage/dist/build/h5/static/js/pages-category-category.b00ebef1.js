(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-category"],{"0789":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={components:{},props:{color:{type:String,required:!0}},data:function(){return{}},methods:{},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};a.default=e},"18b2":function(t,a,n){"use strict";var e=n("ecfc"),i=n.n(e);i.a},6445:function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.categ .bd[data-v-af4a386a]{margin-top:%?10?%}.categ .bd .left[data-v-af4a386a]{width:25%}.categ .bd .left .nav-item[data-v-af4a386a]{margin:%?30?% %?20?%;height:%?50?%;border-radius:%?30?%}.categ .bd .left .bg-red[data-v-af4a386a]{background:-webkit-gradient(linear,left top,right top,from(#e0563c),to(#c62f25));background:-webkit-linear-gradient(left,#e0563c,#c62f25);background:linear-gradient(90deg,#e0563c,#c62f25);color:#fff}.categ .bd .right[data-v-af4a386a]{padding:0 %?20?%;width:75%;background-color:#fbf9fb}.categ .bd .right .banner[data-v-af4a386a]{height:%?150?%;width:100%}.categ .bd .right .children[data-v-af4a386a]{padding:%?10?%}.categ .bd .right .children .bd-title[data-v-af4a386a]{margin-left:%?20?%}',""]),t.exports=a},"7a17":function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return c})),n.d(a,"a",(function(){return e}));var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"head",style:{"background-color":t.color}},[n("v-uni-view",{staticClass:"header flex ai-c w-100 flex-c pr"},[n("v-uni-view",{staticClass:"left pa"},[t._t("left")],2),n("v-uni-view",{staticClass:"middle"},[t._t("middle")],2)],1)],1)},c=[]},"7b57":function(t,a,n){"use strict";var e=n("4ea4");n("d81d"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e(n("f1ac")),c={components:{tabbar:i.default},props:{},data:function(){return{color:"#fff",text:"",value:"",categList:[],current:0,data:{}}},methods:{placeHolder:function(){var t=this;this.$api.placeHolder().then((function(a){a=t.$utils.trriger(a),a.data.map((function(n){var e=Math.floor(Math.random()*a.data.length);t.text=a.data[e].queryName}))})).catch((function(t){console.log("站为此请求失败",t)}))},list:function(){var t=this;this.$api.list().then((function(a){a=t.$utils.trriger(a),t.categList=a.data,t.detail(t.categList[0].id)})).catch((function(t){console.log("获取一级分类失败",t)}))},detail:function(t){var a=this;this.$api.detail(t).then((function(t){t=a.$utils.trriger(t),a.data=t.data})).catch((function(t){console.log("二级分类请求失败",t)}))},trigger:function(t,a){this.current=a,this.detail(t.id)},go:function(t){this.$utils.go(t)},search:function(t){uni.navigateTo({url:"/pages/searchList/searchList?value=".concat(t.smallImgCard.name)})},scrolltolower:function(){this.current++}},mounted:function(){this.placeHolder(),this.list()},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};a.default=c},"7ca1":function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.head[data-v-122a878a]{position:fixed;top:0;left:0;width:100%;z-index:99}.head .shortcut[data-v-122a878a]{height:%?50?%}.head .header[data-v-122a878a]{height:%?95?%;padding-left:%?20?%}.head .header .left[data-v-122a878a]{top:0;left:%?20?%}',""]),t.exports=a},b919:function(t,a,n){var e=n("6445");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("54c73246",e,!0,{sourceMap:!1,shadowMode:!1})},cd23:function(t,a,n){"use strict";var e=n("b919"),i=n.n(e);i.a},ce49:function(t,a,n){"use strict";n.r(a);var e=n("0789"),i=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(a,t,(function(){return e[t]}))}(c);a["default"]=i.a},d70a:function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return c})),n.d(a,"a",(function(){return e}));var e={uNavbar:n("1588").default,uSearch:n("270d").default},i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"categ"},[n("u-navbar",{attrs:{"is-back":!1,title:"分类"}}),n("v-uni-view",{staticClass:"flex flex-c nav pd-20"},[n("u-search",{attrs:{placeholder:t.text,"show-action":!0},on:{search:function(a){arguments[0]=a=t.$handleEvent(a),t.search.apply(void 0,arguments)},custom:function(a){arguments[0]=a=t.$handleEvent(a),t.custom.apply(void 0,arguments)}},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1),n("v-uni-view",{staticClass:"pr bd flex"},[n("v-uni-view",{staticClass:"left bg-fff"},[n("v-uni-view",{staticClass:"scroll_box"},[n("v-uni-scroll-view",{staticStyle:{height:"80vh"},attrs:{"scroll-y":"true"}},t._l(t.categList,(function(a,e){return n("v-uni-view",{key:e,staticClass:"nav-item color-999 flex flex-c ai-c f14",class:{"bg-red":e===t.current},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.trigger(a,e)}}},[t._v(t._s(a.name))])})),1)],1)],1),n("v-uni-view",{staticClass:"right flex ai-c col flex-c"},[n("v-uni-view",{staticClass:"scroll_box"},[n("v-uni-scroll-view",{staticStyle:{height:"80vh"},attrs:{"scroll-y":"true"},on:{scrolltolower:function(a){arguments[0]=a=t.$handleEvent(a),t.scrolltolower.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"banner boder-r10",attrs:{src:t.data.banner,mode:""},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.go(t.data.bannerUrl)}}}),t._l(t.data.children,(function(a,e){return n("v-uni-view",{key:e,staticClass:"children mr-top20 bg-fff boder-r10"},[n("v-uni-view",{staticClass:"bd-title f14"},[t._v(t._s(a.name))]),n("v-uni-view",{staticClass:"bd-item flex wrap"},t._l(a.children,(function(a,e){return n("v-uni-view",{key:e,staticClass:"items flex col ai-c mr-top20",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.search(a)}}},[n("v-uni-image",{staticClass:"img-100",attrs:{src:a.smallImgCard.img,mode:""}}),n("v-uni-view",{staticClass:"color-999 f12"},[t._v(t._s(a.smallImgCard.name))])],1)})),1)],1)}))],2)],1)],1)],1)],1)},c=[]},d991:function(t,a,n){"use strict";n.r(a);var e=n("7b57"),i=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(a,t,(function(){return e[t]}))}(c);a["default"]=i.a},dc85:function(t,a,n){"use strict";n.r(a);var e=n("d70a"),i=n("d991");for(var c in i)"default"!==c&&function(t){n.d(a,t,(function(){return i[t]}))}(c);n("cd23");var r,o=n("f0c5"),s=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"af4a386a",null,!1,e["a"],r);a["default"]=s.exports},ecfc:function(t,a,n){var e=n("7ca1");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("0223bb52",e,!0,{sourceMap:!1,shadowMode:!1})},f1ac:function(t,a,n){"use strict";n.r(a);var e=n("7a17"),i=n("ce49");for(var c in i)"default"!==c&&function(t){n.d(a,t,(function(){return i[t]}))}(c);n("18b2");var r,o=n("f0c5"),s=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"122a878a",null,!1,e["a"],r);a["default"]=s.exports}}]);