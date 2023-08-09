// Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

// function gcdOfStrings(str1, str2) {
//   holder = [];

//   for (let i = 1; i <= str2.length; i++) {
//     console.log(str2.slice(0, i));
//     console.log(str1.split(str2.slice(0, i)));
//     console.log(str2.split(str2.slice(0, i)));
//     let str1SplitCheck = str1.split(str2.slice(0, i)).join("");
//     let str2Splitcheck = str2.split(str2.slice(0, i)).join("");
//     if (str1SplitCheck === "" && str2Splitcheck === "") {
//       holder.push(str2.slice(0, i));
//     }
//   }
//   if (holder.length === 0) {
//     return "";
//   } else {
//     return holder.sort((x, y) => y.length - x.length, 0)[0];
//   }
// }

// parameters two strings
// return string
// examples
// pseudo code create an empty array with two elements of empty strings, then split both the strings into their own variables, check to see which string is smallest and put the length of the smallest string and then the smallest string followed by the last string into an array, use the number from the first element of the array to iterate and check to see if the first character string 1 and 2 are the same if they are add it the first element of the empty array, then check to see if it can split the first string with only empty strings left otherwise and that it also splits the second string with nothing left

function gcdOfStrings(str1, str2) {
  let holder = ["", ""];
  let str1Split = str1.split("");
  let str2Split = str2.split("");
  let minorWord =
    str1.length < str2.length
      ? [str1.length, str1, str2]
      : [str2.length, str2, str1];
  console.log(minorWord);

  for (let i = 0; i < minorWord[0]; i++) {
    if (str1Split[i] == str2Split[i]) {
      holder[0] += str1Split[i];

      if (
        minorWord[2].split(holder[0]).every((e) => e === "") &&
        minorWord[1].split(holder[0]).every((e) => e === "")
      ) {
        holder[1] = holder[0];
      }
    }
  }
  return holder[1];
}

console.log(gcdOfStrings("ABCABC", "ABC")); // "ABC"

// console.log(gcdOfStrings("ABABAB", "ABAB")); // "AB"

// console.log(gcdOfStrings("LEET", "CODE")); // ""

// console.log(
//   gcdOfStrings(
//     "TAUXXTAUXXTAUXXTAUXXTAUXX",
//     "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
//   )
// ); // "TAUXX"

// console.log(gcdOfStrings("ABABABAB", "ABAB")); // "ABAB"

// console.log(
//   gcdOfStrings(
//     "NLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGM",
//     "NLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGM"
//   )
// );
