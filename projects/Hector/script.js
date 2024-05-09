let balloon;
let balloon1;
let cake = false;

function setup() {
  createCanvas(500, 700);
  background('skyblue');
  balloon = new Balloon(450, 500);
  balloon1 = new Balloon(50, 500);
}

function draw() {
  background('cyan');
  fill('brown');
  rect(0, 600, 500, 100);
  noStroke();
  fill('yellow');
  ellipse(500, 0, 200, 200);

  drawCake(200, 400);
  drawTable();
  textSize(50);
  noStroke();
  fill('white')
  text('click the cake',80,350)

  if (mouseIsPressed) { 
    cake = true;
     }
  if(cake == true){
    balloon.draw();
    balloon.moveup();
    balloon1.draw();
    balloon1.moveup();
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text('HAPPY BIRTHDAY 🎂🎉=D', 60, 250);
    noStroke();
    textSize(50);
    fill('cyan');
    text('click the cake',80,350)
  }
}
function drawCake(x, y) {
  noStroke();
  fill(102, 51, 0);
  rect(x, y, 100, 100);
  fill(255, 255, 255);
  rect(x + 10, y + 10, 80, 80);
  fill(102, 51, 0);
  rect(x + 30, y - 30, 40, 40);
  fill(255, 255, 255);
  rect(x + 35, y - 28, 30, 30);
  fill(255, 255, 0);
  ellipse(x + 50, y - 35, 20, 20);

}

function drawTable() {
  fill('gray')
  rect(125, 500, 250, 25);
  rect(125, 500, 25, 100);
  rect(350, 500, 25, 100);
}

