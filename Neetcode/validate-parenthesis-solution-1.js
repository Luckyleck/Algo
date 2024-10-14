class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const dictionary = {
            '(': ')',
            '{': '}',
            '[': ']'
        }
        for (let i = 0; i < Math.floor(s.length / 2); i++) {
            let first_char = s[i];
            let last_char = s[s.length - 1 - i];

            console.log('first char:', first_char);
            console.log('last char:', last_char);


            switch (first_char) {
                case '(':
                case '{':
                case '[':
                    if (last_char !== dictionary[first_char]) {
                        return false;
                    }
                    break;
                default:
                    return false; 
            }
        }

        return true;
    }
}
