class Player {
  constructor(x, y, h, w, v, g) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.v = v;
    this.gravity = g;
    this.j = false;

  }

  Pdraw() {
    fill('red');
    rect(this.x, this.y, this.w, this.h); //h=40 w=30

  }
  Pmove() 
  {
    //print(this.x)

    this.y = this.y + this.v;
    if(keyIsDown(87) && this.j == false && dead==false)//&& means "and" ie. both the left and the right expressions must be true
    {
      jsfx.play()
      this.v = -30;
        this.j = true;
    }
    if (this.j == true) 
    {
      this.v = this.v + 2;

    }

    if (rect < 630 == this.gravity == 0)
      if (keyIsPressed && key == 's') {
        // y = y+1;//move down
      }
   if(keyIsDown(65) && dead==false) {
      this.x = this.x - 10;//move leftD
    }
if(keyIsDown(68) && dead==false) {
      this.x = this.x + 10;//move right
}


    if(this.y>2900)
    {
    this.y=2900;//FLOOR
      this.j=false
    }
    if(this.y>2810 && this.x>300 && this.y<2890 && this.x<630)//TOP
    {
    this.y=2810; 
      this.j=false
    }
    if(this.x>301 && this.y>2810 && this.x<330)//LEFT W
    {
    this.x=300
    }

    if(this.x<630 && this.y>2810 && this.x>570)//RIGHT W
    {
      this.x=630;
    }

  }
  collidesWith(enemy) 
  {

    let distance = dist(this.x, this.y, enemy.x, enemy.y);
    return distance < this.w / 2 + 62 / 2;
  }





}
