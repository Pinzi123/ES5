require('../css/tetris.css')
require('../js/tetris/comFun.js')

// 加载虚拟键盘
var gamepadObj = require('../js/tetris/gamepad.js')
let gamepad = new gamepadObj()
if(screen.width < 481 || window.screen.width < 481) {
  gamepad.draw()
}


// 开始游戏界面
function _init() {
  $('#btn-start').on('click', function (e) {
    $('.start-container').css('display','none')
    $('.game-container').css('display','block')
    $('#gamepad').css('display','block')
  })

  $('#btn-setting').on('click', function (e) {
    alert('Setting')
  })
}
document.addEventListener('DOMContentLoaded', function(ev){
  _init()
})
