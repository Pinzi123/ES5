function momFruitsCollision(fruit, mom, data) {
  if (!data.gameOver) {
    for (var i = 0; i < fruit.num; i++) {
      if(fruit.alive[i]){
        var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y)
        if(l < 900) {
          fruit.dead(i)

          if (fruit.fruitType[i] === 'blue' && Math.log(data.double) / Math.log(2) < 8){
            data.double *= 2
            mom.bigBodyCount = 7 + Math.log(data.double) / Math.log(2)
          } else if (data.fruitNum < 8) {
            data.fruitNum ++
            mom.bigBodyCount = data.fruitNum
          } else {
            data.fruitNum ++
            mom.bigBodyCount = 7
          }

        }
      }
    }// 循环结束
  }
}

function momBabyColllision(mom, baby, data) {
  if (!data.gameOver) {
    var l = calLength2(mom.x, mom.y, baby.x, baby.y)
    if(l < 900) {
      // baby recover
      baby.babyBodyCount = 0
     // mom recover
      mom.bigBodyCount = 0

      data.addScore()
    }
  }
}
export default {momFruitsCollision, momBabyColllision};
