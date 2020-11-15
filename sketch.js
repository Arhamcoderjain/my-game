var player , player2 , ball , net
var ballgroup

function setup() {
  createCanvas(400,400);

  player = createSprite(400, 200, 50, 50);
  player2 = createSprite(0,200,50,50)
  ballgroup = new Group()
}

function draw() {
  background(0,0,0);
  text(mouseX+","+mouseY,mouseX,mouseY) 
  if(keyDown(UP_ARROW)){
    player.y = player.y- 5
  } 
  if(keyDown(DOWN_ARROW)){
    ball = createSprite(player.x,player.y,10,10)
  }
  ballgroup.bounceOff(player2)
  drawSprites();
}

 function createBall(){
   ball = createSprite(player.x , player.y , 10 , 10)
 }