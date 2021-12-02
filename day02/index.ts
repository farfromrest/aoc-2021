import fs from 'fs'
import path from 'path'

const inputPath = path.resolve(__dirname, 'input.txt')
const commands = fs.readFileSync(inputPath).toString().split('\n')

/*
down X increases your aim by X units.
up X decreases your aim by X units.
forward X does two things:
  It increases your horizontal position by X units.
  It increases your depth by your aim multiplied by X.
*/

const position = commands.reduce(
  (acc, command) => {
    const parts = command.split(' ')
    const cmd = parts[0]
    const units = Number(parts[1])

    switch (cmd) {
      case 'forward':
        acc.x += units
        acc.y += acc.aim * units
        break
      case 'down':
        acc.aim += units
        break
      case 'up':
        acc.aim -= units
        break
    }

    return acc
  },
  { x: 0, y: 0, aim: 0 },
)

console.log('position', position)
console.log('answer', position.x * position.y)
