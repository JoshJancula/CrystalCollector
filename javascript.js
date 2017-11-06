
// tell the script to wait for the page to load
$(document).ready(function() {

// define the variables of the game
var currentTally = 0; 
var wins = 0;
var losses = 0;
var currentNumber;
var gemValues = [];


}

// create a reset function for the game
function resetGame() {
	// set the computerNumber to random number between 19 and 120 inclusive
	currentNumber = Math.floor(Math.random() * (120-19+1)) + 19;
	// set the buttons to unique random values between 1 and 12 inclusive

	gemValues = [];
	var currentValue;

  // First, generate 4 random values in the 1-10 range
  while(gemValues.length < 4) {
  	currentValue = Math.floor(Math.random() * 9) + 1;

    // Avoid duplicates
    if(gemValues.indexOf(currentValue) < 0) {
    	gemValues.push(currentValue);
    }

    score();
}

// start the game 
resetGame();


// create a function to control score
function score() {
	var scoreBoard = 
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>";

}

  // Add an on click listener to the gems
  $(".gem").on("click", function() {
  	var buttonPressed = this.value;
  	currentTally += gemValues[buttonPressed];
  	 $("#currentTally").text(currentTally);

  });

