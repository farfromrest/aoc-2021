const fs = require('fs')
const path = require('path')

const convertRawInput = require('./convertRawInput')
const cheapestFuelToAlign = require('./cheapestFuelToAlign')

const inputPath = path.resolve(__dirname, 'input.txt')

const positions = convertRawInput(fs.readFileSync(inputPath).toString())
console.log(cheapestFuelToAlign(positions))
