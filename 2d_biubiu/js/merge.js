const [Ease,Tween,Ticker] = [createjs.Ease, createjs.Tween, createjs.Ticker];

let t1,t2;

var stage = new createjs.Stage("2d");

let a1 = addImg("./img/a1.jpg",500,450,0.1,0.1);
let a2 = addImg("./img/a2.jpeg",600,450,0.1,0.1);
let mm = addImg("./img/m.png",350,200,0.8,0.8);

a1.addEventListener("click", selected);
a2.addEventListener("click", selected);
mm.addEventListener("click", selected);

function selected(event) {
    let target = event.target;
    switch (target) {
        case a1:
            !t1&&(t1 = cloneImg(target));
            move(t1,{x:100,y:200,scaleX:0.2,scaleY:0.2})
            .call(replaceImg,[t1,"./img/t1.jpg",0,100],this);
            break;
        case a2:
            !t2&&(t2 = cloneImg(target));
            move(t2,{x:650,y:200,scaleX:0.2,scaleY:0.2})
            .call(replaceImg,[t2,"./img/t2.jpg",600,100],this);
            break;
        case mm:
            // mergeT(t1,t2);
            mergeTimg();
            break;
    }
}

function addImg(src,x,y,scaleX=1,scaleY=1){
    let img = new createjs.Bitmap(src);
    img.x = x;
    img.y = y;
    img.scaleX = scaleX;
    img.scaleY = scaleY; 
    stage.addChild(img);
    return img;
}

function cloneImg(img,scaleX=0,scaleY=0,x=0,y=0){
    let newImg = addImg(img.image.src,
        x||img.x,y||img.y,
        scaleX||img.scaleX,scaleY||img.scaleY);
    return newImg;
}


function replaceImg(target,src,x,y,scaleX=0.6,scaleY=0.6){
    hide(target).call(
        ()=>{
            let nt = addImg(src,
                x, y,
                scaleX,scaleY);
            nt.alpha = 0;
            nt.visible = true;
            stage.removeChild(target);
            if(target === t1) t1 = nt;
            else if(target === t2) t2 = nt;
            else{
                stage.removeChild(mm);
                mm = nt;
            } 
            return show(nt);
        }
    )
}

function hide(circle) {
    return Tween.get(circle)
    .wait(100)
    .to({alpha:0, visible:false}, 300);
}

function show(target){
    return Tween.get(target)
    .wait(100)
    .to({alpha:1, visible:true}, 300);
}

function move(target, props, time=1000){
    return Tween.get(target)
    .to(props, time, Ease.getPowIn(2.2));
}

function mergeT(t1,t2){
    hide(t1);
    hide(t2)
    .call(replaceImg,[mm,"./img/m1.png",300,150,1,1],this)
    .wait(100)
    .call(replaceImg,[mm,"./img/m2.png",300,150,1,1],this)
    .wait(200)
    .call(replaceImg,[mm,"./img/m3.png",300,150,1,1],this)
    .wait(300)
    .call(replaceImg,[mm,"./img/m4.png",300,150,1,1],this)
    .wait(400)
    .call(replaceImg,[mm,"./img/timg.jpeg",-150,0,0.3,0.3],this)
}

/**
 * 采用序列帧
 */
function mergeTimg(){
    t1&&hide(t1);
    t2&&hide(t2);
    hide(mm).call(()=>{
        var data = {
            images: ["./img/mm.png"],
            /**
             * width & height 所需和指定的帧的尺寸
             * regX & regY 指示帧的注册点或“原点”
             * spacing 表示帧之间的间隔
             * margin 指定图像边缘的边缘
             * count 允许您指定在spritesheet帧的总数
             */
            frames: {width:200, height:200},
            animations: {
                stand:5,
                //start, end, next, speed.
                run:[0,5,"stand",0.4],
            }
        }
        var spriteSheet = new createjs.SpriteSheet(data);
        var animation = new createjs.Sprite(spriteSheet, "run");
        animation.x = 350;
        animation.y = 200;
        stage.addChild(animation);
        animation.gotoAndPlay("run");
    }).wait(100)
    .call(replaceImg,[mm,"./img/timg.jpeg",-150,0,0.3,0.3],this)
}

Ticker.addEventListener("tick", handleTick);
function handleTick(event) {
    stage.update();
}