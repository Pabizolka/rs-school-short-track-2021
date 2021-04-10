/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  const res = array;
  let arr;
  res.forEach((element) => {
    if (element !== -1) {
      arr.push(element);
    }
  });
  arr.sort((a, b) => a - b);
  res.forEach((element, index) => {
    if (element !== -1) {
      res[index] = arr.shift();
    }
  });
  return res;
}

module.exports = sortByHeight;
