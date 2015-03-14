console.log('test test')


var ranks = {
    ACE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    JACK: 10,
    QUEEN: 10,
    KING: 10
};


var suits = {
    HEARTS: 'hearts',
    CLUBS: 'clubs',
    SPADES: 'spades',
    DIAMONDS: 'diamonds'
};


var app = {

    _ranks : ranks,
    _suits : suits,

    cards : (function() {
        var cards = {};  // suit:ranks
        Object.keys(suits).forEach(function(suit) {
            cards[suit] = ranks;
        });
        return cards;
    }()),

    makeDeck : function() {
        var deck = [];

        Object.keys(suits).forEach(function(suit) {
            Object.keys(ranks).forEach(function(rank){
                deck.push({ suit:suit, rank:rank});
            });
        });

        console.log(deck)
    }

};