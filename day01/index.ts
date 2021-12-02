import fs from 'fs'
import path from 'path'

const inputPath = path.resolve(__dirname, 'input.txt')
const measurements = fs
  .readFileSync(inputPath)
  .toString()
  .split('\n')
  .map(Number)

// const answer1 = measurements.reduce((acc, measurement, index) => {
//   if (index > 0 && measurements[index - 1] < measurement) {
//     acc++
//   }
//   return acc
// }, 0)

// console.log('answer1', answer1)

const slots: number[] = [0, 0, 0]
const answer2 = measurements.reduce((acc, measurement, index) => {
  const currentSlotIndex = index % 3
  const nextSlotIndex = currentSlotIndex === 2 ? 0 : currentSlotIndex + 1

  let previousTotal = 0

  for (let i = currentSlotIndex; i < currentSlotIndex + 3; i++) {
    const slotIndex = i % 3

    if (slotIndex === currentSlotIndex) {
      previousTotal = slots[slotIndex]
      slots[slotIndex] = 0
    }

    const newSlotValue = slots[slotIndex] + measurement

    if (slotIndex === nextSlotIndex && index > 2) {
      if (newSlotValue > previousTotal) {
        acc++
      }
    }
    slots[slotIndex] = newSlotValue
  }

  return acc
}, 0)

console.log('answer2', answer2)
