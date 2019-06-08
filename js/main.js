var wrapper = document.getElementById('wrapper')

var canvas;
var ctx;
var player = new Player({x: 0, y: 0});
var collidables = [];

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  ctx    = canvas.getContext('2d');

  initCollidables();
  initPlayer();

  document.addEventListener('keydown', keyDownListener);
  document.addEventListener('keyup', keyUpListener);

  setInterval(function() {
    update();
    draw();
  }, 1000 / FRAMES_PER_SECOND)
}
