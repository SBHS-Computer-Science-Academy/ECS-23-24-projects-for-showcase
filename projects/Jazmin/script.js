let circleY = 300;
let cloudX1 = 300;
let cloudX2 = 100;
let cloudX3 = 500;
let BirdX = 200;
let BirdX1 = 100;
let BirdX2 = 80;
function setup() 
{
  createCanvas(500,700);
  background('#183061');
  fill('#e0a846')
  ellipse(230 , circleY , 100, 100);
  drawCloud(cloudX1,100);
  drawCloud(100,120);
  drawCloud(100,90);
  drawBird(100,300);
  drawBird(100,200);
  drawBird(100,100);
  
}
function draw()
{
  background('#183061');
  fill('#e0a846')
  ellipse(230 , circleY , 100, 100);
  drawCloud(cloudX1,100);
  drawCloud(cloudX2,120);
  drawBird(BirdX,140)
  drawBird(BirdX1,200);
  drawBird(BirdX2,100);
  cloudX1 = cloudX1 + 1;
  cloudX2 = cloudX2 + 1;
  cloudX3 = cloudX3 + 1;
  BirdX = BirdX + 2;
  BirdX1 = BirdX1 + 2;
  BirdX2 = BirdX2 + 2;
}
function drawCloud(x,y) {
  fill('#e8e8e8')
  noStroke();
ellipse(x,y, 50, 50); 
ellipse(x + 20,y , 50, 50);
ellipse(x + 40,y, 50,50);
ellipse(x + 50,y-10, 50,50);
ellipse(x + 10,y-30, 50,50);


}

function drawBird(x,y) {
  stroke('#020405')
  noFill();
  arc(x,y,50, 50, 4, 6);
  arc(x + 40,y,50,50, 4, 6);
  arc(x + 20,y, 50, 4, 6);
  arc(x + 20,y, 50, 4, 6);
  arc(x + 20,y, 50, 4, 6);
  arc(x + 20,y, 50, 4, 6);
}  