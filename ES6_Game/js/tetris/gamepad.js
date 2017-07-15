function draw() {
  console.log('sds')
  var c=document.getElementById("gamepad")
  var ctx=c.getContext("2d")
  ctx.save()
  ctx.strokeStyle="#0000ff"
  ctx.sector(75,75,50,1.775*Math.PI,0.225*Math.PI)
  ctx.sector(75,75,50,0.275*Math.PI,0.725*Math.PI)
  ctx.sector(75,75,50,0.775*Math.PI,1.225*Math.PI)
  ctx.sector(75,75,50,1.275*Math.PI,1.725*Math.PI)
  ctx.restore()

  ctx.save()
  ctx.fillStyle="#FF0000"
  ctx.beginPath()
  ctx.arc(210,60,15,0,Math.PI*2,true)
  ctx.closePath()
  ctx.fill()
  ctx.font="10px Georgia";
  ctx.fillText("Pause",230,65);
  ctx.restore()

  ctx.save()
  ctx.fillStyle="#0000ff"
  ctx.beginPath()
  ctx.arc(250,100,15,0,Math.PI*2,true)
  ctx.closePath()
  ctx.fill()
  ctx.font="10px Georgia";
  ctx.fillText("Setting",190,105);
  ctx.restore()
}

//扇形
CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg) {
  this.beginPath()
  this.moveTo(x,y);
  this.arc(x, y, radius, sDeg, eDeg)
  // 闭合路径
  this.closePath();
  this.stroke();
  return this;
}

module.exports = draw
