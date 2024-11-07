/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(" ")
    let goodwords = [];

    for (let word of words) {
        if (word !== "") {
            goodwords.unshift(word);
        }
    }
    return goodwords.join(" ");
}