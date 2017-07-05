class waveObj {
  constructor(that) {
    this.x = []
    this.y = []
    this.num = 10
    this.alive = new Array(this.num).fill(false) //为了防止吃到几个果实不能正常显示几个圈圈的
    this.r = []

    this.that = that
   }

   draw () {
     let that = this.that

     that.ctx1.save()
     that.ctx1.lineWidth  = 2
     that.ctx1.shadowBlur = 10
     that.ctx1.shadowColor = "white"

     for (var i = 0; i < this.num; i++) {
       if (this.alive[i]) {
         this.r[i] += that.deltaTime * 0.04
         if (this.r[i] > 50) {
           this.alive[i] = false
           break;
         }
         var alpha = 1 - this.r[i] / 50

         //api
         that.ctx1.beginPath()
         that.ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2)
         that.ctx1.closePath()
         that.ctx1.strokeStyle = "rgba(255, 255, 255," + alpha + ")"
         that.ctx1.stroke()
       }
     }
     that.ctx1.restore()
   }

   born (x, y) {
     for (let i = 0; i < this.num; i++) {
       if (!this.alive[i]) {
         this.alive[i] = true
         this.r[i] = 20
         this.x[i] = x
         this.y[i] = y

         return;
       }
     }
   }
}
module.exports = waveObj
