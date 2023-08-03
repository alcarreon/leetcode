// Height Checker

// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation:
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.
// Example 2:

// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.
// Example 3:

// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.

// parameters array
// return number
// examples
// pseudo code create a variable to hold the final result, then create a copy of the array and sort it in ascending order, iterate over the original array and compare the elements to the respective index of the sorted array, if they dont match incriment the result by one

const heightChecker = (arr) => {
  let result = 0;
  const sortedArr = [...arr].sort((x, y) => x - y);
  arr.map((x, y) => {
    if (x != sortedArr[y]) {
      result++;
    }
  });
  return result;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3])); // 3

// console.log(heightChecker([5, 1, 2, 3, 4])); // 5

// console.log(heightChecker([1, 2, 3, 4, 5])); // 0
