/**
 * 采用Es6方式
 * author:roc_zhou
 */
declare const _default: {
    formatDate: (date: any, format?: string) => string;
    timeStamp: (date: string) => () => number;
    _timeStamp: () => number;
    outPut: (e: any) => false | void;
    _encrypt: (key: string, iv: string, data: string) => string;
    _decrypt: (key: string, iv: string, crypted: string) => any;
    getCookie: (c_name: string) => string | null;
    setCookie: (c_name: string, value: any, ms?: any) => null;
    delCookie: (name: string) => void;
    getScrollTop: () => number;
    setScrollTop: (scroll_top: number) => void;
    sub: (str: string, length: number, symbol: string) => string;
    checkImageWH: (file: any, width: any, height: any) => Promise<unknown>;
    unique: (arr: any[]) => any[];
    to_heavy: (arr: any[]) => any[];
    isBrowser: () => {
        _isIE: boolean | "";
        _isIE9: boolean | "";
        _isEdge: boolean | "";
        _isAndroid: boolean | "";
        _isIOS: boolean | "";
        _isChrome: boolean | "";
        _isWX: boolean | "";
        _isQQ: boolean | "";
        _isPC: () => boolean;
    };
    randomString: (len?: number) => string;
    separator: (data: string | number, num?: number, str?: string) => string;
    clone: (obj: any) => any;
};
export default _default;
