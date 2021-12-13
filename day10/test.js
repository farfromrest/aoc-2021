const convertRawInput = require('./convertRawInput')
const totalSyntaxErrorScore = require('./totalSyntaxErrorScore')
const middleAutoComplete = require('./middleAutoComplete')

const SAMPLE_DATA = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`

xtest('totalSyntaxErrorScore', () => {
  const entries = convertRawInput(SAMPLE_DATA)
  expect(totalSyntaxErrorScore(entries)).toEqual(26397)
})

test('middleAutoComplete', () => {
  const entries = convertRawInput(SAMPLE_DATA)
  expect(middleAutoComplete(entries)).toEqual(288957)
})
