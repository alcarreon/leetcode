// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// Example 2:

// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false]
// Explanation: There is only 1 extra candy.
// Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
// Example 3:

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]

// Constraints:

// n == candies.length
// 2 <= n <= 100
// 1 <= candies[i] <= 100
// 1 <= extraCandies <= 50

// parameters array and integer
// return array
// examples
// pseudo code create an empty array to hold the result, then use a for loop to iterate over the array, create a variable which is the equal to the current element plus the extra candies and create an array inside the first for loop to hold the result of chechking each element, create a second for loop iterating over the array, check to see if the element with the extracandies is bigger or equal to the element of remaining elements of the array if it is push true to the array inside the for loop otherwise push false check the array to make sure all elements are true if they are push true to the array holding the results otherwise push false

function kidsWithCandies(candies, extraCandies) {
  let holder = [];
  for (let i = 0; i < candies.length; i++) {
    let current = candies[i] + extraCandies;
    let bigger = [];
    for (let j = 0; j < candies.length; j++) {
      if (current >= candies[j]) {
        bigger.push(true);
      } else {
        bigger.push(false);
      }
    }

    if (bigger.every((x) => x == true)) {
      holder.push(true);
    } else {
      holder.push(false);
    }
  }

  return holder;
}

// console.log(kidsWithCandies([2, 3], 3)); // [true,true,true,false,true]

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true,true,true,false,true]

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true,false,false,false,false]

console.log(kidsWithCandies([12, 1, 12], 10)); // [true,false,true]
