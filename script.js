 /* Deal 26 Cards to each Player from a Deck of 52 cards.
Iterate through the turns where each Player plays a Card.
The Player who played the higher card is awarded a point.
-Ties result in zero points for both Players.
After all cards have been played, display the score and declare the winner.
---------------------------------------------------------------------------------
Four suits to represent the appearance (user interface - ui) for your cards

let cardSuits = ["Spades ", "Hearts ", "Diamonds ", "Clubs "];
console.log("Card Suits Example:", cardSuits);
----------------------------------------------------------------------------------
Brainstorm, before watching the video, for the things I will need for this. I'm thinking 
they should maybe follow this order for coding them (random thoughts are in 
parentheses)

~~deck of cards (an array- see above but the suits will also need to have numbers 1-12 with
    Jacks 10, Queens 11 and Kings 12)

~~players (two variables: player 1 and player 2)

~~ability to shuffle (randomly moves through the array using a loop- Should this have a menu for the players
   to determine if they would like to shuffle and deal?)

~~ability to deal the deck of cards randomly (sort the array up to 26 cards so between 1 and 27)

~~declare a winner per each hand- highest card scores (compare values and add to the score)

~~declare the overall winner (when they run out of cards game stops highest score wins)

~~reset to play again(could be part of the menu)

~~NOW OFF TO WATCH THE VIDEO----------------------

~~Didn't think about a "class" they seem like they are the different categories the program is using
~~He talked about deck being static vs. game logic changes--Deck isn't unique to just War.  Can be used for 
    other games so it would make sense to have it in it's own class
~~Deck class with methods like shuffling
~~I like the idea of creating a deck that suffles and then having everything else outside of the deck
    Then I can use it for other things (24:00 ish)
~~What is a control flow statement logic? it is greater than and less than statement.
~~ Need to understand: class, methods, const, objects and when they are used and how to write them
-------------------------------------------------------------------------------------- */

class Deck {
    constructor () {
        this.deck = [];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King",
        ];
        this.suits = ["Hearts", "Diamonds", "Spades", "Clubs"]
    }
    //Method to create a deck that iterates both ranks/suits
    //push a new card (as an object) into our constuctors this.deck

    createDeck() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                let card = {
                    name: `${this.ranks[j]} of ${this.suits[i]}`,
                    value: j + 1
                }
                this.deck.push(card)
            }
        }
    }
//Fisher-Yates-Shuffle Method- researched online
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));

            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}

//this ends the first CLASS that creates everything needed for the DECK of cards

/*This is where the second CLASS will be created which will include all the
logic for how to play the game (players, turns, score and overall winner)*/ 

/* What is needed:
~~A deck... instantiate a new Deck inside of our Game class (notice both deck and game are 
capitalized because that is how you write out classes)

~~Create a deck, shuffle the deck and pass the deck (this has been created
but how to you add it to the logic?)...

~~Logic to play the game
-turn based, how many turns?
-Do our players have a hand yet?
-control flow statement logic to decide who wins?

~~Two players
-hand
-score
-name*/

class Game{
    constructor() {
        this.player1 = {
            name: "Player 1",
            score: 0,
            hand: []
        }
        this.player2 = {
            name: "Player 2",
            score: 0,
            hand: []
        }
    }

    playGame() {
        const deck = new Deck
        deck.createDeck()
        deck.shuffleDeck()

        while (deck.deck.length != 0) {

            this.player1.hand.push(deck.deck.shift())
            this.player2.hand.push(deck.deck.shift())
        }

        //Actually playing the game logic...How many turns?
        for (let i = 0; i < this.player1.hand.length; i++) {

            if (this.player1.hand[i].value> this.player2.hand[i].value) {
                this.player1.score ++
                console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Player 1 wins a point!
                Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}
                `)
            } else if (this.player2.hand[i].value> this.player1.hand[i].value) {
                this.player2.score ++
                console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Player 2 wins a point!
                Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}
                `)     
            } else {
                console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Tie! No points awarded
                Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}
                `)
            }
        }

        if (this.player1.score > this.player2.score) {
            console.log(`Player 1 wins
                Final Score: P1: ${this.player1.score}
                             P2: ${this.player2.score}
                `)
        } else if (this.player2.score > this.player1.score) {
            console.log(`Player 2 wins
                Final Score: P2: ${this.player2.score}
                             P1: ${this.player1.score}
                `)
        } else {
            console.log(`Tie`)
        }

    }

}

//const game = new Game
//game.playGame()*/

//When I added these to my code, my console just did a spinning wheel.  
//Before I added them, it worked just fine.  Something is wrong with my players?
const game = new Game
game.playGame()
//deck.createDeck()
//deck.shuffleDeck()

//console.log(deck.deck)