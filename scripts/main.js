import { Game } from "./game.js";
const game = new Game();
let roundCt = 0;

document.querySelector("#player1 h2").innerText = game.p1.name;
document.querySelector("#player2 h2").innerText = game.p2.name;

let p1Card = document.querySelector("#player1 .card");
let p2Card = document.querySelector("#player2 .card");
let p1Stats = document.querySelector("#player1 .stats");
let p2Stats = document.querySelector("#player2 .stats");

let winner = document.querySelector("#gameStatus");
let pot = document.querySelector("#potCount");

function gameOver() {
  winner.innerText = game.p1.name + " Wins The Game!";
  document.getElementById("playBtn").disabled = true;
  console.log(roundCt + " rounds");
}

function playHandler() {
  roundCt++;
  let card1 = game.p1.deck.draw();
  let card2 = game.p2.deck.draw();

  if (!game.play(card1, card2)) {
    gameOver();
    return;
  }

  p1Card.innerText = card1.toString();
  p2Card.innerText = card2.toString();

  if (card1.num === card2.num) {
    // WAR
    winner.innerText = "WAR!";
    // stash 3 cards
    game.deck.addCard(card1);
    game.deck.addCard(card2);
    let stash1 = game.p1.deck.drawThree();
    let stash2 = game.p2.deck.drawThree();
    if (!game.play(stash1, stash2)) {
      gameOver();
      return;
    }
    game.deck.addCards(stash1);
    game.deck.addCards(stash2);
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

function autoPlay() {
  while (!game.winner && roundCt < 500) {
    playHandler();
  }
}

document.querySelector("h1").addEventListener("click", autoPlay);
