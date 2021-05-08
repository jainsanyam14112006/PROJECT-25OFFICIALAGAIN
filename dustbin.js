class DustBin{
constructor(x,y,width,height){
    var options={
isStatic:true
}

this.bodyb=Bodies.rectangle(x,y,width,height,options);
world.add(world,this.bodyb);
this.bodyl=Bodies.rectangle((x-(width/2))),(y-(height*2)),height;
world.add(world,this.bodyr);
this.bodyr=Bodies.rectangle((x+(width/2))),(y-(height*2)),height;
world.add(world,this.bodyr);
this.bodyb.width=width
this.bodyb.height=height

}
display(){
    fill("white");
rect(this.bodyb.position.x,this.bodyb.positiony.this.bodyb.width,this.bodyb.height);
rect(this.bodyb.positionx-(this.bodyb.width/2)),(this.bodyb.positiony-(this.bodyb.height/2));
rect((this.bodyb.position.x+(this.bodyb.width/2)),(this.bodyb.positiony+(this.bodyb.height/2));
}
}