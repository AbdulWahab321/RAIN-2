const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var drop,drps1
var drps,thunder,thunder1,thunder2,thunder3,thunder4;
function preload(){
    thunder1=loadImage("1.png");
    thunder2=loadImage("2.png")
    thunder3=loadImage("3.png")
    thunder4=loadImage("4.png")

    walking=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")

    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    drps=new DropClass(Math.round(random(10,1190)),-50,10)
    man=createSprite(700,220,1,1)
    man.addAnimation("manwalk",walking)
    man.scale=0.5
}

function draw(){
    background("black"); 
    Engine.update(engine);
    
    var maxDrops=100
    if(frameCount % 50 === 0){
        var position=[Math.round(random(5,990)),-5]
        drop.push(position);
        drps=  new DropClass(random(0,400),1);
        
      for(var i=0; i<maxDrops; i++){
        
      }

  }


    var rand=Math.random(random(1,4))
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,1190), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    if(frameCount%85===0){
        thunder.visible=false;
        if(frameCount%1===0){
            thunder.visible=false;
        }
    }

    
    drps.display();
    drawSprites()
}   

