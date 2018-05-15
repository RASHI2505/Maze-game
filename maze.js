
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

// Goal object
const Goal = {
	x: canvas.width - 120,
	y: canvas.height - 110,
	width: 100,
	height: 100,
	draw: function(){
		c.beginPath();
		c.rect(this.x, this.y, this.width, this.height);
		c.fillStyle = "orange";
		c.fill();
		c.closePath();
	}
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

// Wall object
function Wall(x, y, width, height){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.draw = function(){
		c.beginPath();
		c.rect(this.x, this.y, this.width, this.height);
		c.fillStyle = "black";
		c.fill();
		c.closePath();
	}
}

// Create walls using the object
let wall0 = new Wall(0, 100, canvas.width - 150, 5);
let wall1 = new Wall(150, 200, canvas.width, 5);
let wall2 = new Wall(150, 200, 5, 125);
let wall3 = new Wall(250, canvas.height, 5, -125);
let wall4 = new Wall(350, 200, 5, 125);
let wall5 = new Wall(450, canvas.height, 5, -125);
let wall6 = new Wall(550, 200, 5, 125);
let wall7 = new Wall(650, canvas.height, 5, -125);

// Create the ball using the object 
let ball = new Ball(30, 30, 7, 7);

function start(){
	requestAnimationFrame(start);
	c.clearRect(0, 0, innerWidth, innerHeight);

	wall0.draw();
	wall1.draw();
	wall2.draw();
	wall3.draw();
	wall4.draw();
	wall5.draw();
	wall6.draw();
	wall7.draw();

	Goal.draw();

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



