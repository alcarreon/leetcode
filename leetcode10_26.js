// Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

const isSubsequence = (s, t) => {
  let holder = [];
  let splitT = t.split("");
  let count = 0;
  splitT.map((x, y) => {
    if (s[count] == x) {
      count += 1;
    }
  });
  return count === s.length ? true : false;
};

console.log(isSubsequence("abc", "ahbgdc"));
// console.log(isSubsequence("axc", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));
// console.log(isSubsequence("b", "c"));
