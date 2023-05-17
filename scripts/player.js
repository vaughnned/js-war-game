import { Deck } from "./deck.js";

export function Player(name) {
  this.name = name;
  this.deck = new Deck();
}
