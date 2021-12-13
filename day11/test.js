const convertRawInput = require('./convertRawInput')
const totalFlashes = require('./totalFlashes')

const SAMPLE_DATA = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`

test('totalFlashes', () => {
  const entries = convertRawInput(SAMPLE_DATA)
  expect(totalFlashes(entries, 100)).toEqual(1656)
})
