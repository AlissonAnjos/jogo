
var pos = {
  x: 0,
  y: 0
};
var dir = 5;
var diry = 5;
var cor = {
  r: 0,
  g: 0,
  b: 0
};

function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  background(0);
  cor.r = random(0,255);
  cor.g = random(0,255);
  cor.b = random(0,255);
  fill(cor.r,cor.g,cor.b);
  stroke(255);
  if(pos.x > width){
    dir = -5;

  }
  if(pos.x < 0){
    dir = 5;

  }
  if(pos.y > height){
    diry = -5;

  }
  if(pos.y < 0){
    diry = 5;

  }
    pos.x+=dir;
    pos.y+=diry;

  ellipse(pos.x, pos.y, 50, 50);

}
