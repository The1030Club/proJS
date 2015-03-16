;(function ( $, window, document, undefined ) {

    "use strict";

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

    function makeDeck() {
        var deck = [];

        Object.keys(suits).forEach(function(suit) {
            Object.keys(ranks).forEach(function(rank){
                deck.push({ suit:suit, rank:rank});
            });
        });

        return deck;
    }

    function shuffle(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }


    var pluginName = "blackjack",
        defaults = {
            propertyName: "value"
        };


    function Plugin ( element, options ) {
        this.element = element;
        this.$element = $(element);
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.deck = makeDeck();
        this.hand = [];
        this.init();
    }


    $.extend(Plugin.prototype, {
        init: function () {
            this.shuffle();
            this.displayDeck();

            var shuffleHTML = '<button class="shuffle">Shuffle that shit...</button>';
            this.$element.find('.controls').append(shuffleHTML);
            this.$element.find('.shuffle').on('click', function() {
                this.shuffle();
                this.displayDeck();
            }.bind(this));

            this.deal(5);
            this.displayHand();
        },

        shuffle : function () {
            this.deck = shuffle( this.deck );
        },

        deal : function(howMany) {

            if (howMany > this.deck.length) {
                howMany = this.deck.length;
            }

            for (var i = 0; i < howMany; i++) {
                this.hand.push(this.deck.pop());
            }
            this.displayDeck();
        },

        displayCard : function(card, selector){
            var rank = card.rank;
            var suit = card.suit;
            var cardHTML =
                '<div class="card ' + suit.toLowerCase() + ' ' + rank.toLowerCase() + '">' +
                '<span class="rank">' + rank + '<span>' +
                ' of ' +
                '<span class="suit">' + suit + '<span>' +
                '</div>';

            this.$element.find(selector).append(cardHTML);
        },

        displayCards : function(cards, selector) {
            this.$element.find(selector).empty();
            cards.forEach(function(card){
                this.displayCard(card, selector);
            }.bind(this));
        },

        displayDeck : function () {
            this.displayCards(this.deck, '.deck');
        },

        displayHand : function () {
            this.displayCards(this.hand, '.hand');
        }

    });


    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );
