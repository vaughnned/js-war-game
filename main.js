(function () {
  "use strict";
  let cards = [
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
  const deck = [...cards, ...cards, ...cards, ...cards];
  const suit = ["Heart", "Diamonds", "Clubs", "Spades"];
  for (let i = 0; i < deck.length; i++) {
    suit[i] = deck[i];
    // if (deck[0]) {
    //   suit = "Hearts";
    // }
    // if (deck[1]) {
    //   suit = "Diamonds";
    // }
    // if (deck[2]) {
    //   suit = "Clubs";
    // }
    // if (deck[3]) {
    //   suit = "Spades";
    // }
  }

  function shuffle(deck) {
    return deck.sort(function () {
      return Math.random() - 0.5;
    });
  }

  shuffle(deck);
  console.log(shuffle(deck));
});
