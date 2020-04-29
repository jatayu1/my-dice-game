var diceResult1 = Math.floor(Math.random() * 6) + 1;
var diceResult2 = Math.floor(Math.random() * 6) + 1;
// for player 1
if (diceResult1 === 1) {
  document.querySelector(".img1").setAttribute("src", "dice1.png");
}
if (diceResult1 === 2) {
  document.querySelector(".img1").setAttribute("src", "dice2.png");
}
if (diceResult1 === 3) {
  document.querySelector(".img1").setAttribute("src", "dice3.png");
}
if (diceResult1 === 4) {
  document.querySelector(".img1").setAttribute("src", "dice4.png");
}
if (diceResult1 === 5) {
  document.querySelector(".img1").setAttribute("src", "dice5.png");
}
if (diceResult1 === 6) {
  document.querySelector(".img1").setAttribute("src", "dice5.png");
}

//for player 2

if (diceResult2 === 1) {
  document.querySelector(".img2").setAttribute("src", "dice1.png");
}
if (diceResult2 === 2) {
  document.querySelector(".img2").setAttribute("src", "dice2.png");
}
if (diceResult2 === 3) {
  document.querySelector(".img2").setAttribute("src", "dice3.png");
}
if (diceResult2 === 4) {
  document.querySelector(".img2").setAttribute("src", "dice4.png");
}
if (diceResult2 === 5) {
  document.querySelector(".img2").setAttribute("src", "dice5.png");
}
if (diceResult2 === 6) {
  document.querySelector(".img2").setAttribute("src", "dice5.png");
}
// title change
if (diceResult1 > diceResult2) {
  document.querySelector("h1").innerHTML = "🚩 player 1 wins ";
}
if (diceResult1 < diceResult2) {
  document.querySelector("h1").innerHTML = "player 2 wins 🚩 ";
}
if (diceResult1 === diceResult2) {
  document.querySelector("h1").innerHTML = "draw! ";
}
