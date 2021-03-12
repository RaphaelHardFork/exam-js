const numberPyramid = (nb) => {
  for (i = 1; i <= nb; i++) {
    console.log(i.toString().repeat(i))
  }
}

numberPyramid(8)