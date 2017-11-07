
// tell the script to wait for the page to load
$(document).ready(function() {

// define the variables of the game
var currentTally = 0; 
var wins = 0;
var losses = 0;
var currentNumber;
var gemValue = [];

// create a reset function for the game
function resetGame() {
	// set the computerNumber to random number between 19 and 120 inclusive
	currentNumber = Math.floor(Math.random() * (120-19+1)) + 19;
	$("#currentNumber").text(currentNumber);
	gemValues = [];
	var currentValue;
	currentTally = 0;

// Make sure game is win-able, by having at least 1 odd number

  gemValue[0] = (Math.floor(Math.random() * 6) * 2) + 1;

  // First, generate 4 random values in the 1-12 range
  while(gemValues.length < 4) {
  	currentValue = Math.floor(Math.random() * 12) + 1;

    // Avoid duplicates
    if(gemValues.indexOf(currentValue) < 0) {
    	gemValues.push(currentValue);
    }

    score();
}
}

// start the game 
resetGame();


// create a function to control score
function score() {
	var scoreBoard = 
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>";
	$("#scoreBoard").html(scoreBoard);

}

  // Add an on click listener to the gems
  $(".gem").on("click", function() {
  	var buttonPressed = this.value;
  	currentTally += gemValues[buttonPressed];
  	
  	if (currentTally === currentNumber) {
  		wins++;
  		alert("You Won");
  		resetGame();
  	}
  	else if (currentTally > currentNumber) {
  		losses++;
  		alert("You Suck");
  		resetGame();
  	}
  	$("#currentTally").text(currentTally);
  });




});