class G {
    constructor() {
      var options ={
        isStatic:true,
        'density':1.2,
        'resitution':0.3,
       'friction':0.5
      }
      this.body = Bodies.rectangle(390,690,900,20,options);
      World.add(world, this.body);              
      
    }
    display(){
      rectMode(CENTER);
      rect(390,690,900,20);
    }
  
  }