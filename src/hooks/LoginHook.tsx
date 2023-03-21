export function setToken(userToken: string) {
  sessionStorage.setItem('token', JSON.stringify(userToken))
}

export function getToken() {
  const tokenString = sessionStorage.getItem('token')
  if (tokenString == null) return
  const userToken = JSON.parse(tokenString)
  console.log('dfkfwe', userToken)
  return userToken
}
