const fs = require('fs')
const path = require('path')

const convertRawInput = require('./convertRawInput')
const findOverlaps = require('./findOverlaps')
const findOverlapsIncludingDiag = require('./findOverlapsIncludingDiag')

const inputPath = path.resolve(__dirname, 'input.txt')

const cordinates = convertRawInput(fs.readFileSync(inputPath).toString())
console.log(findOverlaps(cordinates))
console.log(findOverlapsIncludingDiag(cordinates))
