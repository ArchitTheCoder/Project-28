
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
	boyIMG = loadImage("sprites/boy.png")
	treeIMG = loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,600,10,10)
	boy.addImage(boyIMG)
	boy.scale = 0.1

	tree = createSprite(600,440,10,10)
	tree.addImage(treeIMG)
	tree.scale = 0.4

	
	//Create the Bodies Here.
	ground = new Ground(400, 680, width, 20)

	

	

	// tree = new Tree(600,480,400,400)

	stone = new Stone(150,540,30)

	mango1 = new Mango(450,420,30)
	mango2 = new Mango(740,420,30)
	mango3 = new Mango(570,320,30)
	mango4 = new Mango(640,380,30)
	mango5 = new Mango(670,220,30)


	slingshot = new SlingShot(stone.body,{x:150, y:540});
		


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("grey");

	

	drawSprites();


	ground.display();
	stone.display();
	slingshot.display(); 

	mango1.display();
	mango2.display();
	mango3.display();
	mango5.display();
	mango4.display();

	detectCollision(stone,mango1)
	detectCollision(stone,mango2)
	detectCollision(stone,mango3)
	detectCollision(stone,mango4)
	detectCollision(stone,mango5)


}




function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX, y:mouseY})
}

function mouseReleased() {
    slingshot.fly()
}

function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if (distance <= lmango.radius + lstone.r) {
		Matter.Body.setStatic(lmango.body,false)
	}
}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(stone.body)
    }
}