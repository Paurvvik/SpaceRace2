var score1=0
var score2=0
var gameState="play"

function preload(){
  rocket1Img = loadImage("rocket1.png")
  rocket2Img = loadImage("rocket2.png")
  whitelineImg = loadImage("white line.png")
  ball2Img = loadImage("ball2.png")
}

function setup() {
  createCanvas(800,800);

rocket1 = createSprite(205,715,10,10)
rocket2 = createSprite(600,715,10,10)
whiteline = createSprite(400,400,10,10)
ball2 = createSprite(200,200,10,10)
line = createSprite(400,10,800,10)

rocket1.addImage(rocket1Img)
 rocket2.addImage(rocket2Img)
 whiteline.addImage(whitelineImg)
 whiteline.velocityY=0.5
 ball2.addImage(ball2Img)
 ball2.scale= 0.1
}


function draw() {
  background(0);
  textSize(70)
  fill("white")
  text(score1,100,750)  
  text(score2,500,750)
  
  drawSprites();

  if (keyDown("w")){
    rocket1.y-=5
  }
  if (keyDown("up")){
    rocket2.y-=5
  }
  if(rocket1.isTouching(line)){
 score1++
 rocket1.x=205
rocket1.y=715
  }
  if(rocket2.isTouching(line)){
    score2++
    rocket2.x=600
   rocket2.y=715
     }
 
     if(whiteline.y>1200){
       gameState="END"
       text("GAME OVER",400,400)
      whiteline.velocityY=0
     }

}