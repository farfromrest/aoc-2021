function getSumOfEntries(entries) {
  return entries.reduce((acc, entry) => {
    const [signal, output] = entry
    const oneLetters = signal.find((s) => s.length === 2).split('')
    const fourLetters = signal.find((s) => s.length === 4).split('')
    const sevenLetters = signal.find((s) => s.length === 3).split('')
    const lettersInFiveNotTwo = fourLetters.filter(
      (l) => !oneLetters.includes(l),
    )
    const number = output.map((digit) => {
      const size = digit.length
      if (size === 2) {
        return 1
      } else if (size === 4) {
        return 4
      } else if (size === 3) {
        return 7
      } else if (size === 7) {
        return 8
      } else if (size === 5) {
        if (sevenLetters.every((l) => digit.includes(l))) {
          return 3
        } else if (lettersInFiveNotTwo.every((l) => digit.includes(l))) {
          return 5
        } else {
          return 2
        }
      } else if (size === 6) {
        if (fourLetters.every((l) => digit.includes(l))) {
          return 9
        } else if (sevenLetters.every((l) => digit.includes(l))) {
          return 0
        } else {
          return 6
        }
      }
    })
    console.log('number', number)

    return acc + Number(number.join(''))
  }, 0)
}

module.exports = getSumOfEntries
