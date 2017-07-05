class aneObj {
  constructor (that) {

    this.num = 50
    // 二次赛尔曲线
    //  start point, control point, end point(sin)
    this.rootx = []
    this.headx = []
    this.heady = []
    this.amp = []
    // 正弦函数
    this.alpha = 0

    this.that = that
    this.h = that.can1.height
  }
  init () {

    for (var i = 0; i < this.num; i++) {
      this.rootx[i]  = i * 16 + Math.random() * 20
      this.headx[i] = this.rootx[i]
      this.heady[i] = this.h - 250 + Math.random() * 50
      this.amp[i] = Math.random() * 50 + 50
    }
  }

  draw () {
    let that = this.that

    this.alpha += that.deltaTime * 0.001
    let l = Math.sin(this.alpha)
    that.ctx2.save()
    that.ctx2.globalAlpha = 0.6
    that.ctx2.lineWidth = 20
    that.ctx2.lineCap = "round"
    that.ctx2.strokeStyle = "#3b154e"
    for (var i = 0; i < this.num; i++) {
      that.ctx2.beginPath()
      that.ctx2.moveTo(this.rootx[i], this.h)
      this.headx[i] = this.rootx[i] + l * this.amp[i]
      that.ctx2.quadraticCurveTo(this.rootx[i], this.h - 100, this.headx[i], this.heady[i])
      that.ctx2.stroke()
    }
    that.ctx2.restore()
  }
}
module.exports = aneObj;
