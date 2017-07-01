var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  var options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(200, height, width, 10, options);
  World.add(world, ground);
}

function draw() {
  background(51);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  fill(255);
  strokeWeight(4);
  line(0, height, width, height);
}

function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, 20, 20));

}