"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomString = void 0;
function randomString(len) {
    if (len === void 0) { len = 10; }
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678', maxPos = $chars.length;
    var pwd = '';
    for (var i = 0; i < len; i++)
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    return pwd;
}
exports.randomString = randomString;
