const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var box1, box2, box3, box4, box5, box6, box7, box8, box9

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(0,380,800,20)
  player = new Box(200,200, 40, 40)
  sling = new SlingShot(player.body, { x: 150, y: 200 });
  box2 = new Box(420,100,30,10)
  box3 = new Box(450,100,30,10)
  box4 = new Box(480,100,30,10)
  box5 = new Box(510,100,30,10)
  box6 = new Box(540,100,30,10)
  stand = new Ground(400,200,300,20)
  Engine.run(engine);
}

function draw() { 
  background(0);
  Engine.update(engine);
  ground.display()
  player.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  stand.display()
  sling.display();
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(player.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}