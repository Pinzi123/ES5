class GamePad {
  constructor() {
    this.can=document.getElementById("gamepad")
    this.ctx=this.can.getContext("2d")
    this.can.width = screen.width
    this.w = this.can.width
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
    this.ctx.arc(this.w - 120,60,15,0,Math.PI*2,true)
    this.ctx.closePath()
    this.ctx.fill()
    this.ctx.font="10px Georgia";
    this.ctx.fillText("Pause",this.w - 100,65);
    this.ctx.restore()

    this.ctx.save()
    this.ctx.fillStyle="#0000ff"
    this.ctx.beginPath()
    this.ctx.arc(this.w - 80,100,15,0,Math.PI*2,true)
    this.ctx.closePath()
    this.ctx.fill()
    this.ctx.font="10px Georgia";
    this.ctx.fillText("Setting",this.w - 60,105);
    this.ctx.restore()

    let _this = this
    this.can.addEventListener('click', function(e){
      _this.reDraw(_this.getPosition(e));
    }, false)
  }

  reDraw(p) {
    let e = null
    this.ctx.save()
    this.ctx.strokeStyle="#0000ff"
    this.ctx.sector(75,75,50,1.775*Math.PI,0.225*Math.PI)
    if (this.ctx.isPointInPath(p.x,p.y)) {
      e = 'right'
    }
    this.ctx.stroke()
    this.ctx.sector(75,75,50,0.275*Math.PI,0.725*Math.PI)
    if (this.ctx.isPointInPath(p.x,p.y)) {
      e = 'down'
    }
    this.ctx.stroke()
    this.ctx.sector(75,75,50,0.775*Math.PI,1.225*Math.PI)
    if (this.ctx.isPointInPath(p.x,p.y)) {
      e = 'left'
    }
    this.ctx.stroke()
    this.ctx.sector(75,75,50,1.275*Math.PI,1.725*Math.PI)
    if (this.ctx.isPointInPath(p.x,p.y)) {
      e = 'up'
    }
    this.ctx.stroke()
    this.ctx.restore()

    this.ctx.save()
    this.ctx.strokeStyle="#FF0000"
    this.ctx.lineWidth=0
    this.ctx.beginPath()
    this.ctx.arc(this.w - 120,60,15,0,Math.PI*2,true)
    this.ctx.closePath()
    if (this.ctx.isPointInPath(p.x,p.y)) {
      e = 'pause'
    }
    this.ctx.stroke()
    this.ctx.restore()

    this.ctx.save()
    this.ctx.strokeStyle="#0000ff"
    this.ctx.lineWidth=0
    this.ctx.beginPath()
    this.ctx.arc(this.w - 80,100,15,0,Math.PI*2,true)
    this.ctx.closePath()
    if (this.ctx.isPointInPath(p.x,p.y)) {
      e = 'setting'
    }
    this.ctx.stroke()
    this.ctx.restore()

    console.log(e);
    return e
  }

  getPosition(e){
    let clientX = e.clientX - this.can.offsetLeft;
    let clientY = e.clientY - this.can.offsetTop;
    let p = {
      x: clientX,
      y: clientY
    }
    return p
  }
}

module.exports = GamePad
