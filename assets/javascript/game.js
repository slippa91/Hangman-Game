

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


        var guessNum = 7;

        guessNumberRender.innerText = guessNum;
        directions.innerText = "Press any key to begin playing.";
        directionsBox.style.backgroundColor = "salmon";        
        hangmanPicture.src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_0.jpeg"; 

        var wordArray = ["pizza", "whizz", "frizz", "fuzzy", "jazzy", "abuzz", "mezzo", "scuzz", "dizzy", "fizzy"];
        var guessedArray = ["a", "b", "c", "d", "e"];


        var chosenWordArray = wordArray[(Math.floor((Math.random() *10) +1) - 1)];
                

        var letterArray = chosenWordArray.split("");
                
    
        document.querySelector("#letter1").innerText = letterArray[0];               
        document.querySelector("#letter2").innerText = letterArray[1];               
        document.querySelector("#letter3").innerText = letterArray[2];             
        document.querySelector("#letter4").innerText = letterArray[3];               
        document.querySelector("#letter5").innerText = letterArray[4];
                  

        for (var j = 0; j < letterArray.length; j++) {
                document.querySelector("#letter" + (j + 1)).classList.add("hide");  
        }
        
        directions.innerText = "Choose a letter using the keyboard.";
        directionsBox.style.backgroundColor = "violet";
        hangmanPicture.src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_0.jpeg"; 




        //User Guess

        var chosenLetter = function(event) {

                var userGuessLetter = String(event.key);
                        //console.log("letter", userGuessLetter);
                        //console.log("letterArray", letterArray);            
                        //console.log(guessedArray);

                        var compareLetter = function() {
                                for (var i = 0; i < letterArray.length; i++) {
                                       if (userGuessLetter === letterArray[i]) {                                        
                                        guessedArray[i] = userGuessLetter;
                                        document.querySelector("#letter" + (i + 1)).classList.remove("hide");
                                        directions.innerText = "The letter  '" + userGuessLetter + "'  matches! Keep guessing.";  

                                       } else {}                                         
                                } 
                        }           
                        compareLetter();

                        var checkLife = letterArray.indexOf(userGuessLetter);
                                if(checkLife < 0) {
                                        guessNum--;
                                        guessNumberRender.innerText = guessNum;
                                        directions.innerText = "The letter   '" + userGuessLetter + "'   did not match. Keep guessing.";
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
                                                        directions.innerText = "You Lose!! Click 'Enter' to play again";
                                                        directionsBox.style.backgroundColor = "red"; 
                                                        var restartHangmanLoss = function(event){
                                                                if (event.keyCode == 13) {
                                                                          document.removeEventListener("keyup", restartHangmanLoss);
                                                                          startGame();
                                                                } else { 
                                
                                                                 alert("Please hit the 'Enter/Return' key to play again."); 
                                                                }                       
                                                       }
                                                         document.removeEventListener("keyup", chosenLetter);
                                                         document.addEventListener("keyup", restartHangmanLoss);
                                                        break;
                                                default:
                                                alert("You have no lives remaining.");
                                                } 
                                        
                                        } else {}


                        var compareArrays = function() {

                                if (chosenWordArray === guessedArray.join("")) {
                                                gamesWon++;
                                                livesNumberRender.innerText = gamesWon;
                                                directions.innerText = "You win!! Hit 'Enter' if you would like to play again.";
                                                directionsBox.style.backgroundColor = "yellow";
                                                        var restartHangmanWin = function(event){
                                                          if (event.keyCode == 13) {
                                                                  document.removeEventListener("keyup", restartHangmanWin);
                                                                  startGame();
                                                          } else { 
                        
                                                           alert("Please hit the 'Enter/Return' key to play again."); 
                                                          }                       
                                                     }
                                                 document.removeEventListener("keyup", chosenLetter);
                                                 document.addEventListener("keyup", restartHangmanWin);
                                
                                                } else {}

                        }
                        compareArrays();

        } 
        
        document.removeEventListener("keyup", startGame);
        document.addEventListener("keyup", chosenLetter);
        

} 

document.addEventListener("keyup", startGame); 
