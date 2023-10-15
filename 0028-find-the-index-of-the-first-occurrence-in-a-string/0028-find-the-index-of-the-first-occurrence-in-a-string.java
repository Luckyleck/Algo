class Solution {
    public int strStr(String haystack, String needle) {
        int search = haystack.indexOf(needle);
        return search != -1 ? search : -1;
    }
}