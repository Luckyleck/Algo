/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let maxWater = 0;
    
    while (left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const area = minHeight * width;
        maxWater = Math.max(maxWater, area);
        
        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
};