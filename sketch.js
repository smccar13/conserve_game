let player;
let lvl;
playerPosX = 100;
playerPosY = 100;
let goal;
let obs;
let wins;
let gSound;
let playerRightIcons = ['turtleRight.png', 'polarBearRight.png', 'fishwithbubbles2.png'];
let playerLeftIcons = ['turtleLeft.png', 'polarBearLeft.png', 'fishwithbubbles2.png'];
let playerUpIcons = ['turtleUp.png', 'polarBearUp.png', 'fishwithbubbles2.png'];
let playerDownIcons = ['turtleDown.png', 'polarBearDown.png', 'fishwithbubbles2.png'];
let bg = ["underthesea.png"]

function preload() {
	gSound = loadSound("pop.wav");
}

function setup() {
  createCanvas(800, 600);
    //background image
  bg = loadImage("underthesea.png");
  //set number of wins
  wins = 0;
  lvl = 1;
    //goal set up
  goal = createSprite(650, 500);
  goal.img = 'fishwithbubbles2.png';
  goal.scale = 0.1;
  goal.collider = 'static';
  goal.w = 30
  goal.h = 20
  
  //player set up
  player = createSprite(playerPosX, playerPosY);
  player.w = 250
  player.h = 150
  player.img = playerRightIcons[lvl-1];
  player.scale = 0.5;
  //player physics
  player.collider = "dynamic";
  player.rotationDrag = 100;
  
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
  background(bg);

  //move left and right w/ key press
  if (kb.pressing("left")) {
    player.vel.x = -5;
    player.img = playerLeftIcons[lvl-1];
  } else if (kb.pressing("right")) {
    player.vel.x = 5;
    player.img = playerRightIcons[lvl-1];
  } else player.vel.x = 0;

  //move up and down w/ key press
  if (kb.pressing("up")) {
    player.vel.y = -5;
    player.img = playerUpIcons[lvl-1];
  } else if (kb.pressing("down")) {
    player.vel.y = 5;
    player.img = playerDownIcons[lvl-1];
  } else player.vel.y = 0;
  
  console.log(wins);

  if (player.overlaps(goal) && wins == 0) {
    wins = 1;
    gSound.play();
    goal.x = 160;
    goal.y = 450;
    console.log("wins:");
    console.log(wins);
  } else if (player.overlaps(goal) && wins == 1) {
    wins = 2;
    gSound.play();
    goal.x = 55;
    goal.y = 55;
    console.log("wins:");
    console.log(wins);
  } else if (player.overlaps(goal) && wins == 2) {
    wins = 3;
    gSound.play();
    goal.x = 570;
    goal.y = 245;
    console.log("wins:");
    console.log(wins);
  } else if (player.overlaps(goal) && wins == 3) {
    wins = 4;
    gSound.play();
    goal.x = 365;
    goal.y = 245;
    console.log("wins:");
    console.log(wins);
  } else if (player.overlaps(goal) && wins == 4) {
    wins = 5;
    gSound.play();
    console.log("wins:");
    console.log(wins);
    
    lvl = 2;
    console.log("level:");
    console.log(lvl);
  } else if ( wins == 5 && kb.pressed("space")){
    lvl = 3
    console.log("level:");
    console.log(lvl);
  }
 
  //scale player icon for each level
  if (lvl == 1){
    player.scale = 0.5;
  } else if (lvl == 2){
    player.scale = 0.1;
    player.w = 150;
    player.h = 130;
  }else{
    player.scale = 0.1;
  }
  
  
  
  //for testing!
  //player.debug = mouse.pressing();
  //goal.debug = mouse.pressing();
  //obs.debug = mouse.pressing();
}
