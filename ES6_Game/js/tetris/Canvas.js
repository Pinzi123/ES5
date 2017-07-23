class Canvas {
  constructor(canvasId, width, height) {
    this.canvasId = canvasId
    this.el = document.getElementById(canvasId)
    if (!this.el) {
      throw new Error('Must provider a right id.')
    }
    this.context = this.el.getContext('2d')
    this.width = width
    this.height = height

    this._init()
  }

  _init () {
    this.el.width = this.width
    this.el.height = this.height
  }

  clear (fromX = 0, fromY = 0, toX = this.width, toY = this.height) {
    this.context.clearRect(fromX, fromY, toX, toY)
  }

  //绘制文本
  drawText (text, x, y) {
    console.log(text)
    this.clear(0, 0);
    this.context.font = '25px Arial';
    this.context.fillStyle = 'purple';
    this.context.textAlign = 'center';
    this.context.fillText(text, x === undefined ? (this.width / 2) : x, y === undefined ? 45 : y);
  }
}
module.exports = Canvas
