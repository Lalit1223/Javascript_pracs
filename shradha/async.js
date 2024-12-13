let h1 = document.querySelector("h1");
function changeColour(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve(`colour changed to ${color}`);
    }, delay);
  });
}

async function Demo() {
  //   changeColour("Red", 1000).then(console.log);
  //   changeColour("blue", 1000).then(console.log);

  await changeColour("Red", 1000).then(console.log);
  await changeColour("blue", 1000).then(console.log);
}

Demo();
