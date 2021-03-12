const guess = (userGuess, secret) => {
  if (userGuess < secret) {
    console.log('Too small!')
  } else if (userGuess > secret) {
    console.log('Too big!')
  } else {
    console.log('You win')
  }
}

guess(50, 50)
guess(50, 25)
guess(50, 75)