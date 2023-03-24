import { Cookies } from 'react-cookie'

const cookie = new Cookies()

export function setCookie(value: string) {
  cookie.set('cookie', value)
}

export function getCookie() {
  return cookie.get('cookie')
}

export function removeCookie() {
  cookie.remove('cookie')
}
