/**
 * [AES加密（node<==java,c,o-c;iv-向量)]
 * @param    {[string]}                 key  [a41f821ea5c6f942]
 * @param    {[string]}                 iv   [a41f821ea5c6f942]
 * @param    {[type]}                 data [data]
 */
export declare function _encrypt(key: string, iv: string, data: string): string;
/**
 * [AES解密（node<==java,c,o-c;iv-向量)]
 * @param    {[string]}                 key  [a41f821ea5c6f942]
 * @param    {[string]}                 iv   [a41f821ea5c6f942]
 * @param    {[type]}                 data [data]
 */
export declare function _decrypt(key: string, iv: string, crypted: string): any;
