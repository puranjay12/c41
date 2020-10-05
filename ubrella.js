class Umbrella{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("umbrella.png");
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("white");
    //rect(pos.x, pos.y, this.w,this.h);
    image(this.image, pos.x, pos.y,this.w, this.h);
    }
  };