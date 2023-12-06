/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueNumbers = new Set();

    for (const num of nums) {
        if (uniqueNumbers.has(num)) {
            return true;
        }
        uniqueNumbers.add(num)
    }

    return false
};