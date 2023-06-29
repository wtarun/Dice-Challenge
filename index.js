/******************** FIRST DICE *******************************/

//Create a random number between 1-6 for the first dice
var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1) + 1;

//Assigning a random number to the 1st image
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");


/******************** SECOND DICE *******************************/

//Create a random number between 1-6 for the second dice
var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2) + 1;

//Assigning a random number to the 2nd image
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


/******************** CODE FOR DECIDING THE WINNER **************************/
if(randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}

else if(randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

else if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
