const fs = require('fs')
const path = require('path')

const findLastWinningScore = require('./findLastWinningScore')
const convertRawInput = require('./convertRawInput')

const numbersPath = path.resolve(__dirname, 'numbers.txt')
const boardsPath = path.resolve(__dirname, 'boards.txt')
const { boards, numbers } = convertRawInput(
  fs.readFileSync(boardsPath).toString(),
  fs.readFileSync(numbersPath).toString(),
)

console.log(findLastWinningScore(boards, numbers))
