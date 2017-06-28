require('./css/chess.css')
import Chess from './js/chess/chess.js'
import ChessBoard from './js/chess/chessBoard.js'

// 实现多重继承
const copyProperties=function(target,source){
  for(let key of Reflect.ownKeys(source)){
    if(key!=='constructor'&&key!=='prototype'&&key!=='name'){
      let desc=Object.getOwnPropertyDescriptor(source,key);
      Object.defineProperty(target,key,desc);
    }
  }
}

const mix=function(...mixins){
  class Mix{}
  for(let mixin of mixins){
    copyProperties(Mix,mixin);
    copyProperties(Mix.prototype,mixin.prototype);
  }
  return Mix
}

class Lottery extends mix(Chess,ChessBoard){
  constructor() {
    super()
    this.chess = document.getElementById('chess')
    this.context = this.chess.getContext('2d')
    this.over = false
    //赢法数组
    this.wins = []
    //赢法的统计数组
    this.myWin = []
    this.computerWin = []
    //棋盘
    this.chessBoard=[];
    this.me = true
    //有多少种赢法
    this.count = 0
  }

  /**
   * [init description]
   * @return {[type]} [description]
   */
  init() {
    this.chessBoardInit()
    this.chessInit()
    let _this = this
    this.chess.onclick = function(event){_this.clickChess(event)}
  }
}

var lottery = new Lottery()
lottery.init()
