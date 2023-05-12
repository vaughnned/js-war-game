// function deck() {}

// const deck = [...cards, ...cards, ...cards, ...cards];

export default function shuffleCards(arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr.sort(function () {
      return Math.random();
    });
  }
}
// function shuffle(deck) {
//     return deck.sort(function () {
//       return Math.random() - 0.5;
//     });
//   }

//   shuffle(deck);
//   console.log(shuffle(deck));
