# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num)

def guessNumber(n)
    (1..n).bsearch do |mid|
        case guess(mid)
            when 0 then true
            when -1 then -1
            when 1 then 1
        end
    end
end