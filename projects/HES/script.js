let items = 0;

let hadCollided = false;

var keys = [];
let PlayerSpeed = 3;

let Timer;
let Font;

let backgroundmusic;

let textSpeed = 0.67;

let Item;
let ItemZ = 0;

//Model Move Variables
let scaleSlider;
let xRotSlider;
let MXPos;
let MYPos;
let MZPos;
let RotX;
let scaleS;

//Model Loaders
let FloorLoader;
let WallLoader;
let ShelfLoader;

// Models
let FloorModel;
let WallModel;
let ShelfsModel;
let PlayerModel;

//Textures
let FloorBake;
let WallBake;
let ShelvesBake;


let cam;
let playerClass;
let PlayerShadowImg;



let collider1;
let collider2;
let collider3;
let collider4;
let collider5;
let collider6;
let collider7;
let collider8;
let collider9;
let collider10;
let collider11;
let collider12;

let colliders;


let item1;
let item2;
let item3;
let item4;
let item5;
let item6;
let item7;
let item8;
let item9;
let item10;


let pg;//pqpqpqppqpqpqpqpqpqpqpqppqpqpppppppppppppppppppppiuhgggggggggg
let pause = false;

let gl;

function preload() {
  soundFormats('mp3', 'ogg');
  backgroundmusic = loadSound('Epic.mp3');

  //LoadTextures
  FloorBake = loadImage('ImagesTextures/FloorBake.png');
  WallBake = loadImage('ImagesTextures/WallBake.png');
  ShelvesBake = loadImage('ImagesTextures/ShelfsBake.png');

  PlayerShadowImg = loadImage('ImagesTextures/PlayerShadow.png');

  //LoadModels
  FloorModel = loadModel('Models/Floor.obj', true);
  WallModel = loadModel('Models/Walls.obj', true);
  ShelfsModel = loadModel('Models/Shelfs.obj', true);
  PlayerModel = loadModel('Models/Player.obj', true);

  Font = loadFont('coolveticarg.otf');

  f = loadFont('coolveticarg.otf');

}


function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  gl = this._renderer.GL;
  gl.colorMask(true, true, true, true);
  //gl.enable(gl.CULL_FACE);
  pg = createGraphics(800, 800);//sshshshshshshshshshshshshshshshshshshshsh

  userStartAudio();
  backgroundmusic.play();

  cam = createCamera();
  frameRate(60);
  playerClass = new player(12, 12, 12, 30, PlayerModel);

  //Walls
  collider1 = new collider(-810, 125, 0, 'blue', 20, 1900, 150, false);
  collider2 = new collider(-400, -735, 0, 'blue', 1000, 10, 150, false);
  collider3 = new collider(100, -880, 0, 'blue', 10, 300, 150, false);
  collider4 = new collider(450, -1000, 0, 'blue', 800, 10, 150, false);
  collider5 = new collider(800, -600, 0, 'blue', 10, 800, 150, false);
  collider6 = new collider(650, -210, 0, 'blue', 320, 10, 150, false);
  collider7 = new collider(495, 400, 0, 'blue', 10, 1230, 150, false);
  collider8 = new collider(-150, 1000, 0, 'blue', 1320, 10, 150, false);
  //Shelves
  collider9 = new collider(-10, -241, 0, 'blue', 10, 700, 10, false);
  collider10 = new collider(-255, -241, 0, 'blue', 30, 700, 10, false);
  collider11 = new collider(-505, -241, 0, 'blue', 30, 700, 10, false);
  collider12 = new collider(-755, -241, 0, 'blue', 30, 700, 10, false);

  item1 = new collider(20, -500, ItemZ, 'green', 100, 100, 100, true);

  item2 = new collider(-300, 125, ItemZ, 'green', 100, 100, 100, true);

  item3 = new collider(-600, 125, ItemZ, 'green', 100, 100, 100, true);

  item4 = new collider(0, -225, ItemZ, 'green', 100, 100, 100, true);

  item5 = new collider(-600, -325, ItemZ, 'green', 100, 100, 100, true);

  item6 = new collider(400, 625, ItemZ, 'green', 100, 100, 100, true);//6-10 is emi, 6-10 are done.

  item7 = new collider(700, -875, ItemZ, 'green', 100, 100, 100, true);

  item8 = new collider(-100, -425, ItemZ, 'green', 100, 100, 100, true);

  item9 = new collider(200, -875, ItemZ, 'green', 100, 100, 100, true);

  item10 = new collider(700, -325, ItemZ, 'green', 100, 100, 100, true);

  colliders = [collider1, collider2, collider3, collider4, collider5, collider6, collider7, collider8, collider9, collider10, collider11, collider12, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10];

  push();
  XRotSlider = createSlider(0, 360, 90);
  XRotSlider.position(10, 10);
  XRotSlider.style('width', '80px');

  scaleSlider = createSlider(0, 255, 100);
  scaleSlider.position(10, 30);
  scaleSlider.style('width', '80px');

  XPosSlider = createSlider(0, 100, 100);
  XPosSlider.position(10, 50);
  XRotSlider.style('width', '80px');

  YPosSlider = createSlider(0, 100, 100);
  YPosSlider.position(10, 70);
  YPosSlider.style('width', '80px');

  ZPosSlider = createSlider(0, 100, 100);
  ZPosSlider.position(10, 90);
  ZPosSlider.style('width', '80px');
  pop();

  textFont(Font);
  textSize(20);
  textAlign(CENTER);

  Timer = 35;

  //Load Building
  FloorLoader = new modelLoader(FloorModel, FloorBake, 0, 0, 0, 10, 0, 0, 0);

  WallLoader = new modelLoader(WallModel, WallBake, 0, 0, 0, 10, 0, 0, 0);

  ShelfLoader = new modelLoader(ShelfsModel, ShelvesBake, -95, -60, 0, 4, 0, 0, 0);
  startScreen();
  noLoop();
}

function draw() {
  if (pause == false && start == true) {
    background(0);
    ambientLight(200);
    directionalLight(250, 250, 250, 0, 5, 10);
    pointLight(255, 251, 232, 0, 0, 66);
    smooth();
    fullscreen();



    push();
    playerClass.drawPlayer();
    pop();

    for (let i = 0; i < colliders.length; i = i + 1) {
      colliders[i].display();
      if (!playerClass.isColliding(colliders[i])) {

        print('NOT Colliding!!!!!');
        //playerClass.move(0,-1,0);
      }
      else {
        print('Colliding!!!!!');
        if (playerClass.isColliding(colliders[i]) && colliders[i].item == true) {
          items = items + 1;
          print('Collided with item');
          colliders[i].setZ();

        }
        playerClass.setlocation();
      }


    }






    print(playerClass.y + " " + collider1.y)
    //push();
    //translate(XPos, YPos, ZPos);
    // specularMaterial(250);
    //shininess(200);
    //noStroke();
    // fill(23, 128, 232);
    // sphere(30);
    //pop();

    //Sliders
    let RotX = XRotSlider.value();
    let scaleS = scaleSlider.value();

    let MXPos = XPosSlider.value();
    let MYPos = YPosSlider.value();
    let MZPos = ZPosSlider.value();

    //print(MZPos);


    push();
    translate(playerClass.x * textSpeed, playerClass.y * textSpeed, 600);
    text("Time Left: " + Timer, 190, -90, 12);
    pop();


    push();
    translate(playerClass.x * textSpeed, playerClass.y * textSpeed, 600);
    textSize(20);
    text("Items Collected: " + items, -195, -90, 12);
    pop();

    push();
    if (Timer == 0) {
      if(items < 10) {
        translate(playerClass.x * textSpeed, playerClass.y * textSpeed, 600);
        text("You Lose!", 0, -20, 0);
      }

      if(items == 10) {
        translate(playerClass.x * textSpeed, playerClass.y * textSpeed, 600);
        text("You WIN!!!", 0, -20, 0);
      }
    }
    pop();

    push();
    noStroke();
    // translate(XPos - 10, YPos - 10);
    FloorLoader.ModelloadDraw();
    pop();

    push();
    noStroke();
    // translate(XPos - 10, YPos - 10);
    WallLoader.ModelloadDraw();
    pop();

    push();
    noStroke();
    ShelfLoader.ModelloadDraw();
    pop();



    if (playerClass.z > 12) {
      playerClass.z = 12;
    }

    if (playerClass.z < 12) {
      playerClass.z = 12;
    }

    if (keys[87]) {
      let collideup = checkCollision();
      if (collideup == false) {
        playerClass.move(0, -PlayerSpeed, 0);
        if (!checkCollision()) {
          cam.move(0, -2, 0);
        }
      }
    }


    if (keys[83]) {
      let collidedown = checkCollision();
      if (collidedown == false) {
        playerClass.move(0, PlayerSpeed, 0);
        if (!checkCollision()) {
          cam.move(0, 2, 0);
        }
      }
    }

  }
  if (keys[65]) {
    let collidedown = checkCollision();
    if (collidedown == false) {
      playerClass.move(-PlayerSpeed, 0, 0);
      if (!checkCollision()) {
        cam.move(-2, 0, 0);
      }
    }
  }
  if (keys[68]) {
    let collidedown = checkCollision();
    if (collidedown == false) {
      playerClass.move(PlayerSpeed, 0, 0);
      if (!checkCollision()) {
        cam.move(2, 0, 0);
      }
    }
  }

  if (keys[16]) {
    playerClass.z = playerClass.z - 5;

  }

  if (frameCount % 60 == 0 && Timer > 0) {
    Timer--;
  }

}







function keyPressed() {
  keys[keyCode] = true;
  if (pause == false) {
    gl.colorMask(true, true, true, true);
  }
  if (keyCode === ESCAPE) {
    if (pause == true) { loop(); pause = false; }
    else {
      noLoop();
      gl.colorMask(false, true, true, true);
      push();
      translate(playerClass.x * 0.7, playerClass.y * 0.7, 600);
      plane(100);
      pg.textFont(Font);
      pg.textSize(25);
      textSize(20);
      fill(235, 64, 52);
      text("Paused", -400, 10, 800);
      pop();
      pause = true;
    }
  } return false;
}
function keyReleased() {
  keys[keyCode] = false;
}

function keyTyped() {
  if (key == ' ') {
    ZPos = ZPos + 30;

  }
}

function mouseClicked() {
  if (canvas.requestPointerLock) {
    canvas.requestPointerLock();
  }
}

function checkCollision() {
  for (let i = 0; i < colliders.length; i = i + 1) {
    if (playerClass.isColliding(colliders[i])) {
      return true;
    }
  }
  return false;
}