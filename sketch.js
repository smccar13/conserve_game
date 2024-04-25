let turtle;
let polarBear;
let lvl;
let screen;
playerPosX = 100;
playerPosY = 100;
let fish;
let obs;
let ob;
let wins;
let gSound;
let bg = ["underthesea.png"];

function preload() {
	gSound = loadSound("pop.wav");
}

function setup() {
  createCanvas(800, 600);
      //background image
  bg1 = loadImage("underthesea.png");
  bg2 = loadImage("level2Screen.png");
  bg3 = loadImage("arctic.png");
  //set number of wins
  wins = 0;
  lvl = 1;
  screen = 1;
    //fish set up
  fish = createSprite(650, 500);
  fish.img = 'fishwithbubbles2.png';
  fish.scale = 0.1;
  fish.collider = 'static';
  fish.w = 30
  fish.h = 20
  
  //turtle set up
  turtle = createSprite(playerPosX, playerPosY);
  turtle.w = 250
  turtle.h = 150
  turtle.img = "turtleRight.png";
  turtle.scale = 0.5;
  //turtle physics
  turtle.collider = "dynamic";
  turtle.rotationDrag = 100;
  
    //bear set up
  polarBear = createSprite(1000, 1000);
  polarBear.w = 1500
  polarBear.h = 1300
  polarBear.img = "polarBearRight.png";
  polarBear.scale = 0.1;
  //bear physics
  polarBear.collider = "dynamic";
  polarBear.rotationDrag = 100;
  
  //obstacle set up
  obs = createSprite(400, 400);
  obs.img = "plasticBag.png"
  obs.scale = 0.25;
  obs.w = 55
  obs.h = 65
  obs.collider = "dynamic";
  obs.mass =10


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
  if (screen == 1){
    background(bg1);
  } else if (screen == 2){
    background(bg2);
  }else if (screen == 3){
    background(bg3);
  }

if (lvl == 1){
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
  
} else if (lvl ==2){
  //move bear right and left w/ key press
  if (kb.pressing("left") && lvl == 2) {
    polarBear.vel.x = -5;
    polarBear.img = "polarBearLeft.png";
} else if (kb.pressing("right") && lvl == 2) {
    polarBear.vel.x = 5;
    polarBear.img = "polarBearRight.png";
} else polarBear.vel.x = 0;
  
  //move bear up and down w/ key press
  if (kb.pressing("up") && lvl == 2) {
    polarBear.vel.y = -5;
    polarBear.img = "polarBearUp.png";
} else if (kb.pressing("down") && lvl == 2) {
    polarBear.vel.y = 5;
    polarBear.img = "polarBearDown.png";
} else polarBear.vel.y = 0;
}

  

  console.log(wins);

  if (turtle.overlaps(fish) && wins == 0) {
    wins = 1;
    gSound.play();
    fish.x = 160;
    fish.y = 450;
    console.log("wins:");
    console.log(wins);
  } else if (turtle.overlaps(fish) && wins == 1) {
    wins = 2;
    gSound.play();
    fish.x = 55;
    fish.y = 55;
    console.log("wins:");
    console.log(wins);
  } else if (turtle.overlaps(fish) && wins == 2) {
    wins = 3;
    gSound.play();
    fish.x = 570;
    fish.y = 245;
    console.log("wins:");
    console.log(wins);
  } else if (turtle.overlaps(fish) && wins == 3) {
    wins = 4;
    gSound.play();
    fish.x = 365;
    fish.y = 245;
    console.log("wins:");
    console.log(wins);
  } else if (turtle.overlaps(fish) && wins == 4) {
    wins = 5;
    gSound.play();
    console.log("wins:");
    console.log(wins);
    screen = 2;
    console.log("level:");
    console.log(lvl);
    fish.remove();
    turtle.remove();
    obs.remove();
  } else if ( screen == 2 && mouse.pressing()){
    lvl = 2
    screen = 3;
    console.log("level:");
    console.log(lvl);
    polarBear.x = playerPosX
    polarBear.y = playerPosY
  }
 
  
  
  
  //for testing!
  //turtle.debug = mouse.pressing();
  //fish.debug = mouse.pressing();
  //obs.debug = mouse.pressing();
}
