
// Make canvas statements
const canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 400;

const c = canvas.getContext('2d');

let radius = 20;

// Object that checks if key is pressed
let keyPressed = {
	left: false,
	right: false,
	up: false,
	down: false
}

// Ball object
function Ball(x, y, dx, dy){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;

	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
		c.fillStyle = "red";
		c.fill();
		c.stroke();
		c.closePath();
	}

	this.move = function(){

		// Conditions that checks if ball is greater or less than canvas width
		if(keyPressed.left){
			if(this.x - radius > 0){
				this.x -= this.dx;
			}
		}
		if(keyPressed.right){
			if(this.x + radius < canvas.width){
				this.x += this.dx;
			}
		}

		// Conditions that checks if ball is greater or less than canvas height
		if(keyPressed.up){
			if(this.y - radius > 0){
				this.y -= this.dy;
			}
		}
		if(keyPressed.down){
			if(this.y + radius < canvas.height){
				this.y += this.dy;
			}
		}


		this.draw();
	}
}

// Create the ball using the object 
let ball = new Ball(30, 30, 7, 7);

function start(){
	requestAnimationFrame(start);
	c.clearRect(0, 0, innerWidth, innerHeight);

	ball.move();
}

// Event that check if keys are pressed
document.addEventListener('keydown', (e) => {
	if(e.keyCode === 37){
		keyPressed.left = true;
	}
	if(e.keyCode === 39){
		keyPressed.right = true;
	}
	if(e.keyCode === 38){
		keyPressed.up = true;
	}
	if(e.keyCode === 40){
		keyPressed.down = true;
	}
})

// Event that check if keys aren't pressed
document.addEventListener('keyup', (e) => {
	if(e.keyCode === 37){
		keyPressed.left = false;
	}
	if(e.keyCode === 39){
		keyPressed.right = false;
	}
	if(e.keyCode === 38){
		keyPressed.up = false;
	}
	if(e.keyCode === 40){
		keyPressed.down = false;
	}
});

start();



