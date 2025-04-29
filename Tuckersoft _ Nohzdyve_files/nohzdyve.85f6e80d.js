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

(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,u=[];d<o.length;d++)i=o[d],a[i]&&u.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={nohzdyve:0},s=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var f=l;s.push([3,"chunk-vendors","chunk-common"]),r()})({"29f5":function(t,e,r){var n={"./download.gif":"8b8f","./es-download.gif":"353b","./fr-download.gif":"f2e8","./pt-download.gif":"d231","./th-download.gif":"fd9a"};function a(t){var e=s(t);return r(e)}function s(t){var e=n[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}a.keys=function(){return Object.keys(n)},a.resolve=s,t.exports=a,a.id="29f5"},3:function(t,e,r){t.exports=r("61b1")},"3d9d":function(t,e,r){"use strict";var n=r("5578"),a=r.n(n);a.a},5578:function(t,e,r){},"61b1":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page--game",attrs:{id:"app"}},[0!==t.tl?n("table",[t._m(0),n("tr",[n("SideNav",t._b({},"SideNav",{lang:t.lang,tl:t.tl,strings:t.strings,imgLang:t.imgLang},!1)),n("td",[n("table",{staticClass:"content"},[n("tr",[n("td",{staticClass:"content__text"},[n("p",[t._v(t._s(t.strings.copy1))])]),t._m(1)])]),n("div",{staticClass:"page-title page-title--gallery"},[n("img",{attrs:{src:r("1590")("./"+t.imgLang+"title-imagegallery.gif"),alt:t.strings.imageGallery}})]),t._m(2),n("table",{staticClass:"content download"},[n("tr",[n("td",{staticClass:"content__text"},[n("p",[t._v(t._s(t.strings.copy2))])]),n("td",{staticClass:"content__image"},[n("a",{attrs:{href:"../static/nohzdyve.tap",download:""}},[n("img",{attrs:{src:r("29f5")("./"+t.imgLang+"download.gif"),alt:t.strings.download}})])])])]),t._m(3),n("div",{staticClass:"footer"},[n("a",{attrs:{href:"https://web.archive.org/web/20190309054700/https://www.netflix.com/blackmirror",target:"_blank"}},[t._v("\n            "+t._s(t.strings.trueEvents)+"\n          ")])])])],1)]):n("div",{staticStyle:{position:"absolute","z-index":"999",background:"#fff",top:"0",left:"0",right:"0",bottom:"0"}})])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticClass:"col-sidenav"}),n("td",{staticClass:"col-body"},[n("div",{staticClass:"header__logo"},[n("a",{attrs:{href:"../"}},[n("img",{attrs:{src:r("0ab2"),alt:"Tuckersoft"}})])]),n("table",{staticClass:"page-logo"},[n("tr",[n("td",[n("img",{attrs:{src:r("fe43")}})])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"content__image"},[n("img",{attrs:{src:r("ae8d")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"gallery"},[n("tr",[n("td",[n("img",{attrs:{src:r("a01c")}})]),n("td",[n("img",{attrs:{src:r("ad05")}})]),n("td",[n("img",{attrs:{src:r("4fea")}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"gifs"},[n("tr",[n("td",[n("img",{attrs:{src:r("8a87")}})]),n("td",[n("img",{attrs:{src:r("1eef")}})])])])}],i=r("172d"),o=(r("51f7"),r("3d9d"),r("2877")),l=Object(o["a"])(i["a"],a,s,!1,null,null,null);l.options.__file="nohzdyve.vue";var c=l.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(c)}}).$mount("#app")}});

}
/*
     FILE ARCHIVED ON 05:47:00 Mar 09, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:50:12 Apr 29, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.52
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.012
  esindex: 0.014
  cdx.remote: 12.898
  LoadShardBlock: 98.712 (3)
  PetaboxLoader3.datanode: 102.844 (5)
  PetaboxLoader3.resolve: 215.765 (3)
  load_resource: 226.09 (2)
*/