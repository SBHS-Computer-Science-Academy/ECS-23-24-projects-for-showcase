class LEVEL{
  constructor(x,y) {
  this.x = x
  this.y = y 
    this.cars = [];
    for (let i = 0; i < 1.5; i++) { // Adjust the number of cars here
    cars.push(new Car(y+140));
    cars.push(new Car(y+110));
    }
}

  drawLEVEL()
  {
    //draw road
    fill(100);
     rect(this.x, this.y+90, width, 125);
     fill(0);
     rect(this.x, this.y+100, width, 100);
     for (let i = 0; i < width; i += 20) {
       fill(247, 244, 47);
       rect(i, this.y+145, 10, 10);
     }
       //draw cars
       for (let i = 0; i < cars.length; i++) {
         cars[i].display();
         cars[i].move();
         frog.collison(cars[i]);
       }
   }
  }