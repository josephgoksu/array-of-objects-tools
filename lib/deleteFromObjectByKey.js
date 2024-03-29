/**
 * 
 * @description Pass the array of object and specify the key which you want to remove
 * @param {array} array 
 * @param {string} elementKey 
 * @example deleteFromObjectByKey([{name: 'finn the human'}, {name: 'jake the dog'}], 'name')
 * @returns {array} array
 */
export default (array, elementKey) => {
  let _array = [];
  array.map((item, index) => {
    let _item = item;
    let itemKeys = Object.keys(_item);
    if (itemKeys.includes(elementKey)) {
      delete _item[elementKey];
    }
    _array.push(_item);
  });
  return _array;
};
