const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(a) {
  if(!Array.isArray(a)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let r = [];
  let t = a.map(c => c);
  for (let i = 0; i < t.length; i++){
    switch (t[i]) {
      case '--discard-next': t[++i] = null; break;
      case '--discard-prev': if(t[i - 1] !== null) r.pop(); break;
      case '--double-next': if(i < t.length - 1) r.push(t[i + 1]); break;
      case '--double-prev': if(i && t[i - 1] !== null) r.push(t[i - 1]); break;
      default: r.push(t[i]);
      }
    }
  return r;
}

module.exports = {
  transform
};
