function getLowPoints(rows) {
  const lowPoints = []
  rows.forEach((row, rowIndex) => {
    row.forEach((number, numberIndex) => {
      const right = rows[rowIndex][numberIndex + 1]

      if (typeof right !== undefined && right <= number) {
        return
      }

      const down = rows[rowIndex + 1]?.[numberIndex]

      if (typeof down !== undefined && down <= number) {
        return
      }

      const left = rows[rowIndex][numberIndex - 1]

      if (typeof left !== undefined && left <= number) {
        return
      }

      const up = rows[rowIndex - 1]?.[numberIndex]

      if (typeof up !== undefined && up <= number) {
        return
      }
      console.log('number', rowIndex, numberIndex, number)

      lowPoints.push(number)
    })
  })

  return lowPoints
}

function riskLevelOfLowPoints(rows) {
  const lowPoints = getLowPoints(rows)
  console.log('lowPoints', lowPoints)

  return lowPoints.reduce((acc, lp) => acc + lp + 1, 0)
}

module.exports = riskLevelOfLowPoints
