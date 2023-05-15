import { Card } from "./card.mjs";
import { Deck } from "./deck.mjs";
import { Player } from "./player.mjs";

function Game() {
  this.deck = new Deck();
  this.deck.fillStandardCards();
  this.deck.shuffle();

  this.players = [new Player("Vaughn"), new Player("Scott")];

  for (let i = 0; i < 52; i++) {
    let card = this.deck.draw();
    this.players[i % 2].deck.addCard(card);
  }
}

const game = new Game();

document.getElementById("playerOneTitle").innerText = game.players[0].name;
document.getElementById("playerTwoTitle").innerText = game.players[1].name;

function playHandler() {
  // card1 = player1.deck.draw()
  // card2 = player2.deck.draw()

  p1Card.innerText = card1.suit + "-" + card1.value;

  if (card1.num === card2.num) {
    // WAR
    // stash 3 cards
    playHandler();
  } else if (card1.num < card2.num) {
    // P1 wins
    player1.deck.addCard(card1);
    player1.deck.addCard(card2);
  } else {
    // P2 wins
  }
}
