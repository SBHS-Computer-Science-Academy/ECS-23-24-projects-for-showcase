let f=222;
let m=222;
function setup()
  
{
  createCanvas(500,700);
  background(10, 209, 63);
}

function draw() 
{
  drawperson(m,f)
  if(keyIsPressed && key == 's')//&& means "and" ie. both the left and the right expressions must be true
  {
    f = f-1;//move up
  }
  if(keyIsPressed && key == 'x')
  {
    f = f+1;//move down
  }
  if(keyIsPressed && key == 'z')
  {
    m  = m-1;//move left
  }
  if(keyIsPressed && key == 'c')
  {
    m = m+1;//move right
  }


  drawHouse( 190,80)  
  drawHouse( 340,45)   
    fill(81, 177, 232)             
  drawHouse( 340, 550)  
  drawHouse( 190, 580)   
  drawHouse(  80,535 )   

  fill(241, 245, 37)
  ellipse( 80,60,180,180)//sun

}
function drawperson(x,y) {
  rect(x+40, y+68, 70, 35)//right hand
   rect(x-55, y+68, 70, 35)//left arm
  rect(x+47,y+150,38,45)//right leg
  rect(x-33,y+150,38, 45)//left leg
  rect(x-18, y+50, 90,100)//body
  rect( x, y , 50,50)////head
}
function drawHouse(x, y) {

  rect(x, y, 50, 50);
  triangle(x, y, x + 25, y - 25, x + 50, y);
  rect(x + 20, y + 25, 10, 25);
}

