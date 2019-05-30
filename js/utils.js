function makeImage(fileName) {
  var img = new Image()
  img.src = 'images/' + fileName
  img.height = 350;
  img.width = 350;
  return img
}

function getRandomInt(max) {
  return Math.ceil(Math.random() * Math.ceil(max));
}

function drawCircle(centreX, centreY, radius, drawColour) {
  ctx.fillStyle = drawColour;
  console.log(drawColour)
  ctx.beginPath();
  ctx.arc(centreX, centreY, radius, 0, Math.PI * 2, true);
  ctx.fill();
}

function colourRect(leftX, topY, width, height, drawColour) {
  ctx.fillStyle = drawColour;
  ctx.fillRect(leftX, topY, width, height)
  ctx.globalAlpha = 1;
}

function playSound(sound) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}

function sound(sound) {
  return new Audio('sounds/' + sound + '.mp3');
}
