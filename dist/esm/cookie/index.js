/**
 * 获取cookie
 */
export function getCookie(c_name) {
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
/**
 * 设置cookie
 * ms 毫秒
 */
export function setCookie(c_name, value, ms) {
    if (ms === void 0) { ms = null; }
    var date = new Date().getTime() + ms;
    return document.cookie = c_name + '=' + encodeURI(value) + ((ms === null) ? '' : ';expires=' + new Date(date).toUTCString()), null;
}
/**
 * 删除cookie
 * @param    {[string]}                 name [description]
 */
export function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
}
