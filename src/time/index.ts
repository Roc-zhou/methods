
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
export function formatDate(date: any, format = 'yyyy-MM-dd hh:mm:ss'): string {
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

  format = format.replace('yyyy', y).replace('MM', m).replace('dd', d).replace('hh', h).replace('mm', m1).replace('ss', s)
  return format
}

/**
 * [转换时间戳]
 * @param    {[String]}                 date [需要转换的时间]
 * @return   {[String]}                      [输出时间戳]
 */
export function timeStamp(date: string): number {
  return (new Date(date)).valueOf()
}

/**
 * [获取当前时间戳]
 */
export function _timeStamp(): number{
  return (new Date()).valueOf()
}

/**
 * 【时间戳转时分秒】
 */
export function timeStampToString(stamp: number, format = 'hh:mm:ss'): string {
  let h: any, m: any, s: any
  if (stamp > -1) {
    h = Math.floor(stamp / 3600);
    m = Math.floor(stamp / 60) % 60;
    s = stamp % 60;
    if (h < 10) h = `0${h}`
    if (m < 10) m = `0${m}`
    if (s < 10) s = `0${s}`
  }

  format = format.replace('hh', h).replace('mm', m).replace('ss', s)
  return format
}