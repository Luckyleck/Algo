/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0; // Check if the number is negative
    let reversed = 0;

    // Work with the absolute value of the number
    x = Math.abs(x);

    while (x > 0) {
        const digit = x % 10; // Extract the last digit
        reversed = reversed * 10 + digit; // Add the digit to the reversed number

        // Remove the last digit from x
        x = Math.floor(x / 10);
    }

    // Restore the sign of the number
    if (isNegative) reversed = -reversed;

    // Check if the reversed number is within the 32-bit signed integer range
    if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) return 0;

    return reversed;
};