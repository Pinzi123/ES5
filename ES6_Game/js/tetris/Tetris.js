import Board from './Board.js'
import KeyControl from './keyControl.js'
class Tetris {
  constructor() {
    this.board = new Board()
    var keyControl = new KeyControl(this.board)
    keyControl.init()
  }

  startGame() {
    let _this = this
    window.TetrisConfig.intervalId = window.setInterval(function () {
      _this.board.tick()
    }, window.TetrisConfig.speed)
  }

  endGame(){

  }
}
module.exports = Tetris
