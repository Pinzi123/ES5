class fruitObj {
  constructor(that) {
    this.num = 30
    this.alive = []
    this.that = that
    this.orange = new Image()
    this.blue = new Image()
    this.x = []
    this.y = []
    this.aneNo = []
    this.l = []
    this.spd = []
    this.fruitType = []
  }

  init () {
    for (var i = 0; i < this.num; i++) {
      this.alive[i] = false
      this.x[i] = 0
      this.y[i] = 0
      this.aneNo[i] = 0
      this.spd[i] = Math.random() * 0.017 + 0.003
      this.fruitType[i] = ''
    }
    this.orange.src = "./img/tinyHeart/fruit.png"
    this.blue.src = "./img/tinyHeart/blue.png"
  }

  draw () {
    let that = this.that
    for (let i = 0; i < this.num; i++) {
      if(this.alive[i]){
        if (this.l[i] <= 14) { // grow
          this.x[i] = that.ane.headx[this.aneNo[i]]
          this.y[i] = that.ane.heady[this.aneNo[i]]
          this.l[i] += this.spd[i] * that.deltaTime
        } else {
          this.y[i] -= this.spd[i] * 7 * that.deltaTime
        }
        that.ctx2.drawImage(this[this.fruitType[i]], this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i])
        if(this.y[i] < 10){
          this.alive[i] = false
        }
      }
    }
  }

  born (i) {
    let that = this.that
    this.aneNo[i] = Math.floor(Math.random() * that.ane.num)
    this.l[i] = 0
    this.alive[i] = true
    this.fruitType[i] = 'orange'
    if(Math.random() < 0.2){
      this.fruitType[i] = 'blue'
    }
  }

  dead(i) {
    // 为什么死亡了又复活
    this.alive[i] = false
    this.x[i] = 0
    this.y[i] = 0
  }

  fruitMonitor () {
    var num = 0
    for (var i = 0; i < this.num; i++) {
      if (this.alive[i]) num++;

    }
    if (num < 15) {
      this.sendFruit()
    }
  }

  sendFruit () {
    for (var i = 0; i < this.num; i++) {
      if (!this.alive[i]){
        this.born(i)
        break;
      }
    }
  }
}
module.exports = fruitObj
