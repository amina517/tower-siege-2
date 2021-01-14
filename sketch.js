const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1;
var stand2;
var box1;
var polygon;
var slingshot;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1920,937);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(1485, 450, 400, 10);
    stand1b = new Ground(1485, 850, 250, 800);
    stand2 = new Ground(925, 700, 400, 10);
    stand2b = new Ground(925, 900, 250, 400);

    //polygon
    polygon = new Polygon(50, 200, 50);

    slingshot = new Chain(polygon.body, {x:200, y: 200})

    // Blocks on stand 1
    box1 = new Box(1350, 425, 50, 50);
    box2 = new Box(1403, 425, 50, 50);
    box3 = new Box(1456, 425, 50, 50);
    box4 = new Box(1509, 425, 50, 50);
    box5 = new Box(1562, 425, 50, 50);
    box6 = new Box(1615, 425, 50, 50);

    box7 = new Box(1403, 375, 50, 50);
    box8 = new Box(1456, 375, 50, 50);
    box9 = new Box(1509, 375, 50, 50);
    box10 = new Box(1562, 375, 50, 50);

    box11 = new Box(1456, 325, 50, 50);
    box12 = new Box(1509, 325, 50, 50);

    //Blocs on stand 2
    box13 = new Box(900, 670, 50, 50);
    box14 = new Box(950, 670, 50, 50);
    box15 = new Box(1000, 670, 50, 50);
    box16 = new Box(850, 670, 50, 50);
    box17 = new Box(800, 670, 50, 50);
    box18 = new Box(1050, 670, 50, 50);

    box19 = new Box(900, 620, 50, 50);
    box20 = new Box(950, 620, 50, 50);
    box21 = new Box(1000, 620, 50, 50);
    box22 = new Box(850, 620, 50, 50);

    box23 = new Box(900, 570, 50, 50);
    box24 = new Box(950, 570, 50, 50);






}

function draw(){
    background("LightGrey")
    Engine.update(engine);

    drawSprites();
    stand1.display();
    stand1b.display();
    stand2.display();
    stand2b.display();

    polygon.display();
    slingshot.display();

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

}

function mouseDragged(){
 
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}