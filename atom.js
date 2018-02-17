var t = 0;
function draw() {
  
  // clear canvas
  ctx.clearRect(0, 0, width, height);
  
  ctx.fillStyle = b1;
  // draw atom (polar parametrics yay!)
  for(var i = 0; i < 3; i++) {
    var theta = t + i * Math.PI/3;
    var r = 100 * Math.cos(9 * theta);
    var x = r * Math.cos(theta);
    var y = r * Math.sin(theta);

    ctx.beginPath();
    ctx.arc(hWidth + x, hHeight + y, 15, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fill();
  }
  
  t += 0.01;
  
  requestAnimationFrame(draw);
}
draw();