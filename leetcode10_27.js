// Nth Smallest Element (Array Series #4)

// Task
// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2
// arr=[15,20,7,10,4,3]   n=3    ==> return 7
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2
// arr=[2,1,3,3,1,2],     n=3    ==> return 2

// parameters array and integer
// return integer
// examples
// pseudo code given an array and an integer sort through the array in ascending order, use the num - 1 to access the appropriate index in the array

const nthSmallest = (arr, num) => {
  const sortedArr = arr.sort((x, y) => x - y);
  return sortedArr[num - 1];
};

// console.log(nthSmallest([3, 1, 2], 2)); // 2

// console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3)); // 7

// console.log(nthSmallest([-5, -1, -6, -18], 4)); // -1

// console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5)); // -2

// console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4)); // 2

// console.log(nthSmallest([2, 1, 3, 3, 1, 2], 3)); // 2

// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((

const duplicateEncode = (str) => {
  let holder = "";
  const splitStr = str.toLowerCase().split("");
  splitStr.map((x) =>
    splitStr.indexOf(x) == splitStr.lastIndexOf(x)
      ? (holder += "(")
      : (holder += ")")
  );

  return holder;
};

// console.log(duplicateEncode("din")); // "((("

console.log(duplicateEncode("recede")); // "()()()"

console.log(duplicateEncode("Success")); // ")())())"

console.log(duplicateEncode("(( @")); // "))(("
