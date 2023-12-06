/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    const counter = {}

    for (let num of nums) {
        if (counter[num]) {
            counter[num]++;
        } else {
            counter[num] = 1;
        }
    }

    let maxCount = 0;
    let majorityEle;

    for (let key in counter) {
        if (counter[key] > maxCount) {
            maxCount = counter[key]
            majorityEle = key;
        }
    }

    return majorityEle
};