class Snake
{
  constructor()
  {
    this.x = 475;
    this.y = 375;
    this.xspeed = 0;
    this.yspeed = 0;
  }

  draw()
  {
    strokeWeight(1);
    fill(222, 29, 38);
    rect(this.x, this.y, 50, 50);
  }

  dir(x, y)
  {
    this.xspeed = x;
    this.yspeed = y;
  }

  move()
  {
  this.x = this.x + this.xspeed*grd;
  this.y = this.y + this.yspeed*grd;

  if(gameOver == true)
  {
    console.log("Game Over")
    alert("You lost! Click 'Ok' to play again.")
    gameOver = false;
  }

  if (this.x < 0 || this.x > 950 || this.y < 0 || this.y > 750) 
    {
      gameOver = true;
      points = 0;
      this.x = 475;
      this.y = 375;
      this.xspeed = 0;
      this.yspeed = 0;
      spd = 2.5;
    } 
  }
} 