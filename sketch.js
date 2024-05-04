let turtle;
let polarBear;
let orangutan;
let lvl;
let lives;
let screen;
playerPosX = 120;
playerPosY = 100;
let fish;
let seal;
let lvl1Obs;
let wins;
let pop, levelUpSound;
let bg = ["startScreen.png"];

function preload() {
  pop = loadSound("pop.wav");
  levelUpSound = loadSound("levelUp.wav");
  bubbles = loadSound("bubblePop.wav");
  roar = loadSound("bear.wav");
  triumph = loadSound("triumph.wav");
  woop = loadSound("monkey.wav");
  hurt = loadSound("hurt.wav");
}

function setup() {
  createCanvas(800, 600);
  //background image
  startScreen = loadImage("startScreen.png");
  sea = loadImage("underthesea.png");
  lvl2Screen = loadImage("level2Screen.png");
  arctic = loadImage("arctic.png");
  lvl3Screen = loadImage("level3Screen.png");
  endGame = loadImage("endScreen.png");
  //set number of wins
  wins = 0;
  lvl = 0;
  screen = 1;
  //fish set up
  fish = createSprite(6500, 500);
  fish.img = "fishwithbubbles2.png";
  fish.scale = 0.1;
  fish.collider = "static";
  fish.w = 30;
  fish.h = 20;

  //turtle set up
  turtle = createSprite(10000, 1);
  turtle.w = 250;
  turtle.h = 150;
  turtle.img = "turtleRight.png";
  turtle.scale = 0.5;
  //turtle physics
  turtle.collider = "dynamic";
  turtle.rotationDrag = 100;

  //bear set up
  polarBear = createSprite(1000, 1000);
  polarBear.w = 1500;
  polarBear.h = 1300;
  polarBear.img = "polarBearRight.png";
  polarBear.scale = 0.1;
  //bear physics
  polarBear.collider = "dynamic";
  polarBear.rotationDrag = 100;

  //orangutan set up
  orangutan = createSprite(2000, 2000);
  orangutan.w = 1000;
  orangutan.h = 1300;
  orangutan.img = "orangutanRight.png";
  orangutan.scale = 0.1;
  //orangutan physics
  orangutan.collider = "dynamic";
  orangutan.rotationDrag = 100;

  //seal set up
  seal = createSprite(3000, 3000);
  seal.img = "seal.png";
  seal.scale = 0.1;
  seal.collider = "static";
  seal.w = 100;
  seal.h = 50;

  //mango set up
  mango = createSprite(3000, 3000);
  mango.img = "mango.png";
  mango.scale = 0.1;
  mango.collider = "static";
  mango.w = 30;
  mango.h = 30;

  //lvl1Obstacle set up
  lvl1Obs = new Group();
  lvl1Obs.collider = "dynamic";
  lvl1Obs.mass = 8;
  lvl1Obs.w = 200;
  lvl1Obs.h = 250;
  lvl1Obs.x = 2500;
  while (lvl1Obs.length < 4) {
    let lvl1Ob = new lvl1Obs.Sprite();
    lvl1Ob.scale = 0.25;
    lvl1Ob.img = "plasticBag.png";
  }

  //create boundaries
  let top = new Sprite();
  top.width = 800;
  top.height = 40;
  top.y = 600;
  top.friction = 0.01;
  top.collider = "static";
  top.color = "SkyBlue";
  top.stroke = "SkyBlue";

  let bottom = new Sprite();
  bottom.width = 800;
  bottom.height = 40;
  bottom.y = 0;
  bottom.friction = 0.01;
  bottom.collider = "static";
  bottom.color = "SkyBlue";
  bottom.stroke = "SkyBlue";

  let left = new Sprite();
  left.width = 40;
  left.height = 600;
  left.x = 0;
  left.friction = 0.01;
  left.collider = "static";
  left.color = "SkyBlue";
  left.stroke = "SkyBlue";

  let right = new Sprite();
  right.width = 40;
  right.height = 600;
  right.x = 800;
  right.friction = 0.01;
  right.collider = "static";
  right.color = "SkyBlue";
  right.stroke = "SkyBlue";
}

function draw() {
  //set screen
  if (screen == 1) {
    background(startScreen);
  } else if (screen == 2) {
    background(sea);
  } else if (screen == 3) {
    background(lvl2Screen);
  } else if (screen == 4) {
    background(arctic);
  } else if (screen == 5) {
    background(lvl3Screen);
  } else if (screen == 6) {
    background("green");
  } else if (screen == 7) {
    background(endGame);
  }
  
  if(turtle.collides(lvl1Obs)){
    hurt.play();
    fish.x = random(100, 700);
    fish.y = random(100, 500)
  }

  //update player for each lvl
  if (lvl == 1) {
    //move turtle right and left w/ key press
    if (kb.pressing("left") && lvl == 1) {
      turtle.vel.x = -5;
      turtle.img = "turtleLeft.png";
    } else if (kb.pressing("right") && lvl == 1) {
      turtle.vel.x = 5;
      turtle.img = "turtleRight.png";
    } else turtle.vel.x = 0;

    //move turtle up and down w/ key press
    if (kb.pressing("up") && lvl == 1) {
      turtle.vel.y = -5;
      turtle.img = "turtleUp.png";
    } else if (kb.pressing("down") && lvl == 1) {
      turtle.vel.y = 5;
      turtle.img = "turtleDown.png";
    } else turtle.vel.y = 0;
  } else if (lvl == 2) {
    //move bear right and left w/ key press
    if (kb.pressing("left") && lvl == 2) {
      polarBear.vel.x = -5;
      polarBear.img = "polarBearLeft.png";
      polarBear.scale = 0.1;
    } else if (kb.pressing("right") && lvl == 2) {
      polarBear.vel.x = 5;
      polarBear.img = "polarBearRight.png";
      polarBear.scale = 0.1;
    } else polarBear.vel.x = 0;

    //move bear up and down w/ key press
    if (kb.pressing("up") && lvl == 2 && polarBear.img) {
      polarBear.vel.y = -5;
      polarBear.img = "polarBearLeftUp.png";
      polarBear.scale = 0.1;
    } else if (kb.pressing("down") && lvl == 2) {
      polarBear.vel.y = 5;
      polarBear.scale = 0.1;
      polarBear.img = "polarBearRightDown.png";
    } else polarBear.vel.y = 0;
  } else if (lvl == 3) {
    //move bear right and left w/ key press
    if (kb.pressing("left") && lvl == 3) {
      orangutan.vel.x = -5;
      orangutan.img = "orangutanLeft.png";
      orangutan.scale = 0.1;
    } else if (kb.pressing("right") && lvl == 3) {
      orangutan.vel.x = 5;
      orangutan.img = "orangutanRight.png";
      orangutan.scale = 0.1;
    } else orangutan.vel.x = 0;

    //move bear up and down w/ key press
    if (kb.pressing("up") && lvl == 3) {
      orangutan.vel.y = -5;
      orangutan.img = "orangutanUp.png";
      orangutan.scale = 0.1;
    } else if (kb.pressing("down") && lvl == 3) {
      orangutan.vel.y = 5;
      orangutan.scale = 0.1;
      orangutan.img = "orangutanDown.png";
    } else orangutan.vel.y = 0;
  }

  if (lvl == 0 && mouse.pressing()) {
    bubbles.play();
    lvl = 1;
    screen = 2;
    turtle.x = playerPosX;
    turtle.y = playerPosY;
    fish.x = 650;
    fish.y = 500;
    lvl1Obs[0].x = 200;
    lvl1Obs[0].y = 200;
    lvl1Obs[1].x = 400;
    lvl1Obs[1].y = 400;
    lvl1Obs[2].x = 620;
    lvl1Obs[2].y = 100;
    lvl1Obs[3].x = 330;
    lvl1Obs[3].y = 500;
  } else if (turtle.overlaps(fish) && wins == 0) {
    //lvl 1
    wins = 1;
    pop.play();
    fish.x = 160;
    fish.y = 450;
  } else if (turtle.overlaps(fish) && wins == 1) {
    wins = 2;
    pop.play();
    fish.x = 55;
    fish.y = 55;
  } else if (turtle.overlaps(fish) && wins == 2) {
    wins = 3;
    pop.play();
    fish.x = 570;
    fish.y = 245;
  } else if (turtle.overlaps(fish) && wins == 3) {
    wins = 4;
    pop.play();
    fish.x = 365;
    fish.y = 245;
  } else if (turtle.overlaps(fish) && wins == 4) {
    wins = 5;
    levelUpSound.play();
    //clear lvl 1 and screen 3
    screen = 3;
    console.log("level:");
    console.log(lvl);
    fish.x = 1000;
    turtle.x = 9000;
    lvl1Obs.x = 10000;
    //lvl 2
  } else if (screen == 3 && mouse.pressing()) {
    lvl = 2;
    screen = 4;
    wins = 0;
    console.log("level:");
    console.log(lvl);
    polarBear.x = playerPosX;
    polarBear.y = playerPosY;
    seal.x = 250;
    seal.y = 300;
  } else if (polarBear.overlaps(seal) && wins == 0) {
    wins = 1;
    roar.play();
    seal.x = 100;
    seal.y = 100;
  } else if (polarBear.overlaps(seal) && wins == 1) {
    wins = 2;
    roar.play();
    seal.x = 600;
    seal.y = 300;
  } else if (polarBear.overlaps(seal) && wins == 2) {
    wins = 3;
    roar.play();
    seal.x = 100;
    seal.y = 550;
  } else if (polarBear.overlaps(seal) && wins == 3) {
    wins = 4;
    roar.play();
    seal.x = 650;
    seal.y = 550;
  } else if (polarBear.overlaps(seal) && wins == 4) {
    wins = 5;
    levelUpSound.play();
    //clear lvl 2 and screen 5
    screen = 5;
    console.log("level:");
    console.log(lvl);
    seal.x = 1000;
    polarBear.x = 9000;
    //lvl 3
  } else if (screen == 5 && mouse.pressing()) {
    lvl = 3;
    screen = 6;
    wins = 0;
    console.log("level:");
    console.log(lvl);
    orangutan.x = playerPosX;
    orangutan.y = playerPosY;
    mango.x = 250;
    mango.y = 300;
  } else if (orangutan.overlaps(mango) && wins == 0) {
    wins = 1;
    woop.play();
    mango.x = 100;
    mango.y = 100;
  } else if (orangutan.overlaps(mango) && wins == 1) {
    wins = 2;
    woop.play();
    mango.x = 600;
    mango.y = 300;
  } else if (orangutan.overlaps(mango) && wins == 2) {
    wins = 3;
    woop.play();
    mango.x = 100;
    mango.y = 550;
  } else if (orangutan.overlaps(mango) && wins == 3) {
    wins = 4;
    woop.play();
    mango.x = 650;
    mango.y = 100;
  } else if (orangutan.overlaps(mango) && wins == 4) {
    triumph.play();
    wins = 5;
    pop.play();
    mango.x = 1000;
    orangutan.x = 9000;
    screen = 7;
  }
  if ((screen == 7 && mouse.pressing()) || kb.pressing("space")) {
    // Reset game state
    lvl = 0;
    wins = 0;
    screen = 1;
  }

  //for testing!
  //turtle.debug = mouse.pressing();
  //polarBear.debug = mouse.pressing();
  //fish.debug = mouse.pressing();
  //lvl1Obs.debug = mouse.pressing();
  //seal.debug = mouse.pressing();
  //orangutan.debug = mouse.pressing();
  //mango.debug = mouse.pressing();
  //lvl1Obs.debug = mouse.pressing();
}
