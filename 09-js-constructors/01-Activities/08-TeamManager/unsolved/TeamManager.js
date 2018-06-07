var inqrr = require("inquirer");

function Player(name, position, offense, defense){
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function(){
        if (Math.random() * 2){
            this.defense += 1;
        }
        else{
            this.offense += 1;
        }
    };
    this.badGame = function(){
        if (Math.random() * 2){
            this.defense -= 1;
        }
        else{
            this.offense -= 1;
        }
    };
    this.printStats = function(){
        console.log(this.name + "[" + this.position + "] : " + "offense[" + this.offense + "] defense[" + this.defense + "]");
    };
};

var playerArr = []; 
var counter = 3;
var RecursCreatePlayer = function (){
    if(counter > 0){
        inqrr.prompt([
            {
                type:    "input",
                message: "Character Name:",
                name:    "name"
            },
            {
                type:    "input",
                message: "Character position:",
                name:    "position"
            },
            {
                type:    "list",
                message: "Character attack stat:",
                choices: ["1","2","3","4","5","6","7","8","9","10"],
                name:    "att"
            },
            {
                type:    "list",
                message: "Character defense stat:",
                choices: ["1","2","3","4","5","6","7","8","9","10"],
                name:    "def"
            }
        ]).then(function(userInput){

            var player = new Player(userInput.name, userInput.position,userInput.att,userInput.def);
            playerArr.push(player);
            counter--;
            RecursCreatePlayer();
        });
    }
    else{
        console.log("PLAYERS = " + playerArr);
    }
}

RecursCreatePlayer();
