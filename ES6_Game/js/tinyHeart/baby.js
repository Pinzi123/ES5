class babyObj {
  constructor(that) {
    this.angle = 0
    this.babyEye = []
    this.babyBoby = []
    this.babyTail = []
    this.babyEyeImg = new Image()
    this.babyBobyImg = new Image()
    this.babyTailImg = new Image()
    this.babyTailTimer = 0
    this.babyTailCount = 0

    this.babyEyeTimer = 0
    this.babyEyeCount = 0
    this.babyEyeInterval = 1000

    this.babyBodyTimer = 0
    this.babyBodyCount = 0

    this.that = that
  }
  init () {
    this.x = this.that.canWidth * 0.5 - 50
    this.y = this.that.canHeight * 0.5 + 50
    for (let i = 0; i < 8; i++) {
      this.babyTail[i] = "./img/tinyHeart/babyTail" + i + ".png"
    }
    for (let i = 0; i < 2; i++) {
      this.babyEye[i] = "./img/tinyHeart/babyEye" + i + ".png"
    }
    for (let i = 0; i < 20; i++) {
      this.babyBoby[i] = "./img/tinyHeart/babyFade" + i + ".png"
    }
  }

  draw () {

    let that = this.that

    this.x = lerpDistance(that.mom.x - 35, this.x, 0.98)
    this.y = lerpDistance(that.mom.y - 35, this.y, 0.98)

    let deltaY = that.mom.y - this.y
    let deltaX = that.mom.x - this.x
    let beta = Math.atan2(deltaY, deltaX) + Math.PI

    this.angle = lerpAngle(beta, this.angle, 0.6)

    // 尾巴摆动
    this.babyTailTimer += that.deltaTime
    if (this.babyTailTimer > 50) {
      this.babyTailCount = (this.babyTailCount + 1) % 8
      this.babyTailTimer %= 50
    }

    // 眼睛眨动
    this.babyEyeTimer += that.deltaTime
    if (this.babyEyeTimer > this.babyEyeInterval) {
      this.babyEyeCount = (this.babyEyeCount + 1) % 2
      this.babyEyeTimer %= 50
      if (this.babyEyeCount === 0){
        this.babyEyeInterval = Math.random() * 1500 + 2000
      } else {
        this.babyEyeInterval = 200
      }
    }

    // 身体变白
    this.babyBodyTimer += that.deltaTime
    if (this.babyBodyTimer > 500) {
      this.babyBodyCount = this.babyBodyCount + 1
      this.babyBodyTimer %= 500
      if (this.babyBodyCount > 19){
        this.babyBodyCount = 19
        // game over
        that.data.gameOver = true
      }
    }

    this.babyTailImg.src = this.babyTail[this.babyTailCount]
    this.babyBobyImg.src = this.babyBoby[this.babyBodyCount]
    this.babyEyeImg.src = this.babyEye[this.babyEyeCount]

    that.ctx1.save()
    that.ctx1.translate(this.x, this.y)
    that.ctx1.rotate(this.angle)
    that.ctx1.drawImage(this.babyTailImg, -this.babyTailImg.width * 0.5 + 30, -this.babyTailImg.height * 0.5, this.babyTailImg.width, this.babyTailImg.height)
    that.ctx1.drawImage(this.babyBobyImg, -this.babyBobyImg.width * 0.5, -this.babyBobyImg.height * 0.5, this.babyBobyImg.width, this.babyBobyImg.height)
    that.ctx1.drawImage(this.babyEyeImg, -this.babyEyeImg.width * 0.5, -this.babyEyeImg.height * 0.5, this.babyEyeImg.width, this.babyEyeImg.height)
    that.ctx1.restore()
  }

}
module.exports = babyObj
