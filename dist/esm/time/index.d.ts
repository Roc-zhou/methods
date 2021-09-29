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
export declare function formatDate(date: any, format?: string): string;
/**
 * [转换时间戳]
 * @param    {[String]}                 date [需要转换的时间]
 * @return   {[String]}                      [输出时间戳]
 */
export declare function timeStamp(date: string): number;
/**
 * [获取当前时间戳]
 */
export declare function _timeStamp(): number;
