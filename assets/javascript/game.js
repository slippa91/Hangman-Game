/*
alert("Connected");
*/

var wordArray = ["pizza", "whizz", "frizz", "fuzzy", "jazzy", "abuzz", "mezzo", "scuzz", "dizzy", "fizzy"];
var pickedLettersArray = ["a", "b", "c", "d", "e"];


var letterArray;
var guessNum;
var gamesWon = 0;
var directions = document.querySelector("#inxsText");
var directionsBox = document.querySelector("#inxsBox");
var hangmanPicture = document.querySelector("#image1");
var guessNumberRender = document.querySelector("#guessNumber");
var displayLetter = document.querySelector("#hidden");
var livesNumberRender = document.querySelector("#livesNumber");

// Start Function

function startGame(event) {

        var chosenWordArray = wordArray[(Math.floor((Math.random() *10) +1) - 1)];
            console.log(chosenWordArray);

        letterArray = chosenWordArray.split("");
            console.log(letterArray, letterArray[0], letterArray[1], letterArray[2], letterArray[3], letterArray[4]);

        var letterOne = document.querySelector("#letter1").innerText = letterArray[0];
        console.log(letterOne);
        var letterTwo = document.querySelector("#letter2").innerText = letterArray[1];
        console.log(letterTwo);
        var letterThree = document.querySelector("#letter3").innerText = letterArray[2];
        console.log(letterThree);
        var letterFour = document.querySelector("#letter4").innerText = letterArray[3];
        console.log(letterFour);
        var letterFive = document.querySelector("#letter5").innerText = letterArray[4];
        console.log(letterFive);  
        
        directions.innerText = "Choose a letter using the keyboard.";
        directionsBox.style.backgroundColor = "violet";
        hangmanPicture.src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_0.jpeg";
             
}

document.addEventListener("keydown", startGame);



var chosenLetter = function(event) {

        var letter = event.key;
        return letter;
        }

document.addEventListener("onkeydown", chosenLetter);
console.log(chosenLetter);

/*

function compareLetter() {

        for (var i = 0; i <= letterArray.length; i++) {
                if (chosenLetter === letterArray[i]) {

                        pickedLettersArray[i] = chosenLetter;
                        
                        letterArray[i] = displayLetter.style.display = "block";

                        directions.innerText = "The letter '" + chosenLetter + "' matches! Choose another letter.";
                        

                } else {
                        directions.innerText = "The letter '" + chosenLetter + "' did not match. Pick another letter.";

                        guessNum--;

                        guessNumberRender.innerText = guessNum;

                        switch(guessNum) {

                                case 7:
                                        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_0.jpeg";
                                        break;
                                case 6:
                                        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_1.jpeg";
                                        break
                                case 5:
                                        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_2.jpeg";
                                        break;
                                case 4:
                                        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_3.jpeg";
                                        break;
                                case 3:
                                        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_4.jpeg";
                                        break;
                                case 2:
                                        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_5.jpeg";
                                        break;
                                case 1:
                                        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_6.jpeg";
                                        break;
                                case 0:
                                        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_7.jpeg";     
                                        break;
                                default:
                                alert("Broken Picture");
                        }
                }
                
        }
}

document.addEventListener("keydown", pickingLetter);


function compareWords(guessNum, event) {

        if (guessNum = 0) {

                        function restartGame(event, cb) {
                        directions.innerText = "No more guesses. You lose! Hit 'Enter' if you would like to play again."
                        directionsBox.style.backgroundColor = "red";
                        }

        } else if {
                 (chosenWordArray === pickedLettersArray.join("")) {
                        gamesWon++;
                        livesNumberRender.innerText = gamesWon;
                        directions.innerText = "You win!! Hit 'Enter' if you would like to play again. "
                        directionsBox.style.backgroundColor = "yellow";
                        

        } else {
                chosenLetter();
        }

}

document.addEventListener("onkeydown", startGame);
*/