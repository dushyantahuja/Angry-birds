const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, groot;
var box1,B2,B3,B4,B5;
var pig1,log1,L2,P2,L3,L4,bird

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    groot = new GROOT(600,height,1200,30)


    box1 = new Box(700,320,70,70);
    B2 = new Box(920,320,70,70)
    B3 = new Box(700,240,70,70)
    B4 = new Box(920,240,70,70)
    B5 = new Box(810,160,70,70)
    bird = new birdie(400,400)
    pig1 = new Pig(810,350)
    log1 = new LOG(810,260,300,PI/2)
    P2 = new Pig(810,220)
    L2 = new LOG(810,180,300,PI/2)
    L3 = new LOG(760,120,150,PI/7)
    L4 = new LOG(870,120,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    B2.display();
    groot.display();
    pig1.display();
    log1.display();
    B3.display();
    B4.display();
    P2.display();
    L2.display();
    L3.display();
    L4.display();
    B5.display();
    bird.display();
}