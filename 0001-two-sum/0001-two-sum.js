/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let finalArray = [] 
        for (let i = 0; i < nums.length; i++ ) {
            for(let j = i + 1; j < nums.length;j++) {
            if (nums[i] + nums[j] === target) {
                finalArray.push(i,j) 
            }
        }
    
    }     return finalArray;  
}