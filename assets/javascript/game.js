/*
alert("Connected");
var letterguess = event.key
*/



var wordArray = ["pizza", "whizz", "frizz", "fuzzy", "jazzy", "abuzz", "mezzo", "scuzz", "dizzy", "fizzy"];

// Start Function

var startGame = function(event) {
        var randomNum = (Math.floor((Math.random() *10) +1) - 1);
            console.log(randomNum);

        var chosenWordArray = wordArray[randomNum];
            console.log(chosenWordArray);

        var letterArray = chosenWordArray.split("");
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

        var startDirections = document.querySelector("#inxsText").innerText = "Choose a letter using the keyboard.";

}

document.addEventListener("keydown", startGame);



//Changing Hangman

var guessNum;

var changingHangman = function(guessNum) {

    if (guessNum == 7) {
        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_0.jpeg";

}   else if (guessNum == 6) {
        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_1.jpeg";

}   else if (guessNum == 5) {
        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_2.jpeg";

}   else if (guessNum == 4) {
        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_3.jpeg";

}   else if (guessNum == 3) {
        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_4.jpeg";

}   else if (guessNum == 2) {
        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_5.jpeg";

}   else if (guessNum == 1) {
        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_6.jpeg";

}   else if (guessNum == 0) {
        document.querySelector("#image1").src = "file:///Users/sfl/Desktop/WorkingFolder/week02/02-Homework/Hangman-Game/assets/images/Hangman_7.jpeg";     

}   else  {

        alert("Broken Picture");
    }

}

changingHangman();

