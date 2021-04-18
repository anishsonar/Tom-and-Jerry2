var mouse, cat, background;
var mouse1Img, cat1Img, bgImg, mouse2Img, mouse4Img, cat2Img, cat3Img;

function preload() {
    mouse1Img = loadAnimation("images/mouse4.png");
    cat1Img = loadAnimation("images/cat1.png");
    bgImg = loadImage("images/garden.png");
    mouse2Img = loadAnimation("images/mouse2.png", "images/mouse3.png");
    cat2Img = loadAnimation("images/cat2.png", "images/cat3.png");
    cat3Img = loadAnimation("images/cat2.png");
    cat4Img = loadAnimation("images/cat4.png");
    mouse4Img = loadAnimation("images/mouse1.png");
}

function setup(){
    createCanvas(1000,700);

    background = createSprite(500,350, 20, 20);
    background.addImage(bgImg);

    mouse = createSprite(300,610,20,20);
    mouse.addAnimation("mouse",mouse1Img);
    mouse.scale = 0.1;
    cat = createSprite(900,610,20,20);
    cat.addAnimation("cat",cat1Img);
    cat.scale = 0.09;
}

function draw() {

  

    if(cat.x - mouse.x < ((cat.width - mouse.width)/2))
    {
       cat.addAnimation("cat", cat4Img);
       cat.changeAnimation("cat");
       cat.velocityX= 0;
       mouse.addAnimation("mouse",mouse4Img);
       mouse.changeAnimation("mouse");
       mouse.velocityX= 0;
       cat.x = mouse.x +70;
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){

   if(keyDown(UP_ARROW)){
        mouse.addAnimation("mouse",mouse2Img);
        mouse.changeAnimation("mouse");
        cat.addAnimation("cat", cat3Img);
        cat.changeAnimation("cat");
        //mouse.frameDelay = 5;
        //mouse.velocityX = 3;
        
   }
    if(keyDown(LEFT_ARROW)){
        cat.addAnimation("cat", cat2Img);
        cat.changeAnimation("cat");
        //mouse.addAnimation("mouse",mouse2Img);
        //mouse.changeAnimation("mouse");
        cat.frameDelay = 5;
        cat.velocityX= -3;
        mouse.velocityX = 2;
    }

}

