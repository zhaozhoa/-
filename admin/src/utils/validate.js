/**
 * Created by PanJiaChen on 16/11/18.
 * Changed by zhao on 2020-03/25
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  return str.length >= 2
}