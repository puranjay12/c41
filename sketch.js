const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies

var man, rain, rainimg, manimg


function preload(){
  
  engine = Engine.create();
  world = engine.world;
  rainimg = loadImage("drop.png")
  manimg = loadImage("umbrella.png")

}

function setup(){
    createCanvas(400,400);
   
    rainGroup = new Group()

    
}

function draw(){

  background(0)
  Engine.update(engine);
  man = createSprite(200,300,100,100)
man.addImage(manimg)
man.scale = 0.5
  spawnMan()
  //spawnDrops()
  
  man.setCollider("circle",0,0,150)


rainGroup.collide(man)

   
   

    drawSprites()

}   


function spawnMan(){
  if(frameCount % 5 === 0) {
    var x = random(0,400)
rain = createSprite(x,0, 5, 5);
rain.addImage(rainimg)
rain.scale = 0.05
rain.velocityY = 1
rainGroup.add(rain)




}
}
/*function spawnDrops(){
 
  if(rain.isTouching(man)){
    rain.collide(man)
  }
  
     
  }*/