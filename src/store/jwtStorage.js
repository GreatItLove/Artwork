import store from 'store';

/**
 * @description The storage item name
 * @type {string}
 */
const JWT = 'artworkAuth';

/**
 * @description get item from localStorage
 * @return {Object}
 */
const getJWT = () => store.get(JWT);

/**
 * @description Set value to localStorage
 * @param {Object} value item value
 */
const setJWT = value => {
  store.set(JWT, value);
};

/**
 * @description remove jwt from localStorage
 */
const removeJWT = () => {
  store.remove(JWT);
};

/**
 * @description Check is jwt token exist in localStorage
 * @return {Boolean}
 */
const exists = () => {
  const item = getJWT(JWT);
  return typeof item !== 'undefined';
};

export default {
  getJWT,
  setJWT,
  removeJWT,
  exists
};
