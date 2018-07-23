
var acel = 2;
var pos = {
  x:100,
  y:100
}
var vel = {
  x:0,
  y:0
};

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    vel.x=-acel;
    vel.y=0;
  }
  if (keyCode === RIGHT_ARROW) {
    vel.x=acel;
    vel.y=0;
  }
  if (keyCode === UP_ARROW) {
    vel.y=-acel;
    vel.x=0;
  }
  if (keyCode === DOWN_ARROW) {
    vel.y=acel;
    vel.x=0;
  }
}

function preload(){
  planoDeFundo = loadImage('espaco.jpg');
  naveImg = loadImage('nave.png');
}

function setup() {
  createCanvas(900,420);
}

function draw() {
  background(0);
  image(planoDeFundo,0,0);
  image(naveImg,pos.x,pos.y);

  pos.x+=vel.x;
  pos.y+=vel.y;

}
