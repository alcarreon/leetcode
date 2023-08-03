// Palindrome Number

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// parameters number
// return boolean
// examples
// pseudo code given an number convert it into a string and split it by each character, reverse the array which is the result of the split and then join the array back into a string, check to see if the string is equal to the number initially provided

const isPalindrome = (num) => {
  let reversedNum = num.toString().split("").reverse().join("");
  return num == reversedNum;
};

// console.log(isPalindrome(121)); // true

// console.log(isPalindrome(-121)); // false

// console.log(isPalindrome(10)); // false
