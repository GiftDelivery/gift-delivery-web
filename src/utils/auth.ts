const TOKEN_KEY = 'GIFT_TOKEN'
/**
 * 获取token
 */
export function getToken() {
  return window.sessionStorage.getItem(TOKEN_KEY) || ''
}

/**
 * 删除token
 */
export function removeToken() {
  return window.sessionStorage.removeItem(TOKEN_KEY)
}

/**
 * 设置token
 */
export function setToken(token: string) {
  return window.sessionStorage.setItem(TOKEN_KEY, token)
}
