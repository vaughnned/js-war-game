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
