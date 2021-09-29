"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = void 0;
function isArray(arr) {
    return !Array.isArray ? Object.prototype.toString.call(arr) === '[object Array]' : Array.isArray(arr);
}
exports.isArray = isArray;
