import Canvas from './Canvas.js';

let levelArr = (function(){
  var arr = new Array()
  for (var i = 0; i < 10; i++) {
    arr.push(Math.pow(2,i)*1000)
  }
  return arr
})()
class Level {
  constructor() {
    this.canvas = new Canvas('level', 100, 70)
    this.level = 1

    this._init()
    console.log(levelArr)
  }

  _init() {
    this._render()
  }

  _render() {
    this.canvas.drawText('Level' + this.level)
  }

  checkLevel (score) {
    if (score >= levelArr[this.level - 1]) {
      this.level++
      this._render()
      return this.level
    }
    return 0
  }
}
module.exports = Level
