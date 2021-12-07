const fs = require('fs')
const path = require('path')

const convertRawInput = require('./convertRawInput')
const totalFishAfterDays = require('./totalFishAfterDays')

const inputPath = path.resolve(__dirname, 'input.txt')

const fish = convertRawInput(fs.readFileSync(inputPath).toString())
console.log(totalFishAfterDays(fish, 256))
