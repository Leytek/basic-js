import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(s) {
  return (s.match(/(.)\1*/g)|| []).map(c => `${c.length}${c[0]}`).join('')
}
