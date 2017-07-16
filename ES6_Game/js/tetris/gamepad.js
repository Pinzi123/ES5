class GamePad {
  constructor() {
    this.can=document.getElementById("gamepad")
    this.ctx=this.can.getContext("2d")
  }

  draw() {
    this.ctx.save()
    this.ctx.strokeStyle="#0000ff"
    this.ctx.sector(75,75,50,1.775*Math.PI,0.225*Math.PI)
    this.ctx.stroke();
    this.ctx.sector(75,75,50,0.275*Math.PI,0.725*Math.PI)
    this.ctx.stroke();
    this.ctx.sector(75,75,50,0.775*Math.PI,1.225*Math.PI)
    this.ctx.stroke();
    this.ctx.sector(75,75,50,1.275*Math.PI,1.725*Math.PI)
    this.ctx.stroke();
    this.ctx.restore()

    this.ctx.save()
    this.ctx.fillStyle="#FF0000"
    this.ctx.beginPath()
    this.ctx.arc(210,60,15,0,Math.PI*2,true)
    this.ctx.closePath()
    this.ctx.fill()
    this.ctx.font="10px Georgia";
    this.ctx.fillText("Pause",230,65);
    this.ctx.restore()

    this.ctx.save()
    this.ctx.fillStyle="#0000ff"
    this.ctx.beginPath()
    this.ctx.arc(250,100,15,0,Math.PI*2,true)
    this.ctx.closePath()
    this.ctx.fill()
    this.ctx.font="10px Georgia";
    this.ctx.fillText("Setting",190,105);
    this.ctx.restore()

    let _this = this
    this.can.addEventListener('click', function(e){
      _this.reDraw(_this.getPosition(e));
    }, false)
  }

  reDraw(p) {
    this.ctx.save()
    this.ctx.strokeStyle="#0000ff"
    this.ctx.sector(75,75,50,1.775*Math.PI,0.225*Math.PI)
    if (this.ctx.isPointInPath(p.x,p.y)) {
      console.log('right')
    }
    this.ctx.stroke()
    this.ctx.sector(75,75,50,0.275*Math.PI,0.725*Math.PI)
    if (this.ctx.isPointInPath(p.x,p.y)) {
      console.log('down')
    }
    this.ctx.stroke()
    this.ctx.sector(75,75,50,0.775*Math.PI,1.225*Math.PI)
    if (this.ctx.isPointInPath(p.x,p.y)) {
      console.log('left')
    }
    this.ctx.stroke()
    this.ctx.sector(75,75,50,1.275*Math.PI,1.725*Math.PI)
    if (this.ctx.isPointInPath(p.x,p.y)) {
      console.log('up')
    }
    this.ctx.stroke()
    this.ctx.restore()

    this.ctx.save()
    this.ctx.strokeStyle="#FF0000"
    this.ctx.beginPath()
    this.ctx.arc(210,60,15,0,Math.PI*2,true)
    this.ctx.closePath()
    if (this.ctx.isPointInPath(p.x - 50,p.y)) {
      console.log('Pause')
    }
    this.ctx.stroke()
    this.ctx.restore()

    this.ctx.save()
    this.ctx.strokeStyle="#0000ff"
    this.ctx.beginPath()
    this.ctx.arc(250,100,15,0,Math.PI*2,true)
    this.ctx.closePath()
    if (this.ctx.isPointInPath(p.x - 50,p.y)) {
      console.log('Setting')
    }
    this.ctx.stroke()
    this.ctx.restore()
  }

  getPosition(e){
    let clientX = e.clientX - this.can.offsetLeft;
    let clientY = e.clientY - this.can.offsetTop;
    let p = {
      x: clientX,
      y: clientY
    }
    console.log(e.clientX);
    return p
  }
}

//扇形
CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg) {
  this.beginPath()
  this.moveTo(x,y);
  this.arc(x, y, radius, sDeg, eDeg)
  // 闭合路径
  this.closePath();
  return this;
}

module.exports = GamePad
