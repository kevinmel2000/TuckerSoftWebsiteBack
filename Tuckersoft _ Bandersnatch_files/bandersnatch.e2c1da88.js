var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],u=0,g=[];u<o.length;u++)i=o[u],a[i]&&g.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(g.length)g.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={bandersnatch:0},s=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var f=l;s.push([2,"chunk-vendors","chunk-common"]),r()})({"1a59":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page--bandersnatch",attrs:{id:"app"}},[2!==t.tl?n("table",[t._m(0),n("tr",[n("SideNav",t._b({},"SideNav",{lang:t.lang,tl:t.tl,strings:t.strings,imgLang:t.imgLang},!1)),n("td",[n("table",{staticClass:"content"},[n("tr",[n("td",{staticClass:"content__text"},[n("p",[t._v(t._s(t.strings.copy1))])]),t._m(1)])]),n("div",{staticClass:"page-title page-title--gallery"},[n("img",{attrs:{src:r("1590")("./"+t.imgLang+"title-imagegallery.gif"),alt:t.strings.imageGallery}})]),t._m(2),n("table",{staticClass:"content download"},[n("tr",[n("td",{staticClass:"content__text"},[n("p",[t._v(t._s(t.strings.copy2))])]),n("td",{staticClass:"content__image"},[n("a",{attrs:{href:"https://web.archive.org/web/20190321191350/https://www.netflix.com/bandersnatch",target:"_blank"}},[n("img",{attrs:{src:r("f619")("./"+t.imgLang+"play-now.gif"),alt:t.strings.playNow}})]),n("img",{attrs:{src:r("17c7")}})])])]),n("div",{staticClass:"footer"},[n("a",{attrs:{href:"https://web.archive.org/web/20190321191350/https://www.netflix.com/blackmirror",target:"_blank"}},[t._v("\n            "+t._s(t.strings.trueEvents)+"\n          ")])])])],1)]):n("div",{staticStyle:{position:"absolute","z-index":"999",background:"#fff",top:"0",left:"0",right:"0",bottom:"0"}})])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticClass:"col-sidenav"}),n("td",{staticClass:"col-body"},[n("div",{staticClass:"header__logo"},[n("a",{attrs:{href:"../"}},[n("img",{attrs:{src:r("0ab2"),alt:"Tuckersoft"}})])]),n("table",{staticClass:"page-logo"},[n("tr",[n("td",[n("img",{attrs:{src:r("0bc6")}})])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"content__image"},[n("img",{attrs:{src:r("c4a3")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"gallery"},[n("tr",[n("td",[n("img",{attrs:{src:r("8d03")}})]),n("td",[n("img",{attrs:{src:r("740e")}})]),n("td",[n("img",{attrs:{src:r("179c")}})])])])}],i=r("172d"),o=(r("51f7"),r("6779"),r("2877")),l=Object(o["a"])(i["a"],a,s,!1,null,null,null);l.options.__file="bandersnatch.vue";var c=l.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(c)}}).$mount("#app")},2:function(t,e,r){t.exports=r("1a59")},6779:function(t,e,r){"use strict";var n=r("f96f"),a=r.n(n);a.a},f619:function(t,e,r){var n={"./es-play-now.gif":"9d9e","./fr-play-now.gif":"eb75","./play-now.gif":"f100","./pt-play-now.gif":"cbfe","./th-play-now.gif":"422d"};function a(t){var e=s(t);return r(e)}function s(t){var e=n[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}a.keys=function(){return Object.keys(n)},a.resolve=s,t.exports=a,a.id="f619"},f96f:function(t,e,r){}});


}
/*
     FILE ARCHIVED ON 19:13:50 Mar 21, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:53:01 Apr 29, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.615
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.015
  esindex: 0.01
  cdx.remote: 17.214
  LoadShardBlock: 127.262 (3)
  PetaboxLoader3.resolve: 174.131 (4)
  PetaboxLoader3.datanode: 107.6 (5)
  load_resource: 221.689 (2)
*/