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

        // If the tempArray size reaches the chunk size, push it to finalArray and reset tempArray
        if (tempArray.length === size) {
            finalArray.push(tempArray);
            tempArray = [];
        }
    }

    // Add the remaining items in tempArray to finalArray
    if (tempArray.length > 0) {
        finalArray.push(tempArray);
    }

    return finalArray;
};
