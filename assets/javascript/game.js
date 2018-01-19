alert("Connected");

var words = ["pizza", "whizz", "frizz", "fuzzy", "jazzy", "abuzz", "mezzo", "scuzz", "dizzy", "fizzy"];
var randomnum;
var dblzz;
var i;
var guess = 7;
var wins = 0;

randomnum = (Math.floor((Math.random() *10) +1) - 1);
console.log(randomnum);

dblzz = words[randomnum];
console.log(dblzz);

console.log(dblzz[0]);
console.log(dblzz[1]);
console.log(dblzz[2]);
console.log(dblzz[3]);
console.log(dblzz[4]);