class dustObj {
  constructor(that) {
    this.x = []
    this.y = []
    this.amp = []
    this.NO = []
    this.dustPic = []
    this.num = 30

    this.alpha = 0
    this.that = that
  }

  init () {
    let h = this.that.canHeight
    let w = this.that.canWidth
    for (var i = 0; i < this.num; i++) {
      this.x[i] = Math.random() * h
      this.y[i] = Math.random() * w
      this.amp[i] = 20 + Math.random() * 15
      this.NO[i] = Math.floor(Math.random() * 7)
    }
    for (var i = 0; i < 7; i++) {
      this.dustPic[i] = new Image()
      this.dustPic[i].src = "./img/tinyHeart/dust"+ i +".png"
    }
  }

  draw () {
    let that = this.that
    this.alpha += that.deltaTime * 0.0008
    let l = Math.sin(this.alpha)
    console.log(this.x[0]);
    for (var i = 0; i < this.num; i++) {
      var no = this.NO[i]
      that.ctx1.drawImage(this.dustPic[no], this.x[i] + this.amp[i] * l, this.y[i], this.dustPic[no].width, this.dustPic[no].height)
    }
  }
}
module.exports = dustObj
