let basket = ["strawberry","strawberry","strawberry","apple-1","lime","apple-1", "lime", "peach","pear", "pear"]

function getBasketContent(fruit) {
 
  if (fruit > basket.length) {
    console.log("Too many fruit(s)selected.")
    return 
  } else {
  console.log(fruit + " fruit(s)selected")
  return basket.splice(0, fruit)
  }
}


  const fruits = getBasketContent(6)
  showMyBasket(fruits)
