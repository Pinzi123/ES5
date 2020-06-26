const [Ease,Tween,Ticker] = [createjs.Ease, createjs.Tween, createjs.Ticker];

var stage = new createjs.Stage("2d");

var circle1 = createCircle(100, 100);

var circle2 = createCircle(500, 100);

var tween1 = move(circle1,{x:300,y:400})
.call(hide, [circle1], this)
.call(toManyCircle, [circle2], this);

var tween2 = move(circle2,{x:300,y:400})
.call(hide, [circle2], this)
.call(toManyCircle, [circle2], this);


function move(target, props, time=1000){
    return Tween.get(target)
    .to(props, time, Ease.getPowIn(2.2));
}

function hide(circle) {
    //渐变完成执行
    Tween.get(circle)
    .wait(100)
    .to({alpha:0, visible:false}, 50);
}

function toManyCircle(target){
    const [x,y,r] = [target.x, target.y, 50];
    let p;
    for (let index = 0; index < 100; index++) {
        const c = createCircle(
            x+(Math.random()-0.5)*r*2,
            y+(Math.random()-0.5)*r*2,
            Math.random()*3);
        stage.addChild(c);
        
        p = getXYOnCircle((Math.random()-1)*Math.PI,Math.random()*1000);

        move(c,{x:p.x,y:p.y,alpha:0, visible:false},1000+Math.random()*500);
    }

    stage.removeChild(target);

}


function createCircle(x,y,radius=50){
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, radius);
    circle.x = x;
    circle.y = y;
    stage.addChild(circle);
    return circle;
}

Ticker.addEventListener("tick", handleTick);
function handleTick(event) {
    stage.update();
}

function getXYOnCircle(alpha,radius){
    let x = radius * Math.cos(alpha);
    let y = radius * Math.sin(alpha);
    return {x,y};
}