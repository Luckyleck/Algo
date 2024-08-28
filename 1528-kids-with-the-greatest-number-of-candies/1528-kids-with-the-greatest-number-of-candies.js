/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
  // Find the maximum number of candies among all kids
  const maxCandies = Math.max(...candies);

  // Iterate through each kid
  const result = candies.map((candy) => {
    // Check if the kid can have the greatest number of candies after getting extra candies
    return candy + extraCandies >= maxCandies;
  });

  return result;
}