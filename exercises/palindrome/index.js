// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let reverse = str.split("").reverse().join("");
  return reverse === str;
}

//
function palindrome(str) {
  return str.split("").every((char, i) => {
    // [str.length - i - 1]
    // -1 is decreasing the array length
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
