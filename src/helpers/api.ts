import { moviesApi } from '../config/config.dev'
import axios from 'axios'

interface options {
  resource: string;
  done: (response: any) => void;
  error: (error: any) => void;
  data?: any;
  config: any;
}

/**
 * build the complete address to the resource according to config.dev.js.
 *
 * @example
 * getResourceAddress('test') // http://apiAdrress.com/test
 *
 * @param {String}  resource - the string to the requested resource.
 *
 * @return {String} the full address to the resources.
 */
const getResourceAddress = (resource: string): string => {
  resource = resource.trim();
  return moviesApi.address() + resource;
}

/**
 * perform a GET request over the network to the specified resource
 *
 * @param {String}  resource - the desire resource.
 * @param {function} done - success callback.
 * @param {function}  error - error callback.
 * @param {Object}  [config = {}] - request config.
 */
export const get = (opts: options) => {
  axios.get(getResourceAddress(opts.resource), opts.config)
    .then(opts.done)
    .catch(opts.error)
}

/**
 * perform a POST request over the network to the specified resource
 *
 * @param {String}  resource - the desire resource.
 * @param {function} done - success callback.
 * @param {function}  error - error callback.
 * @param {Object}  [data = {}] - request data.
 * @param {Object}  [config = {}] - request config.
 */
export const post = (opts: options) => {
  axios.post(getResourceAddress(opts.resource), opts.data, opts.config)
    .then(opts.done)
    .catch(opts.error)
}
/**
 * perform a PUT request over the network to the specified resource
 *
 * @param {String}  resource - the desire resource.
 * @param {function} done - success callback.
 * @param {function}  error - error callback.
 * @param {Object}  [data = {}] - request data.
 * @param {Object}  [config = {}] - request config.
 */
export const put = (opts: options) => {
  axios.put(getResourceAddress(opts.resource), opts.data, opts.config)
    .then(opts.done)
    .catch(opts.error)
}

/**
 * perform a DELETE request over the network to the specified resource
 *
 * @param {String}  resource - the desire resource.
 * @param {function} done - success callback.
 * @param {function}  error - error callback.
 * @param {Object}  [config = {}] - request config.
 */
export const del = (opts: options) => {
  axios.delete(getResourceAddress(opts.resource), opts.config)
    .then(opts.done)
    .catch(opts.error)
}
