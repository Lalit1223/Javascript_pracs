// Qs1. Write a JavaScript function that returns array elements larger than a number.

//Method 1 without using inbuilt higher order function filter

// function max_number(arr, num) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const numbers = [1, 2, 66, 4, 33, 23, 66, 34, 55, 455, 67, 9, 0, 35];
// const num = 67;

// let result = max_number(numbers, num);
// console.log(result);

//method 2 : using filter

// function max_number(arr, num) {
//   return arr.filter((e) => e >= num);
// }

// const numbers = [1, 2, 66, 4, 33, 23, 66, 34, 55, 455, 67, 9, 0, 35];
// const num = 67;

// let result = max_number(numbers, num);
// console.log(result);

// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh"

// function check_string(str) {
//   let unique_str = "";

//   for (let i = 0; i < str.length; i++) {
//     let isUnique = true;
//     for (j = 0; j < unique_str.length; j++) {
//       if (str[i] == unique_str[j]) {
//         isUnique = false;
//         break;
//       }
//     }
//     if (isUnique) {
//       unique_str = unique_str + str[i];
//     }
//   }
//   return unique_str;
// }

// const str = "abcdabcdefgggh";
// let result = check_string(str);
// console.log(result);

// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"

// function longestCountryName(countries) {
//   if (countries.length === 0) {
//     return null; // Return null if the array is empty
//   }

//   let longestCountry = countries[0];

//   for (let i = 1; i < countries.length; i++) {
//     if (countries[i].length > longestCountry.length) {
//       longestCountry = countries[i];
//     }
//   }

//   return longestCountry;
// }

// // Example usage
// const countryList = ["Australia", "Germany", "USA"];
// console.log(longestCountryName(countryList)); // Output: "United States of America"

function largCountryName(countries) {
  if (countries.length === 0) {
    return null;
  }

  let largCountry = countries[0];

  for (let i = 1; i < countries.length; i++) {
    if (countries[i] > largCountry) {
      largCountry = countries[i];
    }
  }
}
