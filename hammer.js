class Hammer extends BaseClass{
    constructor(x,y){
      super(x,y,100,10);
      
     
    }
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      fill("yellow")
      super.display();
    }
  }