
/**
 * 分割符 10002061122.891 => 10,002,061,122.891
 */
export function separator<T>(data: string | number, num: number = 3, str: string = ','): string {
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