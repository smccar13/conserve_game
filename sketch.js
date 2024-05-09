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
let plasticBags, sodaCans, trees;
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
  rainforest = loadImage("rainforest.png");
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
  turtle.rotationDrag = 1000;

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
  orangutan.w = 900;
  orangutan.h = 1200;
  orangutan.img = "orangutanRight.png";
  orangutan.scale = 0.12;
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

  //plastic bags set up
  plasticBags = new Group();
  plasticBags.collider = "static";
  plasticBags.mass = 8;
  plasticBags.w = 200;
  plasticBags.h = 250;
  plasticBags.x = 2500;
  while (plasticBags.length < 4) {
    let plasticBag = new plasticBags.Sprite();
    plasticBag.scale = 0.25;
    plasticBag.img = "plasticBag.png";
  }
  
  
  //soda can bags set up
  sodaCans = new Group();
  sodaCans.collider = "static";
  sodaCans.mass = 8;
  sodaCans.w = 200;
  sodaCans.h = 250;
  sodaCans.x = 2500;
  while (sodaCans.length < 4) {
    let sodaCan = new sodaCans.Sprite();
    sodaCan.scale = 0.25;
    sodaCan.img = "redSodaCan.png";
  }
  
  //arctic set up
  arctic1 = createSprite(-1000, -1000)
  arctic1.collider = 'static'
  arctic1.width = 200;
  arctic1.height = 200;
  arctic1.color = "skyblue"
  arctic1.stroke = "skyblue";

  arctic2 = createSprite(-2000, -2000)
  arctic2.collider = 'static'
  arctic2.width = 40;
  arctic2.height = 500;
  arctic2.color = "skyblue"
  arctic2.stroke = "skyblue";
  
    arctic3 = createSprite(-3000, -3000)
  arctic3.collider = 'static'
  arctic3.width = 200;
  arctic3.height = 40;
  arctic3.color = "skyblue"
  arctic3.stroke = "skyblue";
  
  //tree set up
  trees = new Group();
  trees.collider = "static";
  trees.mass = 8;
  trees.w = 1000;
  trees.h = 300;
  trees.x = -9000;
  while (trees.length < 4) {
    let tree = new trees.Sprite();
    tree.scale = 0.17;
    tree.img = "tree.png";
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
    background(rainforest);
  } else if (screen == 7) {
    background(endGame);
  }
  
  if(turtle.collides(plasticBags) || turtle.collides(sodaCans) || polarBear.collided(arctic1)||polarBear.collided(arctic2)|| polarBear.collided(arctic3) || orangutan.collides(trees)){
    hurt.play();
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
      orangutan.scale = 0.12;
    } else if (kb.pressing("right") && lvl == 3) {
      orangutan.vel.x = 5;
      orangutan.img = "orangutanRight.png";
      orangutan.scale = 0.12;
    } else orangutan.vel.x = 0;

    //move bear up and down w/ key press
    if (kb.pressing("up") && lvl == 3) {
      orangutan.vel.y = -5;
      orangutan.img = "orangutanUp.png";
      orangutan.scale = 0.12;
    } else if (kb.pressing("down") && lvl == 3) {
      orangutan.vel.y = 5;
      orangutan.scale = 0.12;
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
    plasticBags[0].x = 200;
    plasticBags[0].y = 200;
    plasticBags[1].x = 400;
    plasticBags[1].y = 400;
    plasticBags[2].x = 620;
    plasticBags[2].y = 100;
    plasticBags[3].x = 330;
    plasticBags[3].y = 500;
    sodaCans[0].x = 100;
    sodaCans[0].y = 300;
    sodaCans[1].x = 720;
    sodaCans[1].y = 200;
    sodaCans[2].x = 400
    sodaCans[2].y = 100
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
    turtle.x = 10000;
    plasticBags.x = -10000;
    sodaCans.y = -10000;
    //lvl 2
  } else if (screen == 3 && mouse.pressing()) {
    lvl = 2;
    screen = 4;
    wins = 0;
    console.log("level:");
    console.log(lvl);
    polarBear.x = playerPosX;
    polarBear.y = playerPosY;
    seal.x = 500;
    seal.y = 100;
    arctic1.x = 300;
    arctic1.y = 300;
    arctic2.x = 400;
    arctic2.y = 120;
    arctic3.x = 500;
    arctic3.y = 380;
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
        arctic1.x = -3000;
    arctic2.x = -4000;
    arctic3.x = -5000;
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
    trees[0].x = 200;
    trees[0].y = 200;
    trees[1].x = 600;
    trees[1].y = 400;
    trees[2].x = 620;
    trees[2].y = 100;
    trees[3].x = 330;
    trees[3].y = 500;
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
    mango.x = 400;
    mango.y = 300;
  } else if (orangutan.overlaps(mango) && wins == 4) {
    triumph.play();
    wins = 5;
    pop.play();
    mango.x = 1000;
    orangutan.x = 9000;
    screen = 7;
    trees.y = -10000;
  }
  if ((screen == 7 && kb.pressing("space"))){
    // Reset game state
    lvl = 0;
    wins = 0;
    screen = 1;
  }

  //for testing!
  //turtle.debug = mouse.pressing();
  //polarBear.debug = mouse.pressing();
  //fish.debug = mouse.pressing();
  //plasticBags.debug = mouse.pressing();
  //seal.debug = mouse.pressing();
  //orangutan.debug = mouse.pressing();
  //mango.debug = mouse.pressing();
  //plasticBags.debug = mouse.pressing();
  //trees.debug = mouse.pressing();
}
