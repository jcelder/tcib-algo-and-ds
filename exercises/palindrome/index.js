// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let midpoint = Math.floor(str.length / 2);
    for (let i = 0; i < midpoint; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

module.exports = palindrome;


// function palindrome(str) {
//     return str.split('').every((char, pos) => char === str[str.length - 1 - pos])
// }