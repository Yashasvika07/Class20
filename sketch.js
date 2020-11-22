var movingRect, stillRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(300,300,40,200);
  movingRect.shapeColor = "green";

  stillRect = createSprite(200,200,200,40);
  stillRect.shapeColor = "green";

}

function draw() {
  background(0); 
  movingRect.x = World.mouseX;
  movingRect.y  = World.mouseY;
  isTouching();
  drawSprites();
}

function isTouching(){
  if(movingRect.x - stillRect.x <= movingRect.width/2 + stillRect.width/2
    && stillRect.x - movingRect.x <= movingRect.width/2 + stillRect.width/2
    && movingRect.y - stillRect.y <= movingRect.height/2 + stillRect.height/2
    && stillRect.y - movingRect.y <= movingRect.height/2 + stillRect.height/2){
    movingRect.shapeColor = "red";
    stillRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    stillRect.shapeColor = "green";
  }
}