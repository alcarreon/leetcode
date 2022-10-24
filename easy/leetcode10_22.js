// Find Pivot Index

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// Example 2:
// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

// Example 3:
// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// parameters array
// return number
// examples
// pseudo code given an array create an empty array to hold the result, iterate through the array first checking to see if the first element which has a left side of 0 is equal to the reducing the rest of the array, otherwise check to see if the slice up until the current index is equal to the rest of the array after that index, us another conditional to check to see the array is empty telling us the array doesnt equal both sides at any point, otherwise return the index where the array is equal on both sides

const pivotIndex = (arr) => {
  let holder = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == 0 && arr.slice(i + 1).reduce((x, y) => x + y, 0) == 0) {
      holder.push(0);
    } else if (
      arr.slice(0, i).reduce((x, y) => x + y, 0) ==
      arr.slice(i + 1).reduce((x, y) => x + y, 0)
    ) {
      holder.push(i);
    }
  }
  if (holder.length == 0) {
    return -1;
  } else {
    return holder[0];
  }
};

// console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
// console.log(pivotIndex([2, 1, -1])); // 0
// console.log(pivotIndex([-1, -1, 0, 0, -1, -1])); // 2
