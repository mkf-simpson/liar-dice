let currentCount = 5;

const varaContainer = "#varaContainer";
const varaFont = "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json";
const varaConfig = {
  fontSize: 56,
  strokeWidth: 2,
  textAlign:"center"
}
const phrases = ["You are a Pidor"]

function res() {
  clearField();
  currentCount
    ? drawDice() 
    : showEndGame()
}

function showEndGame() {

  endGameBlock.style.display = "inherit"
  gameButtons.style.display = "none"
  dice_container.style.display = "none"

  new Vara(varaContainer, varaFont, [{...varaConfig, text: phrases[0]}]);

}

function newGame() {
  currentCount = 5;
  endGameBlock.style.display = "none"
  dice_container.style.display = "flex"
  gameButtons.style.display = "flex"

  clearVaraContainer();

  res()
}

function clearVaraContainer() {
  document.getElementById("varaContainer").innerHTML = null;
}


function clearField() {
  dice_container.querySelectorAll(".dice").forEach((e) => e.parentNode.removeChild(e));
}

function drawDice() {
  const dice = Array.from({
    length: currentCount
  }, () => Math.round(Math.random() * 5) + 1);

  dice.map((d) => 
    container
      .querySelector(`[data-number="${d}"]`)
      .cloneNode(true))
      .forEach((e) => document.querySelector("#dice_container").appendChild(e));
}

res();

reset.onclick = () => res()

remove.onclick = () => {
  currentCount -= 1;
  let el = dice_container.querySelector(".dice");
  el.parentNode.removeChild(el);
  res()
}


newGameBtn.onclick = () => {
  newGame()
}


