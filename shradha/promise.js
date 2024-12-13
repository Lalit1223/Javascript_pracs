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

//basic example

function fetchdata(data, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data fetched!");
    }, delay);
  });
}

// fetchdata("lalit", 20000).then(console.log).catch(console.error);

//chaining example (one promise depends on another)

function stepOne(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("step 1 resolved");
    }, delay);
  });
}

function stepTwo(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("step 2 resolved");
    }, delay);
  });
}

function stepthree(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("step 3 resolved");
    }, delay);
  });
}

stepOne(1000).then((res) => {
  console.log(res);
  stepTwo(1000).then((res) => {
    console.log(res);
    stepthree(1000).then((res) => {
      console.log(res);
    });
  });
});

//Error handling

const getData = (shouldFail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("Error fetching data!");
      } else {
        resolve("Data fetched successfully!");
      }
    }, 1000);
  });
};

getData(true).then(console.log).catch(console.error);

//Promise .ALL

const promise1 = Promise.resolve("Data from API 1");
const promise2 = Promise.resolve("Data from API 2");
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Data from API 3 (after delay)"), 2000)
);

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log("All data:", results))
  .catch(console.error);

//race

const slowPromise = new Promise((resolve) =>
  setTimeout(() => resolve("Slow response"), 3000)
);
const fastPromise = new Promise((resolve) =>
  setTimeout(() => resolve("Fast response"), 1000)
);

Promise.race([slowPromise, fastPromise]).then(console.log).catch(console.error);

function intenetSpeed() {
  return new Promise((resolve, reject) => {
    var speed = Math.floor(Math.random() * 10) + 1;
    console.log(`The internet Speed IS ${speed}`);

    if (speed > 4) {
      resolve("good internet connection!!");
    } else {
      reject("Weak connection");
    }
  });
}

intenetSpeed().then(console.log).catch(console.error);
