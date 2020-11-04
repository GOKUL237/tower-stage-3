
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var papper, dustbin,launcher,backgroundImage;
var bg = "db.png"
function preload() {
changebackground()

}

function setup() {
  createCanvas(1200, 400);
 
  engine = Engine.create();
  world = engine.world;
  
 
ground1 = new Ground (1000,350,400,20);


box1 = new Box (850,320,30,40);
box2 = new Box (880,320,30,40);
box3 = new Box (910,320,30,40);
box4 = new Box (940,320,30,40);
box5 = new Box (970,320,30,40);
box6 = new Box (1000,320,30,40);
box7 = new Box (1030,320,30,40);
box8 = new Box (1060,320,30,40);
box9 = new Box (1090,320,30,40);
box10 = new Box (2000,320,30,40);
box11 = new Box (880,280,30,40);
box12 = new Box (910,280,30,40);
box13 = new Box (940,280,30,40);
box14 = new Box (970,280,30,40);
box15= new Box (1000,280,30,40);
box16 = new Box (1030,280,30,40);
box17 = new Box (1060,280,30,40);
box18 = new Box (910,240,30,40);
box19 = new Box (940,240,30,40);
box20 = new Box (970,240,30,40);
box21 = new Box (1000,240,30,40);
box22 = new Box (1030,240,30,40);
box23 = new Box (940,200,30,40);
box24 = new Box (970,200,30,40);
box25 = new Box (1000,200,30,40);
box26 = new Box (970,160,30,40);
//Create the Bodies Here.
  papper = new Paper(200, 210, 20, 30)
  launcher1 = new Launcher (papper.body,{x:200, y:100});
  Engine.run(engine);
 
}


function draw() {
  if(backgroundImage)
    background(backgroundImage);

 
  //image(dustbin,800,220,200,150) 
 
//basketL.display();
//basketB.display();
//basketR.display();
launcher1.display();
ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();



papper.display();
}

function keyPressed () {
if (keyCode === UP_ARROW){

  Matter.Body.applyForce(papper.body,papper.body.position,{x:85 ,y:-85})
}

}
function mouseDragged(){
  Matter.Body.setPosition(papper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
launcher1.fly();
}
async function changebackground(){

var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
console.log(response)
var translate =  await response.json();
console.log(translate);
var translate2=translate.datetime
console.log(translate2);
 
  var  Time = translate2.slice(11,13)

if(Time>=06&&Time<=19){
bg= "db.png"


}
else{

bg= "nb.jpg"


}
backgroundImage=loadImage(bg)

}

