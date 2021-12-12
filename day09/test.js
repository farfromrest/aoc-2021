const convertRawInput = require('./convertRawInput')
const riskLevelOfLowPoints = require('./riskLevelOfLowPoints')
const threeLargestBasins = require('./threeLargestBasins')

const SAMPLE_DATA = `2199943210
3987894921
9856789892
8767896789
9899965678`

test('riskLevelOfLowPoints', () => {
  const entries = convertRawInput(SAMPLE_DATA)
  expect(riskLevelOfLowPoints(entries)).toEqual(15)
})

test('threeLargestBasins', () => {
  const rows = convertRawInput(SAMPLE_DATA)
  expect(threeLargestBasins(rows)).toEqual(1134)
})
