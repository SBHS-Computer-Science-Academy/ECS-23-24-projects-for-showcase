class Frog {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 3.5; // Set the speed for frog movement
  }

  display() {
    fill("#1c9c5c")
    ellipse(this.x, this.y, 15, 15); // body
    fill(255)
    ellipse(this.x - 5, this.y - 5, 5, 5); // left eye
    ellipse(this.x + 5, this.y - 5, 5, 5); // right eye
    fill(0)
    ellipse(this.x - 5, this.y - 5, 1, 1); // left eye
    ellipse(this.x + 5, this.y - 5, 1, 1); // right eye

  }

  move() {
    if (keyIsDown(87)) { // W key
      this.y -= this.speed;
    }
    if (keyIsDown(83)) { // S key
      this.y += this.speed;
    }
    if (keyIsDown(65)) { // A key
      this.x -= this.speed;
    }
    if (keyIsDown(68)) { // D key
      this.x += this.speed;
    }
  }
  collison(car){
    if (this.x > car.x && this.x < car.x + 40 && this.y > car.y && this.y < car.y + 20){
      deathscreen= true;
      img.resize(500,400);//resize the image to have a width of 200 and a proportionately scaled height
      image(img, 0, 0);//display the image at 25,50 
      this.x = 250; this.y =375
    }
    if(deathscreen){
      if(mouseIsPressed)
      {
        deathscreen= false;

      }

      img.resize(500,400);//resize the image to have a width of 200 and a proportionately scaled height
      image(img, camera.x, camera.y);//display the image at 25,50
    }
  }
}