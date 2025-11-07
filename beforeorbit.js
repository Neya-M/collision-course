const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var earthOrbitSize = 200;
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var centerX = width/2;
var centerY = height/2;
function init() {
	window.requestAnimationFrame(draw);
}

function draw() {
	ctx.globalCompositeOperation = "destination-over";
	ctx.clearRect(0, 0, width, height);
	ctx.strokeStyle = "blue";
	ctx.save();
	ctx.translate(centerX, centerY);
	const time = new Date();
	ctx.rotate(
	  ((2 * Math.PI) / 60) * time.getSeconds() +
	    ((2 * Math.PI) / 60000) * time.getMilliseconds(),
	);
	ctx.translate(earthOrbitSize, 0);
	ctx.fillStyle = "rgb(0 0 0 / 50%)";
	ctx.beginPath(); 
	ctx.fillStyle = "blue";
	ctx.arc(0, 0, 10, 0, 2 * Math.PI);
	ctx.fill();
	ctx.save();
	ctx.rotate(
	  ((2 * Math.PI) / 6) * time.getSeconds() +
	    ((2 * Math.PI) / 6000) * time.getMilliseconds(),
	);
	ctx.translate(0, 28.5);
	ctx.beginPath(); 
	ctx.fillStyle = "gray";
	ctx.arc(0, 0, 5, 0, 2 * Math.PI);
	ctx.fill();
	ctx.restore();
	ctx.restore();
	ctx.beginPath();
	ctx.arc(centerX, centerY, earthOrbitSize, 0, Math.PI * 2, false);
	ctx.stroke();
	ctx.beginPath(); 
	ctx.fillStyle = "yellow";
	ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
	ctx.fill();
	ctx.save();
	ctx.translate(centerX - 130, centerY - 130);
	ctx.beginPath();
	ctx.ellipse(0, 0, 150, 300, Math.PI / -4, 0, 2 * Math.PI);
	ctx.strokeStyle = "red";
	ctx.stroke();
	ctx.restore();
	window.requestAnimationFrame(draw);
}

init();

