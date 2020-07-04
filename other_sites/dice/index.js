/* "==" --checks to see if same value
  "===" --checks if same data type!
  "&&" - and
  "||" - or
  "!" - not
*/

/*
    document.write("Hello World");
    var n = Math.random();
    n = n * 6; //multipl makes it added between 0-5;
    n = Math.floor(n) + 1;//to get dice role to actually add 6

    alert(n);
*/

/*
  note math can be condenced further
  ex: var randomNumber1 = Math.floor(Math.random() * 6) + 1;
*/

document.querySelector("h1").style.color = "red";
var n = Math.random(0, 6); //rannge to random added here.
n = n * 6;
//+1  helps keep it away from counting from zero so it can actuallly be 1-6 random numbers.
n = Math.floor(n) + 1; //Math.floor returns largest integer basically helps keep whole numbers.

//dice2
var x = Math.random(0, 6);
x *= 6;
x = Math.floor(x) + 1;

if (n == 1) {
  document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
} else if (n == 2) {
  document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
} else if (n == 3) {
  document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
} else if (n == 4) {
  document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
} else if (n == 5) {
  document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
} else if (n == 6) {
  document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
}


if (x == 1) {
  document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
} else if (x == 2) {
  document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
} else if (x == 3) {
  document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
} else if (x == 4) {
  document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
} else if (x == 5) {
  document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
} else if (x == 6) {
  document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
}

if (n > x) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (n < x) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if (n == x) {
  document.querySelector("h1").innerHTML = "Draw!";
}
