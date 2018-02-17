var xVelocity = 0;
var yVelocity = 0;
var x = hWidth;
var y = hHeight;
var vMax = 10;
var hsl = 0;

function draw() {
  
  // dim old paths
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
  ctx.fillRect(0, 0, width, height);
  
  // draw new path
  yVelocity += (Math.random() - 0.5)/10;
  xVelocity += (Math.random() - 0.5)/10;
  
  xVelocity = Math.min(Math.max(xVelocity, -vMax), vMax);
  yVelocity = Math.min(Math.max(yVelocity, -vMax), vMax);
  
  x += xVelocity;
  y += yVelocity;
  
  x %= width;
  if(x < 0) x = width;
  y %= height;
  if(y < 0) y = height;
  
  ctx.fillStyle = `hsl(${hsl++}, 100%, 50%)`;
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2*Math.PI);
  ctx.closePath();
  ctx.fill();
  
  requestAnimationFrame(draw);
}
draw();