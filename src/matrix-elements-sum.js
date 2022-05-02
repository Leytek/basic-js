const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(m) {
  return m.reduce((a, c) => (a[1] += c.reduce((b, c, i) => a[0][i] ? (c || (a[0][i] = 0), b + c) : b, 0), a), [Array(m[0].length).fill(1), 0])[1];
}

module.exports = {
  getMatrixElementsSum
};
