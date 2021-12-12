function convertRawInput(raw) {
  const lines = raw.split('\n')
  const rows = lines.map((x) => x.split('').map(Number))

  return rows
}

module.exports = convertRawInput
