class babyObj {
  constructor(that) {
    this.angle = 0
    this.babyEye = new Image()
    this.babyBoby = new Image()
    this.babyTail = new Image()

    this.that = that
  }
  init () {
    this.x = this.that.canWidth * 0.5
    this.y = this.that.canHeight * 0.5
    this.babyEye.src = "./img/tinyHeart/babyEye0.png"
    this.babyBoby.src = "./img/tinyHeart/babyFade0.png"
    this.babyTail.src = "./img/tinyHeart/babyTail0.png"
  }

  draw () {

    let that = this.that

    this.x = lerpDistance(that.mom.x - 35, this.x, 0.98)
    this.y = lerpDistance(that.mom.y - 35, this.y, 0.98)

    let deltaY = that.mom.y - this.y
    let deltaX = that.mom.x - this.x
    let beta = Math.atan2(deltaY, deltaX) + Math.PI

    this.angle = lerpAngle(beta, this.angle, 0.6)
    that.ctx1.save()
    that.ctx1.translate(this.x, this.y)
    that.ctx1.rotate(this.angle)
    that.ctx1.drawImage(this.babyTail, -this.babyTail.width * 0.5 + 30, -this.babyTail.height * 0.5, this.babyTail.width, this.babyTail.height)
    that.ctx1.drawImage(this.babyBoby, -this.babyBoby.width * 0.5, -this.babyBoby.height * 0.5, this.babyBoby.width, this.babyBoby.height)
    that.ctx1.drawImage(this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height * 0.5, this.babyEye.width, this.babyEye.height)
    that.ctx1.restore()
  }
}
module.exports = babyObj
