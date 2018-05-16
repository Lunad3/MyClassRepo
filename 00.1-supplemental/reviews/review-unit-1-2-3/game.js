// what data do i need for this program?
var userScore = 0;
var hasGameStarted = false;

function startGame () {
  userScore++; // changing the numerical value
  // this is the same as...
  // userScore = userScore + 1
  hasGameStarted = true; // changing data 
}

startGame();
// once startGame() is called, THEN its instructions happend and changes the score and gamestart