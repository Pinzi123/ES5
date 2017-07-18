import Canvas from './Canvas.js';
class Board {
  constructor() {
    this.blockSize = 30
    this.rows = 20
    this.cols = 13
    if(screen.width < 481) this.blockSize = (screen.width * 0.98 - 80) / this.cols
    this.canvas = new Canvas('c_game_main', this.cols * this.blockSize, this.rows * this.blockSize)
    this.context = this.canvas.context
    this.boardList = []

    this._init()
  }

  _init () {
    this._buildGridData()
    this._initGrid()
  }

  _buildGridData() {
    for (var i = 0; i < this.rows; i++) {
      this.boardList[i] = []
      for (var j = 0; j < this.cols; j++) {
        this.boardList[i][j] = 0
      }
    }
  }

  _initGrid() {
    let i;
    this.context.strokeStyle = 'green'
    this.context.lineWidth = 0.5
    //绘制线条的笔迹
    for (i = 0; i < this.rows; i++) {
      this.context.moveTo(0, i*this.blockSize)
      this.context.lineTo(this.canvas.width, i*this.blockSize)
    }
    for (i = 0; i < this.rows; i++) {
      this.context.moveTo(i*this.blockSize, 0)
      this.context.lineTo(i*this.blockSize, this.canvas.height )
    }

    this.context.stroke()
  }
}
module.exports = Board
