/**
 * @description Update propery in an object
 * @param {Object} oldObject
 * @param {Object} newValues
 * @return {{}} new merged object
 */
function updateObject(oldObject, newValues) {
  return { ...oldObject, ...newValues };
}

export default updateObject;
