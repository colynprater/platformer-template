function initCollidables() {
  collidables.push(new Collidable({
    x: (canvas.width / 6),
    y: (canvas.height / 6) * 2,
    width: 100,
    height: 50,
    colour: 'red'
  }))

  collidables.push(new Collidable({
    x: 450,
    y: (canvas.height / 2) + 40,
    width: 100,
    height: 50,
    colour: 'green'
  }))

  collidables.push(new Collidable({
    x: (canvas.width / 2) - 150,
    y: (canvas.height / 2),
    width: 100,
    height: 50,
    colour: 'white'
  }))

  collidables.push(new Collidable({
    x: (canvas.width / 2) + 20,
    y: (canvas.height / 3) + 60,
    width: 100,
    height: 20,
    colour: 'purple'
  }))

  collidables.push(new Collidable({
    x: (canvas.width / 2) + 150,
    y: (canvas.height / 5) * 3,
    width: 280,
    height: 20,
    colour: 'yellow'
  }))

  collidables.push(new Collidable({
    x: (canvas.width / 2) + 400,
    y: (canvas.height / 5) * 2.5,
    width: 100,
    height: 20,
    colour: 'brown'
  }))
}

function initPlayer() {
  player.x = 450;
  player.y = (canvas.height / 6) * 1;
  player.width = PLAYER_WIDTH;
  player.height = PLAYER_HEIGHT;
  player.colour = 'blue';
}
