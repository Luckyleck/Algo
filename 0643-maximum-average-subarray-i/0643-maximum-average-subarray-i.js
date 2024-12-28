/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum = 0;
    let currentSum = 0;

    // Initialize the first window
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    maxSum = currentSum;

    // Slide the window across the array
    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k]; // Add next element, remove the first element of the previous window
        maxSum = Math.max(maxSum, currentSum);
    }

    // Calculate the maximum average
    return maxSum / k;
};