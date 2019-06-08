function keyUpListener(evt) {
  var keyCode = evt.keyCode;

  if (keyCode == 16) { // shift key
    player.jumping = false;
  }
  if (keyCode == 37 || keyCode == 39) { // left arrow key
    player.walking = false;
  }
}

function keyDownListener(evt) {
  var keyCode = evt.keyCode;

  if (keyCode == 16) { // shift key
    player.jump()
  }

  if (keyCode == 37 || keyCode == 39) { // left and right arrow keys
    player.walking = true;
    reversePlayerDirectionAndMomentum(keyCode)
  }
}

function reversePlayerDirectionAndMomentum(keyCode) {
  var desiredDirection = keyCode == 39 ? 0 : 1;
  var needToTurnAround =
    (keyCode == 39 && player.facingRight()) ||
    (keyCode == 37 && player.facingLeft())

  if (needToTurnAround && player.momentum > 0) {
    player.momentum -= (PLAYER_MAX_SPEED - PLAYER_MAX_SPEED / 3);
  } else {
    player.direction = desiredDirection;
    increasePlayerMomentum();
  }
}

function increasePlayerMomentum() {
  if (player.walking) {
    player.momentum += PLAYER_MAX_SPEED - PLAYER_ACCEL;// TODO work out fluid acceleration alg
  }
  if (player.momentum > PLAYER_MAX_SPEED) player.momentum = PLAYER_MAX_SPEED;
}
