/**
 * @description update item in the array
 * @param {Array} array
 * @param {String} itemKey key for compare
 * @param {*} itemValue value to compare
 * @param {Function} updateItemCallback callbackFunction
 */
function updateItemInArray(array, itemKey, itemValue, updateItemCallback) {
  const updatedItems = array.map(item => {
    if (item[itemKey] !== itemValue) {
      return item;
    }
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
}

export default updateItemInArray;
