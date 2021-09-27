var engine,world,ground,ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic: true
  }
  var ball_options = {
    restitution: 1.0
  }
  ground = Bodies.rectangle(200,200,50,50,ground_options);
  ball = Bodies.circle(200,100,20,ball_options);

  World.add(world,ground);
  World.add(world,ball);
  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background("black");

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,50,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}