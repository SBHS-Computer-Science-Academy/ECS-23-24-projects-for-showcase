class Enemy {
  constructor(x, y, clr, s,m,n) {
    this.clr = clr;
    this.speed = s;
    this.x = x;
    this.y = y;
    this.m = m;
    this.n = n;
  }

  drawEnemy() {
    fill('black');
    rect(this.x, this.y, 62, 5);
    fill('white');
    textAlign(LEFT);
    text('ლ(ಠ益ಠ)ლ', this.x, this.y);

  }

  moveLtoR() {
    if (par == false){
    this.x = this.x + this.speed;
    if (this.x > this.m) {
      this.speed = -this.speed;
    }
    else if (this.x < this.n) {
      this.speed = -this.speed;
    }
    }
    else{
      this.y = this.y + 1000;
    }
  }

 

  
}