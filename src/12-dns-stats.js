/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  let arr = [];
  let str = '';
  domains.forEach((element) => {
    arr = element.split('.');
    for (let i = 0; i < arr.length; i++) {
      str = '';
      for (let j = 0; j <= i; j++) {
        str = `${str}.${arr[arr.length - 1 - j]}`;
      }
      if (str in res) {
        res[str]++;
      } else {
        res[str] = 1;
      }
    }
  });
  return res;
}

module.exports = getDNSStats;
