const canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 400;

const c = canvas.getContext('2d');


function Ball(x, y, dx, dy){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;

	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, 20, 0, Math.PI * 2, false);
		c.fillStyle = "red";
		c.fill();
		c.stroke();
		c.closePath();
	}
}

let ball = new Ball(30, 30);

function start(){
	requestAnimationFrame(start);

	ball.draw();
}

start();



