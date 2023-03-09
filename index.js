var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1

var img1 = document.querySelector(".img1");
img1.setAttribute("src",`images/dice${randomNumber1}.png`)

var img2 = document.querySelector(".img2");
img2.setAttribute("src",`images/dice${randomNumber2}.png`)


if (randomNumber1 < randomNumber2){
    var title = document.querySelector("h1");
    title.innerHTML = "Player 2 Wins!"
}

else if (randomNumber1 > randomNumber2){
    var title = document.querySelector("h1");
    title.innerHTML = "Player 1 Wins!"
}

else{
    var title = document.querySelector("h1");
    title.innerHTML = "Draw!"
}