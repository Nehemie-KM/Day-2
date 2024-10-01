fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
 
 let name = "Apple"
 function getIndexFromName(name) { 
 let lol = fruits.indexOf(name)
 if (lol === -1){ 
 return null
 }
 else { 
 return lol 
 }
 
 }
  
 function plus (resultat){ 
 console.log(resultat)
 }
plus(getIndexFromName(name))