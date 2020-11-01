class Tree {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          restitution:0.8,
          friction:100,
          density:20.0
      }
      this.image = loadImage("sprites/tree.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
   
      stroke("blue");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  