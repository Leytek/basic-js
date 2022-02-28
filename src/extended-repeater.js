const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(s, o) {
  return Array(o.repeatTimes).fill(String(s !== undefined ? s : '') + Array(o.additionRepeatTimes).fill(String(o.addition !== undefined ? o.addition : '')).join(o.additionSeparator || '|')).join(o.separator || '+');
}

module.exports = {
  repeater
};
