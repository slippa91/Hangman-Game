/*
alert("Connected");
*/
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
        var guessedArray = ["a", "b", "c", "d", "e"];
        var guessNum = 7;

        var chosenWordArray = wordArray[(Math.floor((Math.random() *10) +1) - 1)];
                //console.log(chosenWordArray);

        var letterArray = chosenWordArray.split("");
                //console.log(letterArray, letterArray[0]);

        
        document.querySelector("#letter1").innerText = letterArray[0];
                //console.log(letterOne);
        document.querySelector("#letter2").innerText = letterArray[1];
                //console.log(letterTwo);
        document.querySelector("#letter3").innerText = letterArray[2];
                //console.log(letterThree);
        document.querySelector("#letter4").innerText = letterArray[3];
                //console.log(letterFour);
        document.querySelector("#letter5").innerText = letterArray[4];
                //console.log(letterFive);   
        

        

        directions.innerText = "Choose a letter using the keyboard.";
        directionsBox.style.backgroundColor = "violet";
        hangmanPicture.src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_0.jpeg"; 


        //User Guess

        var chosenLetter = function(event) {

                var userGuessLetter = String(event.key);
                        console.log("letter", userGuessLetter);
                        console.log("letterArray", letterArray);            
                        console.log(guessedArray);

                        var compareLetter = function() {
                                for (var i = 0; i < letterArray.length; i++) {
                                       if (userGuessLetter === letterArray[i]) {                                        
                                        guessedArray[i] = userGuessLetter;
                                        console.log(guessedArray);
                                        document.getElementById("#seeLetter").classList.remove("hide");
                                        directions.innerText = "The letter " + userGuessLetter + " matches! Keep guessing.";  

                                       } else {}
                                         
                                } //compareLetter "for" loop closing bracket

                        } //compareLetter closing bracket             
                        compareLetter();

                        var checkLife = letterArray.indexOf(userGuessLetter);
                                if(checkLife < 0) {
                                        guessNum--;
                                          console.log(guessNum);
                                        guessNumberRender.innerText = guessNum;
                                        directions.innerText = "The letter " + userGuessLetter + " did not match. Keep guessing.";
                                        switch(guessNum) {

                                                case 7:
                                                        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_0.jpeg";
                                                        break;
                                                case 6:
                                                        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_1.jpeg";
                                                        break;
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
                                                        directions.innerText = "You Lose!! Click Enter to play again";
                                                        directionsBox.style.backgroundColor = "red"; 
                                                        //    var restartHangman = function(event){
                                                        //            if (event.keyCode === 13){
                                                        //                       startGame();
                                                        //            } else { 
                                                        //              break; 
                                                        //            }                       
                                                        //    }
                                                        //     document.removeEventListener("keyup", chosenLetter);
                                                        //     document.removeEventListener("keyup", startGame);
                                                        //     document.addEventListener("keyup", restartHangman);

                                                        break;
                                                default:
                                                alert("Broken Picture");
                                                } 
                                        
                                        } else {}


                        var compareArrays = function() {

                                if (chosenWordArray === guessedArray.join("")) {
                                                gamesWon++;
                                                livesNumberRender.innerText = gamesWon;
                                                directions.innerText = "You win!! Hit 'Enter' if you would like to play again.";
                                                directionsBox.style.backgroundColor = "yellow";
                                
                                                } else {}
                        }//compareArrays closing bracket
                        compareArrays();



        } //chosenLetter closing bracket
        
        document.removeEventListener("keyup", startGame);
        document.addEventListener("keyup", chosenLetter);
        


} //startGame Closing Bracket

document.addEventListener("keyup", startGame); 
