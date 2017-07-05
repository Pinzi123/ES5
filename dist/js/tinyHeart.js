/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ane = __webpack_require__(5);

var _ane2 = _interopRequireDefault(_ane);

var _fruit = __webpack_require__(6);

var _fruit2 = _interopRequireDefault(_fruit);

var _mom = __webpack_require__(7);

var _mom2 = _interopRequireDefault(_mom);

var _baby = __webpack_require__(8);

var _baby2 = _interopRequireDefault(_baby);

var _collision = __webpack_require__(9);

var _collision2 = _interopRequireDefault(_collision);

var _data = __webpack_require__(10);

var _data2 = _interopRequireDefault(_data);

var _wave = __webpack_require__(11);

var _wave2 = _interopRequireDefault(_wave);

var _halo = __webpack_require__(12);

var _halo2 = _interopRequireDefault(_halo);

var _dust = __webpack_require__(13);

var _dust2 = _interopRequireDefault(_dust);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(14);

var tinyHeart = function () {
  function tinyHeart() {
    _classCallCheck(this, tinyHeart);

    this.can1 = document.getElementById('canvas1');
    this.ctx1 = this.can1.getContext('2d');
    this.can2 = document.getElementById('canvas2');
    this.ctx2 = this.can2.getContext('2d');
    this.mx = 0; //鼠标
    this.my = 0;
    this.bgPic = new Image();
    this.bgPic.src = './img/tinyHeart/background.jpg';
    this.canWidth = this.can1.width;
    this.canHeight = this.can1.height;
    this.lastTime = Date.now();
    this.deltaTime = 0;
    this.fruit = new _fruit2.default(this);
    this.ane = new _ane2.default(this);
    this.mom = new _mom2.default(this);
    this.baby = new _baby2.default(this);
    this.data = new _data2.default(this);
    this.wave = new _wave2.default(this);
    this.halo = new _halo2.default(this);
    this.dust = new _dust2.default(this);

    var _this = this;

    this.can1.addEventListener('mousemove', function mousemove(e) {
      if (_this.data.gameOver) {
        _this.can1.removeEventListener('mousemove', mousemove);
        return;
      }
      if (e.offSetX || e.layerX) {
        _this.mx = e.offSetX === undefined ? e.layerX : e.offSetX;
        _this.my = e.offSetY === undefined ? e.layerY : e.offSetY;
      }
    }, false);
  }

  _createClass(tinyHeart, [{
    key: 'game',
    value: function game() {
      var _this = this;
      this.ane.init();
      this.fruit.init();
      this.mom.init();
      this.baby.init();
      this.dust.init();

      this.ctx1.font = "30px Verdana";
      this.ctx1.textAlign = "center";

      gameloop();

      function gameloop() {
        window.requestAnimFrame(gameloop);
        var now = Date.now();
        _this.deltaTime = now - _this.lastTime;
        _this.lastTime = now;

        if (_this.deltaTime > 50) _this.deltaTime = 50; //浏览器搁置时间太长产生的bug

        _this.drawBackground();
        _this.ane.draw();
        _this.fruit.draw();
        _this.fruit.fruitMonitor();

        _this.ctx1.clearRect(0, 0, _this.canWidth, _this.canWidth);
        _this.mom.draw();
        _this.baby.draw();
        _this.data.draw();

        // 大鱼吃果实和大鱼喂小鱼的特效
        _this.wave.draw();
        _this.halo.draw();
        _this.dust.draw();

        //console.log(_this.fruit.alive);

        _collision2.default.momFruitsCollision(_this.fruit, _this.mom, _this.data, _this.wave);
        _collision2.default.momBabyColllision(_this.mom, _this.baby, _this.data, _this.halo);
        // console.log(deltaTime)
      }
    }
  }, {
    key: 'drawBackground',
    value: function drawBackground() {
      this.ctx2.drawImage(this.bgPic, 0, 0, this.canWidth, this.canHeight);
    }
  }]);

  return tinyHeart;
}();

var tiny = new tinyHeart();
document.body.onload = tiny.game();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var aneObj = function () {
  function aneObj(that) {
    _classCallCheck(this, aneObj);

    this.num = 50;
    // 二次赛尔曲线
    //  start point, control point, end point(sin)
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    this.amp = [];
    // 正弦函数
    this.alpha = 0;

    this.that = that;
    this.h = that.can1.height;
  }

  _createClass(aneObj, [{
    key: "init",
    value: function init() {

      for (var i = 0; i < this.num; i++) {
        this.rootx[i] = i * 16 + Math.random() * 20;
        this.headx[i] = this.rootx[i];
        this.heady[i] = this.h - 250 + Math.random() * 50;
        this.amp[i] = Math.random() * 50 + 50;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var that = this.that;

      this.alpha += that.deltaTime * 0.001;
      var l = Math.sin(this.alpha);
      that.ctx2.save();
      that.ctx2.globalAlpha = 0.6;
      that.ctx2.lineWidth = 20;
      that.ctx2.lineCap = "round";
      that.ctx2.strokeStyle = "#3b154e";
      for (var i = 0; i < this.num; i++) {
        that.ctx2.beginPath();
        that.ctx2.moveTo(this.rootx[i], this.h);
        this.headx[i] = this.rootx[i] + l * this.amp[i];
        that.ctx2.quadraticCurveTo(this.rootx[i], this.h - 100, this.headx[i], this.heady[i]);
        that.ctx2.stroke();
      }
      that.ctx2.restore();
    }
  }]);

  return aneObj;
}();

module.exports = aneObj;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fruitObj = function () {
  function fruitObj(that) {
    _classCallCheck(this, fruitObj);

    this.num = 30;
    this.alive = [];
    this.that = that;
    this.orange = new Image();
    this.blue = new Image();
    this.x = [];
    this.y = [];
    this.aneNo = [];
    this.l = [];
    this.spd = [];
    this.fruitType = [];
  }

  _createClass(fruitObj, [{
    key: "init",
    value: function init() {
      for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.aneNo[i] = 0;
        this.spd[i] = Math.random() * 0.017 + 0.003;
        this.fruitType[i] = '';
      }
      this.orange.src = "./img/tinyHeart/fruit.png";
      this.blue.src = "./img/tinyHeart/blue.png";
    }
  }, {
    key: "draw",
    value: function draw() {
      var that = this.that;
      for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
          if (this.l[i] <= 14) {
            // grow
            this.x[i] = that.ane.headx[this.aneNo[i]];
            this.y[i] = that.ane.heady[this.aneNo[i]];
            this.l[i] += this.spd[i] * that.deltaTime;
          } else {
            this.y[i] -= this.spd[i] * 7 * that.deltaTime;
          }
          that.ctx2.drawImage(this[this.fruitType[i]], this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
          if (this.y[i] < 10) {
            this.alive[i] = false;
          }
        }
      }
    }
  }, {
    key: "born",
    value: function born(i) {
      var that = this.that;
      this.aneNo[i] = Math.floor(Math.random() * that.ane.num);
      this.l[i] = 0;
      this.alive[i] = true;
      this.fruitType[i] = 'orange';
      if (Math.random() < 0.2) {
        this.fruitType[i] = 'blue';
      }
    }
  }, {
    key: "dead",
    value: function dead(i) {
      // 为什么死亡了又复活
      this.alive[i] = false;
      this.x[i] = 0;
      this.y[i] = 0;
    }
  }, {
    key: "fruitMonitor",
    value: function fruitMonitor() {
      var num = 0;
      for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) num++;
      }
      if (num < 15) {
        this.sendFruit();
      }
    }
  }, {
    key: "sendFruit",
    value: function sendFruit() {
      for (var i = 0; i < this.num; i++) {
        if (!this.alive[i]) {
          this.born(i);
          break;
        }
      }
    }
  }]);

  return fruitObj;
}();

module.exports = fruitObj;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var momObj = function () {
  function momObj(that) {
    _classCallCheck(this, momObj);

    this.angle = 0;
    this.bigEyeImg = new Image();
    this.bigBobyImg = new Image();
    this.bigTailImg = new Image();
    this.bigEye = [];
    this.bigBoby = [];
    this.bigTail = [];

    this.bigTailTimer = 0;
    this.bigTailCount = 0;

    this.bigEyeTimer = 0;
    this.bigEyeCount = 0;
    this.bigEyeInterval = 1000;

    this.bigBodyTimer = 0;
    this.bigBodyCount = 0;

    this.that = that;
  }

  _createClass(momObj, [{
    key: "init",
    value: function init() {
      this.x = this.that.canWidth * 0.5;
      this.y = this.that.canHeight * 0.5;
      for (var i = 0; i < 8; i++) {
        this.bigTail[i] = "./img/tinyHeart/bigTail" + i + ".png";
      }
      for (var _i = 0; _i < 2; _i++) {
        this.bigEye[_i] = "./img/tinyHeart/bigEye" + _i + ".png";
      }
      for (var _i2 = 0; _i2 < 8; _i2++) {
        this.bigBoby[_i2] = "./img/tinyHeart/bigSwim" + _i2 + ".png";
      }
      for (var _i3 = 8; _i3 < 16; _i3++) {
        this.bigBoby[_i3] = "./img/tinyHeart/bigSwimBlue" + (_i3 - 8) + ".png";
      }
    }
  }, {
    key: "draw",
    value: function draw() {

      var that = this.that;

      this.x = lerpDistance(that.mx, this.x, 0.9);
      this.y = lerpDistance(that.my, this.y, 0.9);

      var deltaY = that.my - this.y;
      var deltaX = that.mx - this.x;
      var beta = Math.atan2(deltaY, deltaX) + Math.PI;

      this.angle = lerpAngle(beta, this.angle, 0.6);

      // 尾巴摆动
      this.bigTailTimer += that.deltaTime;
      if (this.bigTailTimer > 90) {
        this.bigTailCount = (this.bigTailCount + 1) % 8;
        this.bigTailTimer %= 90;
      }

      // 眼睛眨动
      this.bigEyeTimer += that.deltaTime;
      if (this.bigEyeTimer > this.bigEyeInterval) {
        this.bigEyeCount = (this.bigEyeCount + 1) % 2;
        this.bigEyeTimer %= this.bigEyeInterval;
        if (this.bigEyeCount === 0) {
          this.bigEyeInterval = Math.random() * 1500 + 2000;
        } else {
          this.bigEyeInterval = 200;
        }
      }

      this.bigTailImg.src = this.bigTail[this.bigTailCount];
      this.bigBobyImg.src = this.bigBoby[this.bigBodyCount];
      this.bigEyeImg.src = this.bigEye[this.bigEyeCount];

      that.ctx1.save();
      that.ctx1.translate(this.x, this.y);
      that.ctx1.rotate(this.angle);
      that.ctx1.drawImage(this.bigTailImg, -this.bigTailImg.width * 0.5 + 30, -this.bigTailImg.height * 0.5, this.bigTailImg.width, this.bigTailImg.height);
      that.ctx1.drawImage(this.bigBobyImg, -this.bigBobyImg.width * 0.5, -this.bigBobyImg.height * 0.5, this.bigBobyImg.width, this.bigBobyImg.height);
      that.ctx1.drawImage(this.bigEyeImg, -this.bigEyeImg.width * 0.5, -this.bigEyeImg.height * 0.5, this.bigEyeImg.width, this.bigEyeImg.height);
      that.ctx1.restore();
    }
  }]);

  return momObj;
}();

module.exports = momObj;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var babyObj = function () {
  function babyObj(that) {
    _classCallCheck(this, babyObj);

    this.angle = 0;
    this.babyEye = [];
    this.babyBoby = [];
    this.babyTail = [];
    this.babyEyeImg = new Image();
    this.babyBobyImg = new Image();
    this.babyTailImg = new Image();
    this.babyTailTimer = 0;
    this.babyTailCount = 0;

    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyeInterval = 1000;

    this.babyBodyTimer = 0;
    this.babyBodyCount = 0;

    this.that = that;
  }

  _createClass(babyObj, [{
    key: "init",
    value: function init() {
      this.x = this.that.canWidth * 0.5 - 50;
      this.y = this.that.canHeight * 0.5 + 50;
      for (var i = 0; i < 8; i++) {
        this.babyTail[i] = "./img/tinyHeart/babyTail" + i + ".png";
      }
      for (var _i = 0; _i < 2; _i++) {
        this.babyEye[_i] = "./img/tinyHeart/babyEye" + _i + ".png";
      }
      for (var _i2 = 0; _i2 < 20; _i2++) {
        this.babyBoby[_i2] = "./img/tinyHeart/babyFade" + _i2 + ".png";
      }
    }
  }, {
    key: "draw",
    value: function draw() {

      var that = this.that;

      this.x = lerpDistance(that.mom.x - 35, this.x, 0.98);
      this.y = lerpDistance(that.mom.y - 35, this.y, 0.98);

      var deltaY = that.mom.y - this.y;
      var deltaX = that.mom.x - this.x;
      var beta = Math.atan2(deltaY, deltaX) + Math.PI;

      this.angle = lerpAngle(beta, this.angle, 0.6);

      // 尾巴摆动
      this.babyTailTimer += that.deltaTime;
      if (this.babyTailTimer > 100) {
        this.babyTailCount = (this.babyTailCount + 1) % 8;
        this.babyTailTimer %= 100;
      }

      // 眼睛眨动
      this.babyEyeTimer += that.deltaTime;
      if (this.babyEyeTimer > this.babyEyeInterval) {
        this.babyEyeCount = (this.babyEyeCount + 1) % 2;
        this.babyEyeTimer %= this.babyEyeInterval;
        if (this.babyEyeCount === 0) {
          this.babyEyeInterval = Math.random() * 1500 + 2000;
        } else {
          this.babyEyeInterval = 200;
        }
      }

      // 身体变白
      this.babyBodyTimer += that.deltaTime;
      if (this.babyBodyTimer > 750) {
        this.babyBodyCount = this.babyBodyCount + 1;
        this.babyBodyTimer %= 750;
        if (this.babyBodyCount > 19) {
          this.babyBodyCount = 19;
          // game over
          that.data.gameOver = true;
        }
      }

      this.babyTailImg.src = this.babyTail[this.babyTailCount];
      this.babyBobyImg.src = this.babyBoby[this.babyBodyCount];
      this.babyEyeImg.src = this.babyEye[this.babyEyeCount];

      that.ctx1.save();
      that.ctx1.translate(this.x, this.y);
      that.ctx1.rotate(this.angle);
      that.ctx1.drawImage(this.babyTailImg, -this.babyTailImg.width * 0.5 + 30, -this.babyTailImg.height * 0.5, this.babyTailImg.width, this.babyTailImg.height);
      that.ctx1.drawImage(this.babyBobyImg, -this.babyBobyImg.width * 0.5, -this.babyBobyImg.height * 0.5, this.babyBobyImg.width, this.babyBobyImg.height);
      that.ctx1.drawImage(this.babyEyeImg, -this.babyEyeImg.width * 0.5, -this.babyEyeImg.height * 0.5, this.babyEyeImg.width, this.babyEyeImg.height);
      that.ctx1.restore();
    }
  }]);

  return babyObj;
}();

module.exports = babyObj;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function momFruitsCollision(fruit, mom, data, wave) {
  if (!data.gameOver) {
    for (var i = 0; i < fruit.num; i++) {
      if (fruit.alive[i]) {
        var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
        if (l < 900) {
          wave.born(fruit.x[i], fruit.y[i]);
          if (fruit.fruitType[i] === 'blue' && Math.log(data.double) / Math.log(2) < 8) {
            data.double *= 2;
            mom.bigBodyCount = 7 + Math.log(data.double) / Math.log(2);
          } else if (data.fruitNum < 8) {
            data.fruitNum++;
            mom.bigBodyCount = data.fruitNum;
          } else {
            data.fruitNum++;
            mom.bigBodyCount = 7;
          }
          fruit.dead(i);
          break;
        }
      }
    } // 循环结束
  }
}

function momBabyColllision(mom, baby, data, halo) {
  if (!data.gameOver) {
    var l = calLength2(mom.x, mom.y, baby.x, baby.y);
    if (l < 900 && data.fruitNum) {
      // baby recover
      baby.babyBodyCount = 0;
      // mom recover
      mom.bigBodyCount = 0;

      data.addScore();

      halo.born(baby.x, baby.y);
    }
  }
}
exports.default = { momFruitsCollision: momFruitsCollision, momBabyColllision: momBabyColllision };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dataObj = function () {
  function dataObj(that) {
    _classCallCheck(this, dataObj);

    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;

    this.that = that;
  }

  _createClass(dataObj, [{
    key: "draw",
    value: function draw() {
      var that = this.that;
      var w = that.can1.width;
      var h = that.can1.height;

      that.ctx1.save();
      that.ctx1.shadowBlur = 10;
      that.ctx1.shadowColor = "white";
      that.ctx1.fillStyle = "white";

      that.ctx1.fillText("fruitNum " + this.fruitNum, w * 0.5, h - 60);
      that.ctx1.fillText("double " + this.double, w * 0.5, h - 40);
      that.ctx1.fillText("SCORE " + this.score, w * 0.5, h - 20);

      if (this.gameOver) {
        this.alpha += 0.005;
        if (this.alpha > 1) this.alpha = 1;
        that.ctx1.fillStyle = "rgba(255, 255, 255, " + this.alpha + ")";
        that.ctx1.fillText("GAMEOVER ", w * 0.5, h * 0.5);
      }
      that.ctx1.restore();
    }
  }, {
    key: "addScore",
    value: function addScore() {
      this.score += this.fruitNum * this.double;
      this.fruitNum = 0;
      this.double = 1;
    }
  }]);

  return dataObj;
}();

module.exports = dataObj;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var waveObj = function () {
  function waveObj(that) {
    _classCallCheck(this, waveObj);

    this.x = [];
    this.y = [];
    this.num = 10;
    this.alive = new Array(this.num).fill(false); //为了防止吃到几个果实不能正常显示几个圈圈的
    this.r = [];

    this.that = that;
  }

  _createClass(waveObj, [{
    key: "draw",
    value: function draw() {
      var that = this.that;

      that.ctx1.save();
      that.ctx1.lineWidth = 2;
      that.ctx1.shadowBlur = 10;
      that.ctx1.shadowColor = "white";

      for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
          this.r[i] += that.deltaTime * 0.04;
          if (this.r[i] > 50) {
            this.alive[i] = false;
            break;
          }
          var alpha = 1 - this.r[i] / 50;

          //api
          that.ctx1.beginPath();
          that.ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
          that.ctx1.closePath();
          that.ctx1.strokeStyle = "rgba(255, 255, 255," + alpha + ")";
          that.ctx1.stroke();
        }
      }
      that.ctx1.restore();
    }
  }, {
    key: "born",
    value: function born(x, y) {
      for (var i = 0; i < this.num; i++) {
        if (!this.alive[i]) {
          this.alive[i] = true;
          this.r[i] = 20;
          this.x[i] = x;
          this.y[i] = y;

          return;
        }
      }
    }
  }]);

  return waveObj;
}();

module.exports = waveObj;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var haloObj = function () {
  function haloObj(that) {
    _classCallCheck(this, haloObj);

    this.x = new Array(this.num).fill(0);
    this.y = new Array(this.num).fill(0);
    this.num = 5;
    this.alive = new Array(this.num).fill(false); //为了防止吃到几个果实不能正常显示几个圈圈的现象
    this.r = new Array(this.num).fill(0);

    this.that = that;
  }

  _createClass(haloObj, [{
    key: "draw",
    value: function draw() {
      var that = this.that;

      that.ctx1.save();
      that.ctx1.lineWidth = 2;
      that.ctx1.shadowBlur = 10;
      that.ctx1.shadowColor = "rgba(203, 91, 0, 1)";

      for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
          this.r[i] += that.deltaTime * 0.05;
          if (this.r[i] > 100) {
            this.alive[i] = false;
            break;
          }
          var alpha = 1 - this.r[i] / 100;

          //api
          that.ctx1.beginPath();
          that.ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
          that.ctx1.closePath();
          that.ctx1.strokeStyle = "rgba(203, 91, 0," + alpha + ")";
          that.ctx1.stroke();
        }
      }
      that.ctx1.restore();
    }
  }, {
    key: "born",
    value: function born(x, y) {
      for (var i = 0; i < this.num; i++) {
        if (!this.alive[i]) {
          this.alive[i] = true;
          this.r[i] = 20;
          this.x[i] = x;
          this.y[i] = y;

          return;
        }
      }
    }
  }]);

  return haloObj;
}();

module.exports = haloObj;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dustObj = function () {
  function dustObj(that) {
    _classCallCheck(this, dustObj);

    this.x = [];
    this.y = [];
    this.amp = [];
    this.NO = [];
    this.dustPic = [];
    this.num = 30;

    this.alpha = 0;
    this.that = that;
  }

  _createClass(dustObj, [{
    key: "init",
    value: function init() {
      var h = this.that.canHeight;
      var w = this.that.canWidth;
      for (var i = 0; i < this.num; i++) {
        this.x[i] = Math.random() * h;
        this.y[i] = Math.random() * w;
        this.amp[i] = 20 + Math.random() * 15;
        this.NO[i] = Math.floor(Math.random() * 7);
      }
      for (var i = 0; i < 7; i++) {
        this.dustPic[i] = new Image();
        this.dustPic[i].src = "./img/tinyHeart/dust" + i + ".png";
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var that = this.that;
      this.alpha += that.deltaTime * 0.0008;
      var l = Math.sin(this.alpha);
      console.log(this.x[0]);
      for (var i = 0; i < this.num; i++) {
        var no = this.NO[i];
        that.ctx1.drawImage(this.dustPic[no], this.x[i] + this.amp[i] * l, this.y[i], this.dustPic[no].width, this.dustPic[no].height);
      }
    }
  }]);

  return dustObj;
}();

module.exports = dustObj;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);