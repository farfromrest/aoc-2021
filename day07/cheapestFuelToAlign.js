function cheapestFuelToAlign(positions) {
  const min = Math.min(...positions)
  const max = Math.max(...positions)
  let position = min
  let cheapestFuel

  while (position <= max) {
    let fuel = 0
    positions.forEach((p) => {
      for (let f = 1; f <= Math.abs(p - position); f++) {
        fuel += f
      }
    })

    if (!cheapestFuel || fuel < cheapestFuel) {
      cheapestFuel = fuel
    }

    position++
  }

  return cheapestFuel
}

module.exports = cheapestFuelToAlign
