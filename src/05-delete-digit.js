/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  for (let i = 0; i <= 9; i++) {
    if (str.includes(i.toString())) {
      return Number(str.replace(i.toString(), ''));
    }
  }
  return NaN;
}

module.exports = deleteDigit;
