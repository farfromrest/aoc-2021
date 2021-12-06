function updateBoards(boards, number) {
  return boards.map((rows) => {
    return rows.map((numbers) => {
      return numbers.map((n) => {
        if (n === number) {
          return 'X'
        } else {
          return n
        }
      })
    })
  })
}

function checkForWinner(boards) {
  return boards.find((rows) => {
    let bingo = false

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      for (
        let numberIndex = 0;
        numberIndex < rows[rowIndex].length;
        numberIndex++
      ) {
        if (rows[rowIndex][numberIndex] === 'X') {
          bingo = true
        } else {
          bingo = false
          break
        }
      }
      if (bingo) {
        break
      }
    }

    if (bingo) {
      return bingo
    }

    for (let colIndex = 0; colIndex < 5; colIndex++) {
      for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
        if (rows[rowIndex][colIndex] === 'X') {
          bingo = true
        } else {
          bingo = false
          break
        }
      }
      if (bingo) {
        break
      }
    }

    return bingo
  })
}

function removeWinners(boards) {
  return boards.filter((rows) => {
    let bingo = false

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      for (
        let numberIndex = 0;
        numberIndex < rows[rowIndex].length;
        numberIndex++
      ) {
        if (rows[rowIndex][numberIndex] === 'X') {
          bingo = true
        } else {
          bingo = false
          break
        }
      }
      if (bingo) {
        break
      }
    }

    if (bingo) {
      return false
    }

    for (let colIndex = 0; colIndex < 5; colIndex++) {
      for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
        if (rows[rowIndex][colIndex] === 'X') {
          bingo = true
        } else {
          bingo = false
          break
        }
      }
      if (bingo) {
        break
      }
    }

    return !bingo
  })
}

function calcScore(board, number) {
  const unmarkedSum = board.reduce((acc, row) => {
    acc += row.reduce((acc, number) => {
      if (number !== 'X') {
        acc += number
      }
      return acc
    }, 0)

    return acc
  }, 0)

  return unmarkedSum * number
}

function findLastWinningScore(
  boards,
  numbers,
  numberIndex = 0,
  winnerIndexes = [],
) {
  boards = updateBoards(boards, numbers[numberIndex])

  console.log('boards.length', boards.length)
  if (boards.length === 1) {
    const winner = checkForWinner(boards, winnerIndexes)

    if (winner) {
      return calcScore(winner, numbers[numberIndex])
    } else {
      return findLastWinningScore(boards, numbers, numberIndex + 1)
    }
  } else if (boards.length > 0) {
    boards = removeWinners(boards)
    console.log('boards', boards)
    return findLastWinningScore(boards, numbers, numberIndex + 1)
  }

  // if (winners.length) {
  //   boards = boards.filter((b) => winners.includes(b))
  // }

  // console.log('boards', boards)
  // if (boards.length === 0) {
  //   return calcScore(winners[winners.length - 1], numbers[numberIndex])
  // } else {
  //   return findLastWinningScore(boards, numbers, numberIndex + 1)
  // }
  // console.log('winnerIndexes', winnerIndexes)

  // if (winnerIndex !== -1) {
  //   winnerIndexes.push(winnerIndex)
  // }
  // console.log('winnerIndexes', winnerIndexes)

  // if (winnerIndexes.length === boards.length) {
  //   // console.log('winnerIndex', boards[winnerIndex])
  //   return calcScore(boards[winnerIndex], numbers[numberIndex])
  // } else {
  //   return findLastWinningScore(boards, numbers, numberIndex + 1, winnerIndexes)
  // }
}

module.exports = findLastWinningScore
