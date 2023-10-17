# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
   
    i = nums.length - 1

    while i > 0
        if nums[i] === nums[i - 1]
            nums.delete_at(i)
        end

        i -= 1;
    end 

    return nums.length

end