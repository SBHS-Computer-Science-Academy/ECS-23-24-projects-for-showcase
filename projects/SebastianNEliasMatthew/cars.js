
class Car {
  constructor(y) {
    this.x = random(100, 300);
    this.y = y
    this.speed = random(1,3);
    this.color = color(255,0,0); // Set the color of the car
  }

  display() {
    // Car body
    fill(this.color); // Use the random color for the car
    rect(this.x, this.y, 40, 20);

    // Front window
    fill(173, 216, 230);
    rect(this.x + 25, this.y + 1, 15, 13);

    // Driver's body
    fill(0, 0, 255); // Blue color for the body
    rect(this.x + 33, this.y + 8, 4, 6); // Position and size of the driver's body

    // Driver's head
    fill(255, 255, 0); // Yellow color for the head
    ellipse(this.x + 35, this.y + 6, 8, 8); // Position and size of the driver's head

    // Wheels
    fill(0);
    ellipse(this.x + 10, this.y + 20, 10, 10);
    ellipse(this.x + 30, this.y + 20, 10, 10);
  }

  move() {
    this.x += this.speed; // Update the x-coordinate to move the cars sideways
    if (this.x > width) {
      this.x = -40; // Reset the car's position to the left side of the canvas
    }
  }
}