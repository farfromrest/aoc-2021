function getLowPoints(rows) {
  return rows.reduce((acc, row, y) => {
    return row.reduce((accc, number, x) => {
      const left = rows[y][x - 1] ?? 9
      const right = rows[y][x + 1] ?? 9
      const top = rows[y - 1]?.[x] ?? 9
      const bottom = rows[y + 1]?.[x] ?? 9
      if (
        number <= left &&
        number <= right &&
        number <= top &&
        number <= bottom
      ) {
        return [...accc, [x, y]]
      }

      return accc
    }, acc)
  }, [])
}

function getBasin(position, rows, acc = []) {
  acc.push(position)
  const [x, y] = position
  const directions = [
    {
      x: x - 1,
      y,
    },
    {
      x: x + 1,
      y,
    },
    {
      x,
      y: y + 1,
    },
    {
      x,
      y: y - 1,
    },
  ]

  return directions.reduce((accc, { x, y }) => {
    const number = rows[y]?.[x] ?? 9

    if (number !== 9 && !acc.find((p) => p[0] === x && p[1] === y)) {
      return getBasin([x, y], rows, acc)
    }

    return accc
  }, acc)
}

function getBasins(lowPoints, rows) {
  return lowPoints.map((lowPoint) => {
    return getBasin(lowPoint, rows)
  })
}

function threeLargestBasins(rows) {
  const lowPoints = getLowPoints(rows)
  const [one, two, three] = getBasins(lowPoints, rows)
    .sort((a, b) => a.length - b.length)
    .reverse()

  return one.length * two.length * three.length
}

module.exports = threeLargestBasins
