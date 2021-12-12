const fs = require('fs')
const path = require('path')

const convertRawInput = require('./convertRawInput')
const riskLevelOfLowPoints = require('./riskLevelOfLowPoints')
const threeLargestBasins = require('./threeLargestBasins')

const inputPath = path.resolve(__dirname, 'input.txt')

const entries = convertRawInput(fs.readFileSync(inputPath).toString())
console.log('entries', entries)
console.log(threeLargestBasins(entries))
