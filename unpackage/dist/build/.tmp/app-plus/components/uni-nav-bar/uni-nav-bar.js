(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-nav-bar/uni-nav-bar"],{"2aaa":function(n,e){throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\nError: Cannot find module '/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/compile-node-sass/node_modules/node-sass-china'\n    at Function.Module._resolveFilename (module.js:547:15)\n    at Function.Module._resolveFilename (/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/module-alias/index.js:49:29)\n    at Function.Module._load (module.js:474:25)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at Object.sassLoader (/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js:46:72)\n    at runLoaders (/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/webpack/lib/NormalModule.js:301:20)\n    at /Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at runSyncOrAsync (/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\n    at iterateNormalLoaders (/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/loader-runner/lib/LoaderRunner.js:221:10)\n    at /Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/loader-runner/lib/LoaderRunner.js:236:3\n    at Object.context.callback (/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.module.exports (/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js:60:8)")},"2fba":function(n,e,l){"use strict";var t=l("2aaa"),i=l.n(t);i.a},"3d9b":function(n,e,l){"use strict";l.r(e);var t=l("f7a3"),i=l("5937");for(var a in i)"default"!==a&&function(n){l.d(e,n,function(){return i[n]})}(a);l("2fba");var o=l("2877"),u=Object(o["a"])(i["default"],t["a"],t["b"],!1,null,"59b7c669",null);e["default"]=u.exports},5937:function(n,e,l){"use strict";l.r(e);var t=l("fca5"),i=l.n(t);for(var a in t)"default"!==a&&function(n){l.d(e,n,function(){return t[n]})}(a);e["default"]=i.a},f7a3:function(n,e,l){"use strict";var t=function(){var n=this,e=n.$createElement;n._self._c},i=[];l.d(e,"a",function(){return t}),l.d(e,"b",function(){return i})},fca5:function(n,e,l){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){return l.e("components/uni-status-bar/uni-status-bar").then(l.bind(null,"a6bc"))},i=function(){return Promise.all([l.e("common/vendor"),l.e("components/uni-icons/uni-icons")]).then(l.bind(null,"ebe9"))},a={name:"UniNavBar",components:{uniStatusBar:t,uniIcons:i},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[String,Boolean],default:!1},border:{type:[String,Boolean],default:!0}},mounted:function(){n.report&&""!==this.title&&n.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};e.default=a}).call(this,l("6e42")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-nav-bar/uni-nav-bar-create-component',
    {
        'components/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("3d9b"))
        })
    },
    [['components/uni-nav-bar/uni-nav-bar-create-component']]
]);
