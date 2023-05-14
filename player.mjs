import { Deck } from "./deck.mjs";

export function Player(name) {
  this.name = name;
  this.deck = new Deck();
}
