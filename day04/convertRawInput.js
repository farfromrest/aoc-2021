function convertRawInput(rawBoards, rawNumbers) {
  const numbers = rawNumbers.split(',').map(Number)
  const boards = []
  let currentBoard = []
  rawBoards.split('\n').forEach((line) => {
    const numbers = line
      .split(' ')
      .filter((x) => x !== '')
      .map(Number)
    if (numbers.length === 0) {
      boards.push(currentBoard)
      currentBoard = []
    } else {
      currentBoard.push(numbers)
    }
  })
  return { boards, numbers }
}

module.exports = convertRawInput
