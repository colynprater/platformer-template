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

  colourRect(Resolver.left(obj), Resolver.bottom(obj), 2, 2, 'red')
  colourRect(Resolver.right(obj), Resolver.bottom(obj), 2, 2, 'red')
}
