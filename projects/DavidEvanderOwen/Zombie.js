 

class Dot 
{
  constructor(x,y,clr,clr2) 
  {
    this.x = x
    this.y = y
    this.clr = clr;
    this.clr2 = clr2;
    this.radius = 50;
    this.d = [1,1,3,3,5,5,5,6,7,7];
    this.death = false;
    this.Bulletdistance = 10
    this.hbop = 0
    this.hitmark = false
    this.D = random(this.d)
  }

  ZombieDead(){
    
    for(let i = 0; i < Bullets.length; i++)
    {
      this.Bulletdistance = dist(Bullets[i].BulletX(),Bullets[i].BulletY(),this.x,this.y)

      if(this.Bulletdistance < 30 + Bullets[i].BulletR())
      {
        this.d = this.D - Bullets[i].BulletKB()
        this.death = this.death + 1
        print(this.death)
        Score = Score +1
        print('score = '+ Score)

      }
      else{}
    }
  }
  
  scoreTracker(){return this.score}
  deathtracker(){return this.death;}
  zombieX(X){this.x=X}
  zombieY(Y){this.y=Y}
    
  draw() 
  {
    push()
    translate(this.x,this.y)//this.pos.x, this.pos.y)
    rotate(this.rotate)
    zombiedrawn(0,0,this.clr,this.clr2)
    pop()
  }

  dotmove() 
  {
    if(keyIsDown(68))
    {
      if(Player1.playerX() > 800)
      {
        if(PlyrCldedRIGHT == false)
        {
          this.x = this.x - 3
        }
        if(gameOver == true)
        {
          this.x = this.x + 3
        }
      }
    }

    if(keyIsDown(65))
    {
      if(Player1.playerX() < 200)
      {
        if(PlyrCldedLEFT == false)
        {
          this.x = this.x + 3
        }
        if(gameOver == true)
        {
          this.x = this.x - 3
        }
      }
    }

    if(keyIsDown(83))
    {
      if(Player1.playerY() > 800)
      {
        if(PlyrCldedDOWN == false)
        {
          this.y = this.y - 3
        }  
        if(gameOver == true)
        {
          this.y = this.y + 3
        }
      }
    }

    if(keyIsDown(87)) 
    {
      if(Player1.playerY() < 200)
      {
        if(PlyrCldedUP == false)
        {
          this.y = this.y + 3
        }        
        if(gameOver == true)
        {
          this.y = this.y - 3
        }
      }
    }

    // this.D = random(this.d)

    //follwowinf player
    var m = createVector(this.x - Player1.playerX(), this.y - Player1.playerY());
    m.normalize();
    //Set d equal to the speed
    this.x -= m.x * random(this.d);
    this.y -= m.y * random(this.d);

    this.D = random(this.d)

    //looking funcrtion
    if(Player1.playerX()>this.x)
    {
      let Opposite = Player1.playerY() - this.y;
      let Adjacent = Player1.playerX() - this.x;

      let Hypotonose = sqrt((Adjacent*Adjacent) + (Opposite*Opposite))

      this.rotate = asin(Opposite/Hypotonose)
    }
    else
    {

      let Opposite = Player1.playerY() - this.y;
      let Adjacent = Player1.playerX() - this.x;
      let Hypotonose = sqrt((Adjacent*Adjacent) + (Opposite*Opposite))
      this.rotate = ((asin(Opposite/Hypotonose))*-1)+PI

      
    }  
  }

  hitbox()
  {
    
    let fence1hit = lineCollision( Map1.Fence1X1(), Map1.Fence1Y1(), Map1.Fence1X2(), Map1.Fence1Y2(),this.x,this.y,this.radius)

    let fence2hit = lineCollision( Map1.Fence2X1(), Map1.Fence2Y1(), Map1.Fence2X2(), Map1.Fence2Y2(),this.x,this.y,this.radius)

    let fence3hit = lineCollision( Map1.Fence3X1(), Map1.Fence3Y1(), Map1.Fence3X2(), Map1.Fence3Y2(),this.x,this.y,this.radius)

    let fence4hit = lineCollision( Map1.Fence4X1(), Map1.Fence4Y1(), Map1.Fence4X2(), Map1.Fence4Y2(),this.x,this.y,this.radius)
    
    
    let House1Hit = RectCollsion (this.x, this.y, this.radius, Map1.House1X(), Map1.House1Y(), Map1.House1RW(), Map1.House1RH())
    
    let PCarHit = RectCollsion(this.x, this.y, this.radius-2, Map1.PCarX(), Map1.PCarY(), Map1.PCarWidth(), Map1.PcarHeight());
    
    this.Playerdistance = dist(Player1.playerX(),Player1.playerY(),this.x,this.y)

    noStroke()
    fill(255,255,255,this.hbop)
    push()
    translate(this.x,this.y)
    rotate(this.rotate)
    circle(0,0,60)
    pop()
 
    
    if(this.Playerdistance < 30 + 30)
    {
      this.d = this.D - 3
      print("player Health: "+ PlayerHealth)

      PlayerHealth = PlayerHealth - .5
    }
    else if(PCarHit || House1Hit)
    {

      this.d = this.D -.5
      
      //looking bottom right
      if(this.rotate > radians(0) && this.rotate < radians(90))
      {
        if(this.x < Map1.PCarX() || this.x < Map1.House1X()){
          this.y = this.y + 2
          this.x = this.x - 6
        }
        if(this.y < Map1.PCarY() || this.y < Map1.House1Y()){
          this.x = this.x + 2
          this.y = this.y - 6
        }
      }//looking bottom left
      else if(this.rotate > radians(90) && this.rotate < radians(180))
      {
        if(this.x > Map1.PCarX() + Map1.PCarWidth() || this.x > Map1.House1X() + Map1.House1RW()){
          this.y = this.y + 2
          this.x = this.x + 6
        }
        if(this.y < Map1.PCarY() || this.y < Map1.House1Y()){
          this.x = this.x - 2
          this.y = this.y - 6
        }
      } //looking top left 
      else if(this.rotate > radians(180) && this.rotate < radians(270))
      {
        if(this.x > Map1.PCarX() + Map1.PCarWidth() || this.x > Map1.House1X() + Map1.House1RW()){
          this.y = this.y - 2
          this.x = this.x + 6
        }
        if(this.y > Map1.PCarY() + Map1.PcarHeight() || this.x > Map1.House1Y() + Map1.House1RH()){
          this.x = this.x - 2 
          this.y = this.y + 6
        }
      }//looking top right
      else if(this.rotate > radians(270) && this.rotate < radians(360))
      {
        if(this.x < Map1.PCarX() || this.x < Map1.House1X()){
          this.y = this.y - 2
          this.x = this.x - 6
        }
        if(this.y > Map1.PCarY() + Map1.PcarHeight() || this.x > Map1.House1Y() + Map1.House1RH()){
          this.x = this.x + 2
          this.y = this.y + 6
        }
      }
    }
    else if(fence1hit || fence2hit)
    {
      this.d = this.D - 4

      //looking bottom right
      if(this.rotate > radians(0) && this.rotate < radians(90)){
        this.x = this.x + 2
      }//looking bottom left
      else if(this.rotate > radians(90) && this.rotate < radians(180)){
        this.x = this.x - 2
      }//looking top left
      else if(this.rotate > radians(180) && this.rotate < radians(270)){
        this.x = this.x - 2
      }//looking top right
      else if(this.rotate > radians(270)){
        this.x = this.x + 2
      }
    }
    else if( fence3hit || fence4hit){
      this.d = this.D - 4
      //looking bottom
      if(this.rotate > radians(0) && this.rotate < radians(180)){
        this.y = this.y + 2
      }//looking top
      else if(this.rotate > radians(180)){
        this.y = this.y - 2
      }
    }
    else
    {
      this.d = this.D + 3
    }
    //https://www.perplexity.ai/search/0625ee64-5715-4e53-98ab-64ce0c4555c5?s=u. (for collision in bewteen zombie duplicates)
  }


}

function zombiedrawn(x,y,c1,c2)
{
  rotate(radians(270))
  noStroke()

  //arm

  //left
  fill(c1)
  rect(x-25,y-5,13,50)
  //right
  rect(x+12,y-5,13,50)

  //body
  fill(c2)
  rect(x-25,y-5,50,15)

  //head
  fill(c1)
  ellipse(x,y,25,25)

}
function RectCollsion(cx, cy, rad, rx, ry, rw, rh) 
{
  var testX = cx;
  var testY = cy;

  if(cx < rx)
  {
    testX = rx;
  }
  else if(cx > rx+rw)
  {
    testX = rx+rw;
  }

  if(cy < ry)
  {
    testY = ry;
  }
  else if(cy > ry+rh)
  {
    testY = ry+rh;
  }

  let d = dist(cx, cy, testX, testY);

  if (d <= rad) 
  {
    return true;
  }
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