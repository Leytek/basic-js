const { NotImplementedError } = require('../extensions/index.js');

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

function encodeLine(s) {
  return (s.match(/(.)\1*/g)|| []).map(c => `${c.length === 1 ? '': c.length}${c[0]}`).join('')
}

module.exports = {
  encodeLine
};
