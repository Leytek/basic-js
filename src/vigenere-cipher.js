import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(d = true) {
    this.d = d;
  }
  encrypt(s, k) {
    if(!s || !k) throw new Error('Incorrect arguments!');
    const key = k.repeat(Math.ceil(s.length / k.length)).toUpperCase().split('');
    const res = s.toUpperCase().replace(/([A-Z])/g, c => String.fromCharCode((c.charCodeAt() + key.shift().charCodeAt() - 130) % 26 + 65));
    if(this.d) return res;
    return res.split('').reverse().join('');
  }
  decrypt(s, k) {
    if(!s || !k) throw new Error('Incorrect arguments!');
    const key = k.repeat(Math.ceil(s.length / k.length)).toUpperCase().split('');
    const res = s.toUpperCase().replace(/([A-Z])/g, c => String.fromCharCode((c.charCodeAt() - key.shift().charCodeAt() + 26) % 26 + 65));
    if(this.d) return res;
    return res.split('').reverse().join('');
  }
}
