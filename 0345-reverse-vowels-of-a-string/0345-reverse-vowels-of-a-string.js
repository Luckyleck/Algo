/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let strArr = s.split('');
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(strArr[left])) {
            left++;
        }
        while (left < right && !vowels.has(strArr[right])) {
            right--;
        }
        if (left < right) {
            [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
            left++;
            right--;
        }
    }

    return strArr.join('');
};