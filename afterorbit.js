const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const text = document.getElementById("text");
var earthOrbitSize = 200;
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var astspeed = 2;
var centerX = width/2;
var centerY = height/2;
const Aradius1 = 150;
const Aradius2 = 300;
const Arotation = Math.PI / -4;
const rotation = Math.PI / -4;
var prevX = 300;
var prevY = 300;
var theta = 0;
function init() {
	window.requestAnimationFrame(draw);
}
init();

function draw() {
	const time = new Date();
	theta += 0.01;
	const x =
	centerX - 130 +
	Aradius1 * Math.cos(theta/astspeed) * Math.cos(rotation) -
	Aradius2 * Math.sin(theta/astspeed) * Math.sin(rotation);
	const y =
	centerY - 130 +
	Aradius1 * Math.cos(theta/astspeed) * Math.sin(rotation) +
	Aradius2 * Math.sin(theta/astspeed) * Math.cos(rotation);
	ctx.globalCompositeOperation = "destination-over";
	ctx.clearRect(0, 0, width, height);
	// asteroid
	ctx.save();
	ctx.translate(x, y);
	prevX = x; prevY = y;
	ctx.beginPath();
	ctx.arc(0, 0, 2, 0, 2 * Math.PI);
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.restore();
	//earth
	ctx.strokeStyle = "blue";
	ctx.save();
	ctx.translate(centerX, centerY);
	ctx.rotate(
	  theta * 2,
	);
	ctx.translate(earthOrbitSize, 0);
	ctx.fillStyle = "rgb(0 0 0 / 50%)";
	ctx.beginPath(); 
	ctx.fillStyle = "blue";
	ctx.arc(0, 0, 10, 0, 2 * Math.PI);
	ctx.fill();
	// moon
	ctx.save();
	ctx.rotate(
	  theta * 20,
	);
	ctx.translate(0, 28.5);
	ctx.beginPath(); 
	ctx.fillStyle = "gray";
	ctx.arc(0, 0, 5, 0, 2 * Math.PI);
	ctx.fill();
	ctx.restore();
	ctx.restore();
	// earth orbit
	ctx.beginPath();
	ctx.arc(centerX, centerY, earthOrbitSize, 0, Math.PI * 2, false);
	ctx.stroke();
	// sun
	ctx.beginPath(); 
	ctx.fillStyle = "yellow";
	ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
	ctx.fill();
	// asteroid orbit
	ctx.save();
	ctx.translate(centerX - 130, centerY - 130);
	ctx.beginPath();
	ctx.ellipse(0, 0, 150, 300, Math.PI / -4, 0, 2 * Math.PI);
	ctx.strokeStyle = "red";
	ctx.stroke();
	ctx.restore();
	//text.innerHTML = String(Math.floor(theta/3)) + " years"
	window.requestAnimationFrame(draw);
}

