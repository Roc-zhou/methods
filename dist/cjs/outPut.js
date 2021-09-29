"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outPut = void 0;
function outPut(e) {
    var Debug = !!~location.origin.indexOf('http://localhost:') || !!~location.origin.indexOf('http://192.168.') || !!~location.origin.indexOf('http://127.0.0.1:') || !!~location.origin.indexOf('http://0.0.0.0:');
    return Debug && console.log("%ctitle\uFF1A" + e.title + "\n%cfrom\uFF1A" + document.title + "\n%cdata\uFF1A%o", 'color:#cc7832;border-bottom:1px solid #57a3f3', 'color:#6a7c4e;border-bottom:1px solid #f7f7f7', 'color:#d24f4d', e.content);
}
exports.outPut = outPut;
