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

function findWinningScore(boards, numbers, numberIndex = 0) {
  boards = updateBoards(boards, numbers[numberIndex])
  let winner = checkForWinner(boards)

  if (winner) {
    return calcScore(winner, numbers[numberIndex])
  } else if (numbers.length > numberIndex + 1) {
    return findWinningScore(boards, numbers, numberIndex + 1)
  }
}

module.exports = findWinningScore
