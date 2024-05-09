
class Flake extends Snowflake 
 {


    drawFlake()
    {
      noStroke();
      rect(this.x, this.y-60-12,2,30);
      rect(this.x, this.y-60-12,30,2);
      rect(this.x, this.y-60-12,-30,2);
      rect(this.x, this.y-60-12,2,-30);
      rect(this.x-25, this.y-60-15, 2,15);
      rect(this.x+20, this.y-60-15, 2,15);
      rect(this.x-5, this.y-60-35, 15,2);
      rect(this.x-5, this.y-50,15,2);

      rect(this.x-3, this.y-60-30,10,3);
      rect(this.x-3, this.y-55,10,3);
      rect(this.x-20, this.y-60-14,3,10);
      rect(this.x+15, this.y-60-14,3,10);

      rect(this.x-3, this.y-42,8,8);
      rect(this.x-3, this.y-110,8,8);
      rect(this.x+30, this.y-75, 8, 8);
      rect(this.x-36, this.y-75, 8, 8);

      ellipse(this.x+1,this.y-71,9);

    }


 }
