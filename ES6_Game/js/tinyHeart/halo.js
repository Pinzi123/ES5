class haloObj {
  constructor(that) {
    this.x = new Array(this.num).fill(0)
    this.y = new Array(this.num).fill(0)
    this.num = 5
    this.alive = new Array(this.num).fill(false) //为了防止吃到几个果实不能正常显示几个圈圈的现象
    this.r = new Array(this.num).fill(0)

    this.that = that
  }

  draw () {
    let that = this.that

    that.ctx1.save()
    that.ctx1.lineWidth  = 2
    that.ctx1.shadowBlur = 10
    that.ctx1.shadowColor = "rgba(203, 91, 0, 1)"

    for (var i = 0; i < this.num; i++) {
      if (this.alive[i]) {
        this.r[i] += that.deltaTime * 0.05
        if (this.r[i] > 100) {
          this.alive[i] = false
          break;
        }
        var alpha = 1 - this.r[i] / 100

        //api
        that.ctx1.beginPath()
        that.ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2)
        that.ctx1.closePath()
        that.ctx1.strokeStyle = "rgba(203, 91, 0," + alpha + ")"
        that.ctx1.stroke()
      }
    }
    that.ctx1.restore()
  }

  born (x, y) {
    for (var i = 0; i < this.num; i++) {
      if (!this.alive[i]) {
        this.alive[i] = true
        this.r[i] = 20
        this.x[i] = x
        this.y[i] = y

        return;
      }
    }
  }
}
module.exports = haloObj
