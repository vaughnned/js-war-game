const suitArr = ["Hearts", "Diamonds", "Clubs", "Spades"];

// const heartsArr = [];
// const diamondsArr = [];
// const spadesArr = [];
// const clubsArr = [];

export const cards = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

const deck = [];

let card = new Card();

function Card({ value, suit = "Hearts" } = {}) {
  this.suit = suit;
  for (let i = 0; i < cards.length; i++) {
    value = cards[i];
    this.value = value;
    if (!deck[i].includes(this.value) && !deck[i].includes(this.suit)) {
      deck.push(this);
    } else if (deck[i].includes(this.suit)) {
      for (let s = 0; s < suitArr.length; i++) {
        this.suit = suitArr[i];
        deck.push(this);
      }
    } else if (deck[i].includes(this.value)) {
      for (let i = 0; i < cards.length; i++) {
        this.value = cards[i];
        deck.push(this);
      }
    }
  }
  return deck;
}
console.log(deck);
