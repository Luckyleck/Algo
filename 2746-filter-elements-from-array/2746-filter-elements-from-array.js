/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const finalArray = []
    arr.forEach((item, index) => {
        if (fn(item, index)) finalArray.push(item);
    })
    return finalArray
};