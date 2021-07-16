var ship, shipImage
var sea, seaImage


function preload(){
  
  seaImage = loadImage("sea.png")
  shipImage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,100);
  sea.addImage(seaImage)
  sea.velocityX=-5
  sea.scale = 0.5

  ship = createSprite(100,200,60,90)
  ship.addAnimation("sailing", shipImage);
  ship.scale = 0.2
  }


function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = width/2;
    
  } 
  

  drawSprites();
}