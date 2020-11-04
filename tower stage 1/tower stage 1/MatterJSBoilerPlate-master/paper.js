class Paper {
constructor(x,y){
var option={
 'restitution':0.8,
 'friction':1.0,
'density': 4.9
}
this.body=Bodies.rectangle(x,y,50,50,option);
this.width=50;
this.height=50;
this.img=loadImage("hex.png");
World.add(world,this.body);

    
}
 display() {
var pos = this.body.position;
var angle = this.body.angle;
//push();
//translate(pos.x,pos.y);
//rotate(angle);
imageMode(CENTER);
image(this.img,pos.x,pos.y,this.width,this.height);
 //rectMode(CENTER);
 //rect(pos.x,pos.y,this.width,this.height);
//pop()
}


}