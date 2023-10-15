/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const search = haystack.indexOf(needle);
    return search !== -1 ? search : -1
};