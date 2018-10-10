"use strict"
var deck = [];
var playersDeck = [];

function deckBuilder(deckArray) {
	let suits = ["hearts", "diamonds", "spades", "clovers"]
	for(let i = 0; i < suits.length; i++) {
		let deckStack = buildSuit(suits[i]);
		for(let j = 0; j < deckStack.length; j++) {
			deckArray.push(deckStack[j]);
		}
	}
	for(let i = 0; i<deck.length; i++) {
		console.log(deckArray[i].cardValue);
	}
	return deckArray;
}
modeules.exports = deckBuilder;
function buildSuit(suitName) {
	var cardSequence = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"];
	let suitArray = [];
	for(let i = 0; i < 13; i++) {
		let card = {
			suit: suitName,
			cardValue: cardSequence[i]
		};
		suitArray.push(card);
	}
	return suitArray;
}
module.exports = buildSuit; 

function dealDeck(totalPlayers, deck, players) {
	let pile = deck;
	let cardsToDeal = getCardsToDeal(deck, totalPlayers);
	while(pile.length > 0) {
		for(let i = 0; i < totalPlayers; i++) {
				players[i].pile.push(pile[i]);
				cardsToDeal--;
				pile.splice(0,1);
		}
	}
}
module.exports = dealDeck;

function getCardsToDeal(deck, totalPlayers) {
	let remainder = deck.length % totalPlayers;
	let numberToDeal = deck.length - remainder;
	return numberToDeal;
}
function getPlayers() {
	let playerNumber = prompt("Please enter number of players");
	if(validateUserInput(playerNumber) == true) {
		return playerNumber;
	}
	else {
		return getPlayers();
	}
}
function validateUserInput(input) {
	let parseValue = parseInt(input);
	if(parseValue > 52 || parseValue == NaN) {
		alert("Not a valid entry");
		return false;
	}
	else {
		return true;
	}
}
function playerBuilder(totalPlayers) {
	let players = [];
	for(let i = 0; i < totalPlayers; i++) {
		let player = {
			name: "player" + (i+1).toString(),
			pile: []
		}
		players.push(player);
	}
	return players;
}
function shuffle(deck) {
	let shuffled = deck.sort(function(a,b){return .5 - Math.random()});
	return shuffled;
}
modules.exports = shuffle;
function runProgram() {
	let numberOfPlayers = getPlayers();
	deck = deckBuilder(deck);
	alert("Deck is being shuffled");
	deck = shuffle(deck);
	playersDeck = playerBuilder(numberOfPlayers);
	dealDeck(numberOfPlayers, deck, playersDeck);
}

//see app.spec.js for unit tests written using jasmine