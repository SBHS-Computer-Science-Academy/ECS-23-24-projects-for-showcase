class explosion {
  constructor(xStart, yStart, wStart, hStart) {
    this.x = xStart;
    this.y = yStart;
    this.w = wStart;
    this.h = hStart;
    this.clr = color(random(255), random(255), random(255));
    this.vis = true;
  }
  drawexplosion() {
    fill(this.clr)
    ellipse(this.x, this.y, this.w, this.h)
  }
  boom() {
    if (this.vis = true) {
      for (let i = 0; i < 10; i = i + 5) {
        this.w = this.w + i
        this.h = this.h + i
      }
      if (this.w > 500) {
        this.vis = false
      }
      if (this.vis === false) {
        this.w = 0
        this.h = 0
        this.x = 1000
      }
    }
  }
}