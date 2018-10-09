"use strict"
var deck = [];
function Card(suitName, cardValue) {
	this.suit = suitName;
	this.cardValue = cardValue;
}	

var cardSequence = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"];
function deckBuilder(deckArray) {
	let suits = ["hearts", "diamonds", "spades", "clovers"]
	for(let i = 0; i < suits.length; i++) {
		let deckStack = buildSuit(suits[i]);
		deckArray += deckStack;
	}
	for(let i = 0; i<deck.Length; i++) {
		console.log(deckArray[i].cardValue);
	}
}
function buildSuit(suitName) {
	let suitArray = [];
	for(let i = 0; i < 13; i++) {
		suitArray[i] = new Card(suitName, cardSequence[i]);
	}
	return suitArray;
}
function runProgram() {
	deckBuilder(deck);
}