class Chain{
    constructor(bodyA,bodyB){

    


    var options = {
        bodyA:bird.body,
        bodyB:constraintlog.body,
        stifness:0.04, 
        length:10
    }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
    }
display(){
    var pointA = this.chain.body.position
    var pointB = this.chain.body.position
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}