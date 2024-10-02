/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const freq = {}

    for (let num of arr) {
        if (freq[num]) {
            freq[num] += 1
        } else {
            freq[num] = 1
        }
    }

    const uniqueVals = new Set(Object.values(freq))

    return uniqueVals.size === Object.values(freq).length
};