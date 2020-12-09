class Ground{
    constructor(xpos, ypos, width, height)
    {
        var options = {isStatic:true}
        this.body = Bodies.rectangle(xpos,ypos,width,height,options);
        World.add(world,this.body);
     
     this.width= width;
     this.height= height;
    }

   display(){

   rectMode(CENTER);
   push();
   fill("blue")
   rect(this.body.position.x,this.body.position.y,this.width,this.height)
   pop();
   }

}