import { Card, CARD_SUITS, CARD_VALUES } from "./card.js";

export function Deck() {
  this.cards = [];
}

Deck.prototype.fillStandardCards = function () {
  Object.keys(CARD_SUITS).forEach((suit) => {
    Object.keys(CARD_VALUES).forEach((val) => {
      this.cards.push(new Card(suit, val));
    });
  });
};

Deck.prototype.shuffle = function () {
  // fisher yates algorithm
  // https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
  let arr = this.cards;
  let i = arr.length;
  while (--i > 0) {
    let temp = Math.floor(Math.random() * (i + 1));
    [arr[temp], arr[i]] = [arr[i], arr[temp]];
  }
};

Deck.prototype.draw = function () {
  return this.cards.pop();
};

Deck.prototype.addCard = function (card) {
  return this.cards.unshift(card);
};

// let deck = new Deck();
// deck.shuffle();
// console.log(deck);

// function shuffle(deck) {
//     return deck.sort(function () {
//       return Math.random() - 0.5;
//     });
//   }

//   shuffle(deck);
//   console.log(shuffle(deck));
