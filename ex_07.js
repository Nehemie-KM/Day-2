fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"]

let index = 2

function getIndexFromName(index) {
  if (index === -1) {
    return fruits[fruits.length - 1]
  }
  if (index < 0 || index >= fruits.length) {
    return null
  } else {
    return fruits[index]
  }
}

function plus(resultat) {
  displayResult(resultat)
}
plus(getIndexFromName(index))
