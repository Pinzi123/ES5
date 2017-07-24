class GamePad {
  constructor() {
    this.can=document.getElementById("gamepad")
    this.ctx=this.can.getContext("2d")
    this.can.width = screen.width
    this.w = this.can.width
    this.set = 'Pause'
    this.key = null
  }

  draw() {

    this.ctx.save()
    this.ctx.strokeStyle="#0000ff"
    this.ctx.sector(75,75,50,1.775*Math.PI,0.225*Math.PI)
    this.ctx.stroke()
    this.ctx.sector(75,75,50,0.275*Math.PI,0.725*Math.PI)
    this.ctx.stroke()
    this.ctx.sector(75,75,50,0.775*Math.PI,1.225*Math.PI)
    this.ctx.stroke()
    this.ctx.sector(75,75,50,1.275*Math.PI,1.725*Math.PI)
    this.ctx.stroke()
    this.ctx.restore()

    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.arc(this.w - 120,60,15,0,Math.PI*2,true)
    this.ctx.closePath()
    this.drawText('Pause','#FF0000',this.w - 100,65)
    this.ctx.restore()

    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.arc(this.w - 80,100,15,0,Math.PI*2,true)
    this.ctx.closePath()
    this.drawText('Setting','#0000ff', this.w - 60, 105)
    this.ctx.restore()

  }

  reDraw(p) {
    this.ctx.clearRect(0,0,this.can.width,this.can.height);
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
      e = 'top'
    }
    this.ctx.stroke()
    this.ctx.restore()

    this.ctx.save()
    this.ctx.strokeStyle="#FF0000"
    this.ctx.lineWidth=0
    this.ctx.beginPath()
    this.ctx.arc(this.w - 120,60,15,0,Math.PI*2,true)
    this.ctx.closePath()
    this.ctx.fillStyle="#0000ff"
    if (this.ctx.isPointInPath(p.x,p.y)) {
      if (this.set === 'Pause') {
        e = 'pause'
        this.set = 'Resume'
      } else {
        e = 'resume'
        this.set = 'Pause'
      }
      console.log(this.set)
    }
    this.drawText(this.set,'#FF0000',this.w - 100,65)
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
    this.drawText('Setting','#0000ff', this.w - 60, 105)
    this.ctx.stroke()
    this.ctx.restore()

    this.key = e
    return e
  }

  drawText(text,color,x,y) {
    this.ctx.fillStyle = color
    this.ctx.fill()
    this.ctx.font="10px Georgia";
    this.ctx.fillText(text,x,y);
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
