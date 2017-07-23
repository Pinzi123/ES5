import Canvas from './Canvas.js';
import Shape from './Shape.js'
class Board {
  constructor (that) {
    this.blockSize = 30
    this.rows = 20
    this.cols = 13
    if(screen.width < 481) this.blockSize = (screen.width * 0.98 - 80) / this.cols
    this.canvas = new Canvas('c_game_main', this.cols * this.blockSize, this.rows * this.blockSize)
    this.context = this.canvas.context
    this.boardList = []
    this.shape = new Shape()
    this.gameInst = that

    this._init()
  }

  _init () {
    this._buildGridData()
    this._initGrid()

    this.shape.draw(this.context, this.blockSize)

    var self = this;
    setTimeout(function () {
      self._bulidNextShape()
    })
  }

  _bulidNextShape () {
    this.nextShape = new Shape()
    this.nextShape.setPosition(this.gameInst.nextshape.cols, this.gameInst.nextshape.rows)
    this.gameInst.nextshape.render(this.nextShape)
  }

  _buildGridData () {
    for (var i = 0; i < this.rows; i++) {
      this.boardList[i] = []
      for (var j = 0; j < this.cols; j++) {
        this.boardList[i][j] = 0
      }
    }
  }

  _initGrid () {
    let i;
    this.context.strokeStyle = 'green'
    this.context.lineWidth = 0.5
    //绘制线条的笔迹
    for (i = 0; i < this.rows; i++) {
      this.context.moveTo(0, i*this.blockSize)
      this.context.lineTo(this.canvas.width, i*this.blockSize)
    }
    for (i = 0; i < this.rows; i++) {
      this.context.moveTo(i*this.blockSize, 0)
      this.context.lineTo(i*this.blockSize, this.canvas.height )
    }

    this.context.stroke()

    //缓存数据
    this.gridImageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
  }

  tick () {
    if (this.validMove(0, 1)) {
      this.shape.y += 1;
    } else {
      this.addShapeToBoardList()
      if (this.gameInst._state === 'over') {
        this.gameInst.endGame()
        return
      }
      this.clearFullRows()
      this.shape = this.nextShape
      this._bulidNextShape()
    }
    this.refresh()
    this.shape.draw(this.context, this.blockSize)
  }

  refresh () {
    this.canvas.clear()
    this.context.putImageData(this.gridImageData, 0, 0)
    this.drawBlock()
  }

  //边界检查
  validMove (moveX, moveY) {
    //下一步位置
    var nextX = this.shape.x + moveX
    var nextY = this.shape.y + moveY
    for (var y = 0; y < this.shape.layout.length; y++) {
      for (var x = 0; x < this.shape.layout[y].length; x++) {
        if (this.shape.layout[y][x]) {
          if (typeof this.boardList[nextY + y] === 'undefined' //找不到行
            || typeof this.boardList[nextY + y][nextX + x] === 'undefined' //找不到列
            || this.boardList[nextY + y][nextX + x] //当前位置已有方块
            || nextX + x < 0 //超出左边界
            || nextX + x >= this.cols // 超出右边界
            || nextY + y >= this.rows // 超出下边界
          ) {
            return false
          }
        }
      }
    }
    return true
  }


  addShapeToBoardList () {
    for (var y = 0; y < this.shape.layout.length; y++) {
      for (var x = 0; x < this.shape.layout[y].length; x++) {
        if (this.shape.layout[y][x]) {
          var boardX = this.shape.x + x
          var boardY = this.shape.y + y
          if (this.boardList[boardY][boardX]) {
            // todo Game over
            this.gameInst._state = 'over'
            return;
          }
          else {
            this.boardList[boardY][boardX] = this.shape.blockType
          }
        }
      }
    }
  }

  // 绘制底部方块
  drawBlock () {
    for(var y = 0; y < this.rows; y++){
      for (var x = 0; x < this.cols; x++) {
        if(this.boardList[y][x]) {
          this.shape.block.draw(this.context, x, y, this.boardList[y][x])
        }
      }
    }
  }

  //方块消除
  clearFullRows () {
    let lines = 0
    let _this = this
    let emptyArr = new Array(this.cols).fill(0)
    for(var y = this.rows -1 ; y >= 0; y--){
        let filled = this.boardList[y].filter((item) => {return item > 0}).length === this.cols
        if (filled && y) {
          this.boardList.splice(y, 1)
          this.boardList.unshift(emptyArr)
          lines++
          y++
        }
    }
    let score = lines * 100
    let totalScore = this.gameInst.scroe.addScore(score)
    let currentLevel = this.gameInst.level.checkLevel(totalScore)
    this.gameInst.highscore.checkScore(totalScore)
    if (currentLevel) {
      window.TetrisConfig.speed = Math.floor(window.TetrisConfig.constSpeed * (1 - (currentLevel - 1)/10))
      this.gameInst.pause()
      setTimeout(function(){
        window.alert("恭喜你，升级了！")
        _this.gameInst.resume()
      })
    }
  }

}
module.exports = Board
