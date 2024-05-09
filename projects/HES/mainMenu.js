let f;
let pg2;
let start = false;


function startScreen() {
  background(248, 252, 3);
  push();
  //translate(0,-100,0);
  translate(playerClass.x * 0.7, playerClass.y * 0.7, 600);
  pg2 = createGraphics(800, 800, WEBGL);
  pg2.textSize(145);
  //pg2.plane(10,10,10);
  pg2.fill(3, 40, 252);
  pg2.textFont(f)
  pg2.text("Black Friday", 10, 140, 12);
  texture(pg2);
  noStroke();
  translate(-200, -100, 0);
  plane(300);
  pop();

  startButton = createButton('Start');//the start button was made with perplexity then I modifed it
  //startButton.textFont(f);
  startButton.position(0, 0);
  startButton.size(200, 100); // Set the size of the button
  startButton.mousePressed(startGame);
}

function startGame() {
  // Add your game start logic here
  start = true;
  loop();
  startButton.hide();
  loop();
}