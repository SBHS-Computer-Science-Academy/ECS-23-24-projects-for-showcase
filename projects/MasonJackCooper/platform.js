class platform {
  constructor(x, y, w, h, clr) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.clr = clr; 
  }
  drawplatform() {
    fill(this.clr)
    rect(this.x, this.y, this.w, this.h);
  }
  hitplatform(player) {

    if (player.y + player.h > this.y && player.x + player.w > this.x+10 && player.x < this.x + this.w -10 && player.y < this.y + this.h ) {
      player.y = this.y - player.h
      
      print('hit')
      if(player.v > 0)
      {
        player.j = false;
      }
      
    }
    // if (player.y < this.y + this.h && player.y > this.y + this.h - 20 && player.x + player.w > this.x && player.x < this.x + this.w) {
    //   //player.y = this.y + this.h;
    //   player.j = false;
    //   player.v=-player.v
   // }
    if (player.x + player.w > this.x && player.y > this.y && player.y < this.y + this.h && player.x < this.x + 20) {
      player.x = this.x - 30
     // player.j = false;

    }
    if (player.x < this.x + this.w && player.y > this.y && player.x + player.w > this.x + this.w-20 && player.y < this.y + this.h) 
    {
      player.x = this.x + this.w
    //  player.j = false;

    }

  }
}