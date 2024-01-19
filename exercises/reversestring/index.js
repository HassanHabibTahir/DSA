// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//exercise 1
// function reverse(str) {
//   const arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }
// exercise 2

// function reverse(str) {
//   let reversed = "";
//   for (let character of str) {
//     console.log(character);
//     reversed = character + reversed;
//   }r
//   return reversed;
// }

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
