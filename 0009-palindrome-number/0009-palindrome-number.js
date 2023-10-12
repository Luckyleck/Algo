/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (num) => {
    return String(num) === String(num).split('').reverse().join('')
}