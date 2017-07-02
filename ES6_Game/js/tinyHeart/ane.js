class aneObj {
  constructor (that) {
    this.x = []
    this.len = []
    this.num = 50
    this.that = that
    console.log(rnd(2))
  }
  init () {
    for (var i = 0; i < this.num; i++) {
      this.x[i]  = i * 16 + Math.random() * 20
      this.len[i] = 200 + Math.random() * 20
    }
  }

  draw () {
    let that = this.that
    that.ctx2.save()
    that.ctx2.globalAlpha = 0.6
    that.ctx2.lineWidth = 20
    that.ctx2.lineCap = "round"
    that.ctx2.strokeStyle = "#3b154e"
    for (var i = 0; i < this.num; i++) {
      that.ctx2.beginPath()
      that.ctx2.moveTo(this.x[i], that.canHeight)
      that.ctx2.lineTo(this.x[i], that.canHeight - this.len[i])
      that.ctx2.stroke()
    }
    that.ctx2.restore()
  }
}
module.exports = aneObj;
