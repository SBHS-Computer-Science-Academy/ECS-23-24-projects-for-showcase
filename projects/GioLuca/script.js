let s;
let song;
let grd = 2.5;
let candy;
let gameOver = false;
let points = 0;
let cA = [];
let spd = 2.5;

function preload()
{
  soundFormats('mp3');
  song = loadSound('funky.mp3');
}

function setup()
{
  createCanvas(1000, 800);
  frameRate(100);
  s = new Snake();
  candy = new Candy();

  song.play ();

  cA.push(new Candy());
  cA.push(new Candy());
  cA.push(new Candy());
}

function draw()
{
  background(96, 181, 103);

  s.draw();
  s.move();

  for(let i = 0; i < cA.length; i = i + 1)
  {
    cA[i].draw();
  }

  fill(255);
  textSize(20);
  rect(0, 0, 125, 50);
  fill(0, 0, 0,);
  text("Points: " + points, 20, 30);

  candyEaten();
}

function candyEaten()
{
  for(let i = 0; i < cA.length; i = i + 1)
  {
    if(dist(s.x+25, s.y+25, cA[i].x, cA[i].y) < 50)
    {
      console.log("You ate a candy!");
      cA[i] = new Candy();
      points += 1;
      spd += 0.25;
    }
  }
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    s.dir(0, -spd);
  }
  else if(keyCode === DOWN_ARROW)
  {
    s.dir(0 , spd);
  }
  else if(keyCode === RIGHT_ARROW)
  {
    s.dir(spd, 0);
  }
  else if(keyCode === LEFT_ARROW)
  {
    s.dir(-spd, 0);
  }
}