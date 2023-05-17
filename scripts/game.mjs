import { Card } from "./card.mjs";
import { Deck } from "./deck.mjs";
import { Player } from "./player.mjs";

export function Game() {
  this.deck = new Deck();
  this.deck.fillStandardCards();
  this.deck.shuffle();

  this.p1 = new Player("Vaughn");
  this.p2 = new Player("Scott");

  for (let i = 0; i < 52; i++) {
    let card = this.deck.draw();
    if (i % 2) {
      this.p1.deck.addCard(card);
    } else {
      this.p2.deck.addCard(card);
    }
  }
}
