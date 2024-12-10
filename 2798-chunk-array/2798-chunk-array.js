/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    
    let finalArray = [];
    let tempArray = [];

    for (let i = 0; i < arr.length; i++) {
        tempArray.push(arr[i]);

        if (tempArray.length === size) {
            finalArray.push(tempArray);
            tempArray = [];
        }
    }

    if (tempArray.length > 0) {
        finalArray.push(tempArray);
    }

    return finalArray;
};
