/**
 * @description Remove item from array
 * @param {Array} array
 * @param {String} itemKey key for compare
 * @param {*} itemValue value to compare
 */
function removeItemFromArray(array, itemKey, itemValue) {
  return array.filter(item => item[itemKey] !== itemValue);
}

export default removeItemFromArray;
