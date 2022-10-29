// Add Digits

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

// Example 2:

// Input: num = 0
// Output: 0

// parameters number
// return number
// examples
// pseudo code given a number convert it into a string and split it by each character, then check the size of the split string if the length of the split string is equal to 1 then return the number, otherwise reduce the array and recursively go through the array until its length is equal to 1

const addDigits = (num) => {
  const splitNums = num.toString().split("");
  if (splitNums.length === 1) {
    return num;
  } else {
    return addDigits(splitNums.reduce((x, y) => +x + +y, 0));
  }
};

console.log(addDigits(38));
// console.log(addDigits(0));
