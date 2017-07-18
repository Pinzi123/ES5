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
}
module.exports = Canvas
