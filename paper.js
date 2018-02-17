updateDim(900, 600);

// stage counter
var stage = 0;

// stage 1
var paperLocation = height;
var paperSpeed = -25;
var paperAcceleration = 1;
var paperWidth = 300;

// stage 2
var titleWidth = 0;
var lineSpeed = 8;

// stage 3
var lines = [];
for(var i = 0; i < 15; i++)
  lines[i] = 0;
var lineIndex = 0;

function draw() {
  
  // clear previous
  ctx.fillStyle = bl;
  ctx.fillRect(0, 0, width, height);
  
  // page
  ctx.fillStyle = w;
  var left = (width - paperWidth) / 2;
  ctx.fillRect(left, paperLocation, paperWidth, 11/8.5 * paperWidth);
  
  // title
  ctx.fillStyle = bl;
  ctx.fillRect(left + 15, paperLocation + 20, titleWidth, 20);
  
  // paragraphs
  for(var i = 0; i < lines.length; i++) {
    ctx.fillRect(left + 15, paperLocation + 55 + i * 20, lines[i], 12);
  }
  
  switch(stage) {
    case 0: 
      paperLocation += paperSpeed;
      paperSpeed += paperAcceleration;
      if(paperSpeed >= 0)
        stage++;
      break;
    case 1:
      titleWidth += lineSpeed;
      if(titleWidth == paperWidth * 2/3)
        stage++;
      break;
    case 2:
      lines[lineIndex] += lineSpeed;
      if((lines[lineIndex] > paperWidth/2 && Math.random() >= 0.99) || lines[lineIndex] > paperWidth - 40)
        lineIndex++;
      if(lineIndex == lines.length)
        stage++;
  }
  
  
  
  requestAnimationFrame(draw);
}
draw();