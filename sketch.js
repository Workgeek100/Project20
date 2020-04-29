var Car, wall;

function setup() {
  createCanvas(1600,400);
  Car = createSprite(100, 200, 50, 50);
  Car.speed=random(30,90);
  Car.weight=random(400,1500);
  wall = createSprite(1575,200,500,100);
  wall.shapeColor=color(255);
  Car.velocityX=random(30,90);
}

function draw() {
  background(210);  
  drawSprites();
}