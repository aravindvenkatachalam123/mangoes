
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var ground;
var stone;
var boy,boyimg;
function preload()
{
  boyimg=loadImage("boy.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 tree = new Tree();
 ground = new G();
 stone = new Stone();
stone.scale=0.5;
 boy = createSprite(200,610,10,10);
boy.addImage("boy",boyimg);
boy.scale=0.1;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  ground.display();
  stone.display();
  boy.display();
  drawSprites();
 
}



