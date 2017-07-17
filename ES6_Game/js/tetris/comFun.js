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
})(document)
