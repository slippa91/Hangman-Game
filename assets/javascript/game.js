/*
alert("Connected");
*/


var guessNum;
var gamesWon = 0;
var directions = document.querySelector("#inxsText");
var directionsBox = document.querySelector("#inxsBox");
var hangmanPicture = document.querySelector("#image1");
var guessNumberRender = document.querySelector("#guessNumber");
var displayLetter = document.querySelector("#hidden");
var livesNumberRender = document.querySelector("#livesNumber");


// Start Function

var startGame = function(event) {

        //Starting Section
        var wordArray = ["pizza", "whizz", "frizz", "fuzzy", "jazzy", "abuzz", "mezzo", "scuzz", "dizzy", "fizzy"];
        var userDummyArray = ["1", "2", "3", "4", "5"];

        var chosenWordArray = wordArray[(Math.floor((Math.random() *10) +1) - 1)];
                //console.log(chosenWordArray);

        var letterArray = chosenWordArray.split("");
                //console.log(letterArray);// letterArray[0], letterArray[1], letterArray[2], letterArray[3], letterArray[4]);
                //console.log(typeof letterArray[0]);


  
        var letterOne = document.querySelector("#letter1").innerText = userDummyArray[0];
                //console.log(letterOne);
        var letterTwo = document.querySelector("#letter2").innerText = userDummyArray[1];
                //console.log(letterTwo);
        var letterThree = document.querySelector("#letter3").innerText = userDummyArray[2];
                //console.log(letterThree);
        var letterFour = document.querySelector("#letter4").innerText = userDummyArray[3];
                //console.log(letterFour);
        var letterFive = document.querySelector("#letter5").innerText = userDummyArray[4];
                //console.log(letterFive);                 

        
        directions.innerText = "Choose a letter using the keyboard.";
        directionsBox.style.backgroundColor = "violet";
        hangmanPicture.src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_0.jpeg"; 


        //User Guess

        var chosenLetter = function(event) {

                var userGuessLetter = String(event.key);
                        console.log("letter", userGuessLetter);
                        console.log(typeof userGuessLetter);
                        console.log("letterArray", letterArray, letterArray[0], letterArray[1], letterArray[2], letterArray[3], letterArray[4]);            
                        console.log(typeof letterArray[0]);

                        var compareLetter = function() {

                                for (var i = 0; i < letterArray.length; i++) {
                                       if (userGuessLetter === letterArray[i]) {
                                         userDummyArray[i] = userGuessLetter;
                                         userDummyArray
                                         console.log(userDummyArray);
                                         
                                         //letterArray[i] = displayLetter.style.display = "block";
                                         
                                          directions.innerText = "The letter " + userGuessLetter + " matches!";  

                                       } else {
                                               alert(false);
                                       }
                                         
                                



                        


                     

                                } //compareLetter "for" loop closing bracket

                        } //compareLetter closing bracket             
                        compareLetter();

        } //chosenLetter closing bracket
        
        document.removeEventListener("keyup", startGame);
        document.addEventListener("keyup", chosenLetter);
        


} //startGame Closing Bracket

document.addEventListener("keyup", startGame); 



/*
var compareArrays = function() {

        if (chosenWordArray === userDummyArray.join("")) {
                        gamesWon++;
                        livesNumberRender.innerText = gamesWon;
                        directions.innerText = "You win!! Hit 'Enter' if you would like to play again. "
                        directionsBox.style.backgroundColor = "yellow";

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
                
                
                
                
}//compareArray closing bracket
*/