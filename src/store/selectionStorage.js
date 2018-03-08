import store from 'store';

/**
 * @description The storage item name
 * @type {string}
 */
const SELECTION = 'artworkSelection';

/**
 * @description get item from localStorage
 * @return {Object}
 */
const getSelection = () => store.get(SELECTION);

/**
 * @description Set value to localStorage
 * @param {Object} value item value
 */
const setSelection = value => {
  store.set(SELECTION, value);
};

/**
 * @description remove Selection from localStorage
 */
const removeSelection = () => {
  store.remove(SELECTION);
};

/**
 * @description Check is Selection token exist in localStorage
 * @return {Boolean}
 */
const exists = () => {
  const item = getSelection(SELECTION);
  return typeof item !== 'undefined';
};

export default {
  getSelection,
  setSelection,
  removeSelection,
  exists
};
