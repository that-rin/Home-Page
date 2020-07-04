
/*
  .addEventListener("", "") -multipli iinputs needed.
      --reasons to not add function() parenthesis in because its a strait up meathod call. When script is activated it runs by itself vesus waiting for player input.

      -looks for first button and adds alert listed in function.
      =makes something wait for an action or function.

  .querySelectorAll("html item")[# in array basically how many of each there are].
  var x = -1;
while (x <= 6) {
  x++;
  document.querySelectorAll("button")[x].addEventListener("click", handleClick);
}

function handleClick() {
  alert("I got clicked!");
}

*/

//.length counts all elements with .drum the class
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
  //this list all data fron on click
  this.style.color = "white";
}

//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();

/*
  unrelated code here
    -house keeper
      -giving variables objects basically properties in curly braces

        var houseKeeper1 = {
        yearsOfExperience: 12,
        name: "Jane",
        cleaningRepertoire: ["bathroom", "bedrooms", "lobby"]
      };
*/

//constructore version of housekeeper1
function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeeper(13, "Jane", ["Bathroom", "Lobby", "Bedrooms"]);

console.log(houseKeeper1);
/*
  --constructore Function - names all Capital!S
*/
function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}
//initialize objects from constructore
var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
