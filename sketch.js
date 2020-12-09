const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1, ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var box_options = {restitution:1,density:1.5}

  //var options = {isStatic:true}
  //ground = Bodies.rectangle(200,390,400,20,options)
  //World.add(world,ground);

  var ball_options= {restitution:0.5}
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world, ball);

  box1 = new Box(100,200,50,100);
  box2= new Box(120,100,50,50);
  ground= new Ground(200,390,400,20)
  
  //console.log(ground);
}

function draw() {
  background(220,255,255);  

  Engine.update(engine);
  
  //rectMode(CENTER)
  //rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20,20);

  box1.display();
  box2.display();
  
  ground.display();

}