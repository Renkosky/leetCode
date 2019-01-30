var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b)
  var arr = []
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let l = j + 1,
        r = nums.length - 1
      if (nums[i] === nums[i - 1] && i > 0) continue
      while (l < r) {
        sum = nums[i] + nums[l] + nums[r] + nums[j]
        if (sum === target) {
          let item = [nums[i], nums[j], nums[l], nums[r]]
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
        if (sum < target) l++
        else r--
      }
    }
  }
  return arr
}
