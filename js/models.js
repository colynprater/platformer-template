class Sprite {
  constructor(opts) {
    this.x         = opts.x
    this.y         = opts.y
    this.direction = opts.direction || 0 // 0 is left, 1 is right
    this.width     = opts.width     || 10
    this.height    = opts.height    || 10
    this.walking   = opts.walking   || false
  }

  facingLeft() {
    return this.direction == 0;
  }

  facingRight() {
    return this.direction == 1;
  }
}

class Player extends Sprite {
  constructor(opts) {
    super(opts)
    this.momentum    = opts.momentum || 0;
    this.plummet     = opts.plummet  || 3;
    this.grounded    = false;
    this.jumping     = false;
    this.jumpCountUp = 0;
  }

  jump() {
    if ((player.grounded || player.jumping) && player.jumpCountUp <= JUMP_POWER) {
      player.jumping = true;
      player.grounded = false;
      player.plummet  = 0;
    }
  }

  inCentreOfScreen() {
    return player.x < (canvas.width / 2) + 100 && player.x > (canvas.width / 2) - 100;
  }
}

class Collidable {

  constructor(options) {
    this.height = options.height || 0;
    this.width  = options.width  || 0;
    this.x      = options.x      || 0;
    this.y      = options.y      || 0;
    this.colour = options.colour || 'white';
  }
}
