class Stone {
    constructor(x, y, r) {
        var options = {
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.image = loadImage("sprites/stone.png");
        this.body = Bodies.circle(x, y, r, options);
        this.r = r
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        ellipseMode(CENTER)
        fill("white");
        image(this.image, pos.x, pos.y, this.r * 2, this.r * 2);
    }

}