function findOverlaps(data) {
  const positions = {}

  data.forEach((row) => {
    const [x1, y1] = row[0]
    const [x2, y2] = row[1]

    if (x1 === x2) {
      let currentPosition = y1 > y2 ? y2 : y1
      let endPosition = y1 > y2 ? y1 : y2
      while (currentPosition <= endPosition) {
        if (positions[`${x1}-${currentPosition}`]) {
          positions[`${x1}-${currentPosition}`]++
        } else {
          positions[`${x1}-${currentPosition}`] = 1
        }
        currentPosition++
      }
    } else if (y1 === y2) {
      let currentPosition = x1 > x2 ? x2 : x1
      let endPosition = x1 > x2 ? x1 : x2
      while (currentPosition <= endPosition) {
        if (positions[`${currentPosition}-${y1}`]) {
          positions[`${currentPosition}-${y1}`]++
        } else {
          positions[`${currentPosition}-${y1}`] = 1
        }
        currentPosition++
      }
    }
  })

  let overlap = 0

  for (let position in positions) {
    if (positions[position] > 1) {
      overlap++
    }
  }

  return overlap
}

module.exports = findOverlaps
