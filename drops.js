class DropClass{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.,
            'friction':0.1,
            'density':1.0,
            isStatic:false
            
        }
        this.body = Bodies.circle(x, y,5,options);
        
        drop=[];
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
    
        push();
        
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(4)
        stroke("blue")
        fill("blue");
        ellipse(56,46,5,5,85);
        pop();
       
        



 
         
       
      }
}