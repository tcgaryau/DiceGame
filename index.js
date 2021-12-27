let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");
let h1Dice = document.querySelector(".container h1");
let clickMe = document.querySelector("header a");

dice1.setAttribute("src", `./images/dice${randomNumber1}.png`);
dice2.setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  h1Dice.innerHTML = `<i class="redFlag fas fa-flag"></i> Player 1 Wins!`;
} else if (randomNumber1 === randomNumber2) {
  h1Dice.innerHTML = "Draw!";
} else {
  h1Dice.innerHTML = `Player 2 Wins! <i class="redFlag fas fa-flag"></i>`;
}

clickMe.addEventListener("click", e => {
  e.preventDefault();
  location.reload();
})
