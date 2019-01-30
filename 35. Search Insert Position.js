/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.indexOf(target) !== -1) return nums.indexOf(target)
  nums.push(target)
  nums.sort((a, b) => a - b)
  return nums.indexOf(target)
}
