class Mango {
    constructor(x,y,radius) {
        var options = {
            'restitution' : 0,
            'isStatic': true,
            'friction': 1.3,
            'density': 1.2
        }
        this.image = loadImage("sprites/mango.png")
 
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world,this.body)

    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        ellipseMode(CENTER)
        fill("pink");
        image(this.image,0, 0, this.radius*2, this.radius*2);
        pop();
    }
    
}