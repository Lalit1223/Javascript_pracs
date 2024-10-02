var todo = function () {
  let todo1 = [];

  function handleRequest() {
    let req = prompt("Please enter your request (add, list, quit):");

    if (req === "quit") {
      document.getElementById("result").innerHTML = "Game quitted!";
      return; // End the function to stop further prompts
    } else if (req === "list") {
      let tasks = "";
      for (let i = 0; i < todo1.length; i++) {
        tasks += `${i + 1}: ${todo1[i]}<br>`;
      }
      document.getElementById("result").innerHTML =
        tasks || "No tasks available!";
    } else if (req === "add") {
      let task = prompt("Enter the task you want to add:");
      if (task) {
        todo1.push(task);
        document.getElementById("result").innerHTML = `Task "${task}" added!`;
      } else {
        document.getElementById("result").innerHTML = "No task was added!";
      }
    } else {
      document.getElementById("result").innerHTML =
        "Invalid command! Please use 'add', 'list', or 'quit'.";
    }

    // Re-trigger the function for continuous prompts until the user quits
    handleRequest();
  }

  handleRequest(); // Start the first request
};
