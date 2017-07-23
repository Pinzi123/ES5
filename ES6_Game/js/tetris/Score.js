import Canvas from './Canvas.js';
class Scroe {
  constructor() {
    this.canvas = new Canvas('score', 100, 70);
    this.score = 0;

    this._init();
  }
  _init () {
    this._render();
  }
  _render () {
    this.canvas.drawText(this.score);
  }
  addScore (value) {
    this.score += value;
    this._render();
    return this.score;
  }
}
module.exports = Scroe
