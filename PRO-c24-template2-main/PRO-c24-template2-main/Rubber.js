class Rubber{

	constructor(x,y,r){

		var options = {
			// assign options to the rubber ball
			density :0.3,
			friction: 5,
			restitution: 1
		  }
	
		this.x= x;
		this.y=y;
		this.r= r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);




	}
	display()
	{
			var rubberpos=this.body.position;		
			push();
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
		     ellipse(0, 0, 100, 200);
				pop();
	}

}