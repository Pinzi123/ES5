require('../css/tetris.css')
var gamepadObj = require('../js/tetris/gamepad.js')
let gamepad = new gamepadObj()
if(screen.width < 481 || window.screen.width < 481) {
  gamepad.draw()
}
