// Qs1. Square and sum the array elements using the arrow function and then find the average of the array
// nums = [1, 2, 3, 4, 5, 6];

// square = nums.map((ele) => {
//   return ele * ele;
// });
// console.log(square);

// sum = nums.reduce((sum, ele) => (sum = sum + ele));
// console.log(sum);

// const avg = sum / nums.length;
// console.log(avg);

//Qs2. Create a new array using the map function whose each element is equal to the original element plus 5

// nums = [1, 2, 3, 5, 6, 7];

// res = nums.map((ele) => ele + 5);
// console.log(res);

// Qs3. Create a new array whose elements are in uppercase of words present in the original array

// arr = ["amit", "lalit"];

// newArr = arr.map((ele) => ele.toUpperCase());
// console.log(newArr);

//Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled

// function doubleAndReturnArgs(arr, ...args) {
//   const doubleArgs = args.map((ele) => ele * 2);
//   return [...arr, ...doubleArgs];
// }

// const array = [1, 2, 3];
// result = doubleAndReturnArgs(array, 2, 3, 4);
// console.log(result);

//Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object

// function mergeobjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

// let person = {
//   name: "lalit",
//   age: 25,
// };

// let bike = {
//   yamaha: "cnx",
//   royal_inf: "bullet",
// };

// result = mergeobjects(person, bike);
// console.log(result);
