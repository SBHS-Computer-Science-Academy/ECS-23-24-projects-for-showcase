class firework {
  constructor(xStart, yStart, s) {
    this.x = xStart;
    this.y = yStart;
    this.speed = s;
    this.visable = true;
  }

  drawFirework() {
    if (this.visable === true) {
      noStroke()
      fill(255)
      rect(this.x, this.y - 30, 30, 15)
      rect(this.x, this.y, 30, 15)
      fill(255, 0, 0)
      rect(this.x, this.y - 15, 30, 15)
      rect(this.x, this.y - 45, 30, 15)
      fill(66, 49, 1)
      rect(this.x + 10, this.y + 15, 10, 30)
      fill(255)
      triangle(this.x, this.y - 45, this.x + 30, this.y - 45, this.x + 15, this.y - 70)
    }
  }
  moveUp() {
    this.y = this.y - this.speed;
    if (this.y < 150) {
      this.visable = false
    }
    if (this.visable === false) {
      this.y = -1000
    }
  }
}