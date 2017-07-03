class fruitObj {
  constructor(that) {
    this.num = 30
    this.alive = []
    this.that = that
    this.orange = new Image()
    this.blue = new Image()
    this.x = []
    this.y = []
    this.l = []
    this.spd = []
    this.fruitType = []
  }

  init () {
    for (var i = 0; i < this.num; i++) {
      this.alive[i] = false
      this.x[i] = 0
      this.y[i] = 0
      this.spd[i] = Math.random() * 0.017 + 0.003
      this.fruitType[i] = ''
    }
    this.orange.src = "./img/tinyHeart/fruit.png"
    this.blue.src = "./img/tinyHeart/blue.png"
  }

  draw () {
    let that = this.that
    for (var i = 0; i < this.num; i++) {
      if(this.alive[i]){
        if (this.l[i] <= 14) {
          this.l[i] += this.spd[i] * that.deltaTime
        } else {
          this.y[i] -= this.spd[i] * 7 * that.deltaTime
        }
        that.ctx2.drawImage(this[this.fruitType[i]], this.x[i] - this.orange.width * 0.5, this.y[i] - this.orange.height * 0.5, this.l[i], this.l[i])
        if(this.y[i] < 10){
          this.alive[i] = false
        }
      }
    }
  }

  born (i) {
    let that = this.that
    var aneID = Math.floor(Math.random() * that.ane.num)
    this.x[i] = that.ane.x[aneID]
    this.y[i] = that.canHeight - that.ane.len[aneID] + (Math.random() * 100)
    this.l[i] = 0
    this.alive[i] = true
    this.fruitType[i] = 'orange'
    if(Math.random() < 0.2){
      this.fruitType[i] = 'blue'
    }
  }

  dead(i) {
    this.alive[i] = false
  }

  fruitMonitor () {
    var num = 0
    for (var i = 0; i < this.num; i++) {
      if (this.alive[i]) num++
    }
    if (num < 15) {
      this.sendFruit()
      return
    }
  }

  sendFruit () {
    for (var i = 0; i < this.num; i++) {
      if (!this.alive[i]){
        this.born(i)
        return
      }
    }
  }

}
module.exports = fruitObj
