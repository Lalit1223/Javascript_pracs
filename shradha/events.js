let box = document.querySelector("#box");

box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "red";
});

let key = document.querySelector("#key");

key.addEventListener("keypress", function () {
  console.log("key pressed");
});

window.addEventListener("scroll", function () {
  console.log("you scrolled!");
});

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  btn.style.backgroundColor = "red";
});
