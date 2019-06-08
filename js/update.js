function update() {
  decreasePlayerMomentum();
  moveEverythingHorizontally();
  movePlayerVertically();
  expireJump();
  increasePlayerPlummet();
  groundPlayer();
  beginPlayerPlummet();
  collideHorizontally();
  collideVertically();
  toggleScreenScroll();
}

function toggleScreenScroll() {
  screenScroll = !player.inCentreOfScreen();
}

function decreasePlayerMomentum() {
  if (!player.walking && player.momentum >= 0 && player.grounded) {
    if (player.grounded) player.momentum -= PLAYER_SLOW_RATE;
    if (!player.grounded) player.momentum -= PLAYER_SLOW_RATE / 2;
  }
  if (player.momentum < 0) player.momentum = 0;
}

function movePlayerVertically() {
  if (player.jumping) {
    player.y -= (JUMP_POWER * 1.5) - player.plummet;
  }
  if (!player.grounded) player.y += player.plummet;
}

function moveEverythingHorizontally() {
  if (player.momentum) {
    player.x += player.facingLeft() ? player.momentum : -player.momentum;
  }
}

function expireJump() {
  if (player.jumping) player.jumpCountUp++;

  if (player.jumpCountUp >= JUMP_POWER) {
    player.jumping = false;
    player.jumpCountUp = 0;
  }
}

function beginPlayerPlummet() {
  if (!blockAtObjBottom(player, collidables)) player.grounded = false;
}

function increasePlayerPlummet() {
  if (!player.grounded && player.plummet <= TERMINAL_VELOCITY) player.plummet += GRAVITY;
}

function groundPlayer() {
  var blockStoodOn = blockAtObjBottom(player, collidables)
  var playerFalling = !player.jumping;

  if (blockStoodOn && playerFalling) {
    player.y = Resolver.top(blockStoodOn) - player.height / 2;
    player.plummet = 0;
    player.grounded = true;
    player.jumping = false;
    player.jumpCountUp = 0;
  }
}

function collideHorizontally() {
  var blockOnLeft  = blockAtObjLeft(player, collidables)
  var blockOnRight = blockAtObjRight(player, collidables)

  if (blockOnLeft) {
    player.momentum = 0;
    player.x = Resolver.right(blockOnLeft) + (PLAYER_WIDTH / 2) + 2;
  } else if (blockOnRight) {
    player.momentum = 0;
    player.x = Resolver.left(blockOnRight) - (PLAYER_WIDTH / 2) - 2;
  }
}

function collideVertically() {
  var blockAbove = blockAtObjTop(player, collidables)

  if (blockAbove) {
    player.y = Resolver.bottom(blockAbove) + (PLAYER_HEIGHT / 2) + 2;
    player.jumping = false;
  }
}
