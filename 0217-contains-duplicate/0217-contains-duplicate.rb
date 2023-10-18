# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
    unique_numbers = Set.new

    nums.each do |num|
        if unique_numbers.include?(num)
            return true
        end 
        unique_numbers.add(num)
    end

    false
end