const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 1150);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 750, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(450, 530, 70, 70);
  box2 = new Box(450, 460, 70, 70);
  box3 = new Box(450, 390, 70, 70);
  box4 = new Box(450, 320, 70, 70);
  box5 = new Box(450, 250, 70, 70);
  box6 = new Box(450, 180, 70, 70);
  box7 = new Box(450, 110, 70, 70);
  box8 = new Box(540, 530, 70, 70);
  box9 = new Box(540, 460, 70, 70);
  box10 = new Box(540, 390, 70, 70);
  box11= new Box(540, 320, 70, 70);
  box12= new Box(540, 250, 70, 70);
  box13= new Box(540, 180, 70, 70);
  box14 = new Box(630, 530, 70, 70);
  box15 = new Box(630, 460, 70, 70);
  box16 = new Box(630, 390, 70, 70);
  box17= new Box(630, 320, 70, 70);
  box18= new Box(630, 250, 70, 70);
  box19= new Box(720, 250, 70, 70);
  box20= new Box(720, 250, 70, 70);
  box21= new Box(720, 250, 70, 70);
  box22= new Box(720, 250, 70, 70);
  box23= new Box(720, 250, 70, 70);
  box24= new Box(720, 250, 70, 70);


}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
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
  box22.display();
  box23.display();
  box24.display();
  box21.display();



  hero.display();
  rope.display();
  monster.display();

}
function mousePressed(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
}
