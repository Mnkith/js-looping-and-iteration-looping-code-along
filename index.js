function writeCards(names, e){
  const cards = [];
  for (let i = 0; i < names.length; i++){
    cards.push(`Thank you, ${names[i]}, for the wonderful ${e} gift!`)
  }
  return cards
}

function countDown(n){
  while (n >= 0){
    console.log(n--)
  }
}