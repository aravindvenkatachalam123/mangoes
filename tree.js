class Tree {
    constructor() {
      var options ={
        isStatic:true,
        'density':1.2,
        'resitution':0.3,
       'friction':0.5
      }
      this.body = Bodies.rectangle(390,200,400,500,options);
      World.add(world, this.body);
      this.image=loadImage("tree.png");
    }
    display(){
      
      image (this.image,this.body.position.x,this.body.position.y,400,500);

    }
  
  }
