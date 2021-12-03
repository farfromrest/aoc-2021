function getRating({ bits, index = 0, winnerWithFewer }) {
  let zeros = 0
  let ones = 0

  bits.forEach((line) => {
    const bit = line[index]
    if (bit) {
      ones++
    } else {
      zeros++
    }
  })

  const winner = ones < zeros ? 0 : 1
  const newBits = bits.filter((line) =>
    winnerWithFewer ? line[index] !== winner : line[index] === winner,
  )

  if (newBits.length === 1) {
    return newBits[0]
  } else {
    return getRating({
      bits: newBits,
      index: index + 1,
      winnerWithFewer,
    })
  }
}

function convertToLifeSupportRating(data) {
  const bits = data.map((line) => line.trim().split('').map(Number))

  const oxygenGeneratorRating = getRating({ bits, winnerWithFewer: false })
  const co2ScrubberRating = getRating({ bits, winnerWithFewer: true })
  return (
    parseInt(oxygenGeneratorRating.join(''), 2) *
    parseInt(co2ScrubberRating.join(''), 2)
  )
}

module.exports = convertToLifeSupportRating
