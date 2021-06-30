export default {
  debug: false,
  api: {
    version: '',
    protocol: 'http',
    host: 'app.nomoss.co/proxy/?url=https://www.eventcinemas.com.au',
    port: '',
    address: function () {
      return this.protocol +
        '://' +
        this.host +
        (this.port !== '' ? ':' + this.port : '') +
        '/' +
        (this.version !== '' ? this.version + '/' : '')
    }
  },
  crypto: {
    secret: ''
  }
}