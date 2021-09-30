
/**
 * 深度克隆
 */
export function deepClone(obj: any): any {
  if (obj === null) return null
  if (typeof obj !== "object") return obj
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  // 不直接创建空对象目的：克隆的结果和之前保持相同类
  let newObj = obj.constructor
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}