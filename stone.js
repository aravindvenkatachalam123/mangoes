class Stone {
    constructor() {
      var options ={
        isStatic:true,
        'density':1.2,
        'resitution':0,
       'friction':1
      }
      this.body = Bodies.rectangle(390,200,400,500,options);
      World.add(world, this.body);
      this.image=loadImage("stone.png");
      
    }
    display(){
      image (this.image,this.body.position.x,this.body.position.y,400,500);
      

    }
  
  }
