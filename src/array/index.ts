/**
 * 数组去重
 */
export function unique(arr: any[]): any[] {
  return Array.from(new Set(arr));
}

export function to_heavy(arr: any[]): any[] {
  const array = [];
  for (const x of arr) {
    if (array.indexOf(x) === -1) {
      array.push(x);
    }
  }
  return array;
}
