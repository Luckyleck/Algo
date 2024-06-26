/**
 * @param {number} x
 * @return {number}
 */
 
const mySqrt = (x) => {
    if (x === 0 || x === 1) return x;
    
    let left = 1;
    let right = Math.floor(x / 2);
    
    for (; left <= right;) {
        let mid = Math.floor((left + right) / 2);
        
        if (mid * mid === x) return mid;
        
        if (mid * mid < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right;
};