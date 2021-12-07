function convertRawInput(raw) {
  return raw.split(',').map(Number)
}

module.exports = convertRawInput
