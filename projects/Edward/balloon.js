class Balloon {
  constructor(clr, s, xStart, yStart)
  {
    this.clr = clr;
    this.speed = s;
    this.x = xStart;
    this.y = yStart;
  }

  drawBalloon()
  {
    fill(this.clr);
    ellipse(this.x, this.y, 30,15);
  }
}