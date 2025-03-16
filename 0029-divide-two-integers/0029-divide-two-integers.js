/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === 0) return 0;
    if (dividend === -(2**31) && divisor === -1) return (2**31) - 1; // Handle overflow case
    
    let isNegative = (dividend < 0) !== (divisor < 0);
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let quotient = 0;
    
    while (a >= b) {
        let temp = b, multiple = 1;
        while (a >= (temp << 1) && (temp << 1) > 0) { // Ensure no overflow
            temp <<= 1;
            multiple <<= 1;
        }
        a -= temp;
        quotient += multiple;
    }
    
    return isNegative ? -quotient : quotient;
};