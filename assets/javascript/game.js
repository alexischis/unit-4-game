$(document).ready(function(){

// values for crystals
var crystalValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

// set up the numeric variables for the game
var wins = 0;
var losses = 0;
var UserChoice=0;

// computer can choose any number from 19-120 at random
var computerGuess =Math.floor(Math.random() *101+19);

var crystalOne = crystalValues[Math.floor(Math.random()* crystalValues.length)];
var crystalTwo = crystalValues[Math.floor(Math.random()* crystalValues.length)];
var crystalThree = crystalValues[Math.floor(Math.random()* crystalValues.length)];
var crystalFour = crystalValues[Math.floor(Math.random()* crystalValues.length)];

var userChoice = [];



// documenting what letter the computer chooses in the console log
console.log(numberRange);
console.log(userChoice);
console.log(crystalOne);
console.log(crystalTwo);
console.log(crystalThree);
console.log(crystalFour);

var sum = 0;
function sum
for(var i=0; i<userChoice.length;i++){
  sum += parseInt(userChoice[i]);
}
  console.log("total score is" + "" + sum);

// click event for crystals
$('#crystal1').on("click", function() {
  crystalChoice = userChoice.push(crystalOne);
  $('#total-score').html(+userChoice);
  });

$('#crystal2').on("click", function() {
  crystalChoice = userChoice.push(crystalTwo);
  $('#total-score').html(+userChoice);
  });

$('#crystal3').on("click", function() {
  crystalChoice = userChoice.push(crystalThree);
  $('#total-score').html(+userChoice);
  });
      
$('#crystal4').on("click", function() {
  crystalChoice = userChoice.push(crystalFour);
  $('#total-score').html(+userChoice);
  });

 



  // $('#total-score').html(this);

// reset function to allow the computer to choose a different letter when the time comes
function reset() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log('reset', computerGuess);
    crystalOne = crystalValues[Math.floor(Math.random()* crystalValues.length)];
    console.log('reset', crystalOne);
    crystalTwo = crystalValues[Math.floor(Math.random()* crystalValues.length)];
    console.log('reset', crystalTwo);
    crystalThree = crystalValues[Math.floor(Math.random()* crystalValues.length)];
    console.log('reset', crystalThree);
    crystalFour = crystalValues[Math.floor(Math.random()* crystalValues.length)];
    console.log('reset', crystalFour);
}

// // user can select a letter using their keyboard, the game starts when a key is pushed
// document.onkeyup = function (event) {
//     var userGuess = event.key;
//     var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// // setting up possible key choices for the user, the game will not accept a number
//     if (options.indexOf(userGuess) > -1) {

// // if the user selects the same letter as the computer then the user earns a point
// // guesses and choices are reset
//         if (userGuess === computerGuess) {
//             wins++;
//             numGuesses = 9;
//             guessChoices = [];
            
//         }

// // if the user choices a letter that is not the same as the computer then the number of guesses goes down
// // and the letter chosen will appear on the screen
//         if (userGuess != computerGuess) {
//             numGuesses--;
//             guessChoices.push(userGuess);
//         }

// // if the number of guesses left goes down to zero then the users losses increase by 1
// //  the guess and choices are reset
//         if (numGuesses === 0) {
//             numGuesses = 9;
//             losses++;
//             guessChoices = [];
//         }

// // when the guesses are reset to nine the computers choice is also reset
//         if (numGuesses === 9) {
//             reset();
//         }

// // linking in the html text and adding the variables
//         var html =
//             "<h1> Psychic Game </h1>" +
//             "<p>Guess what letter I'm thinking of!</p>" +
//             "<p>Press any letter to see if you're right.</p>" +
//             "<p>Wins: " + wins + "</p>" +
//             "<p>Losses: " + losses + "</p>" +
//             "<p>Guesses Left: " + numGuesses + "</p>" +
//             "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

//         document.querySelector("#game").innerHTML = html;

//     }
// };
