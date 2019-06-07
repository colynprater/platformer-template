function blockAtObjBottom(obj1, objects) {
  var objStoodOn = undefined;

  objects.forEach((object) => {
    var obj1IsOnObject =
      Resolver.bottom(obj1) - Resolver.top(object) <= 10    &&
        Resolver.bottom(obj1) - Resolver.top(object) >= -10 &&
          (
            (
              Resolver.left(obj1) > Resolver.left(object) &&
              Resolver.left(obj1) < Resolver.right(object)
            ) ||
            (
              Resolver.right(obj1) < Resolver.right(object) &&
              Resolver.right(obj1) > Resolver.left(object)
            )
          )

    if (obj1IsOnObject) {
      objStoodOn = object;
    }
  })

  return objStoodOn;
}

function blockAtObjRight(obj, objects) {
  var blockAtRight = undefined;

  objects.forEach((collidable) => {
    var obj1RightAgainstBlock =
    Resolver.right(obj) - Resolver.left(collidable) < 3    &&
      Resolver.right(obj) - Resolver.left(collidable) > -3 &&
      areHorizontallyInline(obj, collidable)

    if (obj1RightAgainstBlock) {
      blockAtRight = collidable;
    }
  })
  return blockAtRight;
}

function blockAtObjLeft(obj, objects) {
  var blockAtRight = undefined;

  objects.forEach((collidable) => {
    var obj1RightAgainstBlock =
    Resolver.right(collidable) - Resolver.left(obj) < 3    &&
      Resolver.right(collidable) - Resolver.left(obj) > -3 &&
      areHorizontallyInline(obj, collidable)

    if (obj1RightAgainstBlock) {
      blockAtRight = collidable;
    }
  })
  return blockAtRight;
}

function areHorizontallyInline(obj1, obj2) {
  return (
    Resolver.top(obj1) < Resolver.top(obj2) &&
    Resolver.bottom(obj1) > Resolver.top(obj2)
  ) ||
  (
    Resolver.top(obj1) < Resolver.bottom(obj2) &&
    Resolver.bottom(obj1) > Resolver.bottom(obj2)
  ) ||
  (
    Resolver.top(obj1) > Resolver.top(obj2) &&
    Resolver.bottom(obj1) < Resolver.bottom(obj2)
  )
}
