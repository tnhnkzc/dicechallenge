// function randomNumber1() {
//   var n = Math.random();
//   var n = randomNumber1 * 6;
//   randomNumber1 = Math.floor(n) + 1;
// }
function randomImg() {
  var myImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
  ];
  var randomNum = Math.floor(Math.random() * myImages.length);
  return (document.getElementById("dice1").src = myImages[randomNum]);
}
function randomImg2() {
  var myImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
  ];
  var randomNum2 = Math.floor(Math.random() * myImages.length);
  return (document.getElementById("dice2").src = myImages[randomNum2]);
}
function winner() {
  var a = randomImg();
  var b = randomImg2();
  if (a > b) {
    return (document.querySelector("h3").innerHTML = "Player 1 won!");
  } else if (a < b) {
    return (document.querySelector("h3").innerHTML = "Player 2 won!");
  } else if ((a = b)) {
    return (document.querySelector("h3").innerHTML = "Draw!");
  }
}

// document.querySelector("#dice1").setAttribute("src", myImages[randomNum]);
