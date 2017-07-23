import Canvas from './Canvas.js';
class NextShape {
  constructor(x = 100, y = 70) {
    this.canvas = new Canvas('nextshape', x, y)
    this._init()
  }

  _init () {
    this.rows = 4;
    this.cols = 6;
  }
  render (shape) {
    this.canvas.clear();
    shape.draw(this.canvas.context, 16); // 16*4 ~~ 70 , 16*6 ~~ 100
  }

}
module.exports = NextShape
