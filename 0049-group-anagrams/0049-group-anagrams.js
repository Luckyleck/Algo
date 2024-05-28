/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for (let str of strs) {
        // Sort the string to generate a key for anagrams
        const sortedStr = str.split('').sort().join('');
        // If the key does not exist in the map, create a new entry
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        // Add the original string to the corresponding key's array
        map.get(sortedStr).push(str);
    }

    // Convert the map values to an array of arrays
    return Array.from(map.values());
};