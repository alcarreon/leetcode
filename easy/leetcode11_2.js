// Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// parameters array
// return array
// examples
// pseudo code given an array iterate through it backwards with a for loop, add one to each element and check to see if the current element is 9 if it is change the current element to 0 and continue returning the element if it is not 9, use unshift to extend the array in order to account for turning 9 into [1,0]

const plusOne = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i]++;
    if (arr[i] > 9) {
      arr[i] = 0;
    } else {
      return arr;
    }
  }
  arr.unshift(1);
  return arr;
};

// console.log(plusOne([1, 2, 3])); // [1,2,4]
// console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
// console.log(plusOne([9])); // [1,0]
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
// console.log(plusOne([9, 9])); // [1,0,0]
