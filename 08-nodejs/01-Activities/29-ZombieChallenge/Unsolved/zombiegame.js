// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================
var iqrr = require("inquirer");

var player = {
    health:100,
    guess: 0,
    makeGuess:function(){
        iqrr.prompt([{
            type:"list",
            message:"Try to stay alive! Guess a number between [1-5]",
            choices:[1,2,3,4,5],
            name: "guess"
        }]).then(function(round){
            player.guess = round.guess;
        });
    }
};

var zombie = {
    health: 50,
    guess:function(){
        return Math.floor(Math.random() * (6 - 1) ) + 1
    }
};

while (player.health > 0 && zombie.health > 0){
    player.makeGuess;
    if (player.guess == zombie.guess){
        zombie.health -= player.guess;
    }
    else {
        var damage = zombie.guess;
        player.health -= damage;
        console.log("Zombie attacked you with " + damage.toString() + " damage, you have " + player.health.toString() + " Health left, zombie has " + zombie.health.toString() + "health left");
        
    }

}