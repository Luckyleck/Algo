class Solution(object):
    def removeDuplicates(self, nums):
        i = len(nums) - 1

        while i > 0:
            if nums[i] == nums[i - 1]:
                nums.pop(i)
            i -= 1
        
        return len(nums)
        