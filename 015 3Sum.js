/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort()
  var arr = []
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1,
      r = nums.length - 1
    if (nums[i] === nums[i - 1] && i > 0) continue
    while (l < r) {
      sum = nums[i] + nums[l] + nums[r]
      if (sum === 0) {
        let item = [nums[i], nums[l], nums[r]]
        if (l > i + 1 || r < nums.length - 1) {
          if (nums[l] === nums[l + 1] && nums[l + 1] !== undefined) {
            l++
            continue
          }

          if (nums[r] === nums[r - 1] && nums[r - 1] !== undefined) {
            r--
            continue
          }
        }
        arr.push(item)
      }
      if (sum <= 0) l++
      else r--
    }
  }
  return arr
}
