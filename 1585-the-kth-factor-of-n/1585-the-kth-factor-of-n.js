/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    const factors = [];
    
    // Find all factors
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
            
            // If we've found k factors, we can return the kth one
            if (factors.length === k) {
                return i;
            }
        }
    }
    
    // If we haven't found k factors, return -1
    return -1;
};