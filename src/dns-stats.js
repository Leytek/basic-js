const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats(d) {
  return d.reduce((a, c) => ((c.split`.`.reverse().forEach((c, i, m) => (s = '.' + m.slice(0, ++i).join`.`, a[s] ? a[s]++ : a[s] = 1))), a), {});
}

module.exports = {
  getDNSStats
};
