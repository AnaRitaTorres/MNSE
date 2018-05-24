module.exports = {
  setCookie: function (name, value) {
    var date, expires
    date = new Date()
    // expira numa hora
    date.setTime(date.getTime() + 3600 * 1000)
    expires = '; expires=' + date.toGMTString()
    document.cookie = name + '=' + value + expires + '; path=/'
  },
  getCookie: function (name) {
    let value = '; ' + document.cookie
    let parts = value.split('; ' + name + '=')
    if (parts.length === 2) return parts.pop().split(';').shift()
  },
  cleanCookie: function (name) {
    // apaga cookies :) hmm cookiiiieess
    let expires = '; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    document.cookie = name + '=' + '0' + expires + '; path=/'
  }
}
