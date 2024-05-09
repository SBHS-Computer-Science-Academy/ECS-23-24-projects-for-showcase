
class Snowflake
  {
    constructor(xStart, yStart, clr, vStart)
    { 
      this.x = xStart;
      this.y = yStart;
      this.clr = clr;
      this.velocity = vStart;

    }

    drawSnowflake()
    {
      noStroke();
      rect(this.x, this.y-60-10,2,30);
      rect(this.x, this.y-60-10,30,2);
      rect(this.x, this.y-60-10,-30,2);
      rect(this.x, this.y-60-10,2,-30);
      rect(this.x-25, this.y-60-15, 2,15);
      rect(this.x+20, this.y-60-15, 2,15);
      rect(this.x-5, this.y-60-35, 15,2);
      rect(this.x-5, this.y-50,15,2);

      rect(this.x-3, this.y-60-30,10,3);
      rect(this.x-3, this.y-55,10,3);
      rect(this.x-20, this.y-60-14,3,10);
      rect(this.x+15, this.y-60-14,3,10);

      ellipse(this.x+2, this.y-40,8,8);
      ellipse(this.x+2, this.y-100,8,8);
      ellipse(this.x+30, this.y-69, 8, 8);
      ellipse(this.x-30, this.y-69, 8, 8);

      rect(this.x-3,this.y-73,9);

    }

    move()
    {
      this.y = this.y + this.velocity;

    }
  }
