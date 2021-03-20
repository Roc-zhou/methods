
/**
 * [AES加密（node<==java,c,o-c;iv-向量)]
 * @param    {[string]}                 key  [a41f821ea5c6f942]
 * @param    {[string]}                 iv   [a41f821ea5c6f942]
 * @param    {[type]}                 data [data]
 */
export function _encrypt<T>(key: string, iv: string, data: string): string {
    const cipher = require('crypto').createCipheriv('aes-128-cbc', key, iv)
    let crypted = cipher.update(data, 'utf8', 'binary')
    return crypted += cipher.final('binary'), crypted = Buffer.from(crypted, 'binary').toString('base64'), crypted
}

/**
 * [AES解密（node<==java,c,o-c;iv-向量)]
 * @param    {[string]}                 key  [a41f821ea5c6f942]
 * @param    {[string]}                 iv   [a41f821ea5c6f942]
 * @param    {[type]}                 data [data]
 */
export function _decrypt<T>(key: string, iv: string, crypted: string): any {
    crypted = Buffer.from(crypted, 'base64').toString('binary')
    const decipher = require('crypto').createDecipheriv('aes-128-cbc', key, iv)
    let decoded = decipher.update(crypted, 'binary', 'utf8')
    return decoded += decipher.final('utf8'), decoded
}
