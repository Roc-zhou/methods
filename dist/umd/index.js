(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["rz-methods"] = {}));
})(this, (function (exports) { 'use strict';

    function separator(data, num, str) {
        if (num === void 0) { num = 3; }
        if (str === void 0) { str = ','; }
        var dataString = data.toString().split('.'), reseData = dataString[0].split('').reverse(), count = reseData.length % num === 0 ? parseInt((reseData.length / num).toString()) : parseInt((reseData.length / num).toString()) + 1;
        for (var i = 1; i < count; i++) {
            reseData.splice(4 * i - 1, 0, str);
        }
        console.log(reseData);
        if (dataString[1]) {
            return reseData.reverse().join('') + '.' + dataString[1];
        }
        else {
            return reseData.reverse().join('');
        }
    }

    function randomString(len) {
        if (len === void 0) { len = 10; }
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678', maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++)
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        return pwd;
    }

    function outPut(e) {
        var Debug = !!~location.origin.indexOf('http://localhost:') || !!~location.origin.indexOf('http://192.168.') || !!~location.origin.indexOf('http://127.0.0.1:') || !!~location.origin.indexOf('http://0.0.0.0:');
        return Debug && console.log("%ctitle\uFF1A" + e.title + "\n%cfrom\uFF1A" + document.title + "\n%cdata\uFF1A%o", 'color:#cc7832;border-bottom:1px solid #57a3f3', 'color:#6a7c4e;border-bottom:1px solid #f7f7f7', 'color:#d24f4d', e.content);
    }

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

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function isBrowser() {
        var UA = !!window && window.navigator.userAgent.toLowerCase();
        return {
            _isIE: UA && /msie|trident/.test(UA),
            _isIE9: UA && !!~UA.indexOf('msie 9.0'),
            _isEdge: UA && !!~UA.indexOf('edge/'),
            _isAndroid: UA && !!~UA.indexOf('android'),
            _isIOS: UA && /iphone|ipad|ipod|ios/.test(UA),
            _isChrome: UA && /chrome\/\d+/.test(UA) && !~UA.indexOf('edge/'),
            _isWX: UA && /micromessenger/.test(UA),
            _isQQ: UA && /qqbrowser/.test(UA),
            _isPC: function () {
                var e_1, _a;
                var userAgentInfo = navigator.userAgent, Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
                try {
                    for (var Agents_1 = __values(Agents), Agents_1_1 = Agents_1.next(); !Agents_1_1.done; Agents_1_1 = Agents_1.next()) {
                        var x = Agents_1_1.value;
                        if (!!~userAgentInfo.indexOf(x))
                            return false;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (Agents_1_1 && !Agents_1_1.done && (_a = Agents_1.return)) _a.call(Agents_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return true;
            }
        };
    }

    function deepClone(obj) {
        if (obj === null)
            return null;
        if (typeof obj !== "object")
            return obj;
        if (obj instanceof RegExp)
            return new RegExp(obj);
        if (obj instanceof Date)
            return new Date(obj);
        var newObj = obj.constructor;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = deepClone(obj[key]);
            }
        }
        return newObj;
    }

    function formatDate(date, format) {
        if (format === void 0) { format = 'yyyy-MM-dd hh:mm:ss'; }
        if (!date)
            return '';
        date = new Date(date);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var m1 = date.getMinutes();
        var s = date.getSeconds();
        m = m < 10 ? ("0" + m) : m;
        d = d < 10 ? ("0" + d) : d;
        h = h < 10 ? ("0" + h) : h;
        m1 = m1 < 10 ? ("0" + m1) : m1;
        s = s < 10 ? ('0' + s) : s;
        format = format.replace('yyyy', y).replace('MM', m).replace('dd', d).replace('hh', h).replace('mm', m1).replace('ss', s);
        return format;
    }
    function timeStamp(date) {
        return (new Date(date)).valueOf();
    }
    function _timeStamp() {
        return (new Date()).valueOf();
    }

    function _encrypt(key, iv, data) {
        var cipher = require('crypto').createCipheriv('aes-128-cbc', key, iv);
        var crypted = cipher.update(data, 'utf8', 'binary');
        return crypted += cipher.final('binary'), crypted = Buffer.from(crypted, 'binary').toString('base64'), crypted;
    }
    function _decrypt(key, iv, crypted) {
        crypted = Buffer.from(crypted, 'base64').toString('binary');
        var decipher = require('crypto').createDecipheriv('aes-128-cbc', key, iv);
        var decoded = decipher.update(crypted, 'binary', 'utf8');
        return decoded += decipher.final('utf8'), decoded;
    }

    function getCookie(c_name) {
        if (!!document.cookie.length) {
            var c_start = document.cookie.indexOf(c_name + '=');
            if (!!~c_start) {
                c_start = c_start + c_name.length + 1;
                var c_end = document.cookie.indexOf(';', c_start);
                if (!~c_end)
                    c_end = document.cookie.length;
                return decodeURI(document.cookie.substring(c_start, c_end));
            }
        }
        return null;
    }
    function setCookie(c_name, value, ms) {
        if (ms === void 0) { ms = null; }
        var date = new Date().getTime() + ms;
        return document.cookie = c_name + '=' + encodeURI(value) + ((ms === null) ? '' : ';expires=' + new Date(date).toUTCString()), null;
    }
    function delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
    }

    function unique(arr) {
        return Array.from(new Set(arr));
    }
    function to_heavy(arr) {
        var e_1, _a;
        var array = [];
        try {
            for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                var x = arr_1_1.value;
                if (array.indexOf(x) === -1) {
                    array.push(x);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return array;
    }

    function isArray(arr) {
        return !Array.isArray ? Object.prototype.toString.call(arr) === '[object Array]' : Array.isArray(arr);
    }

    exports._decrypt = _decrypt;
    exports._encrypt = _encrypt;
    exports._timeStamp = _timeStamp;
    exports.deepClone = deepClone;
    exports.delCookie = delCookie;
    exports.formatDate = formatDate;
    exports.getCookie = getCookie;
    exports.isArray = isArray;
    exports.isBrowser = isBrowser;
    exports.outPut = outPut;
    exports.randomString = randomString;
    exports.separator = separator;
    exports.setCookie = setCookie;
    exports.timeStamp = timeStamp;
    exports.to_heavy = to_heavy;
    exports.unique = unique;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
