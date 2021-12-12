const fs = require('fs')
const path = require('path')

const convertRawInput = require('./convertRawInput')
const getSumOfEntries = require('./getSumOfEntries')

const inputPath = path.resolve(__dirname, 'input.txt')

const entries = convertRawInput(fs.readFileSync(inputPath).toString())
console.log(getSumOfEntries(entries))
