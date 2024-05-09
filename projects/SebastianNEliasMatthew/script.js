let cars = [];
let x, y;
let frog;
let deathscreen=false;
let mousePressed=false;
let camera;
let level;

function setup() {2
   createCanvas(500, 400);
  frog = new Frog(width / 2, height - 20);
   camera = new Camera();
    for (let i = 0; i < 1; i++) { // Adjust the number of cars here
    }
  level = new LEVEL(0,0)
  level2 = new LEVEL(0,-400)
  level3 = new LEVEL(0,-800)
  level4 = new LEVEL(0,-1200)
  level5 = new LEVEL(0,-1600)
  level6 = new LEVEL(0,-2000)
  level7 = new LEVEL(0,-2400)
  level8 = new LEVEL(0,-2800)
  level9 = new LEVEL(0,-3200)
  level10 = new LEVEL(0,-3600)

}

function draw() {
  camera.update();  translate(-camera.x, -camera.y);
   background(89, 145, 84);
   stroke(0)
 level.drawLEVEL()
  Level(0,-400)
  
 Level(0,-800)
  Level(0,-1200)
  Level(0,-1600)
Level(0,-2000)
 Level(0,-2400)
 Level(0,-2800)
  Level(0,-3200)
 Level(0,-3600)
   level.drawLEVEL()  
   pond(60,320);

  //road 1
   drawDetailedRock(350, 275, 50);
   drawDetailedRock(100, 315, 50);
   drawDetailedRock(20, 235, 50);
   drawDetailedRock(200, 325, 50);

  //road 2
   drawDetailedRock(290,-180, 50);
   drawDetailedRock(100,-87, 50);
   drawDetailedRock(220, -120, 50);

  //road 3
   drawDetailedRock(380,-580, 50);
   drawDetailedRock(140,-487, 50);
   drawDetailedRock(326, -520, 50);

  //road 4
   drawDetailedRock(380,-980, 50);
   drawDetailedRock(140,-887, 50);
   drawDetailedRock(326, -920, 50);

  //road 5
   drawDetailedRock(380,-1300, 50);
   drawDetailedRock(140,-1287, 50);
   drawDetailedRock(326, -1320, 50);

  //road 6
   drawDetailedRock(140,-1610, 50);
   drawDetailedRock(260,-1687, 50);
   drawDetailedRock(326, -1720, 50);

  //road 7
   drawDetailedRock(140,-2110, 50);
   drawDetailedRock(190,-2087, 50);
   drawDetailedRock(326, -2130, 50);

  //road 8
   drawDetailedRock(120,-2510, 50);
   drawDetailedRock(290,-2487, 50);
   drawDetailedRock(388, -2530, 50);

  //road 9
   drawDetailedRock(120,-2970, 50);
   drawDetailedRock(290,-2887, 50);
   drawDetailedRock(388, -2830, 50);

  //road 10
   drawDetailedRock(170,-3300, 50);
   drawDetailedRock(390,-3387, 50);
   drawDetailedRock(338, -3230, 50);


  
  //LAKEEEEE
    fill(0, 191, 255); // Set the fill color to light blue
   ellipse(250, -3900, 400, 300); // Draw a blue ellipse to represent the round pond
  
  frog.display(); // Display the frog
   frog.move(); // Move the frog




  //road 1
   tree(70,250);
   tree(300,190);
   tree(240,270);
   tree(150,200);
   tree(400,250);
   tree(450,40);
   tree(100,30);
   tree(340,20);
   tree(350,350);

  //road 2
   tree(40,-200)
   tree(100,-420)
   tree(320,-200);
   tree(370,-180)
   tree(390,-380)
   tree(40,-200);
   tree(70,-500);
    tree(70,-850);
    tree(300,-560);
    tree(150,-200);



  //road 3
   tree(240,-530);
   tree(150,-600);
   tree(400,-550);
   tree(450,-760);
   tree(100,-770);
   tree(340,-780);


   //road 4
   tree(240,-930);
   tree(150,-1000);
   tree(400,-950);
   tree(450,-1160);
   tree(100,-1170);
   tree(340,-1180);
  
  //road 5
   tree(240,-1330);
   tree(150,-1730);
   tree(400,-1350);
   tree(450,-1560);
   tree(100,-1570);
   tree(340,-1580);

   //road 6
   tree(240,-1730);
   tree(150,-1730);
   tree(400,-1350);
   tree(450,-1560);
   tree(100,-1570);
   tree(340,-1580);

  //road 7
   tree(240,-2130);
   tree(150,-2130);
   tree(400,-1750);
   tree(450,-1960);
   tree(100,-1970);
   tree(340,-1980);

  //road 8
  tree(240,-2530);
   tree(150,-2530);
   tree(400,-2150);
   tree(450,-2360);
   tree(100,-2370);
   tree(340,-3280);

  //road 9
  tree(240,-2930);
   tree(150,-2930);
   tree(400,-2550);
   tree(450,-2760);
   tree(100,-2770);
   tree(340,-2780);

//road 10
  tree(240,-3330);
   tree(150,-3330);
   tree(400,-2950);
   tree(450,-3160);
   tree(100,-3170);
   tree(340,-3180);

  //lake trees
  tree(240,-3730);
   tree(150,-3730);
   tree(400,-3350);
   tree(450,-3560);
   tree(100,-3570);
   tree(340,-3580);
  tree(240,-4130);
   tree(150,-4130);
   tree(450,-3750);
   tree(450,-3960);
   tree(30,-3970);
   tree(430,-3980);








  
  
  //road 1 
  drawBush(320,320)
  drawBush(260,50)
  drawBush(150,305)

  //road 2
  drawBush(320,-80)
  drawBush(260,-70)
  drawBush(150,-105)



  
  //road 3
  drawBush(320,-420)
  drawBush(260,-420)
  drawBush(150,-405)

//road 4 
  drawBush(320,-820)
  drawBush(260,-820)
  drawBush(150,-805)

  //road 5
  drawBush(320,-1220)
  drawBush(260,-1230)
  drawBush(150,-1250)


  //road 6
  drawBush(320,-1620)
  drawBush(260,-1620)
  drawBush(150,-1650)


  //road 7
  drawBush(320,-2020)
  drawBush(260,-2040)
  drawBush(150,-2050)

  //road 8
  drawBush(320,-2420)
  drawBush(260,-2440)
  drawBush(150,-2460)


  //road 9
  drawBush(320,-2820)
  drawBush(260,-2860)
  drawBush(150,-2830)


  //road 10
  drawBush(320,-3220)
  drawBush(260,-3290)
  drawBush(150,-3210)



//lake bushes
  drawBush(320,-3630)
  drawBush(260,-3690)
  drawBush(150,-3640)
  drawBush(420,-3676)
  drawBush(360,-3683)
  drawBush(250,-3690)
  drawBush(20,-3876)
  drawBush(20,-3883)
  drawBush(455,-3890)
  
  for (let i = 0; i < cars.length; i++) {
      cars[i].display();
      cars[i].move();
      frog.collison(cars[i]);
    }
}

