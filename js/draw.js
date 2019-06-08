function draw() {
  colourRect(0, 0, canvas.width, canvas.height, 'white') // Background
  drawPlayer();
  drawCollidables();
}

function drawCollidables() {
  collidables.forEach((collidable) => {
    colourRect(
      collidable.x - collidable.width / 2,
      collidable.y - collidable.height / 2,
      collidable.width,
      collidable.height,
      collidable.colour
    )
  })
}

function drawPlayer() {
  colourRect(
    player.x - player.width / 2,
    player.y - player.height / 2,
    player.width,
    player.height,
    player.colour
  )
}
