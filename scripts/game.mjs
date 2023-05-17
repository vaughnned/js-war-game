import { Card } from "./card.mjs";
import { Deck } from "./deck.mjs";
import { Player } from "./player.mjs";

export function Game() {
  this.deck = new Deck();
  this.deck.fillStandardCards();
  this.deck.shuffle();

  this.p1 = new Player("Vaughn");
  this.p2 = new Player("Scott");
  this.winner = null;

  for (let i = 0; i < 52; i++) {
    let card = this.deck.draw();
    if (i % 2) {
      this.p1.deck.addCard(card);
    } else {
      this.p2.deck.addCard(card);
    }
  }
}

Game.prototype.play = function (p1Cards, p2Cards) {
  console.log(p1Cards, p2Cards);
  if (Array.isArray(p1Cards)) {
    if (p1Cards.length < p2Cards.length) {
      this.winner = this.p2.name;
    }
    if (p1Cards.length > p2Cards.length) {
      this.winner = this.p1.name;
    }
  } else {
    if (!p1Cards) {
      this.winner = this.p2.name;
    }
    if (!p2Cards) {
      this.winner = this.p1.name;
    }
  }

  return !this.winner;
};
