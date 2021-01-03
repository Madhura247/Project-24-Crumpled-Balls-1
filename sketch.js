
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, paper, ground, BottomBox, LeftBox, RightBox;

function setup() {
	createCanvas(800, 700);
    background (0);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(20, 650, 10);
	ground = new Ground(width/2, 670, width, 10);
	
	BottomBox = new Dustbin (400, 650, 200, 90);
	LeftBox = new Dustbin (300, 610, 100, 0);
	RightBox = new Dustbin (500, 610, 100, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper.display();
  ground.display();
  BottomBox.display();
  LeftBox.display();
  RightBox.display();
  
  drawSprites();
 
}



