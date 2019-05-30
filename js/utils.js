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

function Resolver() {};

Resolver.top = function(obj) {
  return obj.y - obj.height / 2;
}

Resolver.bottom = function(obj) {
  return obj.y + obj.height / 2;
}

Resolver.left = function(obj) {
  return obj.x - obj.width / 2;
}

Resolver.right = function(obj) {
  return obj.x + obj.width / 2;
}

function drawDebugDots(obj) {
  colourRect(Resolver.left(obj), Resolver.top(obj), 2, 2, 'yellow')
  colourRect(Resolver.right(obj), Resolver.top(obj), 2, 2, 'yellow')

  colourRect(Resolver.left(obj), Resolver.bottom(obj), 2, 2, 'yellow')
  colourRect(Resolver.right(obj), Resolver.bottom(obj), 2, 2, 'yellow')
}
