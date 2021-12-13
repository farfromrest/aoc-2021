function totalFlashes(rows, steps) {
  totalFlashes = 0

  const increment = (x, y, hasFlashed) => {
    const cords = `${x},${y}`
    const currentNumber = rows[y]?.[x]

    if (typeof currentNumber === 'undefined') {
      return
    }
    if (hasFlashed.includes(cords)) {
      return
    }

    if (rows[y][x] === 9) {
      rows[y][x] = 0
      hasFlashed.push(cords)
      increment(x - 1, y, hasFlashed)
      increment(x + 1, y, hasFlashed)
      increment(x, y + 1, hasFlashed)
      increment(x, y - 1, hasFlashed)
      increment(x - 1, y - 1, hasFlashed)
      increment(x + 1, y - 1, hasFlashed)
      increment(x - 1, y + 1, hasFlashed)
      increment(x + 1, y + 1, hasFlashed)
    } else {
      rows[y][x]++
    }
  }

  for (let step = 1; step <= 1000; step++) {
    const hasFlashed = []
    for (let y in rows) {
      for (let x in rows[y]) {
        increment(Number(x), Number(y), hasFlashed)
      }
    }

    console.log('hasFlashed.length', hasFlashed.length)
    if (hasFlashed.length === 100) {
      return step
    }
    // totalFlashes += hasFlashed.length
  }

  // return totalFlashes
}

module.exports = totalFlashes
