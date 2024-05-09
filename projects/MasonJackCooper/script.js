//NAME: 1 Box, 2 box, Red Box, Blue Box
let EnemyArray = [];
let platformArray = [];
let jsfx;
let explode;
let jump = false;
let dead = false;
let x = 0;
let y = 400;
let groundY = 300;
//let yVel = 0
////let gravity = 5a
//let w =30
//let h = 40
let boxX = 10;
let boxY = 10;
let boxW = 30;
let boxH = 30;
let up = false;
let par = false;
let Player1;
let flag1;
let collide = false;
let s = 20;


function preload() {
  jsfx = loadSound('jumpsfx.mp3')
  explode = loadSound('explo.wav')
}
function setup() {
  createCanvas(1500, 3000);//add WEBGL here if you want to do a project in 3D
  background(0, 0, 0);

  //EnemyArray.push(new Enemy(10, 2930, '#ffffff', 3, 270, 1));
  EnemyArray.push(new Enemy(335, 2845, '#ffffff', 1.2, 570, 335));
  EnemyArray.push(new Enemy(150, 2100, '#ffffff', 1.4, 300, 150));// sandy enemy
  EnemyArray.push(new Enemy(440, 1700, '#ffffff', .9, 600, 440));//green enemy
  EnemyArray.push(new Enemy(250, 1800, '#ffffff', .8, 350, 250));
  EnemyArray.push(new Enemy(50, 1600, '#ffffff', 1, 150, 50));
  EnemyArray.push(new Enemy(390, 2380, '#ffffff', 2, 390, 200));//yellow enemy
  EnemyArray.push(new Enemy(30, 1200, '#ffffff', 1.5, 150, 30));//GRAY 
  EnemyArray.push(new Enemy(750, 1500, '#ffffff',30, 1190, 750));//orange 3
  platformArray.push(new platform(900, 2680, 250, 100, '#fc03ad'));//pink
  platformArray.push(new platform(725, 2380, 250, 100, '#a6fbff'));//lightblue
  platformArray.push(new platform(200, 2380, 250, 100, '#fffc30'));//yellow
  platformArray.push(new platform(500, 1680, 100, 50, '#17bf44' ));// light greeen 
  platformArray.push(new platform(640, 2200, 100, 50,'#cd19ff'));//purp
  platformArray.push(new platform(150, 2100, 200, 50, '#ffdc8a'));//sandy yellow
   platformArray.push(new platform(500, 1900, 200, 50,'#ff9b99'));//salmon
   platformArray.push(new platform(750, 1650, 500, 50, '#ff9100'));//orange1
   platformArray.push(new platform(750, 1370, 500, 50, '#ff9100'));//orange3
  platformArray.push(new platform(800, 1500, 400, 50, '#ff9100'));//orange2
   platformArray.push(new platform(50, 1400, 200, 50, '#b722bf'));//magenta
   platformArray.push(new platform(400, 1400, 75, 50, '#b722bf'));//Megenta 2
   platformArray.push(new platform(250, 1000, 2000, 50, '#870909'));//maroon
   platformArray.push(new platform(50, 1600, 150, 50,'#107e94'));//turquoise
   platformArray.push(new platform(50, 1200, 150, 50, '#605a63'));//grey
  platformArray.push(new platform(300,1700, 50, 50, '#ccffe2'));//mint
  Player1 = new Player(200, 2600, 40, 30, 5, 5);
  flag1 = new flag(1000,400);

}

function draw() {
  background(0, 0, 0);//redraw the background to cover the old rect
  //put this in player.js
  y = y + y;
  fill(0, 0, 200);

  rect(330, 2850, 300, 100);
  rect(boxX, boxY + 2930, boxW + 6500, boxH);//2420



  hit = false
  for (let i = 0; i < platformArray.length; i = i + 1) {
    platformArray[i].drawplatform();
    if (platformArray[i].hitplatform(Player1)) {
      hit = true;
      print('hit');

    }
  }
  Player1.Pdraw();
  Player1.Pmove();
  for (let i = 0; i < EnemyArray.length; i = i + 1) {
    EnemyArray[i].drawEnemy();
    EnemyArray[i].moveLtoR();
    Player1.collidesWith(EnemyArray[i]);

    if (Player1.collidesWith(EnemyArray[i])) {
      collide = true;
      print('collision');
      fill('red');
      ellipse(250, 350, s, s);
      fill('orange');
      ellipse(250, 350, s / 2, s / 2);
      fill('yellow');
      ellipse(250, 350, s / 4, s / 4);
      s = s + 80;
      up = true
      
      
      
    }
    flag1.fdraw();
    flag1.end(Player1);
    if (collide == true) {
      print('collision');
      fill('red');
      ellipse(Player1.x, Player1.y, s, s);
      fill('orange');
      ellipse(Player1.x, Player1.y, s / 2, s / 2);
      fill('yellow');
      ellipse(Player1.x, Player1.y, s / 4, s / 4);
      s = s + 80;
      
      fill(0)
      textSize(40);
      text("Good Try, press the reload button to START OVER",Player1.x-200,Player1.y);
      dead=true;
      par = true;
      
    }

  }
  if (up == true)
  {
    explode.play()
    up = false;
  
  }
    
  



}