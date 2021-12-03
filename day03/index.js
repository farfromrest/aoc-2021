const fs = require('fs')
const path = require('path')

const convertToPowerConsumption = require('./convertToPowerConsumption')
const convertToLifeSupportRating = require('./convertToLifeSupportRating')

const inputPath = path.resolve(__dirname, 'input.txt')
const binary = fs.readFileSync(inputPath).toString().split('\n')

console.log(convertToPowerConsumption(binary))
console.log(convertToLifeSupportRating(binary))
