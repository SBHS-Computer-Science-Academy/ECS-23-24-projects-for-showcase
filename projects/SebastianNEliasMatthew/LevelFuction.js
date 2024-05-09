function Level (x,y) {
  fill(100);
   rect(x, y+90, width, 125); // Adjust the y-coordinate to position the road horizontally
   // Draw the road
   fill(0);
   rect(x, y+100, width, 100); // Adjust the y-coordinate to position the road horizontally
   // Draw the center line
   for (let i = 0; i < width; i += 20) {
     fill(247, 244, 47);
     rect(i, y+145, 10, 10);

  }
}