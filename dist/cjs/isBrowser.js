"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBrowser = void 0;
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
exports.isBrowser = isBrowser;
