/*!
 * vue-material v1.0.0-beta-10.3
 * Made with <3 by 0x24d 2019
 * Released under the MIT License.
 */
!(function(e,t){var r,n;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{r=t("object"==typeof exports?require("vue"):e.Vue);for(n in r)("object"==typeof exports?exports:e)[n]=r[n]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=527)})({0:function(e,t){e.exports=function(e,t,r,n,o,u){var i,a,s,l,c,f=e=e||{},d=typeof e.default;return"object"!==d&&"function"!==d||(i=e,f=e.default),a="function"==typeof f?f.options:f,t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),r&&(a.functional=!0),o&&(a._scopeId=o),u?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},a._ssrRegister=s):n&&(s=n),s&&(l=a.functional,c=l?a.render:a.beforeCreate,l?(a._injectStyles=s,a.render=function(e,t){return s.call(t),c(e,t)}):a.beforeCreate=c?[].concat(c,s):[s]),{esModule:i,exports:f,options:a}}},1:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,u,i,a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=u.default.enabled,t=u.default.getThemeName,r=u.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||r(this)):null}}};return(0,a.default)(t,e)},o=r(4),u=n(o),i=r(6),a=n(i)},160:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),n=r(1),o=(function(e){return e&&e.__esModule?e:{default:e}})(n),t.default=new o.default({name:"MdDivider",computed:{insideList:function(){return"md-list"===this.$parent.$options._componentTag}}})},2:function(t,r){t.exports=e},3:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,u,i,a,s;Object.defineProperty(t,"__esModule",{value:!0}),r(7),o=r(5),u=n(o),i=r(4),a=n(i),s=function(){var e=new u.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return a.default.metaColors},set:function(e){a.default.metaColors=e}},theme:{get:function(){return a.default.theme},set:function(e){a.default.theme=e}},enabled:{get:function(){return a.default.enabled},set:function(e){a.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=s(),e.prototype.$material=e.material)}},362:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,u,i,a;Object.defineProperty(t,"__esModule",{value:!0}),o=r(3),u=n(o),i=r(363),a=n(i),t.default=function(e){(0,u.default)(e),e.component(a.default.name,a.default)}},363:function(e,t,r){"use strict";function n(e){r(364)}var o,u,i,a,s,l,c,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),o=r(160),u=r.n(o);for(i in o)"default"!==i&&(function(e){r.d(t,e,(function(){return o[e]}))})(i);a=r(365),s=r(0),l=!1,c=n,f=null,d=null,m=s(u.a,a.a,l,c,f,d),t.default=m.exports},364:function(e,t){},365:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.insideList?r("li",{staticClass:"md-divider",class:[e.$mdActiveTheme]}):r("hr",{staticClass:"md-divider",class:[e.$mdActiveTheme]})},o=[],u={render:n,staticRenderFns:o};t.a=u},4:function(e,t,r){"use strict";var n,o,u,i,a;Object.defineProperty(t,"__esModule",{value:!0}),n=r(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(n),u=null,i=null,a=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,r=this.enabled;t&&(r?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var r=this.getThemeName,n=this.themeTarget;e=r(e),n.classList.remove(r(t)),n.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,r=this;return e?(t=e.mdTheme,(function e(n){if(n){var o=n.mdTheme,u=n.$parent;return o&&o!==t?o:e(u)}return r.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){u&&u.setAttribute("content",e)},setThemeColors:function(e){i&&i.setAttribute("content",e)},setMaskColors:function(e){a&&a.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,r="#fff";e&&(t=window.getComputedStyle(document.documentElement),r=t.getPropertyValue("--"+e+"-primary")),r&&(this.setMicrosoftColors(r),this.setThemeColors(r),this.setMaskColors(r))}},mounted:function(){var e=this;u=document.querySelector('[name="msapplication-TileColor"]'),i=document.querySelector('[name="theme-color"]'),a=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},5:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},n=r(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(n)},527:function(e,t,r){e.exports=r(362)},6:function(e,t,r){"use strict";function n(e){return!!e&&"object"==typeof e}function o(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||u(e)}function u(e){return e.$$typeof===m}function i(e){return Array.isArray(e)?[]:{}}function a(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c(i(e),e,t):e}function s(e,t,r){return e.concat(t).map((function(e){return a(e,r)}))}function l(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach((function(t){n[t]=a(e[t],r)})),Object.keys(t).forEach((function(o){r.isMergeableObject(t[o])&&e[o]?n[o]=c(e[o],t[o],r):n[o]=a(t[o],r)})),n}function c(e,t,r){var n,o,u;return r=r||{},r.arrayMerge=r.arrayMerge||s,r.isMergeableObject=r.isMergeableObject||f,n=Array.isArray(t),o=Array.isArray(e),u=n===o,u?n?r.arrayMerge(e,t,r):l(e,t,r):a(t,r)}var f,d,m,h;Object.defineProperty(t,"__esModule",{value:!0}),f=function(e){return n(e)&&!o(e)},d="function"==typeof Symbol&&Symbol.for,m=d?Symbol.for("react.element"):60103,c.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,r){return c(e,r,t)}),{})},h=c,t.default=h},7:function(e,t){}})}));