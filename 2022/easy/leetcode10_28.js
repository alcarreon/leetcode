// Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// parameters array
// return boolean
// examples
// pseudo code given an array create a variable to hold an object containing the number of times each number appears in the array, create another variable to hold the object obtained from the first variable into an array using .entries if any of the second elements are larger than two return true else return false

const containsDuplicate = (arr) => {
  const duplicateArr = arr.reduce((x, y) => {
    x[y] = (x[y] || 0) + 1;
    return x;
  }, {});
  const values = Object.entries(duplicateArr);
  return values.some((x) => x[1] >= 2);
};

console.log(containsDuplicate([1, 2, 3, 1])); // true

console.log(containsDuplicate([1, 2, 3, 4])); // false

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
