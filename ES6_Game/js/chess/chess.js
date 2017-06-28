//AI篇：下棋逻辑实现部分
 class Chess {
   chessInit () {
     for (var i = 0; i < 15; i++) {
       this.wins[i] = []
       for (var j = 0; j < 15; j++) {
         this.wins[i][j] = []
       }
     }

     for(var x=0;x<15;x++){
         this.chessBoard[x]=new Array();        //声明二维数组
         for(var y=0;y<15;y++){
            this.chessBoard[x][y]=0;          //数组初始化为0
         }
     }

     //横线
     for (var i = 0; i < 15; i++) {
       for (var j = 0; j < 11; j++) {
         for (var k = 0; k < 5; k++) {
           this.wins[i][j+k][this.count] = true
         }
         this.count++
       }
     }
     //竖线
     for (var i = 0; i < 15; i++) {
       for (var j = 0; j < 11; j++) {
         for (var k = 0; k < 5; k++) {
           this.wins[j+k][i][this.count] = true
         }
         this.count++
       }
     }
     //斜线
     for (var i = 0; i < 11; i++) {
       for (var j = 0; j < 11; j++) {
         for (var k = 0; k < 5; k++) {
           this.wins[i+k][j+k][this.count] = true
         }
         this.count++
       }
     }
     //反斜线
     for (var i = 0; i < 11; i++) {
       for (var j = 14; j > 3; j--) {
         for (var k = 0; k < 5; k++) {
           this.wins[i+k][j-k][this.count] = true
         }
         this.count++
       }
     }
     for (var i = 0; i < this.count; i++) {
        this.myWin[i] = 0
        this.computerWin[i] = 0
     }
   }
   clickChess (e) {
     if (this.over || !this.me) {
       return;
     }
     var x = e.offsetX
     var y = e.offsetY
     var i = Math.floor(x / 30)
     var j = Math.floor(y / 30)
     if (this.chessBoard[i][j] === 0) {
       this.oneStep(i, j, this.me).then( () => {
         this.chessBoard[i][j] = 1
         this.me = !this.me
         for (var k = 0; k < this.count; k++) {
           if (this.wins[i][j][k]) {
             this.myWin[k] ++
             this.computerWin[k] = 6
             if(this.myWin[k] === 5){
               window.alert("你赢了")
               this.over = true
             }
           }
         }
         if (!this.over) {
           this.computerAI()
         }
       })
     }
   }
   computerAI () {
     let myScore = []
     let computerScore = []
     let max = 0, u = 0, v = 0
     for (let i = 0; i < 15; i++) {
       myScore[i] = []
       computerScore[i] = []
       for (var j = 0; j < 15; j++) {
         myScore[i][j] = 0
         computerScore[i][j] = 0
       }
     }
     for (var i = 0; i < 15; i++) {
       for (var j = 0; j < 15; j++) {
         if (this.chessBoard[i][j] === 0) {
         for (var k = 0; k < this.count; k++) {
           if (this.wins[i][j][k]) {
             if (this.myWin[k] === 1) {
               myScore[i][j] += 200
             } else if (this.myWin[k] === 2) {
               myScore[i][j] += 400
             } else if (this.myWin[k] === 3) {
               myScore[i][j] += 2000
             } else if (this.myWin[k] === 4) {
               myScore[i][j] += 10000
             }
             if (this.computerWin[k] === 1) {
               computerScore[i][j] += 220
             } else if (this.computerWin[k] === 2) {
               computerScore[i][j] += 420
             } else if (this.computerWin[k] === 3) {
               computerScore[i][j] += 2100
             } else if (this.computerWin[k] === 4) {
               computerScore[i][j] += 20000
             }
           }
         }

         if (myScore[i][j] > max) {
           max = myScore[i][j]
           u = i
           v = j
         } else if (myScore[i][j] === max) {
           if (computerScore[i][j] > computerScore[i][j]){
             u = i
             v = j
           }
         }

         if (computerScore[i][j] > max) {
           max = computerScore[i][j]
           u = i
           v = j
         } else if (computerScore[i][j] === max) {
           if (myScore[i][j] > myScore[i][j]){
             u = i
             v = j
           }
         }
       }
     }
   }

     this.oneStep(u, v, false).then( () => {
       this.chessBoard[u][v] = 2
       for (var k = 0; k < this.count; k++) {
         if (this.wins[u][v][k]) {
           this.computerWin[k] ++
           this.myWin[k] = 6
           if(this.computerWin[k] === 5){
             window.alert("你输了")
             this.over = true
           }
         }
       }
       if(!this.over){
         this.me = !this.me
       }
     })
   }
 }
 export default Chess;
