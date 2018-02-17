var theta = 0;
var theta2 = 0;
var vTheta = 0;
function draw() {
  
  // clear canvas after every draw
  ctx.clearRect(0, 0, width, height);
  
  // draw circles
  ctx.fillStyle = b1;
  ctx.beginPath();
  ctx.moveTo(hWidth, hHeight);
  ctx.arc(hWidth, hHeight, 100, (theta + theta2)/2, (theta + theta2)/2-1);
  ctx.closePath();
  ctx.fill();
  
  ctx.fillStyle = b3;
  ctx.beginPath();
  ctx.moveTo(hWidth, hHeight);
  ctx.arc(hWidth, hHeight, 80, theta2, theta2-1);
  ctx.closePath();
  ctx.fill();
  
  ctx.fillStyle = b2;
  ctx.beginPath();
  ctx.moveTo(hWidth, hHeight);
  ctx.arc(hWidth, hHeight, 60, theta, theta-1);
  ctx.closePath();
  ctx.fill();
  
  ctx.fillStyle = w;
  ctx.beginPath();
  ctx.arc(hWidth, hHeight, 40, 0, 2*Math.PI);
  ctx.closePath();
  ctx.fill();
  
  theta += Math.sin(vTheta / 100) / 10;
  theta2 += Math.cos(vTheta / 50) / 10;
  vTheta++;
  
  requestAnimationFrame(draw);
}
draw();