class Balloon {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    noStroke();
    fill('white')
    rect(this.x, this.y, 5, 80);

    fill('limegreen')
    stroke(0);
    strokeWeight(2);
    ellipse(this.x, this.y, 50, 70);


  }

  moveup() {
    this.y = this.y - 2

    if (this.y < 0) {
      this.y = 500;
    }
  }

}