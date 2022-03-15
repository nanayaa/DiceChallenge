var randomNumber1 = Math.floor(Math.random() * 6) + 1; //generating random number 1 -6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
console.log(randomNumber2);

var randomImageSource = "images/dice"+ randomNumber1 + ".png"; //creating image source dice1.png - dice6.png
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource); //changing the src attribute of the image

var randomImageSource2 = "images/dice"+ randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML   = "🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML  = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
