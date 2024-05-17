/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const isValidChar = (c) => {
        const code = c.charCodeAt(0);
        return (code >= 97 && code <= 122) || (code >= 48 && code <= 57); // a-z or 0-9
    };

    const cleanedString = s.toLowerCase()
                           .split('')
                           .filter(isValidChar)
                           .join('');

    let left = 0;
    let right = cleanedString.length - 1;

    while (left <= right) {
        if (cleanedString[left] !== cleanedString[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};