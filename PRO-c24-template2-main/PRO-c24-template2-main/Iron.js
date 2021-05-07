class Iron{

	constructor(x,y){

		var options = {
			// assign options to the rubber ball
			density :30,
			friction: 3,
			restitution: 0.6
		  }
	
	
		this.body=Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        
		World.add(world, this.body);




	}
	display()
	{
			var pos=this.body.position;		
            var angle= this.body.angle;
			push();
			translate(pos.x, pos.y);
            rotate(angle);
			rectMode(CENTER);
			strokeWeight(4);
			//stroke("white");
			fill("green");
			//draw the ellipse here to display the rubber ball
		     rect(0, 0, this.width, this.height);
				pop();
	}

}