"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone = void 0;
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
exports.deepClone = deepClone;
