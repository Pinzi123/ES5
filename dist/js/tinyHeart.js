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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ane = __webpack_require__(6);

var _ane2 = _interopRequireDefault(_ane);

var _fruit = __webpack_require__(7);

var _fruit2 = _interopRequireDefault(_fruit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(8);

var tinyHeart = function () {
  function tinyHeart() {
    _classCallCheck(this, tinyHeart);

    this.can1 = document.getElementById('canvas1');
    this.ctx1 = this.can1.getContext('2d');
    this.can2 = document.getElementById('canvas2');
    this.ctx2 = this.can2.getContext('2d');
    this.bgPic = new Image();
    this.bgPic.src = './img/tinyHeart/background.jpg';
    this.canWidth = this.can1.width;
    this.canHeight = this.can1.height;
    this.lastTime = Date.now();
    this.deltaTime = 0;
    this.fruit = new _fruit2.default(this);
    this.ane = new _ane2.default(this);
  }

  _createClass(tinyHeart, [{
    key: 'game',
    value: function game() {
      var _this = this;
      this.ane.init();
      this.fruit.init();
      gameloop();

      function gameloop() {
        window.requestAnimFrame(gameloop);
        var now = Date.now();
        _this.deltaTime = now - _this.lastTime;
        _this.lastTime = now;

        _this.drawBackground();
        _this.ane.draw();
        _this.fruit.draw();
        _this.fruit.fruitMonitor();
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var aneObj = function () {
  function aneObj(that) {
    _classCallCheck(this, aneObj);

    this.x = [];
    this.len = [];
    this.num = 50;
    this.that = that;
    console.log(rnd(2));
  }

  _createClass(aneObj, [{
    key: "init",
    value: function init() {
      for (var i = 0; i < this.num; i++) {
        this.x[i] = i * 16 + Math.random() * 20;
        this.len[i] = 200 + Math.random() * 20;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var that = this.that;
      that.ctx2.save();
      that.ctx2.globalAlpha = 0.6;
      that.ctx2.lineWidth = 20;
      that.ctx2.lineCap = "round";
      that.ctx2.strokeStyle = "#3b154e";
      for (var i = 0; i < this.num; i++) {
        that.ctx2.beginPath();
        that.ctx2.moveTo(this.x[i], that.canHeight);
        that.ctx2.lineTo(this.x[i], that.canHeight - this.len[i]);
        that.ctx2.stroke();
      }
      that.ctx2.restore();
    }
  }]);

  return aneObj;
}();

module.exports = aneObj;

/***/ }),
/* 7 */
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
            this.l[i] += this.spd[i] * that.deltaTime;
          } else {
            this.y[i] -= this.spd[i] * 7 * that.deltaTime;
          }
          that.ctx2.drawImage(this[this.fruitType[i]], this.x[i] - this.orange.width * 0.5, this.y[i] - this.orange.height * 0.5, this.l[i], this.l[i]);
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
      var aneID = Math.floor(Math.random() * that.ane.num);
      this.x[i] = that.ane.x[aneID];
      this.y[i] = that.canHeight - that.ane.len[aneID] + Math.random() * 100;
      this.l[i] = 0;
      this.alive[i] = true;
      this.fruitType[i] = 'orange';
      if (Math.random() < 0.2) {
        this.fruitType[i] = 'blue';
      }
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
        return;
      }
    }
  }, {
    key: "sendFruit",
    value: function sendFruit() {
      for (var i = 0; i < this.num; i++) {
        if (!this.alive[i]) {
          this.born(i);
          return;
        }
      }
    }
  }]);

  return fruitObj;
}();

module.exports = fruitObj;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);