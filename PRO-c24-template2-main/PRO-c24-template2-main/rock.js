class rock{

	constructor(x,y,width, height){

		var options = {
			// assign options to the rubber ball
			density :0.8,
			friction: 9,
			restitution: 1
		  }
	
	
		this.body=Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
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
			stroke("white");
			fill("red");
			//draw the ellipse here to display the rubber ball
		     rect(0, 0, this.width, this.height);
				pop();
	}

}