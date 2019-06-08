function blockAtObjTop(obj1, objects) {
  var objAbove = undefined;

  objects.forEach((object) => {
    var obj1HeadTouchingObject =
      Resolver.top(obj1) - Resolver.bottom(object) <= 10    &&
        Resolver.top(obj1) - Resolver.bottom(object) >= -10 &&
        areVerticallyInline(obj1, object)

    if (obj1HeadTouchingObject) {
      objAbove = object;
    }
  })

  return objAbove;
}

function blockAtObjBottom(obj1, objects) {
  var objStoodOn = undefined;

  objects.forEach((object) => {
    var obj1IsOnObject =
      Resolver.bottom(obj1) - Resolver.top(object) <= 15    &&
        Resolver.bottom(obj1) - Resolver.top(object) >= -15 &&
        areVerticallyInline(obj1, object)

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

function areVerticallyInline(obj1, obj2) {
  return (
    (
      Resolver.left(obj1) > Resolver.left(obj2) &&
      Resolver.left(obj1) < Resolver.right(obj2)
    ) ||
    (
      Resolver.right(obj1) < Resolver.right(obj2) &&
      Resolver.right(obj1) > Resolver.left(obj2)
    )
  )
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
    Resolver.top(obj1) > Resolver.top(obj2) && // TODO is this working?
    Resolver.bottom(obj1) < Resolver.bottom(obj2)
  )
}
