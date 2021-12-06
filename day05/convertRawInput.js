function convertRawInput(raw) {
  return raw.split('\n').map((row) => {
    return row.split(' -> ').map((pair) => {
      return pair.split(',').map(Number)
    })
  })
}

module.exports = convertRawInput
