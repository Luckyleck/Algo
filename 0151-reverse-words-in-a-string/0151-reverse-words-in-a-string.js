/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.trim().split(' ');
    
    reversed = words.reverse().filter(word => word !== '')
    
    return reversed.join(' ');
};