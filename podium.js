const tab = [20, 13, 14, 17, 12, 9, 18]

const podium = (table) => {
  let copyTab = [...tab]
  let pod = []

  for (i = 0; i < 3; i++) {
    pod.push(Math.max(...copyTab))
    copyTab.splice(copyTab.indexOf(Math.max(...copyTab)), 1)
  }
  console.log(`1st: ${pod[0]}\n2nd: ${pod[1]}\n3rd: ${pod[2]}`)
}

podium(tab)