
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
    world = engine.world;

	ground = new Ground(600,height,1200,20);
	paper  = new Paper(100,565,25);

	

	
	dustbinBottom =Bodies.rectangle(width/2,580,200,20,{isStatic:true});
	World.add(world,dustbinBottom);
	dustbinBottomSprite= createSprite(width/2,580,200,20);
	dustbinBottomSprite.shapeColor ="orange"
	dustbinLeft=Bodies.rectangle((width/2)-110,540,20,100,{isStatic:true});
	World.add(world,dustbinLeft);
	dustbinLeftsprite=createSprite((width/2)-110,540,20,100);
	dustbinLeftsprite.shapeColor ="yellow"
	dustbinRight=Bodies.rectangle((width/2)+110,540,20,100,{isStatic:true});
	World.add(world,dustbinRight);
	dustbinRightsprite=createSprite((width/2)+110,540,20,100);
	dustbinRightsprite.shapeColor="yellow"
	dustbinTopRight=Bodies.rectangle((width/2)+80,500,20,100,{isStatic:true});
	World.add(world,dustbinTopRight);
	dustbinTopRightsprite=createSprite((width/2)+80,500,80,20);
	dustbinTopRightsprite.shapeColor="red"
	dustbinTopleft=Bodies.rectangle((width/2)-80,500,80,20,{isStatic:true});
	World.add(world,dustbinTopleft);
	dustbinTopleftsprite=createSprite((width/2)-80,500,80,20);
	dustbinTopleftsprite.shapeColor="red"
	dustbinNeckRight=Bodies.rectangle((width/2)+40,470,20,80,{isStatic:true});
	World.add(world,dustbinNeckRight);
	dustbinNeckRightsprite=createSprite((width/2)+40,470,20,80);
	dustbinNeckRightsprite.shapeColor="pink"
	dustbinNeckLeft=Bodies.rectangle((width/2)-40,470,20,80,{isStatic:true});
	World.add(world,dustbinRight);
	dustbinLeftsprite=createSprite((width/2)-40,470,20,80);
	dustbinLeftsprite.shapeColor="pink"
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  

  ground.display();
  paper.display();


  drawSprites();
 
}
function keyPressed(){
if (keyCode === UP_ARROW){
	console.log("insideKeyPressed");
	Matter.Body.applyForce (paper.body,paper.body.position,{x:85,y:-85});
}
}



