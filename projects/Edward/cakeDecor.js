class CakeDecor {
  constructor(clr, decorX, decorY, decorType, decorAngle) {
    this.clr = clr;
    this.dX = decorX;
    this.dY = decorY;
    this.dT = decorType;
    this.dA = decorAngle;
  }

  drawCakeDecor() {
    fill(this.clr);
    strokeWeight(0);
    if (this.dT == 0) {
      ellipse(this.dX, this.dY, 10, 10);
    }
    else if (this.dT == 1) {
      push();
      translate(this.dX, this.dY);
      rotate(this.dA);
      rect(0, 0, 7, 21);
      pop();
    }
    else if (this.dT == 2) {
      push();
      translate(this.dX, this.dY);
      rotate(this.dA);
      beginShape();
      vertex(0, -7);
      vertex(5, 0);
      vertex(7, -4);
      vertex(3, -2);
      vertex(7, 7);
      vertex(0, 3);
      vertex(-7, 7);
      vertex(-3, -2);
      vertex(-7, -4);
      vertex(-5, 0);
      endShape();
      pop();
    }
    strokeWeight(1);
  }
}