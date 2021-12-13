const SCORES = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
}

function findFirstIllegalCharacter(line) {
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
}

function totalSyntaxErrorScore(lines) {
  return lines.reduce((acc, line) => {
    const char = findFirstIllegalCharacter(line)

    if (SCORES[char]) {
      acc += SCORES[char]
    }

    return acc
  }, 0)
}

module.exports = totalSyntaxErrorScore
