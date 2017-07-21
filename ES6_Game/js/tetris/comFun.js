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
    console.log('selector', selector);
    return new DomObject((context || document).querySelector(selector))
  }

  console.log('ok')

  // 实现多重继承
  const copyProperties = function(target,source){
    for(let key of Reflect.ownKeys(source)){
      if(key!=='constructor'&&key!=='prototype'&&key!=='name'){
        let desc=Object.getOwnPropertyDescriptor(source,key);
        Object.defineProperty(target,key,desc);
      }
    }
  }

  window.mix = function(...mixins){
    class Mix{}
    for(let mixin of mixins){
      copyProperties(Mix,mixin);
      copyProperties(Mix.prototype,mixin.prototype);
    }
    return Mix
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
