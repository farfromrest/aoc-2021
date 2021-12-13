const fs = require('fs')
const path = require('path')

const convertRawInput = require('./convertRawInput')
const totalSyntaxErrorScore = require('./totalSyntaxErrorScore')
const middleAutoComplete = require('./middleAutoComplete')

const inputPath = path.resolve(__dirname, 'input.txt')

const entries = convertRawInput(fs.readFileSync(inputPath).toString())
console.log('entries', entries)
console.log(middleAutoComplete(entries))
