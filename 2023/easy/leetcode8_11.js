// Ransom Note
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

// parameters two strings
// return boolean
// examples
// pseudo code create two objects to hold the count of letters and their occurrence, split the first string and add each character to the object updating how many times it appears do the same thing with the magazine string, then iterate through the ransome string and check to see if the number of times it appears is less than or equal to the number of times it appears in the magazine count, check the array to see that all elements are true if they are return true otherwise return false

function canConstruct(ransom, magazine) {
  let ransomCount = {};
  let magazineCount = {};

  ransom.split("").forEach((x) => {
    ransomCount[x] = ransomCount[x] + 1 || 1;
  });

  magazine.split("").forEach((x) => {
    magazineCount[x] = magazineCount[x] + 1 || 1;
  });

  let allRansom = Object.keys(ransomCount);

  charsIn = allRansom.map((x) => {
    if (ransomCount[x] <= magazineCount[x]) {
      return true;
    } else {
      return false;
    }
  });
  return charsIn.every((x) => x == true);
}

console.log(canConstruct("a", "b")); // false

console.log(canConstruct("aa", "ab")); // false

console.log(canConstruct("aa", "aab")); // true

console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"));
