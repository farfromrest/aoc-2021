function getNumberOfInstances(entries) {
  return entries.reduce((acc, entry) => {
    const [signal, output] = entry
    output.forEach((digit) => {
      const size = digit.length
      if (size === 2 || size === 4 || size === 3 || size === 7) {
        acc++
      }
    })
    return acc
  }, 0)
}

module.exports = getNumberOfInstances
