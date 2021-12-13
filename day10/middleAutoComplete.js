function isCorrupt(line) {
  const opens = []
  const chars = line.split('')
  for (let char of chars) {
    if (char === '(' || char === '[' || char === '{' || char === '<') {
      opens.push(char)
    } else {
      const lastOpen = opens.pop()

      if (lastOpen === '(' && char !== ')') {
        return char
      }

      if (lastOpen === '{' && char !== '}') {
        return char
      }

      if (lastOpen === '[' && char !== ']') {
        return char
      }

      if (lastOpen === '<' && char !== '>') {
        return char
      }
    }
  }

  return false
}

function completeLine(line) {
  const opens = []
  const chars = line.split('')
  for (let char of chars) {
    if (char === '(' || char === '[' || char === '{' || char === '<') {
      opens.push(char)
    } else {
      opens.pop()
    }
  }

  return opens.reverse().reduce((acc, char) => {
    acc *= 5
    switch (char) {
      case '(':
        acc += 1
        break
      case '[':
        acc += 2
        break
      case '{':
        acc += 3
        break
      case '<':
        acc += 4
        break
    }
    return acc
  }, 0)

  // return false
}

function middleAutoComplete(lines) {
  const incompleteLines = lines.filter((line) => {
    return !isCorrupt(line)
  })

  const completion = incompleteLines.map(completeLine).sort((a, b) => a - b)
  return completion[Math.floor(completion.length / 2)]
  console.log('completion', completion)
}

module.exports = middleAutoComplete
