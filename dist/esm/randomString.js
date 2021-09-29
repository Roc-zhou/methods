/**
 * 随机字符串
 * 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
 */
export function randomString(len) {
    if (len === void 0) { len = 10; }
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678', maxPos = $chars.length;
    var pwd = '';
    for (var i = 0; i < len; i++)
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    return pwd;
}
