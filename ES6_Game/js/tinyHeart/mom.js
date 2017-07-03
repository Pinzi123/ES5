class momObj {
  constructor(that) {
    this.angle = 0
    this.bigEye = new Image()
    this.bigBoby = new Image()
    this.bigTail = new Image()

    this.that = that
  }

  init () {
    this.x = this.that.canWidth * 0.5
    this.y = this.that.canHeight * 0.5
    this.bigEye.src = "./img/tinyHeart/bigEye0.png"
    this.bigBoby.src = "./img/tinyHeart/bigSwim0.png"
    this.bigTail.src = "./img/tinyHeart/bigTail0.png"
  }

  draw () {

    let that = this.that

    this.x = lerpDistance(that.mx, this.x, 0.9)
    this.y = lerpDistance(that.my, this.y, 0.9)

    let deltaY = that.my - this.y
    let deltaX = that.mx - this.x
    let beta = Math.atan2(deltaY, deltaX) + Math.PI

    this.angle = lerpAngle(beta, this.angle, 0.6)
    that.ctx1.save()
    that.ctx1.translate(this.x, this.y)
    that.ctx1.rotate(this.angle)
    that.ctx1.drawImage(this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5, this.bigTail.width, this.bigTail.height)
    that.ctx1.drawImage(this.bigBoby, -this.bigBoby.width * 0.5, -this.bigBoby.height * 0.5, this.bigBoby.width, this.bigBoby.height)
    that.ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5, this.bigEye.width, this.bigEye.height)
    that.ctx1.restore()
  }
}
module.exports = momObj
