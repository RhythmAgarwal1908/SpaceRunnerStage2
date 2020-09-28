
var player1,player2;
var player1img,player2img;
var timer;
var position;
var asteroids, asteroidsimg;
var asteroids2, asteroidsimg2;
function preload(){
    player1img = loadImage("images/rocket1.png")
    player2img = loadImage("images/rocket2.png")
    asteroidsimg = loadImage("images/meteors.png")
    asteroidsimg2 = loadImage("images/meteors2.png")
}
function setup(){
    createCanvas(800,800)
    player1 = createSprite(200,750,50,50);
    player2 = createSprite(600,750,50,50);
    //asteroids = createSprite(150,150,200,400)
 player1.addImage(player1img);
 player1.scale = 0.2;
 player2.addImage(player2img);
 player2.scale = 0.2;
 //asteroids = addImage(asteroidsimg)

 timer = createSprite(400,650,10,350)

}
function draw(){
    background("black")
    /*strokeWeight(1.5)
    stroke("white")
    line(400,800,400,500)*/
    
    position = Math.round(random(1,2))
    console.log(position)
  if(keyDown("w")){
    player1.y = player1.y - 4
    }
    if(keyDown("s")){
        player1.y = player1.y + 4
        }
    if(keyDown("u")){
        player2.y = player2.y - 4
        }

        timer.velocityY = 0.195;

        if(timer.visible === false){
            console.log("end")
        }
if(position === 1){
    if(frameCount % 30 === 0){
    asteroids = createSprite(810,random(20,500),200,400)
    asteroids.addImage(asteroidsimg)
    asteroids.scale = 0.3
    asteroids.velocityX = random(-1,-8);
    }
}
if(position === 2){
    if(frameCount % 30 === 0){
        asteroids2 = createSprite(-10,random(20,500),200,400)
        asteroids2.addImage(asteroidsimg2)
        asteroids2.scale = 0.3
        asteroids2.velocityX = random(1,8);
    }
    }


    console.log("position")
    drawSprites();
}