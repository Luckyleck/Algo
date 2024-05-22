/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";

    let prevTerm = "1";

    for (let i = 2; i <= n; i++) {
        let currentTerm = "";
        let count = 1;

        for (let j = 1; j < prevTerm.length; j++) {
            if (prevTerm[j] === prevTerm[j - 1]) {
                count++;
            } else {
                currentTerm += count + prevTerm[j - 1];
                count = 1;
            }
        }

        currentTerm += count + prevTerm[prevTerm.length - 1];
        prevTerm = currentTerm;
    }

    return prevTerm;
};