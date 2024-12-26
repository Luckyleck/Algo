/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let chars = s.split('');
    let vowels = 'aeiouAEIOU';
 
    let swaps = [];
 
    // Collect all vowels
    for (let i = 0; i < chars.length; i++) { 
        if (vowels.includes(chars[i])) { 
            swaps.push(chars[i]); 
        } 
    } 
    
    // Replace vowels with popped values (automatically in reverse order)
    for (let i = 0; i < chars.length; i++) { 
        if (vowels.includes(chars[i])) { 
            chars[i] = swaps.pop();
        } 
    } 
 
    return chars.join('');
};