/**
 * 判断是不是数组
 */
export function isArray(arr) {
    return !Array.isArray ? Object.prototype.toString.call(arr) === '[object Array]' : Array.isArray(arr);
}
