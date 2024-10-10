// Global context
console.log("Global context (this):", this);
// Output: In browsers, 'this' refers to the global window object.

// 1. Inside a normal function
function normalFunction() {
  console.log("Inside normalFunction (this):", this);
  // Output (non-strict mode): Global object (window in browsers)
  // Output (strict mode): undefined
}

normalFunction();

// 2. Inside an object method
const myObject = {
  name: "Lalit",
  showThis: function () {
    console.log("Inside object method (this):", this);
    // Output: 'this' refers to the object 'myObject' itself.

    setTimeout(function () {
      console.log("Inside setTimeout (this):", this);
      // Output: 'this' refers to the global object (window in browsers) because 'setTimeout' runs in the global context.
    }, 1000);

    setTimeout(() => {
      console.log("Inside arrow function in setTimeout (this):", this);
      // Output: 'this' refers to 'myObject' because arrow functions don't have their own 'this'; they inherit it from their enclosing context.
    }, 1000);
  },
};

myObject.showThis();

// 3. Inside setInterval
function intervalFunction() {
  console.log("Inside setInterval (this):", this);
  // Output: In a regular function, 'this' refers to the global object (window in browsers).
}

setInterval(intervalFunction, 2000); // Runs every 2 seconds

setInterval(() => {
  console.log("Inside arrow function in setInterval (this):", this);
  // Output: Arrow function inherits 'this' from its parent context, so here 'this' refers to the global object.
}, 2000);
