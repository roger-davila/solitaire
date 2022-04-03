import Deck from './Deck.js';
import Tableau from './Tableau.js';

const mainEl = document.querySelector('main');
console.log(mainEl);

console.log(Deck.suits);
console.log(Deck.ranks);
console.log(Deck.valuesTable);

const deck = new Deck();
console.log(deck);
deck.shuffle();
console.log(deck);

render();

function render() {
    deck.cards.forEach((card) => {
    let cardEl = document.createElement('div');
    cardEl.setAttribute('class', `card ${card.suit}${card.shorthand}`);
    mainEl.append(cardEl);
    });
}
// deck.shuffle();
// console.log(deck);

// console.log(deck.dealOne);
// // console.log(deck.dealOne());



// const tableau = new Tableau(7);
// console.log(tableau);

// console.log(tableau.setTableau(deck));
// console.log(tableau);

// console.log(deck);