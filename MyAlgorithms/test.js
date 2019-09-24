function f(a, b) {
  let x, y

  x = a
  y = b

  do {
    if (x > y) x = x -y

    if (x < y) y = y - x
  } while (x !== y)

  console.log(`x: ${x}, y: ${y}`)
}

f(2437, 875)