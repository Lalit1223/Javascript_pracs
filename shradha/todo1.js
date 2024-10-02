var todo1 = function () {
  let todo = [];

  function handleRequest() {
    let req = prompt(
      "Enter the request you want to perform (add, list, quit):"
    );

    if (req === "add") {
      let task1 = prompt("Enter task");

      if (task1) {
        todo.push(task1);
        document.getElementById("result").innerHTML = `Task "${task1}" added!`;
      } else {
        document.getElementById("result").innerHTML = "No task added!";
      }
    } else if (req === "list") {
      let task = "";
      for (let i = 0; i < todo.length; i++) {
        task += `${i + 1} : ${todo[i]}<br>`;
      }
      document.getElementById("result").innerHTML =
        task || "No task available!";
    } else if (req === "quit") {
      document.getElementById("result").innerHTML = "You quit!";
      return; // Stop recursion after quitting
    } else {
      document.getElementById("result").innerHTML =
        "Invalid command! Please enter 'add', 'list', or 'quit'.";
    }
    setTimeout(handleRequest, 100);
  }
  handleRequest(); // Start the prompting process
};
