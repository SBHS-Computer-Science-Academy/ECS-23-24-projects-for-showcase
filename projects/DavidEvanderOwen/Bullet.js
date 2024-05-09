class Bullet
{

  constructor(X,Y,PX,PY)
  {
    this.speed = 30;
    this.x = PX;
    this.y = PY;
    this.dir = createVector((X - PX),(Y - PY)).normalize()
    this.r = 5;
    this.R = Player1.PlayerR()
    this.BulletKnockback = 5
    this.BlletClsion = false
  }
          
  drawBullet()
  {
    push()
    translate((this.x),(this.y))
    fill(255,255,0);
    stroke(128,128,0); 
    rotate(this.R)
    circle(40,0,this.r);
    pop()
  }

  BlletColided(){return this.BlletClsion}
  
  Collision(){
    let House1Hit = RectCollsion(this.x,this.y, this.r, Map1.House1X(), Map1.House1Y(), Map1.House1RW(), Map1.House1RH())

    if(House1Hit)
    {
      this.BlletClsion = this.BlletClsion + 1
    }
    //else if()
  }

  
  shootBullet() 
  {
    this.x += this.dir.x * this.speed;
    this.y += this.dir.y * this.speed;
  }
  
  BulletX(){return this.x;}
  BulletY(){return this.y}
  BulletR(){return this.r}
  BulletKB(){return this.BulletKnockback}

}

function RectCollsion(cx, cy, rad, rx, ry, rw, rh) 
{
  let testX = cx;
  let testY = cy;

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