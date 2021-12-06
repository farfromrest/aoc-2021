const convertRawInput = require('./convertRawInput')
const findOverlaps = require('./findOverlaps')
const findOverlapsIncludingDiag = require('./findOverlapsIncludingDiag')

// const SAMPLE_DATA = `5,5 -> 8,2`
const SAMPLE_DATA = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`

test('findOverlaps', () => {
  const cordinates = convertRawInput(SAMPLE_DATA)
  expect(findOverlaps(cordinates)).toEqual(5)
})

test('findOverlapsIncludingDiag', () => {
  const cordinates = convertRawInput(SAMPLE_DATA)
  expect(findOverlapsIncludingDiag(cordinates)).toEqual(12)
})
