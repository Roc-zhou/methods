"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e){var r="function"==typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function r(e){if(document.cookie.length){var r=document.cookie.indexOf(e+"=");if(~r){r=r+e.length+1;var t=document.cookie.indexOf(";",r);return~t||(t=document.cookie.length),decodeURI(document.cookie.substring(r,t))}}return null}Object.defineProperty(exports,"__esModule",{value:!0}),exports._decrypt=function(e,r,t){t=Buffer.from(t,"base64").toString("binary");var n=require("crypto").createDecipheriv("aes-128-cbc",e,r),o=n.update(t,"binary","utf8");return o+=n.final("utf8")},exports._encrypt=function(e,r,t){var n=require("crypto").createCipheriv("aes-128-cbc",e,r),o=n.update(t,"utf8","binary");return o+=n.final("binary"),o=Buffer.from(o,"binary").toString("base64")},exports._timeStamp=function(){return(new Date).valueOf()},exports.deepClone=function e(r){if(null===r)return null;if("object"!=typeof r)return r;if(r instanceof RegExp)return RegExp(r);if(r instanceof Date)return new Date(r);var t=r.constructor;for(var n in r)r.hasOwnProperty(n)&&(t[n]=e(r[n]));return t},exports.delCookie=function(e){var t=new Date;t.setTime(t.getTime()-1);var n=r(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toUTCString())},exports.formatDate=function(e,r){if(void 0===r&&(r="yyyy-MM-dd hh:mm:ss"),!e)return"";var t=(e=new Date(e)).getFullYear(),n=e.getMonth()+1,o=e.getDate(),i=e.getHours(),a=e.getMinutes(),c=e.getSeconds();return n=10>n?"0"+n:n,o=10>o?"0"+o:o,i=10>i?"0"+i:i,a=10>a?"0"+a:a,c=10>c?"0"+c:c,r=r.replace("yyyy",t).replace("MM",n).replace("dd",o).replace("hh",i).replace("mm",a).replace("ss",c)},exports.getCookie=r,exports.isArray=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},exports.isBrowser=function(){var r=!!window&&window.navigator.userAgent.toLowerCase();return{_isIE:r&&/msie|trident/.test(r),_isIE9:r&&!!~r.indexOf("msie 9.0"),_isEdge:r&&!!~r.indexOf("edge/"),_isAndroid:r&&!!~r.indexOf("android"),_isIOS:r&&/iphone|ipad|ipod|ios/.test(r),_isChrome:r&&/chrome\/\d+/.test(r)&&!~r.indexOf("edge/"),_isWX:r&&/micromessenger/.test(r),_isQQ:r&&/qqbrowser/.test(r),_isPC:function(){var r,t,n=navigator.userAgent;try{for(var o=e(["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"]),i=o.next();!i.done;i=o.next()){if(~n.indexOf(i.value))return!1}}catch(e){r={error:e}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(r)throw r.error}}return!0}}},exports.outPut=function(e){return!!(~location.origin.indexOf("http://localhost:")||~location.origin.indexOf("http://192.168.")||~location.origin.indexOf("http://127.0.0.1:")||~location.origin.indexOf("http://0.0.0.0:"))&&console.log("%ctitle\uff1a"+e.title+"\n%cfrom\uff1a"+document.title+"\n%cdata\uff1a%o","color:#cc7832;border-bottom:1px solid #57a3f3","color:#6a7c4e;border-bottom:1px solid #f7f7f7","color:#d24f4d",e.content)},exports.randomString=function(e){void 0===e&&(e=10);for(var r="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",t="",n=0;e>n;n++)t+=r.charAt(Math.floor(48*Math.random()));return t},exports.separator=function(e,r,t){void 0===r&&(r=3),void 0===t&&(t=",");for(var n=(""+e).split("."),o=n[0].split("").reverse(),i=o.length%r==0?parseInt(""+o.length/r):parseInt(""+o.length/r)+1,a=1;i>a;a++)o.splice(4*a-1,0,t);return n[1]?o.reverse().join("")+"."+n[1]:o.reverse().join("")},exports.setCookie=function(e,r,t){void 0===t&&(t=null);var n=(new Date).getTime()+t;return document.cookie=e+"="+encodeURI(r)+(null===t?"":";expires="+new Date(n).toUTCString()),null},exports.timeStamp=function(e){return new Date(e).valueOf()},exports.to_heavy=function(r){var t,n,o=[];try{for(var i=e(r),a=i.next();!a.done;a=i.next()){var c=a.value;-1===o.indexOf(c)&&o.push(c)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return o},exports.unique=function(e){return Array.from(new Set(e))};
