/**
 * [时间格式化]
 * @param    {[String]}                 date [需要转换的时间]
 * @param    {[String]}                 format [需要转换的日期格式]
 * @return   {[String]}                      [默认输出格式 2018-03-23 13:35:47]
 *
 * yyyy 年 2018
 * MM 月份 03
 * dd 天 23
 * hh 小时 13
 * mm 分钟 35
 * ss 秒 47
 */
export function formatDate(date, format) {
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
/**
 * [转换时间戳]
 * @param    {[String]}                 date [需要转换的时间]
 * @return   {[String]}                      [输出时间戳]
 */
export function timeStamp(date) {
    return (new Date(date)).valueOf();
}
/**
 * [获取当前时间戳]
 */
export function _timeStamp() {
    return (new Date()).valueOf();
}
