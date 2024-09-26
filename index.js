// Code your solutions in this file
// for (let age=30; age<40; age++) {
//     console.log(I'm ${age} years old. Happy birthday to me!);
    
// }
// const gifts=["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i=0; i<gifts.length; i++) {
//         console.log(Wrapped ${gifts[i]} and added a bowl!);
//         debugger;
//     }
//     return gifts;
// }
// wrapGifts(gifts);

function writeCards(names) {
    const messages = [];
  
    for (const name of names) {
      const message = (`Thank you, ${name}, for the wonderful surprise gift!`);
      messages.push(message);
    }
  
    return messages;
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  module.exports = { writeCards, countDown };