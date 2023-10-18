class Solution(object):
    def containsDuplicate(self, nums):
        unique_numbers = set()

        for num in nums:
            if num in unique_numbers:
                return True
            unique_numbers.add(num)

        return False
        