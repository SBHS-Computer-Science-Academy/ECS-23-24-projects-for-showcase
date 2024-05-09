var PlyrCldedDOWN = false;
var PlyrCldedUP = false;
var PlyrCldedLEFT = false;
var PlyrCldedRIGHT= false;
var insideHouse = false;
var ZombieBite = false;
var Hitmrk = false;
var GunFlash = false;
var cChange = false;
var LowHlth = false;
let Score =0;
var BlletSht = false;
let gameOver= false;
let Strt = 255;
let Player1;
let playerX = 100
let playerY = 100
let Pause=false;

let Minute = 8;
let Second = 1000;
let timer = 0;
let Time;

let Fastimer;

let Light = 0;

let firerate = 400;
let gametime = 0
var wave = 1

// let Heals = []
// let HealAmount;
// let fps = frameRate();

let PlayerHealth = 50;

let zombieskin = ['#82ad7b','#6e856e','#5f734c']
let zombieclothes = ['#42422d','#6b5c58','#6e6862']

let dots = [];
let zombieamount;

let bulletSound;
let ZombieSound;

let Bullets = [];

function preload(){
  //radioFont = loadFont ('digital-7 (mono).ttf');
}

function setup() 
{
  noCursor();
  createCanvas(windowWidth,windowHeight);
  
  bulletSound = loadSound('1911-.45-ACP-Close-Single-Gunshot-C-www.fesliyanstudios.com.mp3');
  //ZombieSound = loadSound('Zombie-Biting-A2-www.fesliyanstudios.com.mp3')
  
  Player1 = new Player() 
  Map1 = new Layout()

  zombieamount = [8,8,9,9,9,10,10,12,14]  
  // HealAmount = [1,2,3,4,5,0]
    
  for(let i = 0; i < ((random(zombieamount))*(wave/30)); i=i+1)
  {
    dots.push(new Dot(random(windowWidth),random(windowHeight),random(zombieskin),random(zombieclothes)))
  } 

  // r     = 100;
  // angle = 0;
  // step  = TWO_PI/6;
}

function draw() 
{
  
 if(Pause==false)
 {
  if(gametime < millis() && Strt == 0 && gameOver == false && wave < 10){
    gametime = 20000 + millis()
    print('New Wave')
    // PlayerHealth = PlayerHealth + 5
    wave = wave + 1
    for(let i = 0; i < ((random(zombieamount))*(wave/2)); i=i+1)
    {
      dots.push(new Dot(random(windowWidth),random(windowHeight),random(zombieskin),random(zombieclothes)))
    } 
  }

  // for(let i = 0; i < random(HealAmount); i=i+1)
  // {
  //   Heals.push(new Heal(random(0,windowWidth+10),random(0,windowHeight+10)))
  // }

  noStroke();
  background(180)
  Map1.drawBack1();
  Map1.move();

  // for(let i = 0; i < Heals.length; i=i+1){
  //   Heals[i].drawHeal();
  // }
  
  for(let i = 0; i < Bullets.length; i++)
  {
    //if(Bullets[i].BlletColided() < 1)
    //{
      Bullets[i].drawBullet();
      Bullets[i].shootBullet();
      Bullets[i].Collision();
    //}   
  }

  for(let i = 0; i < dots.length; i=i+1)
  {
    if(dots[i].deathtracker() < 5){

      dots[i].draw();
      if(Strt == 0)
      {
        dots[i].dotmove();
      }
      dots[i].hitbox();
      dots[i].ZombieDead();
    }
  }

  push()
  if(gameOver == false && Strt == 0)
  {
    Player1.movePlayer();
  }
  Player1.drawPlayer();
  Player1.drawHealthBar();
  Player1.hitbox();
  pop()

  Map1.HouseRoof();

  background(0,0,0,Light)
   
  // if(Minute >= 10 && Minute <= 12 && Time == 'PM'){
  //   Light = 200
  // }
   
  // if(Minute >= 0 && Minute < 4 && Time == 'AM'){
  //   Light = 200
  // }

  // if(Minute >= 4 && Minute < 5 && Time == 'AM'){
  //   Light = 150
  // }

  // if(Minute >= 5 && Minute < 6 && Time == 'AM'){
  //   Light = 100
  // }

  // if(Minute >= 6 && Minute < 7 && Time == 'AM'){
  //   Light = 50
  // }
   
  // if(Minute >= 7 && Minute <= 12 && Time == 'AM'){
  //   Light = 0
  // }

  // if(Minute >= 1 && Minute < 5 && Time == 'PM'){
  //   Light = 0
  // }

  // if(Minute >= 5 && Minute < 7 && Time == 'PM'){
  //   Light = 50
  // }

  // if(Minute >= 7 && Minute < 9 && Time == 'PM'){
  //   Light = 100
  // }

  // if(Minute >= 8 && Minute < 10 && Time == 'PM'){
  //   Light = 150
  // }

  if(gameOver == false && Strt == 0)
  {
    fill(255)
    Fastimer = millis()*3
    //textFont(radioFont,50)

    
    
    // if(Minute < 10)
    // {
    //   if(timer > 9 && timer < 60)
    //   {
    //     text('0' + Minute +':'+ timer + ' ' +Time,50,50)
    //   }
    //   else
    //   {
    //   text('0'+ Minute + ':0'+ timer + ' ' +Time,50,50)
    //   }
    // }
    // if(Minute >= 10 )
    // {
    //   if(timer > 9 && timer < 60)
    //   {
    //     text(Minute +':'+ timer + ' ' +Time,50,50)
    //   }
    //   else
    //   {
    //   text(Minute + ':0'+ timer + ' ' +Time,50,50)
    //   }
    // }
    
    Time = 'AM'
    if(Minute > 12 )
    {
      Minute = 1
    }

    if(Minute > 11)
    {
      Time = 'PM'
      if(Minute == 0)
      {
        Time = 'PM'
      }
    }

    if (Fastimer > Second){  
      timer = timer +1
      Second+=1000;
    }
    if(timer > 59)
    {
      Minute = Minute + 1
      timer = 0
    }
  }

  noStroke()
  background(0,0,0,Strt)
  fill(255,255,255,Strt)
  textSize(30)
  text('Click Anyware To Start',windowWidth/3,windowHeight/2)
  text('Move With WASD',windowWidth/3,windowHeight/2+50)
  text('Shoot With Mouse',windowWidth/3,windowHeight/2+100)
  text('Pause With ESC',windowWidth/3,windowHeight/2+150)
  text('Change Skin With C',windowWidth/3,windowHeight/2+200)
   
  if(mouseIsPressed){Strt = 0}

  if (mouseIsPressed === true){BlletSht = true;}
  else{Sht = false;}

  if(LowHlth == true)
  {
    fill(100,0,0,80)
    rect(0,0,windowWidth,windowHeight)    
  }
  
  if(gameOver === true)
  {
    noStroke(Strt)
    background(255,0,0,100)
    fill('black')
    textSize(50)
    text('GAME OVER',windowWidth*6/10,windowHeight/4)
    text('SCORE: '+Score,windowWidth*6/10,windowHeight/3)
    fill('black')
    textSize(50)
    text("waves survived: " + wave, windowWidth*6/10,windowHeight/2.5);
    text('PRESS R TO RESTART',windowWidth*6/10,windowHeight/2)
  }
   
  if( gameOver == true && keyIsPressed== true && key == 'r')
  {
    timer = 0 
    Minute = 8
    insideHouse = false
    gameOver=false;
    Player1.setX(500);
    Player1.setY(500);
    background(180);
    Map1.drawBack1();
    Map1.move();
    Player1.drawPlayer();
    Player1.drawHealthBar();
    Player1.hitbox();
    Player1.setHealth(50);
    Map1.setBX(0)
    Map1.setBY(0)
    wave=0
    dots=[]
    LowHlth = false
    Score=0
    
    for(let i = 0; i < ((random(zombieamount))*wave/10); i=i+1)
    {
      dots.push(new Dot(random(windowWidth),random(windowHeight),random(zombieskin),random(zombieclothes)))
    } 
    
  }
   crosshair(mouseX,mouseY,255)
 }
  else{
    fill('white')
    textSize(50)
    text('Paused',windowWidth*4/10,windowHeight/2)
    text("current wave: " + wave, windowWidth*4/10,windowHeight/1.8);
    text('SCORE: '+Score,windowWidth*4/10,windowHeight/1.6)
    crosshair(mouseX,mouseY,255)
  }
}

function mousePressed(){
  
  noStroke();
  if(gameOver === false)
  {
    if (millis() > firerate){
      bulletSound.play();
      
      Bullets.push(new Bullet(mouseX, mouseY, Player1.playerX(), Player1.playerY()))
      
      print('times you shot a bullet')
      firerate+=400;
    }
  }
  //https://www.perplexity.ai/search/translate-if-mouse-DyTWhrhBSia15_gjxnumZg?s=u
}

function crosshair(x,y,op)
{
  stroke(0,0,0,op)
  strokeWeight(.1)
  fill(255,255,255,op)
  rect(x+5,y-1,10,2)
  rect(x-15,y-1,10,2)

  rect(x-1,y+5,2,10)
  rect(x-1,y-15,2,10)
}

function keyReleased(){
  if(keyCode== ESCAPE )
  {
     Pause=!Pause;

    //return false;
  }
  
  // if(Pause==true )
  // {
  //   background(180,0.4)      
  // }
}
