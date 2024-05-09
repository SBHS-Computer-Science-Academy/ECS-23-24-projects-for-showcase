class Layout
{
  constructor()
  {
    this.x = 0
    this.y = 0
    this.Yline = []
    
    this.PcarX = this.x +200
    this.PcarY = this.y + 400
    this.PcarW = 100
    this.PcarH = 260
    this.house1X = this.x + 960
    this.house1Y = this.y + 300
    this.house1RW = 370
    this.house1RH = 520
  }

  drawBack1()
  {
    Back1(this.x,this.y)
    house(this.house1X, this.house1Y)
    policecar(this.PcarX,this.PcarY) 
    push()
    crack(this.PcarX+55,this.PcarY+65)
    pop()
    if( gameOver == true && keyIsPressed== true && key == 'r')
    {
      this.PcarX = this.x +200
      this.PcarY = this.y + 400
      this.house1X = this.x + 960
      this.house1Y = this.y + 300
    }
  }
  HouseRoof(){
    houseroof(this.house1X,this.house1Y)
  }

  Fence1X1(){return this.house1X + 10}
  Fence1Y1(){return this.house1Y + 10}
  Fence1X2(){return this.house1X + 260}
  Fence1Y2(){return this.house1Y + 10}
  
  Fence2X1(){return this.house1X + 10}
  Fence2Y1(){return this.house1Y + 495}
  Fence2X2(){return this.house1X + 260}
  Fence2Y2(){return this.house1Y + 495}

  Fence3X1(){return this.house1X + 10}
  Fence3Y1(){return this.house1Y + 10}
  Fence3X2(){return this.house1X + 10}
  Fence3Y2(){return this.house1Y + 200}

  Fence4X1(){return this.house1X + 10}
  Fence4Y1(){return this.house1Y + 300}
  Fence4X2(){return this.house1X + 10}
  Fence4Y2(){return this.house1Y + 490}

  EnterHouseX(){return this.house1X + 210}
  EnterHouseY(){return this.house1Y + 95}

  HouseWall1X(){return this.house1X+250}
  HouseWall1Y1(){return this.house1Y}
  HouseWall1Y2(){return this.house1Y+85}
  
  HouseWall2Y1(){return this.house1Y+155}
  HouseWall2Y2(){return this.house1Y+500}

  HouseWall3X(){return this.house1X+600}
  HouseWall4X2(){return this.house1X+600}
  
  HouseWall4Y(){return this.house1Y}
  HouseWall5Y(){return this.house1Y+500}

  HouseWall6Y(){return this.house1Y+245}
  HouseWall6X2(){return this.house1X+465}

  HouseWall7X(){return this.house1X+535}

  House1X(){return this.house1X + 240}
  House1Y(){return this.house1Y - 10}
  House1RW(){return this.house1RW}
  House1RH(){return this.house1RH}
  PCarX(){return this.PcarX}
  PCarY(){return this.PcarY}
  PCarWidth(){return this.PcarW}
  PcarHeight(){return this.PcarH}
  BackgroundX(){return this.x}
  BackgroundX(){return this.y}

  setBY(newY){
    this.y=newY
  }
  setBX(newX){
    this.x=newX
  }
       
  
  move()
  {   
    if(keyIsDown(68) && Player1.playerX() > 800)
    {
      this.x = this.x - 3
      this.PcarX = this.PcarX - 3
      this.house1X = this.house1X - 3
      if(gameOver == true)
      {
        this.x = this.x + 3
        this.PcarX = this.PcarX + 3
        this.house1X = this.house1X + 3
      }
      else if(PlyrCldedRIGHT == true)
      {
        this.x = this.x + 3
        this.PcarX = this.PcarX + 3
        this.house1X = this.house1X + 3
      }
    }

    if(keyIsDown(65) && Player1.playerX() < 200)
    {
      this.x = this.x + 3
      this.PcarX = this.PcarX + 3
      this.house1X = this.house1X + 3
      if(gameOver == true)
      {
        this.x = this.x - 3
        this.PcarX = this.PcarX - 3
        this.house1X = this.house1X - 3
      }
      else if(PlyrCldedLEFT == true)
      {
        this.x = this.x - 3
        this.PcarX = this.PcarX - 3
        this.house1X = this.house1X - 3
      }
    }

    if(keyIsDown(83) && Player1.playerY() > 800)
    {
      this.y = this.y - 3
      this.PcarY = this.PcarY - 3
      this.house1Y = this.house1Y - 3
      if(gameOver == true)
      {
        this.y = this.y + 3
        this.PcarY = this.PcarY + 3
        this.house1Y = this.house1Y + 3
      }
      else if(PlyrCldedDOWN == true)
      {
        this.y = this.y + 3
        this.PcarY = this.PcarY + 3
        this.house1Y = this.house1Y + 3
      }
    }

    if(keyIsDown(87) && Player1.playerY() < 200)
    {
      this.y = this.y + 3
      this.PcarY = this.PcarY + 3
      this.house1Y = this.house1Y + 3
      if(gameOver == true)
      {
        this.y = this.y - 3
        this.PcarY = this.PcarY - 3
        this.house1Y = this.house1Y - 3
      }
      else if(PlyrCldedUP == true)
      {
        this.y = this.y - 3
        this.PcarY = this.PcarY - 3
        this.house1Y = this.house1Y - 3
      }
    }
  }
}

function Back1(x,y)
{
  push();

  //background #1

  fill(180,180,180)
  stroke(200,200,200)
  strokeWeight(5)

  for(let i = -2000; i < 2000; i = i + 80){
    line(x+i, y-2000, x+i, y+2000)
  }

  for(let i = -2000; i < 2000; i = i + 80){
    line(x+i, y+2000, x+i, y+2000)
  }

  for(let i = -2000; i < 2000; i = i + 80){
    line(x+1, y+i, x+2000, y+i)
  }

    for(let i = -2000; i < 2000; i = i + 80 ){
     line(x+1, y+i, x-2000, y+i)
   }
  strokeWeight(1)

  noStroke()

    for(let i = -2000; i < 2000; i = i + 80){
      fill(0)
      rect(x+480, y,400,i)
    }

  for(let i = -2000; i < 2000; i = i + 100){
    fill(240, 220, 67)
    rect(x+680,y+i,10,40)
  }
  
}
function RectCollsion(cx, cy, rad, rx, ry, rw, rh) 
{
  let testX = cx;
  let testY = cy;

  if(cx < rx){testX = rx;}
  else if(cx > rx+rw){testX = rx+rw;}

  if(cy < ry){testY = ry;}
  else if(cy > ry+rh) {testY = ry+rh;}

  let d = dist(cx, cy, testX, testY);

  if (d <= rad) {return true;}
  return false;
}

function lineCollision(x1, y1, x2, y2, cx, cy, rad) {
  let inside1 = pointCircle(x1, y1, cx, cy, rad);
  let inside2 = pointCircle(x2, y2, cx, cy, rad);
  if (inside1 || inside2) return true;

  let len = dist(x1, y1, x2, y2);

  let dot = (((cx - x1) * (x2 - x1)) + ((cy - y1) * (y2 - y1))) / pow(len, 2);

  let closestX = x1 + (dot * (x2 - x1));
  let closestY = y1 + (dot * (y2 - y1));

  let onSegment = linePoint(x1,y1,x2,y2, closestX,closestY);
  if (!onSegment) return false;

  let distance = dist(closestX, closestY, cx, cy);

   if (distance <= rad) {
    return true;
  }
  return false;
}

function linePoint(x1, y1, x2, y2, px, py) {
  let d1 = dist(px, py, x1, y1);
  let d2 = dist(px, py, x2, y2);

  let lineLen = dist(x1, y1, x2, y2);

  let buffer = 0.5;

  if (d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer) {
    return true;
  }
  return false;

}

function pointCircle(px, py, cx, cy, size) {
  let d = dist(px, py, cx, cy);

  if (d <= size / 2) {
    return true;
  }
  return false;
}

function policecar(x,y)
{

  //police car:

  //body:
  stroke(0);
  strokeWeight(0)
  fill(5)
  rect(x,y,100,260) 
  // headlights
  fill(255,255,255,230)
  rect(x+5,y+5,25,5)
  rect(x+70,y+5,25,5)
  //roof
  fill(238)
  rect(x,y+80,100,130)
  //front window
  fill(61, 79, 112)
  
  beginShape();
  vertex(x+10,y+110)
  vertex(x+90,y+110)
  vertex(x+95,y+80)
  vertex(x+5,y+80)
  endShape(CLOSE)
  
  //back window
  
  beginShape();
  vertex(x+5,y+210)
  vertex(x+95,y+210)
  vertex(x+90,y+185)
  vertex(x+10,y+185)
  endShape(CLOSE)
  
  //"911"
  textSize(32);
  fill(0);
  text('911', x+25, y+180);
  //"police"
  textSize(25);
  fill(240)
  text('POLICE',x+5,y+60)

  push();
  translate(x+80,y+230)
  fill(240)
  textSize(15)
  rotate(3.15)
  text('POLICE',0,0)
  pop();
  
  //lights
  fill('red'); 
  rect(x+20,y+130,25,15);
  fill('blue')
  rect(x+55,y+130,25,15);

}

function crack(x,y)
{
  //window crack
  translate(10,10)
  push()
  
  stroke(255)
  strokeWeight(1.5)
  fill(61, 79, 112)
  beginShape();
  vertex(x+7.5,y+17.5)
  vertex(x+13.75,y+20)
  vertex(x+10,y+22.5)
  vertex(x+16.25,y+27.5)
  vertex(x+12.5,y+30)
  vertex(x+7.5,y+27.5)
  vertex(x+5,y+27.5)
  vertex(x+6.125,y+22.5)
  vertex(x+3.75,y+20)
  vertex(x+7.5,y+17.5)
  vertex(x+2.5,y+15)
  vertex(x+5,y+11.25)
  endShape()
  
  beginShape()
  vertex(x+5,y+27.5)
  vertex(x+3.75,y+30)
  vertex(x+6.25,y+35)
  endShape()
  beginShape()
  vertex(x+10,y+22.5)
  vertex(x+15,y+23.75)
   vertex(x+20,y+21.25)
  endShape()
  beginShape()
   vertex(x+3.75,y+20)
   vertex(x+2.5,y+17.5)
   vertex(x-1.25,y+7.5)
  endShape()
  beginShape()
   vertex(x+5.625,y+12.5)
   vertex(x+1.25,y+27.5)
   vertex(x-1.25,y+25)
   vertex(x-3.75,y+27.5)
  endShape()
  beginShape()
   vertex(x+11.25,y+29.375)
   vertex(x+8.75,y+32.5)
   vertex(x+13.75,y+35)
   vertex(x+11.25,y+37.5)
  endShape()
  beginShape()
   vertex(x+10,y+18.125)
   vertex(x+11.25,y+16.25)
   vertex(x+10,y+15)
   vertex(x+8.75,y+12.5)
    vertex(x+9.375,y+11.25)
  endShape()
  pop()
}

function house(x,y)
{
 noStroke()
  //front
  fill(180)
  rect(x,y,250,500)

  //pathway
  fill(190)
  rect(x,y+210,150,80)
  rect(x+90,y+80,80,340)
  rect(x+150,y+80,100,80)
  rect(x+150,y+340,100,80)

  // fence
  fill(20)
  rect(x+10,y+10,5,190)
  rect(x+10,y+300,5,190)

  rect(x+10,y+10,240,5)
  rect(x+10,y+490,240,5)

  //stairs 
  fill(160)
  rect(x+210,y+95 ,20,50)
  rect(x+210,y+355,20,50)
  fill(170)
  rect(x+230,y+90 ,20,60)
  rect(x+230,y+350,20,60)

  //inside of house

  //floor
  fill('#8f775d')
  rect(x+250,y,350,500)
  //door
  fill('#635143')
  rect(x+250,y+330,10,100)
  //walls
  fill('#4f4235')
  //top
  rect(x+250,y,350,10)
  //left
  rect(x+250,y,10,70)
  rect(x+250,y+170,10,160)
  rect(x+250,y+430,10,70)
  //bottom
  rect(x+250,y+490,350,10)
  //right
  rect(x+590,y,10,500)
  //middle
  rect(x+250,y+240,200,10)
  rect(x+550,y+240,50,10)
}

function houseroof(x,y)
{
  //fence
  fill(20)
  rect(x+10,y+10,5,190)
  rect(x+10,y+300,5,190)

  rect(x+10,y+10,240,5)
  rect(x+10,y+490,240,5)

  if(insideHouse == false)
  {
    //roof
    fill(184, 122, 103)
    rect(x+240,y-10,370,520)
  }
  else{}
}