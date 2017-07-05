class dataObj {
  constructor(that) {
    this.fruitNum = 0
    this.double = 1
    this.score = 0
    this.gameOver = false
    this.alpha = 0

    this.that = that
  }

  draw () {
    let that = this.that
    let w = that.can1.width
    let h = that.can1.height

    that.ctx1.save()
    that.ctx1.shadowBlur = 10
    that.ctx1.shadowColor = "white"
    that.ctx1.fillStyle = "white"

    that.ctx1.fillText("fruitNum " + this.fruitNum, w * 0.5, h - 60)
    that.ctx1.fillText("double " + this.double, w * 0.5, h - 40)
    that.ctx1.fillText("SCORE " + this.score, w * 0.5, h - 20)

    if (this.gameOver) {
      this.alpha += 0.005
      if (this.alpha > 1)
        this.alpha = 1
      that.ctx1.fillStyle = "rgba(255, 255, 255, " + this.alpha + ")"
      that.ctx1.fillText("GAMEOVER " , w * 0.5, h * 0.5)
    }
    that.ctx1.restore()

  }

  addScore () {
    this.score += this.fruitNum * this.double
    this.fruitNum = 0
    this.double = 1
  }
}
module.exports = dataObj
