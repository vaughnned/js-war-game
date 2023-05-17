export function Card(suit, value) {
  this.suit = suit;
  this.value = value;
  this.num = CARD_VALUES[value];
}

export const CARD_VALUES = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

export const CARD_SUITS = {
  C: 0,
  D: 1,
  H: 2,
  S: 3,
};

Card.prototype.toString = function () {
  return this.value + "-" + this.suit;
};
