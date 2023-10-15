class Solution(object):
    def strStr(self, haystack, needle):
        search = haystack.find(needle)
        if search != -1:
            return search
        else:
            return -1
        