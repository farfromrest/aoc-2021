const convertRawInput = require('./convertRawInput')
const totalFishAfterDays = require('./totalFishAfterDays')

// const SAMPLE_DATA = `3`
const SAMPLE_DATA = `3,4,3,1,2`

test('totalFishAfterDays', () => {
  const fish = convertRawInput(SAMPLE_DATA)
  expect(totalFishAfterDays(fish, 18)).toEqual(26)
  expect(totalFishAfterDays(fish, 80)).toEqual(5934)
  expect(totalFishAfterDays(fish, 256)).toEqual(26984457539)
})
