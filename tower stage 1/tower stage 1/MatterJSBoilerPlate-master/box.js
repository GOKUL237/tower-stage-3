class Box {
    constructor(x,y,width,height){
    var option={
     
        'restitution':0.8,
        'friction':1.0,
        'density': 1
    
    
    
    }
    this.box = Bodies.rectangle(x, y, width, height, option);   
    this.width = width;
    this.height = height;
    this.visibility=255;
    World.add(world, this.box);
}
display() {
console.log(this.box.speed)
    if(this.box.speed < 3){
       
        fill("BLUE")

    rectMode(CENTER)
        rect(this.box.position.x,this.box.position.y,this.width,this.height);
    }
      else{
         World.remove(world, this.box);
         push();
         this.Visiblity = this.Visiblity - 2;
         tint(255,this.Visiblity);
         pop();
        }
   



}
}