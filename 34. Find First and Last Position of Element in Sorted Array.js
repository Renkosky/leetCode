//对于排序的数组进行查找，二分查找总是应该首先考虑的解决办法。
// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 如果数组中不存在目标值，返回 [-1, -1]。

// 示例 1:

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: [3,4]
// 示例 2:

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: [-1,-1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0,
    right = nums.length
  let p = -1
  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    if (nums[mid] == target) {
      p = mid
      break
    }
    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  if (p == -1) {
    return [-1, -1]
  } else {
    let a = p,
      b = p
    while (a > 0 && nums[a - 1] == target) a--
    while (b < nums.length - 1 && nums[b + 1] == target) b++
    return [a, b]
  }
}
