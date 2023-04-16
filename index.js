var randomNumber1 = Math.floor(Math.random() * 6) +1;
var imageSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src",imageSource1);

// Setting for second dice

var randomNumber2 = Math.floor(Math.random() * 6) +1;
var imageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src",imageSource2);

// Declaring Winner

if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Winner Player1";
}
if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Win🚩";
}
