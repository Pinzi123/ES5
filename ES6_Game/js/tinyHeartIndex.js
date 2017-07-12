require('../css/tinyHeart.css')
import PreLoad from './tinyHeart/preload.js'
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
let imgs = ["baby.png","babyEye0.png","babyEye1.png","babyFade0.png","babyFade1.png","babyFade10.png","babyFade11.png","babyFade12.png","babyFade13.png","babyFade14.png","babyFade15.png","babyFade16.png","babyFade17.png","babyFade18.png","babyFade19.png","babyFade2.png","babyFade3.png","babyFade4.png","babyFade5.png","babyFade6.png","babyFade7.png","babyFade8.png","babyFade9.png","babyTail0.png","babyTail1.png","babyTail2.png","babyTail3.png","babyTail4.png","babyTail5.png","babyTail6.png","babyTail7.png","background.jpg","big.png","bigEat0.png","bigEat1.png","bigEat2.png","bigEat3.png","bigEat4.png","bigEat5.png","bigEat6.png","bigEat7.png","bigEatBlue0.png","bigEatBlue1.png","bigEatBlue2.png","bigEatBlue3.png","bigEatBlue4.png","bigEatBlue5.png","bigEatBlue6.png","bigEatBlue7.png","bigEye0.png","bigEye1.png","bigSwim0.png","bigSwim1.png","bigSwim2.png","bigSwim3.png","bigSwim4.png","bigSwim5.png","bigSwim6.png","bigSwim7.png","bigSwimBlue0.png","bigSwimBlue1.png","bigSwimBlue2.png","bigSwimBlue3.png","bigSwimBlue4.png","bigSwimBlue5.png","bigSwimBlue6.png","bigSwimBlue7.png","bigTail0.png","bigTail1.png","bigTail2.png","bigTail3.png","bigTail4.png","bigTail5.png","bigTail6.png","bigTail7.png","blue.png","cover.png","dust0.png","dust1.png","dust2.png","dust3.png","dust4.png","dust5.png","dust6.png","fruit.png","play.png"]
console.log(imgs.length);
let pro = document.getElementById("progress")
let length = imgs.length
let preLoad = new PreLoad(imgs, function(count){
                                  pro.innerHTML = Math.round((count+1)/length * 100) + '%'
                                },
                                function(){
                                  console.log('over');
                                  pro.style.display = "none"
                                  document.getElementById('allcanvas').style.display = "block"
                                  tiny.game()
                                })
preLoad._unorderes()
