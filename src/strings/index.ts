/**
 * 【获取字符长度】
 *  中文 2 其他 1 
 */
export function getByteLen(val:string): number {
  let len = 0;
  for (let i = 0; i < val.length; i++) {
    let a = val.charAt(i);
    // eslint-disable-next-line no-control-regex
    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2;
    } else {
      len += 1;
    }
  }
  return len;
}

/**
 * 浏览器方法！！
 * [复制文字]
 */
export function copyText(text:string) {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}