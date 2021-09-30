/**
 * 获取cookie
 */
export function getCookie(c_name: string) {
  // eslint-disable-next-line no-extra-boolean-cast
  if (!!document.cookie.length) {
    let c_start = document.cookie.indexOf(c_name + '=')
    // eslint-disable-next-line no-extra-boolean-cast
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
export function setCookie(c_name: string, value: any, ms: any = null) {
  const date = new Date().getTime() + ms
  return document.cookie = c_name + '=' + encodeURI(value) + ((ms === null) ? '' : ';expires=' + new Date(date).toUTCString()), null
}
/**
 * 删除cookie
 * @param    {[string]}                 name [description]
 */
export function delCookie(name: string) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
}