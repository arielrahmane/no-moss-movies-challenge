interface api {
  version: string;
  protocol: string;
  host: string;
  port: string;
}

class Api {
  _api: api;

  constructor(api: api) {
    this._api = {...api};
  }

  get api() {
    return this._api;
  }

  address(): string {
    const port = this._api.port !== '' ? ':' + this._api.port : '';
    const version = this._api.version !== '' ? this._api.version + '/' : '';
    return this._api.protocol + '://' + this._api.host + port + '/' + version;
  }
}

export const moviesApi = new Api({
  version: "",
  protocol: 'http',
  host: 'app.nomoss.co/proxy/?url=https://www.eventcinemas.com.au',
  port: '',
});