"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._timeStamp = exports.timeStamp = exports.formatDate = void 0;
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
exports.formatDate = formatDate;
function timeStamp(date) {
    return (new Date(date)).valueOf();
}
exports.timeStamp = timeStamp;
function _timeStamp() {
    return (new Date()).valueOf();
}
exports._timeStamp = _timeStamp;
