/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const finalWord = [];
    const maxLength = Math.max(word1.length, word2.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            finalWord.push(word1[i]);
        }
        if (i < word2.length) {
            finalWord.push(word2[i]);
        }
    }
    
    return finalWord.join('');
};