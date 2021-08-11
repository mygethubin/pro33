var bgImg;

function preload() {
bgImg=loadImage("snow3.jpg")



}

function setup() {
  createCanvas(1700,770);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgImg);  
  drawSprites();
}