// Flipping an Image

// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].

// Example 1:

// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// Example 2:
// Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

const flipAndInvertImage = (arr) => {
  let flip = arr.map((x) => x.reverse());
  for (let i = 0; i < flip.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == 0) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = 0;
      }
    }
  }

  return flip;
};

// console.log(
//   flipAndInvertImage([
//     [1, 1, 0],
//     [1, 0, 1],
//     [0, 0, 0],
//   ])
// ); // [[1,0,0],[0,1,0],[1,1,1]]

// console.log(
//   flipAndInvertImage([
//     [1, 1, 0, 0],
//     [1, 0, 0, 1],
//     [0, 1, 1, 1],
//     [1, 0, 1, 0],
//   ])
// ); // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

const nums = [1, 3, 5, 15, 20, 30];

const fizzBuzz = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (nums[i] % 15 == 0) {
      console.log("fizzbuzz");
    } else if (nums[i] % 5 == 0) {
      console.log("buzz");
    } else if (nums[i] % 3 == 0) {
      console.log("fizz");
    }
  }
};

console.log(fizzBuzz(nums));
