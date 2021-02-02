import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  saveUserId(id) {
    window.localStorage.setItem(config.USER_ID_KEY, id)
  },
  saveUserAuth(admin) {
    window.localStorage.setItem(config.ADMIN_AUTH_KEY, admin)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  getUserId() {
    return window.localStorage.getItem(config.USER_ID_KEY)
  },
  getUserAuth() {
    return window.localStorage.getItem(config.ADMIN_AUTH_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  clearUserKey() {
    window.localStorage.removeItem(config.USER_ID_KEY)
  },
  clearAdminKey() {
    window.localStorage.removeItem(config.ADMIN_AUTH_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService
