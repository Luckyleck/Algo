# @param {String} haystack
# @param {String} needle
# @return {Integer}
def str_str(haystack, needle)
    search = haystack.index(needle);
    search.nil? ? -1 : search
end