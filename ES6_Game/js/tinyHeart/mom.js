class momObj {
  constructor(that) {
    this.angle = 0
    this.bigEyeImg = new Image()
    this.bigBobyImg = new Image()
    this.bigTailImg = new Image()
    this.bigEye = []
    this.bigBoby = []
    this.bigTail = []

    this.bigTailTimer = 0
    this.bigTailCount = 0

    this.bigEyeTimer = 0
    this.bigEyeCount = 0
    this.bigEyeInterval = 1000

    this.bigBodyTimer = 0
    this.bigBodyCount = 0

    this.that = that
  }

  init () {
    this.x = this.that.canWidth * 0.5
    this.y = this.that.canHeight * 0.5
    for (let i = 0; i < 8; i++) {
      this.bigTail[i] = "./img/tinyHeart/bigTail" + i + ".png"
    }
    for (let i = 0; i < 2; i++) {
      this.bigEye[i] = "./img/tinyHeart/bigEye" + i + ".png"
    }
    for (let i = 0; i < 8; i++) {
      this.bigBoby[i] = "./img/tinyHeart/bigSwim" + i + ".png"
    }
    for (let i = 8; i < 16; i++) {
      this.bigBoby[i] = "./img/tinyHeart/bigSwimBlue" + (i - 8) + ".png"
    }
  }

  draw () {

    let that = this.that

    this.x = lerpDistance(that.mx, this.x, 0.9)
    this.y = lerpDistance(that.my, this.y, 0.9)

    let deltaY = that.my - this.y
    let deltaX = that.mx - this.x
    let beta = Math.atan2(deltaY, deltaX) + Math.PI

    this.angle = lerpAngle(beta, this.angle, 0.6)

    // 尾巴摆动
    this.bigTailTimer += that.deltaTime
    if (this.bigTailTimer > 50) {
      this.bigTailCount = (this.bigTailCount + 1) % 8
      this.bigTailTimer %= 50
    }

    // 眼睛眨动
    this.bigEyeTimer += that.deltaTime
    if (this.bigEyeTimer > this.bigEyeInterval) {
      this.bigEyeCount = (this.bigEyeCount + 1) % 2
      this.bigEyeTimer %= 50
      if (this.bigEyeCount === 0){
        this.bigEyeInterval = Math.random() * 1500 + 2000
      } else {
        this.bigEyeInterval = 200
      }
    }

    this.bigTailImg.src = this.bigTail[this.bigTailCount]
    this.bigBobyImg.src = this.bigBoby[this.bigBodyCount]
    this.bigEyeImg.src = this.bigEye[this.bigEyeCount]

    that.ctx1.save()
    that.ctx1.translate(this.x, this.y)
    that.ctx1.rotate(this.angle)
    that.ctx1.drawImage(this.bigTailImg, -this.bigTailImg.width * 0.5 + 30, -this.bigTailImg.height * 0.5, this.bigTailImg.width, this.bigTailImg.height)
    that.ctx1.drawImage(this.bigBobyImg, -this.bigBobyImg.width * 0.5, -this.bigBobyImg.height * 0.5, this.bigBobyImg.width, this.bigBobyImg.height)
    that.ctx1.drawImage(this.bigEyeImg, -this.bigEyeImg.width * 0.5, -this.bigEyeImg.height * 0.5, this.bigEyeImg.width, this.bigEyeImg.height)
    that.ctx1.restore()
  }
}
module.exports = momObj
