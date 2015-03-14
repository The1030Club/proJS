/**
 * Created by bphaaland on 3/14/15.
 */
// Blackjack Example

// Deck
var deck = {};

// Suits
var suits = {
    SPADES: 'spades',
    HEARTS: 'hearts',
    CLUBS: 'clubs',
    DIAMONDS: 'diamonds'
}

// Rank
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
    KING: 10,
}

Object.keys(suits).forEach(function(suit) {
    deck[suit] = ranks
})