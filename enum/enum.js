/**
 * [enumeration 创建一个新的枚举类型]
 * @Author   [wyp]
 * @DateTime 2017-06-18T00:03:28+0800
 * @param    {[JSON]}                 nameToValues [类的每个实例的名字和值]
 * @return   {[type]}                              [构造函数]
 */
function enumeration(nameToValues) {
	var enumeration = function() {
		throw "Can't Instaniate Enumerations"
	}
	var proto = enumeration.prototype = {
		constructor:enumeration, // 标志类型
		toString:function(){return this.name}, // 返回名字
		valueOf:function(){return this.value}, // 返回值
		toJSON:function(){return this.name}
	}
	enumeration.values = []
	for(name in nameToValues) {
		var e = inherit(proto);// 创建一个代表它的对象
		e.name = name // 给他一个名字
		e.value = nameToValues[name]// 给他一个值
		enumeration[name] = e // 将它设置为构造函数的属性
		enumeration.values.push(e) // 将它储存到值数组中
	}
	//一个类方法，用来对类的实例进行迭代
	enumeration.foreach = function(f, c){
		for (var i = 0; i < this.values.length; i++) {
			f.call(c, this.values[i])
		} // 返回这个新类型的构造函数
	}
	return enumeration
}

// 返回一个继承自原型对象proto的属性的新对象
// 这里可以用到ES5的Object.create()函数
function inherit(proto) {
//proto是一个对象，但不能是null
if(proto == null) throw TypeError();
if(Object.create) return Object.create(proto); //如果Object.create()存在,使用它
var t = typeof proto; //否则进一步检查
if(t!=='object' && t!=='function') throw TypeError();
var F = function() {}; // 定义一个空构造函数
F.prototype = proto; // 将其原型属性设置为proto
return new F(); // 使用F()创建proto的继承对象
}