let userSeq = [];
let gameSqe = [];
let scores = [];

let started = false;
let level = 0;

h4 = document.querySelector("h4");
h3 = document.querySelector("h3");
let btns = ["red", "yellow", "black", "white"];

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("user");
  setTimeout(function () {
    btn.classList.remove("user");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h4.innerText = `Level ${level}`;

  let randomIndex = Math.floor(Math.random() * 3);
  let randColor = btns[randomIndex];
  let randBtn = document.querySelector(`.${randColor}`);

  gameFlash(randBtn);
  //   console.log(randomIndex);
  //   console.log(randColor);
  //   console.log(randBtn);

  gameSqe.push(randColor);
  console.log(gameSqe);
}

function checkAns(index) {
  //   console.log(level);

  //   let index = level - 1;
  if (userSeq[index] === gameSqe[index]) {
    if (userSeq.length == gameSqe.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    scores.push(level);
    let score = Math.max(...scores);
    h3.innerText = `High score is ${score}`;

    h4.innerHTML = `OOOPS!!! failed, your score was <b>${level}<b> <br> press any key to restart `;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);

    reset();
  }
}
function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  //   console.log(userColor);
  userSeq.push(userColor);
  //   console.log(userSeq);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  userSeq = [];
  gameSqe = [];
  level = 0;
  started = false;
}
