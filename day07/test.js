const convertRawInput = require('./convertRawInput')
const cheapestFuelToAlign = require('./cheapestFuelToAlign')

const SAMPLE_DATA = `16,1,2,0,4,2,7,1,2,14`

test('cheapestFuelToAlign', () => {
  const positions = convertRawInput(SAMPLE_DATA)
  expect(cheapestFuelToAlign(positions)).toEqual(168)
})
