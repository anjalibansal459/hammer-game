
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone1,ground1,iron1,hammer1,rubber1
var sand1,sand2,sand3,sand4,sand5,sand6;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone1=new Stone(400,400,200,200)
ground1=new Ground(470,690,2500,50)
	iron1=new Iron(800,200,100,100)
	hammer1=new Hammer(600,100,100,10)
	rubber1=new Rubber(500,100,50,50)
	sand1=new Sand(600,600,20,20)
	sand2=new Sand(620,600,20,20)
	sand3=new Sand(640,600,20,20)
	sand4=new Sand(660,600,20,20)
	sand5=new Sand(680,600,20,20)
	sand6=new Sand(700,600,20,20)
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  stone1.display()
  ground1.display()
  iron1.display()
  hammer1.display()
  rubber1.display()
  sand1.display()
  sand2.display(
	  sand3.display(
		  sand4.display(
			  sand5.display(
				  sand6.display()
			  )
		  )
	  )
  )
  drawSprites();
 
}



