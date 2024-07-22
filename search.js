function searchArray(array, element) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        return true; // Element found
      }
    }
    return false; // Element not found
  }
  
  function main() {
    // Get array input from the user
    const arrayInput = prompt('Enter array elements separated by spaces:');
    if (arrayInput === null) return; // If the user cancels the prompt
  
    // Convert the input string into an array
    const array = arrayInput.split(' ');
  
    // Get the element to search for from the user
    const searchElement = prompt('Enter the element to search for:');
    if (searchElement === null) return; // If the user cancels the prompt
  
    // Search the element in the array
    if (searchArray(array, searchElement)) {
      alert(`${searchElement} is present in the array.`);
    } else {
      alert(`${searchElement} is not present in the array.`);
    }
  }
  
  // Call main function directly at the end of the body
  main();
  