
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(1600,740);
  
monkey=createSprite(50,600,70,70);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.5;
  
ground=createSprite(800,740,2000,20);
invisibleground=createSprite(800,742,2000,20);
invisibleground.visible=false;
  
}


function draw() {
  
  
background("lightgreen");
  console.log(monkey.y)
  if(keyDown("Space")&&monkey.y>=578)
     {
     monkey.velocityY=-20;
     }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(invisibleground);
  score=Math.round(frameCount/12)
  textSize(40)
  text("score: "+score,1200,50)
  spawnBananas()
  spawnstone()
  drawSprites();
}
function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var banana = createSprite(1600,120,40,10);
    banana.y = Math.round(random(50,500));
    banana.addImage(bananaImage);
    banana.scale = 0.3;
    banana.velocityX = -6;
    
     //assign lifetime to the variable
    banana.lifetime = 550;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
  }
}

function spawnstone() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
    var stone = createSprite(1600,700,40,10);
   
    stone.addImage(obstacleImage);
    stone.scale = 0.4;
    stone.velocityX = -6;
    
     //assign lifetime to the variable
    stone.lifetime = 550;
    
    //adjust the depth
    stone.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
  }
}




