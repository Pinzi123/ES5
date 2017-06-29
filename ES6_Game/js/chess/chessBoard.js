//引用的是同一个对象，赋值会出错
// var chessBoard = new Array(15).fill(new Array(15).fill(0))
class ChessBoard {

  chessBoardInit () {
    var _this = this
    this.context.strokeStyle = "#BFBFBF"
    var logo = new Image()
    logo.src = './img/logo.png'
    logo.onload = function() {
      _this.context.drawImage(logo, 50, 50, 350, 350)
      _this.drawChessBoard()
    }
  }

  /**
   * 绘制棋盘
   */
  drawChessBoard () {
    for (var i = 0; i < 15; i++) {
      this.context.moveTo(15 + i*30, 15)
      this.context.lineTo(15 + i*30, 435)
      this.context.stroke()
      this.context.moveTo(15, 15 + i*30)
      this.context.lineTo(435, 15 + i*30)
      this.context.stroke()
    }
  }

  /**
   * 绘制棋子
   */
  oneStep (i, j, me) {
    let _this = this
    return new Promise(function(resolve, reject) {
      _this.context.beginPath()
      _this.context.arc(15 + i*30, 15 + j*30, 13, 0, 2 * Math.PI)
      _this.context.closePath()
      var gradient = _this.context.createRadialGradient(15 + i*30 + 2, 15 + j*30 - 2, 13, 15 + i*30 + 2, 15 + j*30 - 2, 0)
      if(me){
        gradient.addColorStop(0, '#0A0A0A')
        gradient.addColorStop(1, '#636766')
      }else{
        gradient.addColorStop(0, '#D1D1D1')
        gradient.addColorStop(1, '#F9F9F9')
      }
      _this.context.fillStyle = gradient
      _this.context.fill()
      setTimeout(resolve, 100, 'done');
    })
  }
}

export default ChessBoard;
