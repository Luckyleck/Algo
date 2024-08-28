/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    let gcd = function(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    };
    let g = gcd(str1.length, str2.length);
    return str1.substring(0, g);
};