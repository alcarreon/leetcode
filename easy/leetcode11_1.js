// Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

// parameters array
// return number
// examples
// pseudo code create two empty variables one to hold the largest count of ones, and another to represent the current count of ones, iterate through the array and check to see if the current element is equal to 1 if it is add one to current and also check to see if current is larger than the counter variable if it is add one to the counter variable, otherwise reset the current variable to 0

const findMaxConsecutiveOnes = (arr) => {
  let counter = 0;
  let current = 0;

  arr.map((x) => {
    if (x === 1) {
      current++;
      if (current > counter) {
        counter++;
      }
    } else {
      current = 0;
    }
  });

  return counter;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
