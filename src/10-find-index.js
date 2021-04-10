/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let res = 0;
  const arr = array;
  let len = array.length;
  let tmp = 0;
  while (arr[res] !== value) {
    tmp = Math.floor(len / 2);
    if (array[res + tmp] <= value) {
      res += tmp;
      len -= tmp;
    } else {
      len = tmp;
    }
  }
  return res;
}

module.exports = findIndex;
