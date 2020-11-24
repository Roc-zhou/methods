/**
 * 采用Es6方式
 * author:roc_zhou
 */
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
var formatDate = function (date, format) {
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
    return format = format.replace('yyyy', y).replace('MM', m).replace('dd', d).replace('hh', h).replace('mm', m1).replace('ss', s);
};
/**
 * [转换时间戳]
 * @param    {[String]}                 date [需要转换的时间]
 * @return   {[String]}                      [输出时间戳]
 */
var timeStamp = function (date) {
    return (new Date(date)).valueOf;
};
/**
 * [获取当前时间戳]
 */
var _timeStamp = function () {
    return (new Date()).valueOf();
};
/**
 * [线上关闭，线下输出]
 * @param    {[type]}                 e [需要输出的内容]
 * @return   {[type]}                   [description]
 */
var outPut = function (e) {
    var Debug = !!~location.origin.indexOf('http://localhost:') || !!~location.origin.indexOf('http://192.168.') || !!~location.origin.indexOf('http://127.0.0.1:') || !!~location.origin.indexOf('http://0.0.0.0:');
    return Debug && console.log("%ctitle\uFF1A" + e.title + "\n%cfrom\uFF1A" + document.title + "\n%cdata\uFF1A%o", 'color:#cc7832;border-bottom:1px solid #57a3f3', 'color:#6a7c4e;border-bottom:1px solid #f7f7f7', 'color:#d24f4d', e.content);
};
/**
 * [AES加密（node<==java,c,o-c;iv-向量)]
 * @param    {[string]}                 key  [a41f821ea5c6f942]
 * @param    {[string]}                 iv   [a41f821ea5c6f942]
 * @param    {[type]}                 data [data]
 */
var _encrypt = function (key, iv, data) {
    var cipher = require('crypto').createCipheriv('aes-128-cbc', key, iv);
    var crypted = cipher.update(data, 'utf8', 'binary');
    return crypted += cipher.final('binary'), crypted = Buffer.from(crypted, 'binary').toString('base64'), crypted;
};
/**
 * [AES解密（node<==java,c,o-c;iv-向量)]
 * @param    {[string]}                 key  [a41f821ea5c6f942]
 * @param    {[string]}                 iv   [a41f821ea5c6f942]
 * @param    {[type]}                 data [data]
 */
var _decrypt = function (key, iv, crypted) {
    crypted = Buffer.from(crypted, 'base64').toString('binary');
    var decipher = require('crypto').createDecipheriv('aes-128-cbc', key, iv);
    var decoded = decipher.update(crypted, 'binary', 'utf8');
    return decoded += decipher.final('utf8'), decoded;
};
/**
 * 获取cookie
 */
var getCookie = function (c_name) {
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
};
/**
 * 设置cookie
 * ms 毫秒
 */
var setCookie = function (c_name, value, ms) {
    if (ms === void 0) { ms = null; }
    var date = new Date().getTime() + ms;
    return document.cookie = c_name + '=' + encodeURI(value) + ((ms === null) ? '' : ';expires=' + new Date(date).toUTCString()), null;
};
/**
 * 删除cookie
 * @param    {[string]}                 name [description]
 */
var delCookie = function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
};
/**
 * 获取scrollTop的值：兼容所有浏览器
 */
var getScrollTop = function () {
    return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
};
/**
 * 设置scrollTop的值，兼容所有浏览器
 */
var setScrollTop = function (scroll_top) {
    document.documentElement.scrollTop = scroll_top;
    // window.pageYOffset = scroll_top
    document.body.scrollTop = scroll_top;
};
/**
 * 处理 中间内容...显示 字符串长度
 * @param    {[string]}                 str
 * @param    {[number]}                 length [前后需要显示字符串长度]
 * @param    {[string]}                 symbol [需要显示的字符串 **** ]
 */
var sub = function (str, length, symbol) {
    var str1 = str.substr(0, length), str2 = str.substr(str.length - length, length);
    return str1 + symbol + str2;
};
/**
 * 校验上传图片宽高
 * @param    {[type]}                 file   [文件]
 * @param    {[number]}                 width  [description]
 * @param    {[number]}                 height [description]
 */
var checkImageWH = function (file, width, height) {
    return new Promise(function (resolve, reject) {
        var filereader = new FileReader();
        filereader.onload = function (e) {
            var src = e.target.result;
            var image = new Image();
            image.onload = function () {
                if ((width && image.width != width) ||
                    (height && image.height != height)) {
                    reject('error');
                }
                else {
                    resolve();
                }
            };
            image.onerror = reject;
            image.src = src;
        };
        filereader.readAsDataURL(file);
    });
};
/**
 * 数组去重
 */
var unique = function (arr) {
    return Array.from(new Set(arr));
};
var to_heavy = function (arr) {
    var array = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var x = arr_1[_i];
        if (array.indexOf(x) === -1) {
            array.push(x);
        }
    }
    return array;
};
/**
 * 浏览器方法
 */
var isBrowser = function () {
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
            var userAgentInfo = navigator.userAgent, Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
            for (var _i = 0, Agents_1 = Agents; _i < Agents_1.length; _i++) {
                var x = Agents_1[_i];
                if (!!~userAgentInfo.indexOf(x))
                    return false;
            }
            return true;
        }
    };
};
/**
 * 随机字符串
 * 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
 */
var randomString = function (len) {
    if (len === void 0) { len = 10; }
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678', maxPos = $chars.length;
    var pwd = '';
    for (var i = 0; i < len; i++)
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    return pwd;
};
/**
 * 分割符 10002061122.891 => 10,002,061,122.891
 */
var separator = function (data, num, str) {
    if (num === void 0) { num = 3; }
    if (str === void 0) { str = ','; }
    // 分割小数位
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
};
/**
 * 深度克隆
 */
var deepClone = function (obj) {
    if (obj === null)
        return null;
    if (typeof obj !== "object")
        return obj;
    if (obj instanceof RegExp)
        return new RegExp(obj);
    if (obj instanceof Date)
        return new Date(obj);
    // 不直接创建空对象目的：克隆的结果和之前保持相同类
    var newObj = obj.constructor;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key]);
        }
    }
    return newObj;
};
export default {
    formatDate: formatDate,
    timeStamp: timeStamp,
    _timeStamp: _timeStamp,
    outPut: outPut,
    _encrypt: _encrypt,
    _decrypt: _decrypt,
    getCookie: getCookie,
    setCookie: setCookie,
    delCookie: delCookie,
    getScrollTop: getScrollTop,
    setScrollTop: setScrollTop,
    sub: sub,
    checkImageWH: checkImageWH,
    unique: unique,
    to_heavy: to_heavy,
    isBrowser: isBrowser,
    randomString: randomString,
    separator: separator,
    deepClone: deepClone
};
