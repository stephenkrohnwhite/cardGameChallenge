var BuildSuit = require("../app");
var DeckBuilder = require("../app");
var Shuffle = require("../app");
var DealDeck = require("../app")

describe("BuildSuit functionality", function() {
    beforeEach(function() {
        let suitArray = BuildSuit("hearts");
    });
    

    it("suit length is 13", function() {
        expect(suitArray.length).toEqual(13);
    });

    it("suit index[0] is 'ace'", function() {
        expect(suitArray[0].cardValue).toEqual('ace');
    });

    it("suit index[3] is 'hearts'", function() {
        expect(suitArray[3].suit).toEqual('hearts');
    });
});

describe("DeckBuilder functionality", function() {
    beforeEach(function() {
        let deck = [];
        deck = DeckBuilder(deck);
    });

    it("deck length is 52", function() {
        expect(deck.length).toEqual(52);
    });
    it("deck to have 13 cards whose suit is 'diamonds'", function() {
        const result = deck.filter(card => card.suit == "diamonds");
        expect(result).toEqual(13);
    });
    it("deck to have 4 cards whose cardvalue equals 'ace'", function() {
        const result = deck.filter(card => cardValue == "ace");
    });
});
describe("Shuffle functionality", function() {
    beforeEach(function() {
        let deck = [];
        deck = DeckBuilder(deck);
        deck = Shuffle(deck);
    });
    it("multiple deck cardValues expected to be different after shuffle", function() {
        let cardA = deck.card[12].cardValue;
        let cardB = deck.card[15].cardValue;
        let cardC = deck.card[20].cardValue;
        deck = Shuffle(deck);
        let cardD = deck.card[12].cardValue;
        let cardE = deck.card[15].cardValue;
        let cardF = deck.card[20].cardValue;
        expect(cardA == cardD && cardB == cardE && cardC == cardF).toEqual(false);
    });
    describe("DealDeck fuctionality", function() {
        beforeEach(function() {
            let deck =[];
            deck = DeckBuilder(deck);
            deck = Shuffle(deck);
            let playersDeck = [];
        });
        it("testing 4 player game where one player gets every 4th card", function() {
            dealDeck(playersDeck, deck, 4);
            expect(playersDeck[0].pile[0] == deck[0] && playersDeck[0].pile[4] == deck[4]).toEqual(true);
        });
        it("in 10 player game each player dealt 5 cards", function() {
            dealDeck(playersDeck, deck, 10);
            expect(playersDeck[3].pile.length == 5).toEqual(true);
        });
    })
})