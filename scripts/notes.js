// const Card = function ({ value, suit } = {}) {
//   this.value = value;
//   this.suit = suit;
// }; // function expression

// // function Car() {}; // function declaration\

// const card = new Card({ value: 10, suit: "spades" });

// // ---------

// const Deck = function () {
//   this.cards = [];

//   for (let i = 0; i < 4; i++) {
//     for (j = 2; j < 15; j++) {
//       this.cards.push(new Card({ suit: i, value: j }));
//     }
//   }
// };

// //----------

// const Player = function ({ name } = {}) {
//   this.name = name;
//   this.hand = [];
// };

// //----------

// const Game = function () {
//   // To-Do: Make player names dynamic
//   const player1 = "Jay";
//   const player2 = "Vaughn";

//   this.player1 = new Player({ name: player1 });
//   this.player2 = new Player({ name: player2 });
//   this.deck = new Deck();
//   this.pot = [];
// };

// Game.prototype.shuffle = function (deck) {
//   let i = deck.length,
//     j,
//     temp;

//   while (i--) {
//     j = Math.floor(Math.random() * (i + 1));
//     temp = deck[i];
//     deck[i] = deck[j];
//     deck[j] = temp;

//     // [deck[i], deck[j]] = [deck[j], deck[i]]; one liner way
//   }
// };

// Game.prototype.deal = function () {
// // this.shuffle(this.deck.cards);
// this.player1.hand = this.deck.cards.filter(function(item, index) {
//     return !(index % 2);
// });
// this.player2.hand = this.deck.cards.filter(function(item, index) {
//     return index % 2;
// });
// };

// Game.prototype.compare = function () {
//   const player1Card = this.pot[0];
//   const player2Card = this.pot[1];

//   if (player1Card.value > player2Card.value) {
//     this.player1.hand = [...this.player1.hand, ...this.pot];
//     console.log(`${this.player1.name} wins!`);
//     console.log(`${this.player1.name} has ${this.player1.hand.length} cards.`);
//     console.log(`${this.player2.name} has ${this.player2.hand.length} cards.`);
//   } else if (player1Card.value < player2Card.value) {
//     this.player2.hand = [...this.player2.hand, ...this.pot];
//     console.log(`${this.player2.name} wins!`);
//     console.log(`${this.player2.name} has ${this.player2.hand.length} cards.`);
//     console.log(`${this.player1.name} has ${this.player1.hand.length} cards.`);
//   } else if (player1Card.value === player2Card.value) {
//     alert("It's WAR!");

//     if (this.player1.hand.length < 4) {
//       this.player2.hand = [
//         ...this.player2.hand,
//         ...this.pot,
//         ...this.player1.hand.splice(0),
//       ];
//       return;
//     } else if (this.player2.hand.length < 4) {
//       this.player1.hand = [
//         ...this.player1.hand,
//         ...this.pot,
//         ...this.player2.hand.splice(0),
//       ];
//       return;
//     } else {
//       // IT'S WAR!
//       this.pot = [
//         ...this.player1.hand.splice(0, 3),
//         ...this.player2.hand.splice(0, 3),
//         ...this.pot,
//       ];
//       return;
//     }

//     this.player1.hand = [...this.player1.hand, ...this.pot];
//     console.log(`${this.player1.name} wins!`);
//     console.log(`${this.player1.name} has ${this.player1.hand.length} cards.`);
//     console.log(`${this.player2.name} has ${this.player2.hand.length} cards.`);
//   }
//   console.log("/n");
//   this.pot = [];
// };

// Game.prototype.draw = function () {
//   const player1Card = this.player1.hand.shift();
//   const player2Card = this.player2.hand.shift();

//   this.pot = [player1Card, player2Card, ...this.pot];
//   console.log(`${this.player1.name} draws a ${player1Card.value}`);
// };

// Game.prototype.play = function () {
//   this.shuffle(this.deck.cards);
//   this.deal();
//   // let i = 100;
//   while (this.player1.hand.length > 0 && this.player2.hand.length > 0){
//   // while (i--) {
//     this.draw();
//   }
// };

// const game = new Game();
// game.play();
