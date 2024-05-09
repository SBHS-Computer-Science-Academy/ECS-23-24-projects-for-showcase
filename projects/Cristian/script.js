function setup() {
  //you may change the canvas size and background color of the canvas
  createCanvas(1500, 800);
  background('skyblue');//
  //call your functions below
  noStroke();
  fill('#262626');//grey
  rect(0, 650, 1500 ,150);//road

  fill('yellow');
  ellipse(600, 60, 100, 100)//sun
  
  fill('#558000');//green
  rect(0, 480, 1500 ,100);//grass
  
  fill('#b3b3b3');//grey
  rect(0, 570, 1500 ,80);//sidewalk

  fill('#b1ba00');
  rect(100, 755, 100, 10);
  rect(400, 755, 100, 10);
  rect(700, 755, 100, 10);
  rect(1000, 755, 100, 10);
  rect(1300, 755, 100, 10);

  drawTree(-40, 280);
  drawTree(300, 290);
  drawTree(700, 300);
  drawTree(1200, 270);

  car();

  drawFlower(100, 550)
  drawFlower(400, 530)
  drawFlower(200, 550)
  drawFlower(300, 555)
  drawFlower(600, 535)
  drawFlower(700, 540)
  drawFlower(800, 550)
  drawFlower(900, 555)
  drawFlower(1000, 540)
  drawFlower(4000, 550)
  drawFlower(10, 550)
  drawFlower(1500, 530)
  drawFlower(1100, 555)
  drawFlower(1400, 545)
  drawFlower(1200, 540)
}

//write your functions below

function drawTree(x,y)
{ 
  //trunk
  fill('#734d26');//brown
  rect(x, y, 50, 250);
  //leaves
  fill('#009933');//green
  ellipse(x-25, y-30, 160, 130);//bottom left
  ellipse(x+40, y-40, 170, 140);//bottom right
  ellipse(x+60, y-120, 180, 160);//top right
  ellipse(x-25, y-130, 180, 180)//top left
}

function drawFlower(x,y)
{
fill('red');
ellipse(x-25, y-30, 20, 20);//top flower right
ellipse(x-10, y-30, 20, 20);//top flower left
ellipse(x-25, y-20, 20, 20);//bottom flower right
ellipse(x-10, y-20, 20, 20);//bottom flower left
fill('yellow');
ellipse(x-17.5, y-25, 15, 15);//flower center
}

function car()
{
  fill('blue');
  square(400, 623, 70, 15);
  square(435, 623, 70, 15);
  square(470, 623, 70, 15);
  square(400, 629, 70, 15);
  square(435, 629, 70, 15);
  square(470, 629, 70, 15);
  square(360, 675, 55, 15);
  square(405, 670, 60, 15);
  square(420, 670, 60, 15);
  square(450, 670, 60, 15);
  square(480, 670, 60, 15);
  fill("grey");
  rect(360, 719, 180, 12);
  circle(360, 725, 13, 12);
  circle(538, 725, 13, 12);
  fill("black");
  circle(400, 730, 48, 12);
  circle(500, 730, 48, 12);
  fill("grey");
  circle(400, 730, 19, 12);
  circle(500, 730, 19, 12);
  fill("#a1bbff");
  rect(400, 660, 40, 15);
  rect(400, 635, 20, 15);
  rect(450, 660, 40, 15);
  rect(475, 635, 20, 15);
  square(400, 635, 40, 15);
  square(450, 635, 40, 15);
  square(470, 635, 40, 7);
}

