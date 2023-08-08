// Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

// parameters two strings
// return string
// examples
// pseudo code find the longest of the two strings and assign it to a variable and create an empty string to hold the result, use a for loop to iterate over the longest string and then if the iterator is less than the length of the shortest string add it to the empty string, then if the iterator is greater than the the string add the element from the other string to the empty string

function mergeAlternately(word1, word2) {
  const longest = Math.max(word1.length, word2.length);
  let holder = "";

  for (let i = 0; i < longest; i++) {
    if (i < word1.length && i < word2.length) {
      holder += `${word1[i]}${word2[i]}`;
    } else if (word1[i] == undefined) {
      holder += word2[i];
    } else {
      holder += word1[i];
    }
  }

  return holder;
}

console.log(mergeAlternately("abc", "pqr")); // "apbqcr"

console.log(mergeAlternately("ab", "pqrs")); // "apbqrs"

console.log(mergeAlternately("abcd", "pq")); // "apbqcd"
