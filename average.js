const tab = [20, 20, 80, 80, 60, 40, 30, 70]

const arevage = (table) => {
  let sum = 0
  for (let elem of table) {
    sum += elem
  }
  return sum / table.length
}

console.log(arevage(tab))