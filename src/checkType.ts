
/**
 * 判断是不是数组
 */
export function isArray(arr: any): Boolean {
    if (!Array.isArray) {
        Array.isArray = function(arr) {
            return Object.prototype.toString.call(arr) === '[object Array]';
        };
    }
    return Array.isArray(arr)
}