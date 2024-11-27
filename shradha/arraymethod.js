// A)***********FOREACH***********
//1
//Write a function that takes an array of numbers and uses forEach to print each number doubled.

// function doubledNum(array) {
//   array.forEach(function (num) {
//     console.log(num * 2);
//   });
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// doubledNum(arr);

//2
//Given an array of names, use forEach to print each name with a greeting.

// function greeting(array) {
//   array.forEach(function (names) {
//     console.log("hello" + names);
//   });
// }

// let names = ["Amit", "Lalit", "Sujit"];
// greeting(names);

//3
//Create an array of objects representing products with properties like name and price. Use forEach to print the name and price of each product.

// let arr = [
//   {
//     name: "Pen",
//     price: 10,
//   },
//   {
//     name: "Paper",
//     price: 20,
//   },
//   {
//     name: "scissor",
//     price: 30,
//   },
// ];

// arr.forEach(function (ele) {
//   console.log(`product name is ${ele.name} and price is ${ele.price}`);
// });

//4
//Implement a function that takes an array of strings and uses forEach to log the length of each string.

// arr = ["Lalit", "sujit", "Amit", "prasadika"];

// arr.forEach(function (ele) {
//   console.log(`the ${ele} length is ${ele.length}`);
// });

//B)***********MAP***********

//1
//Write a function that takes an array of numbers and returns a new array where each number is squared using map.

// function squareNum(arr) {
//   let sqArr = arr.map((ele) => ele * ele);
//   console.log(sqArr);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// squareNum(arr);

//2
//Given an array of objects representing students with properties name and marks, use map to create a new array that contains only the students' names.

// let Array = [
//   {
//     name: "Lalit",
//     age: 26,
//   },
//   {
//     name: "Amit",
//     age: 27,
//   },
//   {
//     name: "Sujit",
//     age: 28,
//   },
// ];

// let names = Array.map(function (ele) { method 1
//   return ele.name;
// });

// let names = Array.map((ele) => { method 2
//   return ele.name;
// });

// console.log(names);

//3
//You have an array of numbers. Use map to convert each number to a string.

// let Array = [1, 2, 3, 4, 5, 6];

// let strArray = Array.map((ele) => {
//   return ele.toString();
// });
// console.log(Array);
// console.log(strArray);

//4
//Write a function that takes an array of prices and applies a discount of 10% to each price using map. Return the new array of discounted prices.

// let Array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let discountArray = Array.map((ele) => {
//   return (ele = ele - 0.1 * ele);
// });
// console.log(Array);
// console.log(discountArray);

//***********FILTER***********:

//1
//Write a function that takes an array of numbers and uses filter to return a new array containing only the even numbers.

// let Array = [1, 11, 111, 1111, 2, 22, 222, 2222, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenArray = Array.filter((ele) => {
//   return ele % 2 == 0;
// });
// console.log(Array);
// console.log(evenArray);

//2
//Given an array of people with properties name and age, use filter to return a new array with only people aged 18 or older.

// let Array = [
//   {
//     name: "lalit",
//     age: 25,
//   },
//   {
//     name: "laalit",
//     age: 26,
//   },
//   {
//     name: "lit",
//     age: 22,
//   },
//   {
//     name: "l0lit",
//     age: 30,
//   },
// ];

// let FilterdArr = Array.filter((ele) => ele.age > 25).map((ele) => ele.name);

// console.log(Array);
// console.log(FilterdArr);

//3
//Implement a function that takes an array of words and uses filter to return only the words that have more than 5 letters.

// let Array = ["Lalit", "Amit", "Sujit", "Manojkumar", "Rajendra", "Sanjay"];

// let FilterdArr = Array.filter((ele) => ele.length > 5);
// console.log(Array);
// console.log(FilterdArr);

//***********COMBINE***********

//1
//Write a function that takes an array of numbers and uses map and filter together to return a new array of the squares of only the even numbers.

// let Array = [1, 11, 111, 2, 3, 4, 6, 8, 7];

// let FilterdArr = Array.filter((ele) => ele % 2 == 0).map((ele) => ele * ele);

// console.log(Array);
// console.log(FilterdArr);

//REDUCE
//1
// function sum(array) {
//   const total = array.reduce((total, curr_val) => {
//     console.log(total + curr_val); // Logs each step
//     return total + curr_val; // Returns the updated total for the next iteration
//   }, 0); // Initial value of total is 0

//   return total; // Return the final sum
// }

// let numbersArray = [1, 2, 3, 4, 5];
// const result = sum(numbersArray);
// console.log("Final Sum:", result); // Output: Final Sum: 15

//2.
// function prod(array) {
//   const total = array.reduce((total, curr_val) => {
//     console.log(total * curr_val); // Logs each step
//     return total * curr_val; // Returns the updated total for the next iteration
//   }, 1); // Initial value of total is 0

//   return total; // Return the final sum
// }

// let numbersArray = [1, 2, 3, 4, 5];
// const result = prod(numbersArray);
// console.log("Final mult:", result); // Output: Final Sum: 15

//3
// function concatin(array) {
//   const finalArray = array.reduce((finalArray, curr) => {
//     return finalArray + curr;
//   }, "");
//   return finalArray;
// }

// let names = ["LALIT", "MANOJKUMAR", "GANDHI"];
// result = concatin(names);
// console.log(result);

//4
// function maxNum(array) {
//   const max = array.reduce((max, ele) => {
//     if (max > ele) {
//       return max;
//     } else {
//       return ele;
//     }
//   }, 0);
//   return max;
// }

// let num = [1, 2, 3, 4, 55, 6, 7];
// let res = maxNum(num);
// console.log(res);

//5
// function average(array) {
//   const sum = array.reduce((total, curr) => total + curr, 0); // Sum of all numbers
//   return sum / array.length; // Divide the sum by the number of elements for the average
// }

// // Example usage:
// let numbersArray = [1, 2, 3, 4, 5];
// const avg = average(numbersArray);
// console.log(avg); // Output: 3

let array = [
  {
    name: "LALIT",
    age: 20,
  },
  {
    name: "LALIT",
    age: 30,
  },
  {
    name: "LALIT",
    age: 40,
  },
];

const sum = array.reduce((sum, people) => {
  return (sum = sum + people.age);
}, 0);

console.log(sum);
