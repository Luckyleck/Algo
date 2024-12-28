/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let currentSum = 0;

    // Initialize the sum of the first k elements
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    let maxSum = currentSum;

    // Slide the window across the array
    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    // Return the maximum average
    return maxSum / k;
};