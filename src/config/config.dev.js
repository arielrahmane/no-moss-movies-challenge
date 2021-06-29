export default {
    debug: false,
    api: {
      version: '',
      protocol: 'https',
      host: '',
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