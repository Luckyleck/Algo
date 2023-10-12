/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  return findCommonPrefix(strs, 0, strs.length - 1);
}

function findCommonPrefix(strs, left, right) {
  if (left === right) {
    return strs[left];
  }

  const mid = Math.floor((left + right) / 2);
  const prefix1 = findCommonPrefix(strs, left, mid);
  const prefix2 = findCommonPrefix(strs, mid + 1, right);

  return commonPrefix(prefix1, prefix2);
}

function commonPrefix(str1, str2) {
  const minLength = Math.min(str1.length, str2.length);
  for (let i = 0; i < minLength; i++) {
    if (str1[i] !== str2[i]) {
      return str1.substring(0, i);
    }
  }
  return str1.substring(0, minLength);
}
