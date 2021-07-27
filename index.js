// Code your solutions in this file

/* ----   SIMPLE EXAMPLE OF FOR LOOP ------

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }
---------------------------------------------- */

/* USING 'FOR' WITH ARRAYS

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); 

(will return:
Wrapped teddy bear and added a bow!
Wrapped drone and added a bow!
Wrapped doll and added a bow! )
-------------------------------------------------- */


const namesArray = ["Lisa", "Kaitlin", "Jan"];

function writeCards(name){
    for (let i = 0; i < name.length; i++) {
        console.log(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
        debugger;
    }
  return thankYouCards
}
const thankYouCards = []

let counter = 10

function countDown(counter){
  while (counter > -1) {
    console.log(counter--)
  }
}


