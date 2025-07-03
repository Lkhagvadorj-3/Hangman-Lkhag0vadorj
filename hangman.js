const word = document.getElementById("word");
let onoo = document.getElementById("onoo");
const img = document.getElementById("img");
let win = document.getElementById("win");
let lose = document.getElementById("lose");
const resbut = document.getElementById("res");
const rest = document.getElementById("rest");
const ans = document.getElementById("ans");

let fail = 0;
const words = [
  "SIGMA BOY",
  "NAADAM",
  "MONGOLZ",
  "MONGOLIA",
  "PINECONE",
  "SPIDER MAN ",
  "CHINGIS KHAAN",
  "LKHAGVADORJ",
  "JAVASCRIPT",
  "RAINY ULAANBAATAR",
  "SUMMERTIME CODING",
  "SQUID GAME",
  "KHUUSHUUR",
];
const letters = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
const savedLetter = [];

const randomindex = Math.floor(Math.random() * words.length);
const randomWord = words[randomindex];
console.log(randomWord);
function showRandomWord() {
  let ug = "";
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === " " || savedLetter.includes(randomWord[i])) {
      ug = ug + randomWord[i];
    } else {
      ug = ug + "_";
    }
  }
  word.innerText = ug;
}
function start() {
  const buttons = document.getElementById("buttons");

  for (let i = 0; i < letters.length; i++) {
    const letter = document.createElement("button");
    letter.innerHTML = letters[i];
    const char = letters[i];
    letter.classList.add("but");
    letter.addEventListener("click", function () {
      letter.disabled = true;
      savedLetter.push(char);
      if (randomWord.includes(char) === false) {
        fail++;
        onoo.innerHTML = fail;
        img.src = `./images/${fail}.jpg`;
      }
      showRandomWord();
      result();
      hojih();
    });
    buttons.appendChild(letter);
  }
}

function result() {
  let hoj;
  if (fail === 7 && lose.style.visibility === "hidden") {
    lose.style.visibility = "visible";
  }
  ans.innerText = randomWord;
}
function hojih() {
  for (let i = 0; i < randomWord.length; i++) {
    sum = randomWord[i];
    if (sum === " ") {
      continue;
    } else if (!savedLetter.includes(sum)) {
      return;
    }
  }
  win.style.visibility = "visible";
}
function dahih() {
  window.location.reload();
}
rest.addEventListener("click", function () {
  dahih();
});
function restartGame() {
  window.location.reload();
}
resbut.addEventListener("click", function () {
  restartGame();
});
showRandomWord();
window.onload = start();
