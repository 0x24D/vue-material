/*!
 * vue-material v1.0.0-beta-10.4
 * Made with <3 by 0x24d 2019
 * Released under the MIT License.
 */
!(function(e,t){var r,n;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{r=t("object"==typeof exports?require("vue"):e.Vue);for(n in r)("object"==typeof exports?exports:e)[n]=r[n]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=532)})({0:function(e,t){e.exports=function(e,t,r,n,o,u){var a,i,s,l,c,f=e=e||{},d=typeof e.default;return"object"!==d&&"function"!==d||(a=e,f=e.default),i="function"==typeof f?f.options:f,t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns,i._compiled=!0),r&&(i.functional=!0),o&&(i._scopeId=o),u?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},i._ssrRegister=s):n&&(s=n),s&&(l=i.functional,c=l?i.render:i.beforeCreate,l?(i._injectStyles=s,i.render=function(e,t){return s.call(t),c(e,t)}):i.beforeCreate=c?[].concat(c,s):[s]),{esModule:a,exports:f,options:i}}},1:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,u,a,i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=u.default.enabled,t=u.default.getThemeName,r=u.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||r(this)):null}}};return(0,i.default)(t,e)},o=r(4),u=n(o),a=r(6),i=n(a)},175:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e;return t||(t="$&"),'<span class="md-highlight-text-match">'+t+"</span>"}function u(e,t){var r,n,a,i,s,l;if(0===t.length)return e;if(-1===(r=e.toLowerCase().indexOf(t[0].toLowerCase())))return"";for(n=0,a=1;a<t.length&&e[r+a]===t[a];a++)n=a;return i=e.slice(0,r),s=o(e.slice(r,r+n+1)),l=u(e.slice(r+n+1),t.slice(n+1)),i+s+l}function a(e,t){var r=RegExp(t+"(?!([^<]+)?<)","gi");return e.replace(r,o())}function i(e,t,r){var n=e.text;return n&&t&&t[0]?r?u(n,t)||n:a(n,t):n}var s,l,c,f;Object.defineProperty(t,"__esModule",{value:!0}),s=r(2),l=n(s),c=r(1),f=n(c),t.default=new f.default({name:"MdHighlightText",abstract:!0,props:{mdTerm:String,mdFuzzySearch:{type:Boolean,default:!0}},render:function(e){var t,r;try{if(!(t=this.$slots.default))return null;if(t.length>1||t[0].tag)throw Error();return r=i(t[0],this.mdTerm,this.mdFuzzySearch),e("div",{staticClass:"md-highlight-text",class:this.$mdActiveTheme,domProps:{innerHTML:r}})}catch(e){l.default.util.warn("MdHighlightText can only render text nodes.",this)}return null}})},2:function(t,r){t.exports=e},3:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,u,a,i,s;Object.defineProperty(t,"__esModule",{value:!0}),r(7),o=r(5),u=n(o),a=r(4),i=n(a),s=function(){var e=new u.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return i.default.metaColors},set:function(e){i.default.metaColors=e}},theme:{get:function(){return i.default.theme},set:function(e){i.default.theme=e}},enabled:{get:function(){return i.default.enabled},set:function(e){i.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=s(),e.prototype.$material=e.material)}},393:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,u,a,i;Object.defineProperty(t,"__esModule",{value:!0}),o=r(3),u=n(o),a=r(394),i=n(a),t.default=function(e){(0,u.default)(e),e.component(i.default.name,i.default)}},394:function(e,t,r){"use strict";function n(e){r(395)}var o,u,a,i,s,l,c,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),o=r(175),u=r.n(o);for(a in o)"default"!==a&&(function(e){r.d(t,e,(function(){return o[e]}))})(a);i=r(0),s=null,l=!1,c=n,f=null,d=null,m=i(u.a,s,l,c,f,d),t.default=m.exports},395:function(e,t){},4:function(e,t,r){"use strict";var n,o,u,a,i;Object.defineProperty(t,"__esModule",{value:!0}),n=r(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(n),u=null,a=null,i=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,r=this.enabled;t&&(r?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var r=this.getThemeName,n=this.themeTarget;e=r(e),n.classList.remove(r(t)),n.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,r=this;return e?(t=e.mdTheme,(function e(n){if(n){var o=n.mdTheme,u=n.$parent;return o&&o!==t?o:e(u)}return r.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){u&&u.setAttribute("content",e)},setThemeColors:function(e){a&&a.setAttribute("content",e)},setMaskColors:function(e){i&&i.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,r="#fff";e&&(t=window.getComputedStyle(document.documentElement),r=t.getPropertyValue("--"+e+"-primary")),r&&(this.setMicrosoftColors(r),this.setThemeColors(r),this.setMaskColors(r))}},mounted:function(){var e=this;u=document.querySelector('[name="msapplication-TileColor"]'),a=document.querySelector('[name="theme-color"]'),i=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},5:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},n=r(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(n)},532:function(e,t,r){e.exports=r(393)},6:function(e,t,r){"use strict";function n(e){return!!e&&"object"==typeof e}function o(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||u(e)}function u(e){return e.$$typeof===m}function a(e){return Array.isArray(e)?[]:{}}function i(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c(a(e),e,t):e}function s(e,t,r){return e.concat(t).map((function(e){return i(e,r)}))}function l(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach((function(t){n[t]=i(e[t],r)})),Object.keys(t).forEach((function(o){r.isMergeableObject(t[o])&&e[o]?n[o]=c(e[o],t[o],r):n[o]=i(t[o],r)})),n}function c(e,t,r){var n,o,u;return r=r||{},r.arrayMerge=r.arrayMerge||s,r.isMergeableObject=r.isMergeableObject||f,n=Array.isArray(t),o=Array.isArray(e),u=n===o,u?n?r.arrayMerge(e,t,r):l(e,t,r):i(t,r)}var f,d,m,h;Object.defineProperty(t,"__esModule",{value:!0}),f=function(e){return n(e)&&!o(e)},d="function"==typeof Symbol&&Symbol.for,m=d?Symbol.for("react.element"):60103,c.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,r){return c(e,r,t)}),{})},h=c,t.default=h},7:function(e,t){}})}));