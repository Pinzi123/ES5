class PreLoad {
  constructor (imgs, each = null, all = null) {
    this.imgs = (typeof imgs === 'string') ? [imgs] : imgs
    this.each = each
    this.all = all
  }

  _unorderes () {
    let count = 0
    let each = this.each
    let all = this.all
    let length = this.imgs.length
    this.imgs.forEach(function (src) {
      if (typeof src != 'string') return

      var imgObj = new Image()
      imgObj.src = './img/tinyHeart/' + src
      imgObj.onload = function () {
        each && each(count)

        if(count >= length - 1){
          all && all()
        }

        count ++
      }
    })
  }
}


module.exports = PreLoad
