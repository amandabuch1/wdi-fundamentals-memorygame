const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{ rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png" },
{ rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png" }
];
const cardsInPlay = [];

function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}

function flipCard() {
let index = this.getAttribute("data-id");
console.log("User flipped " + cards[index].rank);
this.setAttribute("src", cards[index].cardImage);
cardsInPlay.push(cards[index].rank);
checkForMatch();
}

function createBoard() {
for (let i = 0; i < cards.length; i++) {
let cardElement = document.createElement("img");
cardElement.setAttribute("src", "images/back.png");
cardElement.setAttribute("data-id", i);
cardElement.addEventListener("click", flipCard);
let board = document.getElementById("game-board");
board.appendChild(cardElement);
}
}

createBoard();

