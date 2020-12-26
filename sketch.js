const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine,world
var paper,dustbin1,dustbin2,dustbin3,ground

function setup() {
	createCanvas(1200, 400);

  engine = Engine.create()
  world = engine.world
  
  dustbin1 = new Dustbin(800,307,15,155)
  dustbin2 = new Dustbin(890,377,180,15)
  dustbin3 = new Dustbin(980,307,15,155)
  ground = new Ground(600,392,1200,15)
  paper = new Paper(150,210,70)
}


function draw() {
  background("lightgrey")

  Engine.update(engine)

  paper.display()
  dustbin3.display()
  dustbin1.display()
  dustbin2.display()
  ground.display()
  
}
function keyPressed() {
  if(keyCode === UP_ARROW){
    Body.applyForce(paper.body,paper.body.position,{x:925,y:-925})
  }
}
