function findOverlapsIncludingDiag(data) {
  const positions = {}

  data.forEach((row) => {
    const [x1, y1] = row[0]
    const [x2, y2] = row[1]

    let currentX = x1
    let endX = x2

    let currentY = y1
    let endY = y2

    while (currentX !== endX || currentY !== endY) {
      if (positions[`${currentX}-${currentY}`]) {
        positions[`${currentX}-${currentY}`]++
      } else {
        positions[`${currentX}-${currentY}`] = 1
      }

      if (currentX < endX) {
        currentX++
      } else if (currentX > endX) {
        currentX--
      }

      if (currentY < endY) {
        currentY++
      } else if (currentY > endY) {
        currentY--
      }
    }
    if (positions[`${currentX}-${currentY}`]) {
      positions[`${currentX}-${currentY}`]++
    } else {
      positions[`${currentX}-${currentY}`] = 1
    }
  })

  let overlap = 0

  console.log('positions', positions)
  for (let position in positions) {
    if (positions[position] > 1) {
      overlap++
    }
  }

  return overlap
}

module.exports = findOverlapsIncludingDiag
