class PreLoad {
  constructor (imgs, each = null, all = null) {
    this.imgs = (typeof imgs === 'string') ? [imgs] : imgs
    this.each = each
    this.all = all
  }

  // 无序加载
  _unorderes () {
    let count = 0
    let each = this.each
    let all = this.all
    let length = this.imgs.length
    this.imgs.forEach(function (src) {
      if (typeof src != 'string') return

      var imgObj = new Image()
      imgObj.src = './img/tinyHeart/' + src
      imgObj.addEventListener("load", oneload);
      imgObj.addEventListener("error", oneload);
    })

    function oneload () {
      each && each(count)
      if(count >= length - 1){
        all && all()
      }
      count ++
    }
  }

 // 有序加载
  _orderes () {
    let count = 0
    let each = this.each
    let all = this.all
    let length = this.imgs.length
    let imgs = this.imgs
    load()

    function load (){
      let imgObj = new Image()
      imgObj.src = './img/tinyHeart/' + imgs[count]
      imgObj.addEventListener("load", oneload);

      imgObj.addEventListener("error", oneload);


    }

    function oneload () {
      each && each(count)
      count ++
      if(count >= length ){
        all && all()
      } else {
        load ()
      }
    }
  }
}


module.exports = PreLoad
