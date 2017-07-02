require('../css/tinyHeart.css')
import aneObj from './tinyHeart/ane.js'
import fruitObj from './tinyHeart/fruit.js'

class tinyHeart{
  constructor() {

    this.can1 = document.getElementById('canvas1')
    this.ctx1 = this.can1.getContext('2d')
    this.can2 = document.getElementById('canvas2')
    this.ctx2 = this.can2.getContext('2d')
    this.bgPic = new Image()
    this.bgPic.src = './img/tinyHeart/background.jpg'
    this.canWidth = this.can1.width
    this.canHeight = this.can1.height
    this.lastTime = Date.now()
    this.deltaTime = 0
    this.fruit= new fruitObj(this)
    this.ane = new aneObj(this)

  }

   game() {
    var _this = this
    this.ane.init()
    this.fruit.init()
    gameloop()

    function gameloop() {
     window.requestAnimFrame(gameloop)
     var now = Date.now()
     _this.deltaTime = now - _this.lastTime
     _this.lastTime = now

     _this.drawBackground()
     _this.ane.draw()
     _this.fruit.draw()
     _this.fruit.fruitMonitor()
     // console.log(deltaTime)
   }
  }

   drawBackground() {
    this.ctx2.drawImage(this.bgPic, 0, 0, this.canWidth, this.canHeight)
  }


}

var tiny = new tinyHeart()
document.body.onload = tiny.game()
