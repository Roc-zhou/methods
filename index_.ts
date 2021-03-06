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
const formatDate = (date: any, format = 'yyyy-MM-dd hh:mm:ss'): string => {
  if (!date) return '';
  date = new Date(date);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let m1 = date.getMinutes();
  let s = date.getSeconds();
  m = m < 10 ? ("0" + m) : m;
  d = d < 10 ? ("0" + d) : d;
  h = h < 10 ? ("0" + h) : h;
  m1 = m1 < 10 ? ("0" + m1) : m1;
  s = s < 10 ? ('0' + s) : s;

  return format = format.replace('yyyy', y).replace('MM', m).replace('dd', d).replace('hh', h).replace('mm', m1).replace('ss', s)
}
/**
 * [转换时间戳]
 * @param    {[String]}                 date [需要转换的时间]
 * @return   {[String]}                      [输出时间戳]
 */
const timeStamp = (date: string) => {
  return (new Date(date)).valueOf
}
/**
 * [获取当前时间戳]
 */
const _timeStamp = () => {
  return (new Date()).valueOf()
}
/**
 * [线上关闭，线下输出]
 * @param    {[type]}                 e [需要输出的内容]
 * @return   {[type]}                   [description]
 */
const outPut = (e: any) => {
  const Debug = !!~location.origin.indexOf('http://localhost:') || !!~location.origin.indexOf('http://192.168.') || !!~location.origin.indexOf('http://127.0.0.1:') || !!~location.origin.indexOf('http://0.0.0.0:')
  return Debug && console.log(`%ctitle：${e.title}\n%cfrom：${document.title}\n%cdata：%o`, 'color:#cc7832;border-bottom:1px solid #57a3f3', 'color:#6a7c4e;border-bottom:1px solid #f7f7f7', 'color:#d24f4d', e.content)
}
/**
 * [AES加密（node<==java,c,o-c;iv-向量)]
 * @param    {[string]}                 key  [a41f821ea5c6f942]
 * @param    {[string]}                 iv   [a41f821ea5c6f942]
 * @param    {[type]}                 data [data]
 */
const _encrypt = (key: string, iv: string, data: string): string => {
  const cipher = require('crypto').createCipheriv('aes-128-cbc', key, iv)
  let crypted = cipher.update(data, 'utf8', 'binary')
  return crypted += cipher.final('binary'), crypted = Buffer.from(crypted, 'binary').toString('base64'), crypted
}
/**
 * [AES解密（node<==java,c,o-c;iv-向量)]
 * @param    {[string]}                 key  [a41f821ea5c6f942]
 * @param    {[string]}                 iv   [a41f821ea5c6f942]
 * @param    {[type]}                 data [data]
 */
const _decrypt = (key: string, iv: string, crypted: string) => {
  crypted = Buffer.from(crypted, 'base64').toString('binary')
  const decipher = require('crypto').createDecipheriv('aes-128-cbc', key, iv)
  let decoded = decipher.update(crypted, 'binary', 'utf8')
  return decoded += decipher.final('utf8'), decoded
}
/**
 * 获取cookie
 */
const getCookie = (c_name: string) => {
  if (!!document.cookie.length) {
    let c_start = document.cookie.indexOf(c_name + '=')
    if (!!~c_start) {
      c_start = c_start + c_name.length + 1
      let c_end = document.cookie.indexOf(';', c_start)
      if (!~c_end) c_end = document.cookie.length
      return decodeURI(document.cookie.substring(c_start, c_end))
    }
  }
  return null
}
/**
 * 设置cookie
 * ms 毫秒
 */
const setCookie = (c_name: string, value: any, ms: any = null) => {
  const date = new Date().getTime() + ms
  return document.cookie = c_name + '=' + encodeURI(value) + ((ms === null) ? '' : ';expires=' + new Date(date).toUTCString()), null
}
/**
 * 删除cookie
 * @param    {[string]}                 name [description]
 */
const delCookie = (name: string) => {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
}
/**
 * 获取scrollTop的值：兼容所有浏览器
 */
const getScrollTop = () => {
  return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
}
/**
 * 设置scrollTop的值，兼容所有浏览器
 */
const setScrollTop = (scroll_top: number) => {
  document.documentElement.scrollTop = scroll_top
  // window.pageYOffset = scroll_top
  document.body.scrollTop = scroll_top
}
/**
 * 处理 中间内容...显示 字符串长度
 * @param    {[string]}                 str    
 * @param    {[number]}                 length [前后需要显示字符串长度]
 * @param    {[string]}                 symbol [需要显示的字符串 **** ]
 */
const sub = (str: string, length: number, symbol: string): string => {
  let str1 = str.substr(0, length),
    str2 = str.substr(str.length - length, length)
  return str1 + symbol + str2
}
/**
 * 校验上传图片宽高
 * @param    {[type]}                 file   [文件]
 * @param    {[number]}                 width  [description]
 * @param    {[number]}                 height [description]
 */
const checkImageWH = (file: any, width: any, height: any) => {
  return new Promise<void>(function (resolve, reject) {
    let filereader = new FileReader();
    filereader.onload = (e: any) => {
      let src = e.target.result;
      const image = new Image();
      image.onload = function () {
        if (
          (width && image.width != width) ||
          (height && image.height != height)
        ) {
          reject('error');
        } else {
          resolve();
        }
      };
      image.onerror = reject;
      image.src = src;
    };
    filereader.readAsDataURL(file);
  });
}
/**
 * 数组去重
 */
const unique = (arr: any[]): any[] => {
  return Array.from(new Set(arr))
}
const to_heavy = (arr: any[]): any[] => {
  const array = []
  for (const x of arr) {
    if (array.indexOf(x) === -1) {
      array.push(x)
    }
  }
  return array
}
/**
 * 浏览器方法
 */
const isBrowser = () => {
  const UA = !!window && window.navigator.userAgent.toLowerCase();
  return {
    _isIE: UA && /msie|trident/.test(UA),
    _isIE9: UA && !!~UA.indexOf('msie 9.0'),
    _isEdge: UA && !!~UA.indexOf('edge/'),
    _isAndroid: UA && !!~UA.indexOf('android'),
    _isIOS: UA && /iphone|ipad|ipod|ios/.test(UA),
    _isChrome: UA && /chrome\/\d+/.test(UA) && !~UA.indexOf('edge/'),
    _isWX: UA && /micromessenger/.test(UA), // 微信内置浏览器
    _isQQ: UA && /qqbrowser/.test(UA), // QQ浏览器
    _isPC: () => {
      const userAgentInfo = navigator.userAgent,
        Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
      for (let x of Agents)
        if (!!~userAgentInfo.indexOf(x)) return false
      return true
    }
  }
}
/**
 * 随机字符串 
 * 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
 */
const randomString = (len: number = 10): string => {
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678',
    maxPos = $chars.length
  let pwd = ''
  for (let i = 0; i < len; i++) pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  return pwd
}

/**
 * 分割符 10002061122.891 => 10,002,061,122.891
 */
const separator = (data: string | number, num: number = 3, str: string = ','): string => {
  // 分割小数位
  const dataString = data.toString().split('.'),
    reseData = dataString[0].split('').reverse(),
    count = reseData.length % num === 0 ? parseInt((reseData.length / num).toString()) : parseInt((reseData.length / num).toString()) + 1
  for (let i = 1; i < count; i++) {
    reseData.splice(4 * i - 1, 0, str)
  }
  console.log(reseData);
  if (dataString[1]) {
    return reseData.reverse().join('') + '.' + dataString[1]
  } else {
    return reseData.reverse().join('')
  }
}
/**
 * 深度克隆
 */
const deepClone = (obj: any): any => {
  if (obj === null) return null
  if (typeof obj !== "object") return obj
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  // 不直接创建空对象目的：克隆的结果和之前保持相同类
  let newObj = obj.constructor
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}


export default {
  formatDate,
  timeStamp,
  _timeStamp,
  outPut,
  _encrypt,
  _decrypt,
  getCookie,
  setCookie,
  delCookie,
  getScrollTop,
  setScrollTop,
  sub,
  checkImageWH,
  unique,
  to_heavy,
  isBrowser,
  randomString,
  separator,
  deepClone
}