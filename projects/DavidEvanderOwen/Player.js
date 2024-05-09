class Player
{
  constructor()
  {
    this.x = 500
    this.y = 500
    this.clr = "#fffff"
    this.rotate = 0;
    this.RectWidth = 0;
    this.shoot = false;
    this.Speed = 0;
    this.radius = 30;
    this.HbOp = 0
    this.Hbarclr = '#00ff00'
    this.enter = false;
  }

  movePlayer()
  { 
    let fence1hit = lineCollision( Map1.Fence1X1(), Map1.Fence1Y1(), Map1.Fence1X2(), Map1.Fence1Y2(),this.x,this.y,this.radius)
    
    let fence2hit = lineCollision( Map1.Fence2X1(), Map1.Fence2Y1(), Map1.Fence2X2(), Map1.Fence2Y2(),this.x,this.y,this.radius)

    let fence3hit = lineCollision( Map1.Fence3X1(), Map1.Fence3Y1(), Map1.Fence3X2(), Map1.Fence3Y2(),this.x,this.y,this.radius)
      
    let fence4hit = lineCollision(Map1.Fence4X1(), Map1.Fence4Y1(), Map1.Fence4X2(), Map1.Fence4Y2(),this.x,this.y,this.radius)

    let enterhousehit = RectCollsion(this.x, this.y, this.radius, Map1.EnterHouseX(),Map1.EnterHouseY(),40,50)


    let insdideroom = RectCollsion(this.x,this.y,this.radius, Map1.House1X()+20,Map1.House1Y()+20,Map1.House1RW()-40,Map1.House1RH()-40)
    
    //left top
    let Wall1Hit = lineCollision(Map1.HouseWall1X(),Map1.HouseWall1Y1(),Map1.HouseWall1X(), Map1.HouseWall1Y2(),this.x,this.y,this.radius )

    //left down
    let Wall2Hit = lineCollision(Map1.HouseWall1X(),Map1.HouseWall2Y1(),Map1.HouseWall1X(), Map1.HouseWall2Y2(),this.x,this.y,this.radius)

    //right
    let Wall3Hit = lineCollision(Map1.HouseWall3X(),Map1.HouseWall4Y(),Map1.HouseWall3X(), Map1.HouseWall5Y(),this.x,this.y,this.radius)

    //up
    let Wall4Hit = lineCollision(Map1.HouseWall1X(),Map1.HouseWall4Y(), Map1.HouseWall4X2(),Map1.HouseWall4Y(),this.x,this.y,this.radius)

    //down
    let Wall5Hit = lineCollision(Map1.HouseWall1X(),Map1.HouseWall5Y(),Map1.HouseWall4X2(), Map1.HouseWall5Y(),this.x,this.y,this.radius)

    //middle left
    let Wall6Hit = lineCollision(Map1.HouseWall1X(),Map1.HouseWall6Y(),Map1.HouseWall6X2(), Map1.HouseWall6Y(),this.x,this.y,this.radius)

    //middle right
    let Wall7Hit = lineCollision(Map1.HouseWall7X(),Map1.HouseWall6Y(),Map1.HouseWall4X2(), Map1.HouseWall6Y(),this.x,this.y,this.radius)
    
    let PCarHit = RectCollsion(this.x, this.y, this.radius, Map1.PCarX(), Map1.PCarY(), Map1.PCarWidth(), Map1.PcarHeight());
    
    if(enterhousehit || insdideroom){
      insideHouse = true        
    }
    else
    {insideHouse = false}

    if(insideHouse == true)
    {
    }
    
    if(keyIsDown(68))//right
    {
      this.Speed = 4
      if(PCarHit && Map1.PCarX() > this.x){
        this.x = this.x - this.Speed
        PlyrCldedRIGHT = true
      }
      else if(fence3hit && this.x < Map1.Fence3X1()){
        this.x = this.x - this.Speed
        PlyrCldedRIGHT = true
      }
      else if(fence4hit && this.x < Map1.Fence4X1()){
        this.x = this.x - this.Speed
        PlyrCldedRIGHT = true
      }
      else if(Wall1Hit && this.x < Map1.HouseWall1X()){
        this.x = this.x - this.Speed
        PlyrCldedRIGHT = true
      }
      else if(Wall2Hit && this.x < Map1.HouseWall1X()){
        this.x = this.x - this.Speed
        PlyrCldedRIGHT = true
      }
      else if(Wall3Hit && this.x < Map1.HouseWall3X()){
        this.x = this.x - this.Speed
        PlyrCldedRIGHT = true
      }
      else if(Wall7Hit && this.x < Map1.HouseWall7X()){
        this.x = this.x - this.Speed
        PlyrCldedRIGHT = true
      }
      else
      {
        this.x = this.x
        PlyrCldedRIGHT = false
      }
      this.x = this.x + this.Speed
    }  
    
    if(keyIsDown(65))//left
    {
      this.Speed = 4
      if(PCarHit && Map1.PCarX() + 100 < this.x){
        this.x = this.x + this.Speed;
        PlyrCldedLEFT = true
      }
      else if(fence3hit && this.x > Map1.Fence3X1()){
        this.x = this.x + this.Speed;
        PlyrCldedLEFT = true 
      }
      else if(fence4hit && this.x > Map1.Fence4X1()){
        this.x = this.x + this.Speed;
        PlyrCldedLEFT = true 
      }
      else if(Wall1Hit && this.x > Map1.HouseWall1X()){
        this.x = this.x + this.Speed
        PlyrCldedLEFT = true
      }
      else if(Wall2Hit && this.x > Map1.HouseWall1X()){
        this.x = this.x + this.Speed
        PlyrCldedLEFT = true
      }
      else if(Wall3Hit && this.x > Map1.HouseWall3X()){
        this.x = this.x + this.Speed
        PlyrCldedLEFT = true
      }
      else if(Wall6Hit && this.x > Map1.HouseWall6X2()){
        this.x = this.x + this.Speed
        PlyrCldedLEFT = true
      }
      else
      {
        this.x = this.x
        PlyrCldedLEFT = false
      }
      this.x = this.x - this.Speed;
    }
    
    if(keyIsDown(87))//up
    {
      this.Speed = 4
      if(PCarHit && Map1.PCarY() + 260 < this.y){
        this.y = this.y + this.Speed;
        PlyrCldedUP = true 
      }
      else if(fence1hit && this.y > Map1.Fence1Y1()){
        this.y = this.y + this.Speed;
        PlyrCldedUP = true 
      }
      else if(fence2hit && this.y > Map1.Fence2Y1()){
        this.y = this.y + this.Speed;
        PlyrCldedUP = true
      }
      else if(Wall4Hit && this.y > Map1.HouseWall4Y()){
        this.y = this.y + this.Speed;
        PlyrCldedUP = true
      }
      else if(Wall5Hit && this.y > Map1.HouseWall5Y()){
        this.y = this.y + this.Speed;
        PlyrCldedUP = true
      }
      else if(Wall1Hit && Map1.HouseWall1Y2() < this.y){
        this.y = this.y + this.Speed;
        PlyrCldedUP = true
      }
      else if(Wall6Hit && Map1.HouseWall6Y() < this.y){
        this.y = this.y + this.Speed;
        PlyrCldedUP = true
      }
      else if(Wall7Hit && Map1.HouseWall6Y() < this.y){
        this.y = this.y + this.Speed;
        PlyrCldedUP = true
      }
      else
      {
        this.y = this.y
        PlyrCldedUP = false
      }
      this.y = this.y - this.Speed;
    }
    
    if(keyIsDown(83))//down
    {
      this.Speed = 4
      
      if(PCarHit && Map1.PCarY() > this.y){
        this.y = this.y - this.Speed;
        PlyrCldedDOWN = true 
      }
      else if(fence1hit && this.y < Map1.Fence1Y1()){
        this.y = this.y - this.Speed;
        PlyrCldedDOWN = true 
      }
      else if(fence2hit && this.y < Map1.Fence2Y1()){
        this.y = this.y - this.Speed;
        PlyrCldedDOWN = true
      }
      else if(Wall4Hit && this.y < Map1.HouseWall4Y()){
        this.y = this.y - this.Speed;
        PlyrCldedDOWN = true
      }
      else if(Wall5Hit && this.y < Map1.HouseWall5Y()){
        this.y = this.y - this.Speed;
        PlyrCldedDOWN = true
      }
      else if(Wall2Hit && this.y < Map1.HouseWall2Y1()){
        this.y = this.y - this.Speed;
        PlyrCldedDOWN = true
      }
      else if(Wall6Hit && this.y < Map1.HouseWall6Y()){
        this.y = this.y - this.Speed;
        PlyrCldedDOWN = true
      }
      else if(Wall7Hit && this.y < Map1.HouseWall6Y()){
        this.y = this.y - this.Speed;
        PlyrCldedDOWN = true
      }
      else
      {
        this.y = this.y
        PlyrCldedDOWN = false
      }
      this.y = this.y + this.Speed;
    }
    
    if(this.x > 804){
      this.Speed = 4
      this.x = this.x - this.Speed;
    } 
    
    if(this.x < 196){
      this.Speed = 4
      this.x = this.x + this.Speed;
    }
    
    if(this.y > 804){
      this.Speed = 4
      this.y = this.y - this.Speed;
    } 
    
    if(this.y < 196){
      this.Speed = 4
      this.y = this.y + this.Speed;
    }

    
    if(mouseX>this.x)
    {
      let Opposite = mouseY - this.y;
      let Adjacent = mouseX - this.x;
      let Hypotonose = sqrt((Adjacent*Adjacent) + (Opposite*Opposite))
      
      this.rotate = asin(Opposite/Hypotonose)
    }
    else
    {

      let Opposite = mouseY - this.y;
      let Adjacent = mouseX - this.x;
      let Hypotonose = sqrt((Adjacent*Adjacent) + (Opposite*Opposite))

      this.rotate = ((asin(Opposite/Hypotonose))*-1)+PI
    }
  }

  playerX(){return this.x }
  playerY(){return this.y}
  PlayerR(){return this.rotate}
  PlayerS(){return this.Speed}
  PlayerRD(){return this.radius}
  setX(newX){this.x=newX}
  setY(newY){this.y=newY}
  setHealth(healthFull){PlayerHealth=healthFull}

  muzzleFlash(){
    muzzleflash
  }
  drawPlayer()
  {
    push()
    translate(this.x,this.y)
    rotate(this.rotate)
    fill(this.clr);
    if(cChange === false)
    {
      playerdrawn(0,0)
    }
    if(cChange === true)
    {
      playerdrawn2(0,0)
    }
    pop()
  }
  drawHealthBar()
  {
    fill(this.Hbarclr)
    rect(this.x-22.5,this.y+30,50,10)
    fill(255,255,255)
    rect(this.x-22.5,this.y+30,this.RectWidth,10)

    this.RectWidth = (50 - PlayerHealth)

    if(this.RectWidth > 50)
    {
      this.RectWidth = 50
      gameOver = true
    }
    if(this.RectWidth > 30)
    {
      LowHlth = true
      this.Hbarclr = '#FFA500'
    }
    else
    {
      this.Hbarclr = '#00FF00'
    }
    if(this.Pickup < 1)
    {
      PlayerHealth = 50
    }

    if(gameOver == true && keyIsPressed== true && key == 'r')
    {
      this.Hbarclr = "#00ff00"
    }
}//https://www.perplexity.ai/search/fa2b53f1-d3d5-4f92-8883-1575eb3b68b9?s=u

  

  hitbox()
  {
    noStroke()
    fill(255,255,255,this.HbOp)
    translate(this.x,this.y)
    push()
    rotate(this.rotate)
    circle(0,0,this.radius*2)
    pop()
  }  
}

function keyPressed()
{
  if (keyCode === 67)
  {
    if(cChange === false){cChange = true}
    else
    {
      cChange = false 
    }
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

function playerdrawn(x,y)
{
  rotate(-1.6)
  noStroke()

  //armour
  fill(30)
  rect(x-17,y-10,34,25)
  
  //arms:
  
  //left
  fill(50)
  push();
  translate(x+15,y-5)
  rotate(.4)
  rect(0,0,13,50)
  pop();
  //right
  push();
  translate(x-28,y)
  rotate(-.4)
  rect(0,0,13,50)
  pop();

  //body
  fill(90)
  beginShape()
  vertex(x-20,y-6)
  vertex(x+20,y-6)
  vertex(x+27,y)
  vertex(x+25,y+10)
  vertex(x-25,y+10)
  vertex(x-27,y)
  endShape(CLOSE)

  //straps  
  stroke(40)
  strokeWeight(3)
  line(x+15,y-6,x+15,y+10)
  line(x-15,y-6,x-15,y+10)
  
  //helmet
  noStroke()
  fill(70)
  ellipse(x,y,25,25)
  fill(50)
  rect(x-5,y-5,10,15)

  //gun
  fill('black')
  rect(x-5,y+30,10,30)
}

function playerdrawn2(x,y)
{
  rotate(-1.6)
  
  stroke(85, 94, 58)
  strokeWeight(.5)

  //arm

  //left
  fill(95, 107, 62)
  push();
  translate(x+17,y-5)
  rotate(.4)
  rect(0,0,12,50)
  pop();
  //right
  push();
  translate(x-28,y)
  rotate(-.4)
  rect(0,0,12,50)
  pop();

  //gloves

  //right:
  fill(89, 92, 61)
  push();
  translate(x+2,y+30)
  rotate(.4)
  rect(0,0,13,13)
  pop();

  //left:
  push();
  translate(x-14,y+35)
  rotate(-.4)
  rect(0,0,13,13)
  pop();
  
  //backpack
  fill(73, 94, 49)
  rect(x-20,y-15,40,10)
  rect(x-10,y-20,20,5)

  //body
  fill(87, 110, 77)
  beginShape()
  vertex(x-20,y-6)
  vertex(x+20,y-6)
  vertex(x+27,y)
  vertex(x+25,y+10)
  vertex(x-25,y+10)
  vertex(x-27,y)
  endShape(CLOSE)

  //helmet
  fill(110, 128, 60)
  rect(x-15,y-5,30,10)
  fill(115, 128, 79)
  ellipse(x,y,25,25)
  fill(110, 128, 60)
  rect(x-5,y-10,10,20)
  
  //gun
  noStroke()
  fill('black')
  rect(x-5,y+30,10,25)
  rect(x-2.5,y+55,5,5)
  rect(x-4,y+58,8,15)
}