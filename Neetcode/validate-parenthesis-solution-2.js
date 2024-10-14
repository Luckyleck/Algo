class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(s) {
        const dictionary = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        const stack = [];

        for (let char of s) {
            if (['(', '{', '['].includes(char)) {
                stack.push(char);  // Push opening brackets onto the stack
            } else {
                // Check if the stack is empty or the top doesn't match
                if (stack.length === 0 || stack.pop() !== dictionary[char]) {
                    return false;
                }
            }
        }

        // If the stack is empty at the end, all parentheses were valid
        return stack.length === 0;
    }
}