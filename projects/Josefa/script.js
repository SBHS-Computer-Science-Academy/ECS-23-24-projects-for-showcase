let cloud1x = 100; // initial x position of the ball
let cloud2x = 95; // initial x position of the ball
let cloud3x=20;
let bee1y= 30;
let bee2y=40;
let bee3y=60;

function setup() 
  {
  createCanvas(500,700);
  background('#bbe0fa');
    drawbee(100,bee1y);
    drawbee(200,bee2y);
    drawbee(10,bee3y);
  drawFlower(100,100);
   drawFlower(2,30);
    drawFlower(200,20);
    drawFlower(-90,73);
    drawFlower(-176,80);
    drawFlower(270,80);
    fill('#b6cfa7' );
  rect(1,640,500, 70);
   drawcloud(cloud1x,100);
    drawcloud(cloud2x,395)
drawcloud( cloud3x,240);
drawcloud(10,171);

   




    
    
}

function draw()
{
  background('#bbe0fa');
      drawbee(100,bee1y);
      drawbee(200,bee2y);
      drawbee(10,bee3y);
    drawFlower(100,100);
     drawFlower(2,30);
      drawFlower(200,20);
      drawFlower(-90,73);
      drawFlower(-176,80);
      drawFlower(270,80);
      fill('#b6cfa7' );
    rect(1,640,500, 70);
     drawcloud(cloud1x,100);
  drawcloud( cloud2x ,110);
  drawcloud(cloud3x,185);
  cloud1x=cloud1x + 5
cloud2x=cloud2x+3
cloud3x=cloud3x+2
bee1y=bee1y+2
  bee2y=bee2y+3
bee3y=bee3y+4
  
}

function drawbee(x,y) {
//bee
  noStroke()
    fill('#f5f38e')//yellow
    ellipse(x+220,y+400,30,20)//bees body
    fill('#010003')//black 
    rect(x+222 ,y+390,5,19);//bee stripes
    rect(x+211,y+392,4,15);//bee's stripes
  fill('#c9c9c9')//grey
  ellipse(x+213,y+382,9,19); //bee's wings
   ellipse(x+220,y+382,9,19);//bee's wings 

  
}


function drawFlower(x,y) {

  //flower
    noStroke();
    fill('#92c489')
    rect(x+190,y+490,10,200,90);//stem
    fill('#fce8a7')//yellow
   ellipse(x+195,y+479,30,30)//middle part of flower
    fill('#f78393')
    ellipse( x+195,y+454,30,40);//pedals of flower
    ellipse( x+197,y+504,30,40); //pedals of flower
    ellipse( x+170,y+480,40,30);//pedals of flower
    ellipse( x+220, y+480,40,30);//pedal of flower 
}

function drawcloud(x,y)
{
  fill('#fcfdff');
   noStroke()
   ellipse( x+43,y-50,45,42);//cloud
  ellipse( x+70,y-40,50,42);//cloud
  ellipse( x+80,y-60,90,42);//cloud
  ellipse(x+70,y-70,60,42);//cloud
}




