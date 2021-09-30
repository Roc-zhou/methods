/**
 * 浏览器方法
 */
export function isBrowser() {
  const UA = !!window && window.navigator.userAgent.toLowerCase();
  return {
    _isIE: UA && /msie|trident/.test(UA),
    _isIE9: UA && !!~UA.indexOf('msie 9.0'),
    _isEdge: UA && !!~UA.indexOf('edge/'),
    _isAndroid: UA && !!~UA.indexOf('android'),
    _isIOS: UA && /iphone|ipad|ipod|ios/.test(UA),
    _isChrome: UA && /chrome\/\d+/.test(UA) && !~UA.indexOf('edge/'),
    _isWX: UA && /micromessenger/.test(UA), // 微信内置浏览器
    _isQQ: UA && /qqbrowser/.test(UA), // QQ浏览器
    _isPC: () => {
      const userAgentInfo = navigator.userAgent,
        Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
      for (let x of Agents)
        // eslint-disable-next-line no-extra-boolean-cast
        if (!!~userAgentInfo.indexOf(x)) return false
      return true
    }
  }
}