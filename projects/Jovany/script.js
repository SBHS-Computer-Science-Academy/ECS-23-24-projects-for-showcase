

let sunx = 100
let suny = 100
let carx = 100
let cary= 100
function setup() 
{
  let x = 100
  let y = 100
  createCanvas(800,700);
  background('#56c2fc');

}

function draw ()
 {
   drawsun(sunx,suny)
   drawback()
   drawcar(carx,cary)
 carx = carx+15;
 sunx = sunx- 2;
 }  

function drawback() 
{

  noStroke();
  fill('#0b541e');
  ellipse(400,378,800,100);//top grass
  rect(0,380,1000,500);//grass
  fill('#001ca6');
  ellipse(250,490,420,200);//pond
  fill('#5c3a00');
  rect(500,200,100,300);//tree trunk
  ellipse(550,500,100,50);//tree roots
  fill('#0b541e');
  ellipse(500,200,200,200);//left leaf
  ellipse(550,150,200,200);//midle leaf
  ellipse(600,200,200,200);//right leaf
  fill('#4d4c4b');
  rect(0,600,1000,120);//road
  fill('#e6cd15');
  rect(0,650,1000,10);//road line
  stroke('#000000');
  fill('#ffffff'); 
}




function drawsun(x,y) 
{
  background('#56c2fc');
  fill('#ffe600')
  ellipse(x+650,y+0,100,100)
  fill('#ffffff'); 
}


function drawcar(x,y) 
{
  
  fill('#242424');
  ellipse(x-20,y+470,90,90);//left wheel back
  ellipse(x+210,y+470,90,90);//right wheel back
  ellipse(x,y+500,90,90);//left wheel front 
  ellipse(x+220,y+500,90,90);//right wheel front
  fill('#363636');
  rect(x-80,y+360,380,100,10,10);//bottem car front 
  rect(x-30,y+300,230,100,20,20);//top car front
  rect(x-30,y+320,230,105,20,20);//top car back
  rect(x-80,y+380,380,100,10,10);//bottem car back 
  fill('#004480');
  rect(x+100,y+330,80,50,10,10);//window front
  rect(x,y+330,80,50,10,10);//window back

}