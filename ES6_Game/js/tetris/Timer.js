import Canvas from './Canvas.js';
class Timer{
  constructor() {
    this.canvas = new Canvas('timer', 100, 70);
    this.time = 0;
    this.timerId;
    this._init();
  }
  _init () {
    var self = this;
    this._render();
    this.resume();
  }
  _format (seconds) {
    var hours = Math.floor(seconds / 3600);
    seconds = seconds - hours * 3600;
    var minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
  }
  _render () {
    this.canvas.drawText(this._format(this.time));
  }
  pause () {
    window.clearInterval(this.timerId);
  }
  resume () {
    var self = this;
    this.timerId = window.setInterval(function () {
      self.time += 1;
      self._render();
    }, 1000);
  }
  stop () {
    this.pause();
  }
}
module.exports = Timer
