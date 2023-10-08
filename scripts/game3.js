const result = document.querySelector("#result");
document.querySelectorAll("#opts a").forEach((a) =>
  a.addEventListener("click", (e) => {
    computerChoice(e);
  })
);
var msg
function computerChoice(e) {
  let choices = ["Rock", "Paper", "Scissors"];

  result.innerHTML = choices[Math.floor(Math.random() * choices.length)];

  if (e.target.innerText.trim() == result.innerHTML) {
    msg="Draw"
    setTimeout(() => alert(msg), 100);
  }

  if (
    (e.target.innerText.trim() == "Rock" && result.innerHTML == "Scissors") ||
    (e.target.innerText.trim() == "Paper" && result.innerHTML == "Rock") ||
    (e.target.innerText.trim() == "Scissors" && result.innerHTML == "Paper")
  ) {
    msg="You win"
    setTimeout(() => alert(msg), 100);
  }

  if (
    (e.target.innerText.trim() == "Rock" && result.innerHTML == "Paper") ||
    (e.target.innerText.trim() == "Paper" && result.innerHTML == "Scissors") ||
    (e.target.innerText.trim() == "Scissors" && result.innerHTML == "Rock")
  ) {
    msg="Computer wins"
    setTimeout(() => alert(msg), 100);
  }
}






