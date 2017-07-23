import Board from './Board.js'
import KeyControl from './keyControl.js'
import Score from './Score.js'
import Timer from './Timer.js'
import Level from './Level.js'
import NextShape from './NextShape.js'
import HighScore from './HighScore.js'

require ('./howler.min.js')
class Tetris {
  constructor() {
    this.scroe = new Score()
    this.timer = new Timer()
    this.level = new Level()
    this.nextshape = new NextShape()
    this.highscore = new HighScore()

    this.sound = new Howl({
      src: ['audio/bg.wav'],
      loop: true,
      volume: 0.3
    })
    this._state = 'playing'
    this.board = new Board(this)
    this.keyControl = new KeyControl(this.board)
  }

  startGame () {
    this.keyControl.init()
    if (window.TetrisConfig.config.enableSound) {
     this.sound.play()
    }
    this._startTick()
  }

  _startTick () {
    let _this = this
    window.TetrisConfig.intervalId = window.setInterval(function () {
      _this.board.tick()
    }, window.TetrisConfig.speed)
  }

  _stopTick () {
    window.clearInterval(window.TetrisConfig.intervalId)
  }

  resume () {
    if (window.TetrisConfig.config.enableSound) {
     this.sound.play()
    }

    this._state = 'playing'

    this._startTick()
    this.timer.resume()
  }

  pause () {
    this.sound.pause()

    this._state = 'pause'

    this._stopTick()
    this.timer.pause()
  }

  endGame(){

    console.log('结束');
    this.sound.pause()

    this._stopTick()
    this.timer.stop()
  }
}
module.exports = Tetris
