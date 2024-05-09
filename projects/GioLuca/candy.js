class Candy
{
  constructor()
  {
    this.x = random (25, width-25);
    this.y = random (25, height-25);
  }

  draw()
  {
    fill(149, 72, 217);
    ellipse(this.x, this.y, 50, 50);
  }
}