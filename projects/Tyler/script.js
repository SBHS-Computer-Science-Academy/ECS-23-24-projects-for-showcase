let fire1;
let fire2;
let fire3;
let fire4;
let fire5;
let fire6;
let ex1;
let ex2;
let ex3;
let ex4;
let ex5;
let ex6;
let boom = false;
function setup() {
  createCanvas(500, 700);
  background(0, 0, 0);
  fire1 = new firework(50, 675, 1);
  fire2 = new firework(100, 650, 2);
  fire3 = new firework(200, 625, 1);
  fire4 = new firework(300, 610, 2);
  fire5 = new firework(390, 600, 3);
  fire6 = new firework(460, 600, 2);
  ex1 = new explosion(50, 150, 50, 50)
  ex2 = new explosion(100, 150, 50, 50)
  ex3 = new explosion(200, 150, 50, 50)
  ex4 = new explosion(300, 150, 50, 50)
  ex5 = new explosion(390, 150, 50, 50)
  ex6 = new explosion(460, 150, 50, 50)
}

function draw() {
  background(0)
  fire1.drawFirework();
  fire1.moveUp();
  fire2.drawFirework();
  fire2.moveUp();
  fire3.drawFirework();
  fire3.moveUp();
  fire4.drawFirework();
  fire4.moveUp();
  fire5.drawFirework();
  fire5.moveUp();
  fire6.drawFirework();
  fire6.moveUp();
  if (fire1.y < 151) {
    ex1.drawexplosion()
    ex1.boom()
  }
  if (fire2.y < 151) {
    ex2.drawexplosion()
    ex2.boom()
  }
  if (fire3.y < 151) {
    ex3.drawexplosion()
    ex3.boom()
  }
  if (fire4.y < 151) {
    ex4.drawexplosion()
    ex4.boom()
  }
  if (fire5.y < 151) {
    ex5.drawexplosion()
    ex5.boom()
  }
  if (fire6.y < 151) {
    ex6.drawexplosion()
    ex6.boom()
  }
  textSize(50)
  text("Happy Fourth of July", 20, 350)
}