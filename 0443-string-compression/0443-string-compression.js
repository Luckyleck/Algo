/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0, read = 0;
    
    while (read < chars.length) {
        let char = chars[read];
        let count = 0;
        
        // Count the number of consecutive repeating characters
        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }
        
        // Write the character
        chars[write] = char;
        write++;
        
        // Write the count if greater than 1
        if (count > 1) {
            const countStr = count.toString();
            for (let c of countStr) {
                chars[write] = c;
                write++;
            }
        }
    }
    
    return write;
};