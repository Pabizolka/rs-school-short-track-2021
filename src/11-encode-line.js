/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('');
  let count = 1;
  const len = array.length;
  let pre;
  let cur;
  let res = '';
  pre = array.shift();
  for (let i = 1; i < len; i++) {
    cur = array.shift();
    if (pre === cur) {
      count++;
    } else {
      res = count === 1 ? `${res}${pre}` : `${res}${count}${pre}`;
      count = 1;
    }
    pre = cur;
  }
  res = count === 1 ? `${res}${pre}` : `${res}${count}${pre}`;

  return res === 'undefined' ? '' : res;
}

module.exports = encodeLine;
