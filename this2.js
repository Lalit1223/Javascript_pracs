// Global scope
this.session = "javascript"; // 'this' refers to the global object in this case (window in browsers)

// Object 1
this.room = {
  session: "react",
  subject: function () {
    console.log(`1. Room - Normal Function (this.session): ${this.session}`);
    // Output: 'react' because 'this' refers to the 'room' object here

    console.log(`2. Room - Global session (session): ${session}`);
    // Output: 'javascript' because 'session' refers to the global 'session' variable
  },
};

// Object 2
let classroom = {
  session: "mean/mern",
  subject: function () {
    console.log(
      `3. Classroom - Normal Function (this.session): ${this.session}`
    );
    // Output: 'mean/mern' because 'this' refers to the 'classroom' object here

    console.log(`4. Classroom - Global session (session): ${session}`);
    // Output: 'javascript' because 'session' refers to the global 'session' variable
  },
};

// Object with Arrow Function
let onlineClass = {
  session: "nodejs",
  subject: () => {
    console.log(
      `5. Online Class - Arrow Function (this.session): ${this.session}`
    );
    // Output: 'javascript' because arrow functions do not have their own 'this', so they inherit it from the outer scope (global object)
  },
};

// Object with setTimeout (Regular function)
let workshop = {
  session: "angular",
  subject: function () {
    console.log(
      `6. Workshop - Before setTimeout (this.session): ${this.session}`
    );
    // Output: 'angular' because 'this' refers to the 'workshop' object

    setTimeout(function () {
      console.log(
        `7. Workshop - Inside setTimeout (this.session): ${this.session}`
      );
      // Output: 'javascript' because setTimeout is executed in the global context, so 'this' refers to the global object (window)
    }, 1000);
  },
};

// Object with setTimeout (Arrow function)
let bootcamp = {
  session: "fullstack",
  subject: function () {
    console.log(
      `8. Bootcamp - Before setTimeout (this.session): ${this.session}`
    );
    // Output: 'fullstack' because 'this' refers to the 'bootcamp' object

    setTimeout(() => {
      console.log(
        `9. Bootcamp - Inside setTimeout (this.session): ${this.session}`
      );
      // Output: 'fullstack' because arrow function inherits 'this' from the 'bootcamp' object
    }, 1000);
  },
};

// Calling methods
this.room.subject(); // Calls the method inside 'room'
classroom.subject(); // Calls the method inside 'classroom'
onlineClass.subject(); // Calls the method inside 'onlineClass' (arrow function)
workshop.subject(); // Calls the method inside 'workshop' with setTimeout
bootcamp.subject(); // Calls the method inside 'bootcamp' with setTimeout (arrow function)
