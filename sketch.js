const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var divisionHeight;
function preload() {
    backgroundImg = loadImage("sprites/bg.png");

}

function setup(){
    


    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    var divisionHeight=300;


    


floor = new Ground(240,790,480,20)
division1 = new Ground(100,680,20,250)
division2 = new Ground(200,680,20,250)
division3 = new Ground(300,680,20,250)
division4 = new Ground(400,680,20,250)

    bird = new Bird(240,100);

    bird1 = new Bird(100,200);
    bird2 = new Bird(200,200);
    bird3 = new Bird(300,200);
    bird4 = new Bird(400,200);
    


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
     


  

    bird.display()



    floor.display()
    division1.display()
    division2.display()
    division3.display()
    division4.display()

    bird1.display()
    bird2.display()
    bird3.display()
    bird4.display()
}
