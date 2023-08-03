// 1480. Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// parameters array
// return array
// examples
// pseudo code given an array iterate through it adding the first elemnt to the array, subsequent elements take the slice at the current index plus one and reduce it to get the running total of the array for each element

const runningSum = (arr) => {
  return arr.map((x, y) =>
    y == 0 ? x : arr.slice(0, y + 1).reduce((x, y) => x + y, 0)
  );
};

console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]
// console.log(runningSum([1, 1, 1, 1, 1])); // [1,2,3,4,5]
// console.log(runningSum([3, 1, 2, 10, 1])); // [3,4,6,16,17]
