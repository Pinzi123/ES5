import Canvas from './Canvas.js';
class  HighScore {
  constructor() {
    this.canvas = new Canvas('highscore', 100, 70)
    this.highScore = 0

    this._init()
  }
  _init () {
    this.highScore = this._getScore();
    this._render();
  }
  _render () {
    this.canvas.drawText(this.highScore);
  }
  _getScore () {
    return window.localStorage.getItem('high-score') || 0;
  }
  _setScore (value) {
    window.localStorage.setItem('high-score', value);
  }
  checkScore (score) {
    if (score > this.highScore) {
      this.highScore = score;
      this._setScore(score);
      this._render();
    }
  }
}
module.exports = HighScore
