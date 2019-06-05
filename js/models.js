class Sprite {
  constructor(opts) {
    this.x         = opts.x
    this.y         = opts.y
    this.direction = opts.direction || 0 // 0 is left, 1 is right
    this.width     = opts.width     || 10
    this.height    = opts.height    || 10
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
    this.momentum = opts.momentum || 0
    this.velocity = opts.velocity || 0
    this.plummet  = opts.plummet  || 3
    this.walking  = opts.walking  || false
    this.grounded = false
  }

  // functions
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
