function convertRawInput(raw) {
  const entries = raw.split('\n') //.split(' | ') //.map(Number)
  return entries.map((e) => e.split(' | ').map((i) => i.split(' ')))
}

module.exports = convertRawInput
