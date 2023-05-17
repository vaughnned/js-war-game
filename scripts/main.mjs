// (function () {
// "use strict";
import { Game } from "./game.mjs";
const game = new Game();

document.querySelector("#player1 h2").innerText = game.p1.name;
document.querySelector("#player2 h2").innerText = game.p2.name;

let p1Card = document.querySelector("#player1 .card");
let p2Card = document.querySelector("#player2 .card");
let p1Stats = document.querySelector("#player1 .stats");
let p2Stats = document.querySelector("#player2 .stats");

let winner = document.querySelector("#gameStatus");
let pot = document.querySelector("#potCount");

function playHandler() {
  let card1 = game.p1.deck.draw();
  let card2 = game.p2.deck.draw();

  p1Card.innerText = card1.toString();
  p2Card.innerText = card2.toString();
  console.log(card1, card2);

  if (card1.num === card2.num) {
    // WAR
    winner.innerText = "WAR!";
    // stash 3 cards
    game.deck.addCard(card1);
    game.deck.addCard(card2);
    game.deck.addCards(game.p1.deck.drawThree());
    game.deck.addCards(game.p2.deck.drawThree());
  } else if (card1.num > card2.num) {
    // P1 wins
    winner.innerText = game.p1.name + " wins the hand!";
    game.p1.deck.addCard(card1);
    game.p1.deck.addCard(card2);
    game.p1.deck.addCards(game.deck.cards);
    game.deck.cards = [];
  } else {
    // P2 wins
    winner.innerText = game.p2.name + " wins the hand!";
    game.p2.deck.addCard(card1);
    game.p2.deck.addCard(card2);
    game.p2.deck.addCards(game.deck.cards);
    game.deck.cards = [];
  }
  updateStats();
}

function updateStats() {
  pot.innerText = game.deck.cards.length + " cards in the pot";
  p1Stats.innerText = game.p1.deck.cards.length + " cards in deck";
  p2Stats.innerText = game.p2.deck.cards.length + " cards in deck";
}

document.querySelector("#playBtn").addEventListener("click", playHandler);
// })();
