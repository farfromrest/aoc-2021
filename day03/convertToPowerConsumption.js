function convertToPowerConsumption(data) {
  const half = data.length / 2
  const totalOnesForBits = []

  data.forEach((line) => {
    line
      .trim()
      .split('')
      .forEach((bit, index) => {
        if (typeof totalOnesForBits[index] === 'undefined') {
          totalOnesForBits[index] = 0
        }

        if (bit === '1') {
          totalOnesForBits[index]++
        }
      })
  })

  const gammaRate = totalOnesForBits.map((totalOnesForBit) =>
    totalOnesForBit > half ? 1 : 0,
  )
  const epsilonRate = gammaRate.map((bit) => (bit === 1 ? 0 : 1))

  return parseInt(gammaRate.join(''), 2) * parseInt(epsilonRate.join(''), 2)
}

module.exports = convertToPowerConsumption
