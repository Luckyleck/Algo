/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity, second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            // Update the smallest number
            first = num;
        } else if (num <= second) {
            // Update the second smallest number
            second = num;
        } else {
            // If we find a number greater than both first and second, return true
            return true;
        }
    }

    // If no triplet is found
    return false;
};