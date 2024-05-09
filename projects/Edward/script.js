let lineX = 600;
let cardX = 350;
let cardOpen = 0;
let candleColor;
const colors = ['#52BBF7', '#59E37D', '#F59D9D', '#EDC379'];
let decorArray = [];
const decorX = [];
let balloonX = [];
let balloonY = [];
let balloonSpeed =  [];

function setup() {
  createCanvas(700, 500);
  background(143, 122, 83);
  candleColor = colors[Math.floor(Math.random() * 4)];
  // for (i = 0; i < 20; i = i + 1) {
  //   decorArray.push(new CakeDecor(colors[Math.floor(Math.random() * 4)], Math.random() * 150 + 400, (Math.random() * 20) + 355, Math.floor(Math.random() * 3), Math.random() * 3.14));
  // }
}

function draw() {
  background(143, 122, 83);//brown
  fill(255);//white
  rect(cardX, 50, (cardX * -1) + 600, 400);//paper
  fill(155);//gray
  textSize(25);
  text("Sincerely,", 420, 200);
  text("Edward Perko", 400, 300);
  fill(255);//white
  rect(350, 50, lineX - 350, 400);//paper
  if (cardOpen == 1 && cardX > 100) {
    if (lineX > 350) {
      lineX = lineX - 4;
    }
    else {
      cardX = cardX - 8;
    }
  }
  if (lineX > 350) {
    fill(155);//gray
    ellipse(350 + (lineX - 350) * 0.5, 375, (lineX - 350) * 0.72, 45);//plate
    fill(92, 76, 51);//chocolate
    rect(350 + (lineX - 350) * 0.2, 300, (lineX - 350) * 0.6, 75);//cake
    ellipse(350 + (lineX - 350) * 0.5, 375, (lineX - 350) * 0.6, 35);//cake
    strokeWeight(0);
    rect(351 + (lineX - 350) * 0.2, 350, (lineX - 350) * 0.6 - 2, 25);//cake
    strokeWeight(1);
    ellipse(350 + (lineX - 350) * 0.5, 300, (lineX - 350) * 0.6, 35);//cake
    fill(candleColor);
    rect(350 + (lineX - 350) * 0.475, 250, (lineX - 350) * 0.05, 50);//candle
    fill(225);//light gray
    quad(350 + (lineX - 350) * 0.475, 260, 350 + (lineX - 350) * 0.525, 250, 350 + (lineX - 350) * 0.525, 260, 350 + (lineX - 350) * 0.475, 270);//candle
    quad(350 + (lineX - 350) * 0.475, 275, 350 + (lineX - 350) * 0.525, 265, 350 + (lineX - 350) * 0.525, 275, 350 + (lineX - 350) * 0.475, 285);//candle 
    quad(350 + (lineX - 350) * 0.475, 290, 350 + (lineX - 350) * 0.525, 280, 350 + (lineX - 350) * 0.525, 290, 350 + (lineX - 350) * 0.475, 300);//candle
    fill(247, 179, 84);//orange
    ellipse(350 + (lineX - 350) * 0.5, 245, (lineX - 350) * 0.06, 30);//plate
    textSize(35);
    textFont('Garamond');
    // push();
    scale((lineX - 350) / 250, 1);
    fill(155);//gray
    text("Happy", (350 / ((lineX - 350) / 250)) + (lineX - 350) * 0.1, 125);
    text("Birthday!", (350 / ((lineX - 350) / 250)) + (lineX - 350) * 0.1, 180);
    // pop();
    // push();
    // translate(350, 0);
    scale((lineX - 350) / 250, 1);
    // // scale(250 / (lineX - 350), 1);
    // for (let i = 0; i < 20; i = i + 1) {
    //   decorArray[i].drawCakeDecor();
    // }
    // pop();
  }
  else {
    fill(155);//gray
    scale((-cardX + 350) / 250, 1);
    textSize(22);
    text("Dear ___,", (350 / ((-cardX + 350) / 250)) + (-cardX + 350) * -0.9, 125);
    text("This is a template. Please", (350 / ((-cardX + 350) / 250)) + (-cardX + 350) * -0.9, 200);
    text("edit this so that the", (350 / ((-cardX + 350) / 250)) + (-cardX + 350) * -0.9, 255);
    text("person you're sending", (350 / ((-cardX + 350) / 250)) + (-cardX + 350) * -0.9, 310);
    text("this to isn't confused!", (350 / ((-cardX + 350) / 250)) + (-cardX + 350) * -0.9, 365);
  }
}

function keyPressed() {
  cardOpen = 1;
}
