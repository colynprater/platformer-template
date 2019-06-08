function initCollidables() {
  collidables.push(
    new Collidable({
      x: -500,
      y: (canvas.height / 6) * 5,
      width: 500,
      height: 50,
      colour: 'green'
    }),

    new Collidable({
      x: 0,
      y: ((canvas.height / 6) * 5) - 45,
      width: 700,
      height: 100,
      colour: 'green'
    }),

    new Collidable({
      x: (canvas.width / 6) + 10,
      y: (canvas.height / 6) * 5,
      width: 500,
      height: 50,
      colour: 'green'
    }),

    new Collidable({
      x: (canvas.width / 6) + 590,
      y: (canvas.height / 6) * 5,
      width: 500,
      height: 50,
      colour: 'green'
    }),

    new Collidable({
      x: (canvas.width / 6) + 1060,
      y: ((canvas.height / 6) * 5) - 45,
      width: 700,
      height: 100,
      colour: 'pink'
    }),

    new Collidable({
      x: (canvas.width / 6) + 1560,
      y: ((canvas.height / 6) * 5) - 145,
      width: 200,
      height: 100,
      colour: 'red'
    }),

    new Collidable({
      x: (canvas.width / 6) + 1760,
      y: ((canvas.height / 6) * 5) - 105,
      width: 400,
      height: 100,
      colour: 'cyan'
    })
  )
}

function initPlayer() {
  player.x      = canvas.width / 2;
  player.y      = (canvas.height / 6) * 4;
  player.width  = PLAYER_WIDTH;
  player.height = PLAYER_HEIGHT;
  player.colour = 'blue';
}
