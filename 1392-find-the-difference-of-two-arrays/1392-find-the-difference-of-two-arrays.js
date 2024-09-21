/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let first_array = []
    let second_array = []
    
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    for (let num of set1) {
        if (!set2.has(num)) {
            first_array.push(num);
        }
    }

    for (let num of set2) {
        if (!set1.has(num)) {
            second_array.push(num);
        }
    }

    return [first_array, second_array];
};