// Array Prototype Last

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.

// parameters none
// return integer
// examples
// pseudo code use this to access the current array then check to see if it is empty if it is return -1 otherwise return the last element by finidng the length of the array - 1 and using bracket notation

Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

const arr = [];
console.log(arr.last()); // -1

const arr1 = [1, 2];
console.log(arr1.last()); // 2
