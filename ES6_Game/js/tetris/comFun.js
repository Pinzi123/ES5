//简单的dom操作
(function(document){
  function DomObject(dom) {
  this.dom = dom
  }
  DomObject.prototype.get = function (){
    return this.dom
  }

  DomObject.prototype.on = function(eventName, eventHandler){
    this.get().addEventListener(eventName, eventHandler)
  }
  DomObject.prototype.css = function (styleKey, styleValue){
    this.get().style[styleKey] = styleValue
  }

  window.$ = function(selector, context){
    return new DomObject((context || document).querySelector(selector))
  }

})(document)

//canvas
//扇形
CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg) {
  this.beginPath()
  this.moveTo(x,y);
  this.arc(x, y, radius, sDeg, eDeg)
  // 闭合路径
  this.closePath();
  return this;
}
