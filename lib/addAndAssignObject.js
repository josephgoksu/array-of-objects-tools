/**
 * 
 * @description Adds and assign given object to array of objects
 * @param {array} array 
 * @param {object} object 
 * @example addAndAssignObject([{name: 'finn the human'}, {name: 'jake the dog'}], {id: 1})
 * @returns {array} array
 */
export default (array, object) => {
  let _array = [];
  array.map((item, index) => {
    let _item = {
        ...item,
        ...object
    };
    _array.push(_item);
  });
  return _array;
};
