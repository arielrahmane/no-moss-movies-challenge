import conf from '../config/config.dev.js'
import axios from 'axios'

/** @type {Boolean} */
/*
let isOnline = true

if (typeof Connection !== 'undefined') isOnline = navigator.connection.type !== Connection.NONE // eslint-disable-line no-undef
document.addEventListener('offline', function () { isOnline = false }, false)
document.addEventListener('online', function (i) { isOnline = true }, false)
*/

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
const getResourceAddress = (resource) => {
  resource = resource.trim()
  return conf.api.address() + resource
}

/**
 * perform a GET request over the network to the specified resource
 *
 * @param {String}  resource - the desire resource.
 * @param {function} done - success callback.
 * @param {function}  error - error callback.
 * @param {Object}  [config = {}] - request config.
 */
export const get = (resource, done, error, config = {}) => {
  axios.get(getResourceAddress(resource), config)
    .then(done)
    .catch(error)
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
export const post = (resource, done, error, data = {}, config = {}) => {
  axios.post(getResourceAddress(resource), data, config)
    .then(done)
    .catch(error)
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
export const put = (resource, done, error, data = {}, config = {}) => {
  axios.put(getResourceAddress(resource), data, config)
    .then(done)
    .catch(error)
}

/**
 * perform a DELETE request over the network to the specified resource
 *
 * @param {String}  resource - the desire resource.
 * @param {function} done - success callback.
 * @param {function}  error - error callback.
 * @param {Object}  [config = {}] - request config.
 */
export const del = (resource, done, error, config = {}) => {
  axios.delete(getResourceAddress(resource), config)
    .then(done)
    .catch(error)
}
