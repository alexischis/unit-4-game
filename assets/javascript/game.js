$(document).ready(function(){

// values for crystals
var crystalValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

// set up the numeric variables for the game
var numberWins = 0;
var numberLosses = 0;
var userChoice = 0;

// computer can choose any number from 19-120 at random
var computerChoice =Math.floor(Math.random() *101+19);

// randomizing the value for each crystal
var crystalOne = crystalValues[Math.floor(Math.random()* crystalValues.length)];
var crystalTwo = crystalValues[Math.floor(Math.random()* crystalValues.length)];
var crystalThree = crystalValues[Math.floor(Math.random()* crystalValues.length)];
var crystalFour = crystalValues[Math.floor(Math.random()* crystalValues.length)];

// documenting what numbers the computer chooses and the values of the crystals for each game in the console log
console.log(computerChoice);
console.log(userChoice);
console.log(crystalOne);
console.log(crystalTwo);
console.log(crystalThree);
console.log(crystalFour);

// displaying the computer's value
$('#random-value').html(computerChoice);
// displaying wins and losses
$('#wins').html('Wins:' + "" + numberWins);
$('#losses').html('Losses:' + "" + numberLosses);

// reset function to allow the computer to choose a different number when the time comes
function reset() {
  computerChoice = Math.floor(Math.random() *101+19);
  console.log('reset', computerChoice);
  $('#random-value').html(computerChoice);
  crystalOne = crystalValues[Math.floor(Math.random()* crystalValues.length)];
  console.log('reset', crystalOne);
  crystalTwo = crystalValues[Math.floor(Math.random()* crystalValues.length)];
  console.log('reset', crystalTwo);
  crystalThree = crystalValues[Math.floor(Math.random()* crystalValues.length)];
  console.log('reset', crystalThree);
  crystalFour = crystalValues[Math.floor(Math.random()* crystalValues.length)];
  console.log('reset', crystalFour);
  userChoice = 0;
  $('#total-score').html(userChoice);
}

// increasing wins
 function userRight() {
   alert(" You Did It!");
   numberWins ++;
   $('#wins').html('Wins:' + "" + numberWins);
   reset();
 }

 // increasing losses
 function userWrong() {
   alert("Too Much!");
   numberLosses ++;
   $('#losses').html('Losses:' + "" + numberLosses);
   reset();
 }

 // click event for crystals
$('#crystal1').on("click", function() {
  userChoice = userChoice += parseInt(crystalOne);
  console.log("New userChoice= "+ userChoice);
  $('#total-score').html(userChoice);
  if (userChoice === computerChoice) {
    userRight();
    }
  else if (userChoice > computerChoice) {
    userWrong();
  }
})

$('#crystal2').on("click", function() {
  userChoice = userChoice + parseInt(crystalTwo);
  console.log("New userChoice= "+ userChoice);
  $('#total-score').html(userChoice);
  if (userChoice === computerChoice) {
    userRight();
    }
  else if (userChoice > computerChoice) {
    userWrong();
  }
})

$('#crystal3').on("click", function() {
  userChoice = userChoice + parseInt(crystalThree);
  console.log("New userChoice= "+ userChoice);
  $('#total-score').html(userChoice);
  if (userChoice === computerChoice) {
    userRight();
    }
  else if (userChoice > computerChoice) {
    userWrong();
  }
})

$('#crystal4').on("click", function() {
  userChoice = userChoice + parseInt(crystalFour);
  console.log("New userChoice= "+ userChoice);
  $('#total-score').html(userChoice);
  if (userChoice === computerChoice) {
    userRight();
    }
  else if (userChoice > computerChoice) {
    userWrong();
  }
});
});
