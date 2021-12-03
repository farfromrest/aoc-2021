const convertToPowerConsumption = require('./convertToPowerConsumption')
const convertToLifeSupportRating = require('./convertToLifeSupportRating')

const SAMPLE_DATA = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`

test('convertToPowerConsumption', () => {
  expect(convertToPowerConsumption(SAMPLE_DATA.split('\n'))).toEqual(198)
})

test('convertToLifeSupportRating', () => {
  expect(convertToLifeSupportRating(SAMPLE_DATA.split('\n'))).toEqual(230)
})
