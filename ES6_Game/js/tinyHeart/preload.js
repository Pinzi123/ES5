let imgs = ["baby.png","babyEye0.png","babyEye1.png","babyFade0.png","babyFade1.png","babyFade10.png","babyFade11.png","babyFade12.png","babyFade13.png","babyFade14.png","babyFade15.png","babyFade16.png","babyFade17.png","babyFade18.png","babyFade19.png","babyFade2.png","babyFade3.png","babyFade4.png","babyFade5.png","babyFade6.png","babyFade7.png","babyFade8.png","babyFade9.png","babyTail0.png","babyTail1.png","babyTail2.png","babyTail3.png","babyTail4.png","babyTail5.png","babyTail6.png","babyTail7.png","background.jpg","big.png","bigEat0.png","bigEat1.png","bigEat2.png","bigEat3.png","bigEat4.png","bigEat5.png","bigEat6.png","bigEat7.png","bigEatBlue0.png","bigEatBlue1.png","bigEatBlue2.png","bigEatBlue3.png","bigEatBlue4.png","bigEatBlue5.png","bigEatBlue6.png","bigEatBlue7.png","bigEye0.png","bigEye1.png","bigSwim0.png","bigSwim1.png","bigSwim2.png","bigSwim3.png","bigSwim4.png","bigSwim5.png","bigSwim6.png","bigSwim7.png","bigSwimBlue0.png","bigSwimBlue1.png","bigSwimBlue2.png","bigSwimBlue3.png","bigSwimBlue4.png","bigSwimBlue5.png","bigSwimBlue6.png","bigSwimBlue7.png","bigTail0.png","bigTail1.png","bigTail2.png","bigTail3.png","bigTail4.png","bigTail5.png","bigTail6.png","bigTail7.png","blue.png","cover.png","dust0.png","dust1.png","dust2.png","dust3.png","dust4.png","dust5.png","dust6.png","fruit.png","play.png"]
console.log(imgs.length);

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

  eachSrc(src) {

  }
}

let pro = document.getElementById("progress")
let length = imgs.length
let preLoad = new PreLoad(imgs, function(count){
                                  pro.innerHTML = Math.round((count+1)/length * 100) + '%'
                                },
                                function(){
                                  console.log('over');
                                  pro.style.display = "none"
                                  document.getElementById('allcanvas').style.display = "block"
                                  var tiny = new tinyHeart()
                                  document.body.onload = tiny.game()
                                })
preLoad._unorderes()
