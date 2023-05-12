const suit = ["Hearts", "Diamonds", "Clubs", "Spades"];

const heartsArr = [];
const diamondsArr = [];
const spadesArr = [];
const clubsArr = [];

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

let card1 = new Card({
  suit: "Heart",
});

function Card({ value, suit } = {}) {
  for (let i = 0; i < cards.length; i++) {
    if (!heartsArr.includes(value) && suit === "Hearts") {
      card.value = cards[i];
      heartsArr.push(card.value);
    }

    return heartsArr;
  }
}
console.log(card);
