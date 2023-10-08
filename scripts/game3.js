const result = document.querySelector("#result");
document.querySelectorAll("#opts a").forEach((a) =>
  a.addEventListener("click", (e) => {
    computerChoice(e);
  })
);
document.getElementById("coin").innerHTML = `
<div style="width:300px;height:auto;padding:20px;border:4px solid white;border-radius:7px">
<img src="../src/images/coin.png" width="100px" height="100px">${localStorage.getItem("Coin")}  Coins</div>

`
var msg
var popup= document.getElementById("popup");
function computerChoice(e) {
  let choices = ["Rock", "Paper", "Scissors"];

  result.innerHTML = choices[Math.floor(Math.random() * choices.length)];
  

  if (e.target.innerText.trim() == result.innerHTML) {
    msg = "Draw.Try Again"
    setTimeout(() => alert(msg), 100);
  }

  if (
    (e.target.innerText.trim() == "Rock" && result.innerHTML == "Scissors") ||
    (e.target.innerText.trim() == "Paper" && result.innerHTML == "Rock") ||
    (e.target.innerText.trim() == "Scissors" && result.innerHTML == "Paper")
  ) {
    msg = "You win ,Level 4"
    localStorage.setItem("Coin",60);
    location.href="../image puzzle/image-puzzle/index.html";
    setTimeout(() => alert(msg), 100);
  }

  if (
    (e.target.innerText.trim() == "Rock" && result.innerHTML == "Paper") ||
    (e.target.innerText.trim() == "Paper" && result.innerHTML == "Scissors") ||
    (e.target.innerText.trim() == "Scissors" && result.innerHTML == "Rock")
  ) {
    msg = "Computer wins"
    setTimeout(() => alert(msg), 100);
  }
}



