var bgImg1,bgImg2,bg;
var game,form,player;
var pikachu,pikachuImg,pikachuImg2;
var gameState=0;
var cloud,cloudImg,cloudsGroup;
var redPB,blackPB,redPBImg,blackPBImg,redPBGroup,blackPBGroup;
var invisibleGround;
var psound,jump,checkPoint,die;
var score = 2;
var distance = 0;
var gameover,gameoverImg;
var restart,restartImg;

function preload(){
  bgImg1=loadImage("images/background1.png");
  bgImg2=loadImage("images/background2new.jpg");
  pikachuImg=loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png");
  cloudImg=loadImage("images/cloud.png");
  redPBImg=loadImage("images/redpokeball.png");
  blackPBImg=loadImage("images/blackpokeball.png");
  psound=loadSound("PokemonSound.mp3");
  jump=loadSound("jump.mp3");
  checkPoint=loadSound("checkPoint.mp3");
  die=loadSound("die.mp3");
  pikachuImg2=loadAnimation("images/2.1.gif","images/2.2.gif","images/2.3.gif","images/2.4.gif","images/2.5.gif","images/2.6.gif","images/2.7.gif","images/2.8.gif","images/2.9.gif","images/2.10.gif","images/2.11.gif","images/2.12.gif","images/2.13.gif","images/2.14.gif","images/2.15.gif","images/2.16.gif","images/2.17.gif");
  gameoverImg=loadImage("gameOver.png");
  restartImg=loadImage("restart.png");
}

function setup() {
  createCanvas(displayWidth-30,displayHeight-120);
  psound.loop();
  //createSprite(400, 200, 50, 50);
  game=new Game();
  game.start();
  //console.log(player.name);

  
}

function draw() {
  if (gameState === 1){
    clear();
    game.play();    
  } 
  if (gameState === 2){
    game.gameOver();
  }
  if (gameState === 3){
    game.end();
  }
}