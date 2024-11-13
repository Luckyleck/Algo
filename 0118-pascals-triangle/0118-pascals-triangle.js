/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // Initialize the triangle with the first row
    const triangle = [[1]];

    // Generate each row starting from the second row
    for (let i = 1; i < numRows; i++) {
        // Get the previous row
        const prevRow = triangle[i - 1];
        // Start the new row with a 1
        const newRow = [1];

        // Each new element is the sum of two elements from the previous row
        for (let j = 1; j < prevRow.length; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }

        // End the new row with another 1
        newRow.push(1);

        // Append the new row to the triangle
        triangle.push(newRow);
    }

    return triangle;
};