import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  getLength() {
    return this.m.length;
  },
  addLink(v) {
    if(!this.m)
      this.m = [];
    this.m.push(v);
    return this;
  },
  removeLink(p) {
    if(p > this.getLength() || p < 1 || typeof p !== 'number') {
      this.m = null;
      throw new Error(`You can't remove incorrect link!`);
    }
    this.m.splice(p - 1, 1);
    return this;
  },
  reverseChain() {
    if(this.m) this.m.reverse();
    return this;
  },
  finishChain() {
    const r = this.m.reduce((a, c) => a + `( ${c} )~~`,'').slice(0, -2);
    this.m = null;
    return r;
  }
};
