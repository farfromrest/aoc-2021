function totalFishAfterDays(fish, days) {
  let total = 0
  let totals = fish.reduce(
    (acc, internalTimer) => {
      total++
      acc[internalTimer]++
      return acc
    },
    {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
    },
  )

  let day = 1
  while (day <= days) {
    const newTotals = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
    }
    for (const internalTimer in totals) {
      const count = totals[internalTimer]

      if (count === 0) {
        continue
      }

      if (internalTimer === '0') {
        newTotals['6'] += count
        newTotals['8'] = count
        total += count
      } else {
        newTotals[internalTimer - 1] += count
      }
    }

    totals = newTotals
    day++
  }
  return total
}

module.exports = totalFishAfterDays
