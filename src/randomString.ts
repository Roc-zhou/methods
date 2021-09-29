/**
 * 随机字符串
 * 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
 */
export function randomString(len: number = 10): string {
    const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678',
        maxPos = $chars.length
    let pwd = ''
    for (let i = 0; i < len; i++) pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
    return pwd
}