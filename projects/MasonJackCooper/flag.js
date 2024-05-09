class flag {
  constructor(x,y)
  {
    this.x=x;
    this.y=y;
  }
  fdraw()
  {
    fill(0,255,0);
    rect(this.x-259,this.y+30,260,120);
    fill(200,200,200);
    rect(this.x,this.y,10,600);
    
  }
    end(player)
    { 
      if (player.x > this.x && player.y < this.y+600) 
       {
         fill(0,255,0)
      rect(0,0,5000,5000)
         dead=true;
       }
    }
  
}