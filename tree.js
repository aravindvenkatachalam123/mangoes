class Tree {
    constructor() {
      var options ={
        isStatic:false,
        'density':1.2,
        'resitution':0.3,
       'friction':0.5
      }
      this.body = Bodies.rectangle(350,290,10,10,options);
      World.add(world, this.body);
    }
    display(){
      
      image (this.image,this.body.position.x,this.body.position.y,10,10);

    }
  
  }
