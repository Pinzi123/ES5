require('../css/tinyHeart.css')
import aneObj from './tinyHeart/ane.js'
import fruitObj from './tinyHeart/fruit.js'
import momObj from './tinyHeart/mom.js'
import babyObj from './tinyHeart/baby.js'
import collision from './tinyHeart/collision.js'
import dataObj from './tinyHeart/data.js'
import waveObj from './tinyHeart/wave.js'
import haloObj from './tinyHeart/halo.js'
import dustObj from './tinyHeart/dust.js'

class tinyHeart{
  constructor() {

    this.can1 = document.getElementById('canvas1')
    this.ctx1 = this.can1.getContext('2d')
    this.can2 = document.getElementById('canvas2')
    this.ctx2 = this.can2.getContext('2d')
    this.mx = 0 //鼠标
    this.my = 0
    this.bgPic = new Image()
    this.bgPic.src = './img/tinyHeart/background.jpg'
    this.canWidth = this.can1.width
    this.canHeight = this.can1.height
    this.lastTime = Date.now()
    this.deltaTime = 0
    this.fruit= new fruitObj(this)
    this.ane = new aneObj(this)
    this.mom = new momObj(this)
    this.baby = new babyObj(this)
    this.data = new dataObj(this)
    this.wave = new waveObj(this)
    this.halo = new haloObj(this)
    this.dust = new dustObj(this)

    let _this = this

    this.can1.addEventListener('mousemove', function mousemove(e){
      if (_this.data.gameOver) {
        _this.can1.removeEventListener('mousemove', mousemove)
        return
      }
      if(e.offSetX || e.layerX){
        _this.mx = (e.offSetX === undefined) ? e.layerX : e.offSetX
        _this.my = (e.offSetY === undefined) ? e.layerY : e.offSetY
      }
    }, false)
  }


   game() {
    var _this = this
    this.ane.init()
    this.fruit.init()
    this.mom.init()
    this.baby.init()
    this.dust.init()

    this.ctx1.font = "30px Verdana"
    this.ctx1.textAlign = "center"

    gameloop()

    function gameloop() {
     window.requestAnimFrame(gameloop)
     var now = Date.now()
     _this.deltaTime = now - _this.lastTime
     _this.lastTime = now

     if(_this.deltaTime > 50) _this.deltaTime = 50 //浏览器搁置时间太长产生的bug

     _this.drawBackground()
     _this.ane.draw()
     _this.fruit.draw()
     _this.fruit.fruitMonitor()

     _this.ctx1.clearRect(0, 0, _this.canWidth, _this.canWidth)
     _this.mom.draw()
     _this.baby.draw()
     _this.data.draw()

     // 大鱼吃果实和大鱼喂小鱼的特效
     _this.wave.draw()
     _this.halo.draw()
     _this.dust.draw()

     //console.log(_this.fruit.alive);

     collision.momFruitsCollision(_this.fruit, _this.mom, _this.data, _this.wave)
     collision.momBabyColllision(_this.mom, _this.baby, _this.data, _this.halo)
     // console.log(deltaTime)
   }
  }

   drawBackground() {
    this.ctx2.drawImage(this.bgPic, 0, 0, this.canWidth, this.canHeight)
  }


}

var tiny = new tinyHeart()
document.body.onload = tiny.game()
