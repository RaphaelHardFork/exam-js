const information = (prenom, nom, age) => {
  if (age < 18) {
    console.log(`Prenom : ${prenom}\nNom : ${nom}\nVous êtes majeur dans ${18 - age} ans`)
  } else if (age > 18) {
    console.log(`Prenom : ${prenom}\nNom : ${nom}\nVous êtes majeur depuis ${age - 18} ans`)
  } else {
    console.log(`Prenom : ${prenom}\nNom : ${nom}\nVous êtes majeur cette année`)
  }
}

information("Raphael", "Pellet", 18)