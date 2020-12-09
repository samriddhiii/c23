class Box {
     constructor(xpos, ypos, width, height)
     {
     var box_options= {restitution:1}
     this.body = Bodies.rectangle(xpos,ypos,width,height,box_options);
     World.add(world,this.body);
     
     this.width= width;
     this.height= height;
     }

    display()
    {
     var position= this.body.position;
     var angle = this.body.angle;

     push();
     translate(position.x,position.y)
     rectMode(CENTER)
     rotate(angle)
     rect(0,0,this.width,this.height)
    pop();
    }
}
