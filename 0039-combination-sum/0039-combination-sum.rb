# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}
def combination_sum(candidates, target)
    result = []

    backtrack = lambda do |remaining, combination, start|
        if remaining == 0
        result << combination.clone
            return
        end
        return if remaining < 0

        (start...candidates.length).each do |i|
        combination << candidates[i]
        backtrack.call(remaining - candidates[i], combination, i)
        combination.pop
        end
    end

  backtrack.call(target, [], 0)
  result
end