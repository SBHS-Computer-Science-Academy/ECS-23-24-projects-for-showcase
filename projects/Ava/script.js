let s0;
let s1;
let s2;
let s3;
let s4;
let s5;
let s6;


function setup() {
  createCanvas(700,600);
  background('#acc8fa');
  s0 = new Flake(50, 60, '#ed133b', 1.4);
  s1 = new Snowflake(150, 0, '#ed133b', 1.6);
  s2 = new Snowflake(250, 80, '#ed133b', 1.8);
  s3 = new Flake(350, 10, '#ed133b', 1.3);
  s4 = new Snowflake(450, 80, '#ed133b', 1.8);
  s5 = new Snowflake(550, 20, '#ed133b', 1.5);
  s6 = new Flake(650, -10, '#ed133b', 1.3);
  
}

function draw() 
{
 background('#acc8fa'); 
  fill('#b6cffa')
rect(40,40,620,520);
  textSize(30);
  fill(0,0,0);
  stroke('#6f87b0');
  strokeWeight(1);
  fill("#122533")
  text("Merry Christmas!",70,80)
  textSize(20)
  text("\n \t Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n \n eiusmod tempor incididunt ut labore et dolore magna aliqua. \n \nUt enim ad minim veniam, quis nostrud exercitation ullamco \n \nlaboris nisi ut aliquip ex ea commodo consequat. Duis aute \n \n irure dolor in reprehenderit",50,130);
  fill(255,255,255);
  s0.drawFlake();
s0.move();
  s1.drawSnowflake();
s1.move();
  s2.drawSnowflake();
s2.move();
  s3.drawFlake();
s3.move();
   s4.drawSnowflake();
s4.move();
   s5.drawSnowflake();
s5.move();
   s6.drawFlake();
s6.move();
}

