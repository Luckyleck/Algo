/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sPointer = 0;  // Pointer for string s
    let tPointer = 0;  // Pointer for string t

    // Loop through string t
    while (tPointer < t.length && sPointer < s.length) {
        if (s[sPointer] === t[tPointer]) {
            sPointer++;  // Move sPointer when there's a match
        }
        tPointer++;  // Always move tPointer
    }

    // If sPointer has traversed the entire length of s, s is a subsequence
    return sPointer === s.length;
};