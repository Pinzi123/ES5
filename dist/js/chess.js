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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chess = __webpack_require__(1);

var _chess2 = _interopRequireDefault(_chess);

var _chessBoard = __webpack_require__(2);

var _chessBoard2 = _interopRequireDefault(_chessBoard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(3);


// 实现多重继承
var copyProperties = function copyProperties(target, source) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Reflect.ownKeys(source)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
        var desc = Object.getOwnPropertyDescriptor(source, key);
        Object.defineProperty(target, key, desc);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var mix = function mix() {
  var Mix = function Mix() {
    _classCallCheck(this, Mix);
  };

  for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
    mixins[_key] = arguments[_key];
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = mixins[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var mixin = _step2.value;

      copyProperties(Mix, mixin);
      copyProperties(Mix.prototype, mixin.prototype);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return Mix;
};

var Lottery = function (_mix) {
  _inherits(Lottery, _mix);

  function Lottery() {
    _classCallCheck(this, Lottery);

    var _this2 = _possibleConstructorReturn(this, (Lottery.__proto__ || Object.getPrototypeOf(Lottery)).call(this));

    _this2.chess = document.getElementById('chess');
    _this2.context = _this2.chess.getContext('2d');
    _this2.over = false;
    //赢法数组
    _this2.wins = [];
    //赢法的统计数组
    _this2.myWin = [];
    _this2.computerWin = [];
    //棋盘
    _this2.chessBoard = [];
    _this2.me = true;
    //有多少种赢法
    _this2.count = 0;
    return _this2;
  }

  /**
   * [init description]
   * @return {[type]} [description]
   */


  _createClass(Lottery, [{
    key: 'init',
    value: function init() {
      this.chessBoardInit();
      this.chessInit();
      var _this = this;
      this.chess.onclick = function (event) {
        _this.clickChess(event);
      };
    }
  }]);

  return Lottery;
}(mix(_chess2.default, _chessBoard2.default));

var lottery = new Lottery();
lottery.init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//AI篇：下棋逻辑实现部分
var Chess = function () {
  function Chess() {
    _classCallCheck(this, Chess);
  }

  _createClass(Chess, [{
    key: "chessInit",
    value: function chessInit() {
      for (var i = 0; i < 15; i++) {
        this.wins[i] = [];
        for (var j = 0; j < 15; j++) {
          this.wins[i][j] = [];
        }
      }

      for (var x = 0; x < 15; x++) {
        this.chessBoard[x] = new Array(); //声明二维数组
        for (var y = 0; y < 15; y++) {
          this.chessBoard[x][y] = 0; //数组初始化为0
        }
      }

      //横线
      for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 11; j++) {
          for (var k = 0; k < 5; k++) {
            this.wins[i][j + k][this.count] = true;
          }
          this.count++;
        }
      }
      //竖线
      for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 11; j++) {
          for (var k = 0; k < 5; k++) {
            this.wins[j + k][i][this.count] = true;
          }
          this.count++;
        }
      }
      //斜线
      for (var i = 0; i < 11; i++) {
        for (var j = 0; j < 11; j++) {
          for (var k = 0; k < 5; k++) {
            this.wins[i + k][j + k][this.count] = true;
          }
          this.count++;
        }
      }
      //反斜线
      for (var i = 0; i < 11; i++) {
        for (var j = 14; j > 3; j--) {
          for (var k = 0; k < 5; k++) {
            this.wins[i + k][j - k][this.count] = true;
          }
          this.count++;
        }
      }
      for (var i = 0; i < this.count; i++) {
        this.myWin[i] = 0;
        this.computerWin[i] = 0;
      }
    }
  }, {
    key: "clickChess",
    value: function clickChess(e) {
      var _this = this;

      if (this.over || !this.me) {
        return;
      }
      var x = e.offsetX;
      var y = e.offsetY;
      var i = Math.floor(x / 30);
      var j = Math.floor(y / 30);
      if (this.chessBoard[i][j] === 0) {
        this.oneStep(i, j, this.me).then(function () {
          _this.chessBoard[i][j] = 1;
          _this.me = !_this.me;
          for (var k = 0; k < _this.count; k++) {
            if (_this.wins[i][j][k]) {
              _this.myWin[k]++;
              _this.computerWin[k] = 6;
              if (_this.myWin[k] === 5) {
                window.alert("你赢了");
                _this.over = true;
              }
            }
          }
          if (!_this.over) {
            _this.computerAI();
          }
        });
      }
    }
  }, {
    key: "computerAI",
    value: function computerAI() {
      var _this2 = this;

      var myScore = [];
      var computerScore = [];
      var max = 0,
          u = 0,
          v = 0;
      for (var _i = 0; _i < 15; _i++) {
        myScore[_i] = [];
        computerScore[_i] = [];
        for (var j = 0; j < 15; j++) {
          myScore[_i][j] = 0;
          computerScore[_i][j] = 0;
        }
      }
      for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
          if (this.chessBoard[i][j] === 0) {
            for (var k = 0; k < this.count; k++) {
              if (this.wins[i][j][k]) {
                if (this.myWin[k] === 1) {
                  myScore[i][j] += 200;
                } else if (this.myWin[k] === 2) {
                  myScore[i][j] += 400;
                } else if (this.myWin[k] === 3) {
                  myScore[i][j] += 2000;
                } else if (this.myWin[k] === 4) {
                  myScore[i][j] += 10000;
                }
                if (this.computerWin[k] === 1) {
                  computerScore[i][j] += 220;
                } else if (this.computerWin[k] === 2) {
                  computerScore[i][j] += 420;
                } else if (this.computerWin[k] === 3) {
                  computerScore[i][j] += 2100;
                } else if (this.computerWin[k] === 4) {
                  computerScore[i][j] += 20000;
                }
              }
            }

            if (myScore[i][j] > max) {
              max = myScore[i][j];
              u = i;
              v = j;
            } else if (myScore[i][j] === max) {
              if (computerScore[i][j] > computerScore[i][j]) {
                u = i;
                v = j;
              }
            }

            if (computerScore[i][j] > max) {
              max = computerScore[i][j];
              u = i;
              v = j;
            } else if (computerScore[i][j] === max) {
              if (myScore[i][j] > myScore[i][j]) {
                u = i;
                v = j;
              }
            }
          }
        }
      }

      this.oneStep(u, v, false).then(function () {
        _this2.chessBoard[u][v] = 2;
        for (var k = 0; k < _this2.count; k++) {
          if (_this2.wins[u][v][k]) {
            _this2.computerWin[k]++;
            _this2.myWin[k] = 6;
            if (_this2.computerWin[k] === 5) {
              window.alert("你输了");
              _this2.over = true;
            }
          }
        }
        if (!_this2.over) {
          _this2.me = !_this2.me;
        }
      });
    }
  }]);

  return Chess;
}();

exports.default = Chess;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//引用的是同一个对象，赋值会出错
// var chessBoard = new Array(15).fill(new Array(15).fill(0))
var ChessBoard = function () {
  function ChessBoard() {
    _classCallCheck(this, ChessBoard);
  }

  _createClass(ChessBoard, [{
    key: 'chessBoardInit',
    value: function chessBoardInit() {
      var _this = this;
      this.context.strokeStyle = "#BFBFBF";
      var logo = new Image();
      logo.src = './img/logo.png';
      logo.onload = function () {
        _this.context.drawImage(logo, 50, 50, 350, 350);
        _this.drawChessBoard();
      };
    }

    /**
     * 绘制棋盘
     */

  }, {
    key: 'drawChessBoard',
    value: function drawChessBoard() {
      for (var i = 0; i < 15; i++) {
        this.context.moveTo(15 + i * 30, 15);
        this.context.lineTo(15 + i * 30, 435);
        this.context.stroke();
        this.context.moveTo(15, 15 + i * 30);
        this.context.lineTo(435, 15 + i * 30);
        this.context.stroke();
      }
    }

    /**
     * 绘制棋子
     */

  }, {
    key: 'oneStep',
    value: function oneStep(i, j, me) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        _this.context.beginPath();
        _this.context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI);
        _this.context.closePath();
        var gradient = _this.context.createRadialGradient(15 + i * 30 + 2, 15 + j * 30 - 2, 13, 15 + i * 30 + 2, 15 + j * 30 - 2, 0);
        if (me) {
          gradient.addColorStop(0, '#0A0A0A');
          gradient.addColorStop(1, '#636766');
        } else {
          gradient.addColorStop(0, '#D1D1D1');
          gradient.addColorStop(1, '#F9F9F9');
        }
        _this.context.fillStyle = gradient;
        _this.context.fill();
        setTimeout(resolve, 100, 'done');
      });
    }
  }]);

  return ChessBoard;
}();

exports.default = ChessBoard;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);