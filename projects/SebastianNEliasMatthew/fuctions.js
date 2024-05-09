let img;


function drawDetailedRock(x, y, size) {
  fill(150); // Gray color for the rock
  beginShape();
  vertex(x, y);
  vertex(x + size * 0.2, y - size * 0.2);
  vertex(x + size * 0.4, y);
  vertex(x + size * 0.5, y + size * 0.2);
  vertex(x + size * 0.2, y + size * 0.3);
  vertex(x - size * 0.2, y + size * 0.1);
  endShape(CLOSE);
}


function tree(x, y) {
  // Draw a small tree
  fill(139, 69, 19); // Brown color for the tree trunk
  rect(x, y, 10, 40); // Tree trunk

  fill(34, 139, 34); // Green color for the tree canopy
  ellipse(x+5, y, 30, 30); // Tree canopy
}


function pond(x,y){
  // Draw a pond
  fill(0, 191, 255); // Blue color for the water
  ellipse(x, y, 100, 50); // Position and size of the pond
fill('#309c4d')
  //PLANT
arc(x+14, y-5, 15, 15, 4, - 10);
}


function rock(x,y) {
// Draw a small rock
fill(100); // Gray color for the rock
ellipse(x, y, 30, 30); // Rock shape
}




function preload() //load the image in the preload function to make sure it loads before the program runs
{
  //image is from http://pngimg.com/imgs/animals/rabbit/
  img = loadImage('deathscreen.jpg');//load the image from the file you upload
}





function drawBush(x, y) {
  for (let i = 0; i < 5; i++) {
    let offsetX = random(-5, 5);
    let offsetY = random(-5, 5);
    fill(34, 139, 34);
    noStroke();
    ellipse(x, y-7, 15, 15);
    ellipse(x+7, y, 15, 15);
    ellipse(x-7, y, 15, 15);
    ellipse(x, y+4, 15, 15);
    ellipse(x+4, y-4, 15, 15);
    ellipse(x-4, y-4, 15, 15);
    fill(165, 42, 42); // red color for the berries
    noStroke();
    ellipse(x-3, y+2, 5, 5);
    ellipse(x+5, y-2, 5, 5);
    ellipse(x-6, y-3, 5, 5);

  }
}