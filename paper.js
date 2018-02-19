// add fonts
document.head.innerHTML += '<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">';

// update canvas dimensions
updateDim(window.innerWidth, 450);

var stage, counter, paperLocation, paperSpeed, paperAcceleration, paperWidth, titleWidth, lineSpeed, lines, lineIndex, text, textLength, text2, textLength2, maxStage, running = false;

// draw function
function draw() {
  
  // for reset button to avoid overlaps
  running = true;
  
  // clear previous
  ctx.fillStyle = g1;
  ctx.fillRect(0, 0, width, height);
  
  // page (stage 1)
  ctx.fillStyle = w;
  var left = (width - paperWidth) / 2;
  ctx.fillRect(left, paperLocation, paperWidth, 11/8.5 * paperWidth);
  
  // title (stage 2)
  ctx.fillStyle = g2;
  ctx.fillRect(left + 15, paperLocation + 20, titleWidth, 20);
  
  // paragraphs (stage 3)
  for(var i = 0; i < lines.length; i++) {
    ctx.fillRect(left + 15, paperLocation + 55 + i * 20, lines[i], 12);
  }
  
  // text (stage 4)
  ctx.font = "40px Open sans";
  var textWidth = ctx.measureText(text).width;
  ctx.fillText(text.slice(0, textLength), hWidth - textWidth/2, paperLocation - 60);
  
  // more text (stage 5)
  ctx.font = "20px Open sans";
  var textWidth = ctx.measureText(text2).width;
  ctx.fillText(text2.slice(0, textLength2), hWidth - textWidth/2, paperLocation - 25);
  
  // end condition
  if(stage === maxStage) {
    running = false;
    return;
  }
  
  // update
  switch(stage) {
    case 0: 
      paperLocation += paperSpeed;
      paperSpeed += paperAcceleration;
      if(paperSpeed >= 0)
        stage++;
      break;
    case 1:
      titleWidth += lineSpeed;
      if(titleWidth >= paperWidth * 2/3)
        stage++;
      break;
    case 2:
      lines[lineIndex] += lineSpeed;
      if((lines[lineIndex] > paperWidth/2 && Math.random() >= 0.95) || lines[lineIndex] > paperWidth - 40)
        lineIndex++;
      if(lineIndex == lines.length)
        stage++;
      break;
    case 3:
      if(counter % 5 == 0)
        textLength++;
      if(textLength == text.length)
        stage++;
      break;
    case 4:
      if(counter % 5 == 0)
        textLength2++;
      if(textLength2 == text2.length)
        stage++;
  }
  
  counter++;
  requestAnimationFrame(draw);
}

// reset function
function reset() {
  // stage counter
  stage = 0;
  counter = 0;

  // stage 0
  paperLocation = height;
  paperSpeed = -25;
  paperAcceleration = 1;
  paperWidth = 300;

  // stage 1
  titleWidth = 0;
  lineSpeed = 15;

  // stage 2
  lines = [];
  for(var i = 0; i < 15; i++)
    lines[i] = 0;
  lineIndex = 0;

  // stage 3
  text = "Everything is Sheep";
  textLength = 0;

  // stage 4
  text2 = "A blog by Jonathan Lam";
  textLength2 = 0;

  // max stage
  maxStage = 5;
  
  // unset reset flag
  resetFlag = false;
  
  // only start again if not already running
  if(!running)
    draw();
}
reset();

/*
Colors:
26282c
ded2cf
aca1a1
aca1a1
e8dedb
ded2cf

*/