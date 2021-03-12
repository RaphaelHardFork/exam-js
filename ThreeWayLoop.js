const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

// Boucle for
for (let i = 0; i < tab.length; i++) {
  console.log(`${tab[i]}, length: ${tab[i].length}`)
}

// Boucle for of
for (let elem of tab) {
  console.log(`${elem}, length: ${elem.length}`)
}

// Boucle forEach
tab.forEach((elem) => {
  console.log(`${elem}, length: ${elem.length}`)
})