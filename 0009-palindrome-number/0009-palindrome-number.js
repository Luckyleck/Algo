/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let normalOrder = x.toString().split("");
    let reverseOrder = [];

    for (let num of normalOrder) {
        reverseOrder.unshift(num);
    }

    return normalOrder.join("") === reverseOrder.join("");
};