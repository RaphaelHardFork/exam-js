const squareTrue = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
]

const squareFalse = [
  [5, 4, 3],
  [1, 2, 6],
  [8, 9, 7]
]

const squareTrue4x3 = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
  [5, 7, 4]
]

const square4x4True = [
  [4, 14, 15, 1],
  [9, 7, 6, 12],
  [5, 11, 10, 8],
  [16, 2, 3, 13]
]

// Voici les trois méthodes qui m'ont permis d'arriver à la dernière méthode (qui est la bonne je pense)

// Méthode pour un carré de 3 par 3
const isMagicSquare = (tab) => {
  let row1 = tab[0][0] + tab[0][1] + tab[0][2]
  let row2 = tab[1][0] + tab[1][1] + tab[1][2]
  let row3 = tab[2][0] + tab[2][1] + tab[2][2]

  let col1 = tab[0][0] + tab[1][0] + tab[2][0]
  let col2 = tab[0][1] + tab[1][1] + tab[2][1]
  let col3 = tab[0][2] + tab[1][2] + tab[2][2]

  let diag1 = tab[0][2] + tab[1][1] + tab[2][0]
  let diag2 = tab[0][0] + tab[1][1] + tab[2][2]

  if (row1 === 15 && row2 === 15 && row3 === 15 &&
    col1 === 15 && col2 === 15 && col3 === 15 &&
    diag1 === 15 && diag2) {
    return true
  } else {
    return false
  }
}

//console.log(isMagicSquare(squareTrue))
//console.log(isMagicSquare(squareFalse))




// Méthode avec des boucles pour un carré 3x3
const isForMargicSquare = (tab) => {
  // Boucle des lignes
  let col = 0
  for (let elem of tab) {
    col = 0
    for (let subelem of tab[tab.indexOf(elem)]) {
      col += subelem
    }
    if (col !== 15) {
      return false
    }
  }

  // Boucle des colonnes
  let row = 0
  let rowIndex = 0
  for (let i = 0; i < 3; i++) {
    row = 0
    for (let elem of tab) {
      row += elem[rowIndex]
    }
    if (row !== 15) {
      return false
    }
    rowIndex++
  }

  // Boucle des diagonales
  let diag = 0
  let diagIndex = 0
  for (let i = 0; i < 2; i++) {
    diag = 0
    for (let elem of tab) {
      diag += elem[diagIndex]
      if (i === 0 && diagIndex !== 2) {
        diagIndex++
      } else if (i === 0 && diagIndex === 2) {
      }
      else if (i === 1) {
        diagIndex--
      }
    }
    if (diag !== 15) {
      return false
    }
  }

  return true
}

//console.log(isForMargicSquare(squareFalse))
//console.log(isForMargicSquare(squareTrue))




// Méthode pour un carré de taille n x n
const isMagicSquareNxn = (tab) => {
  // S'asssurer que c'est bien un carré
  for (elem of tab) {
    if (elem.length !== tab.length) {
      return false
    }
  }
  // Constante magique
  let line = tab.length
  let magicConst = (line * ((Math.pow(line, 2) + 1))) / 2

  // Boucle des lignes
  let col = 0
  for (let elem of tab) {
    col = 0
    for (let subelem of tab[tab.indexOf(elem)]) {
      col += subelem
    }
    if (col !== magicConst) {
      return false
    }
  }

  // Boucle des colonnes
  let row = 0
  let rowIndex = 0
  for (let i = 0; i < line; i++) {
    row = 0
    for (let elem of tab) {
      row += elem[rowIndex]
    }
    if (row !== magicConst) {
      return false
    }
    rowIndex++
  }

  // Boucle des diagonales
  let diag = 0
  let diagIndex = 0
  for (let i = 0; i < (line - 1); i++) {
    diag = 0
    for (let elem of tab) {
      diag += elem[diagIndex]
      if (i === 0 && diagIndex !== (line - 1)) {
        diagIndex++
      } else if (i === 0 && diagIndex === (line - 1)) {
      }
      else if (i === (line - 2)) {
        diagIndex--
      }
    }
    if (diag !== magicConst) {
      return false
    }
  }

  return true
}


console.log(`Carré 3x3 faux : ${isMagicSquareNxn(squareFalse)}\nCarré 3x3 vrai : ${isMagicSquareNxn(squareTrue)}`)

console.log(`"Carré" 3x4 : ${isMagicSquareNxn(squareTrue4x3)}\nCarré 4x4 vrai : ${isMagicSquareNxn(square4x4True)}`)