// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const freqCounter = {};
    let mostFreq = str[0];
    for (let char of str) {
        if (freqCounter[char] === undefined) {
            freqCounter[char] = 0;
        }
        freqCounter[char] += 1;
        if (freqCounter[char] > freqCounter[mostFreq]) {
            mostFreq = char;
        }
    }
    return mostFreq;
}

module.exports = maxChar;
