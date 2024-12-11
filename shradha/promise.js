h1 = document.querySelector("h1");

function changeColour(colour, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = colour;
      resolve("colour change");
    }, delay);
  });
}

changeColour("red", 1000).then(() => {
  changeColour("blue", 1000).then(() => {
    changeColour("Yellow", 1000);
  });
});
