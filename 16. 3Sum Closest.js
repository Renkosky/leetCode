/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 这道题目给了我们一个nums array 和一个 target， 让我们找到一组三数之和，
// 并且是最接近于target的。由于我们做过了三数之和，所以差不多是一样方法来做这道题
// （这里充分说明了，要老老实实顺着题号做下去，较先的题目都可以被用来辅助之后的题）。
// 方法就是先sort一下array，为啥要sort呢，因为要用到two pointers 来遍历找两数之和，
// 只有在从小到大排序之后的结果上，才能根据情况移动left 和right。
// 当确定好了第一个数字后，就在剩下的array里找两数之和，在加上第一个数字，
// 用这个temp_sum减去target 来得到temp_diff，如果temp_diff比之前的小，那么更新diff
// 和 closestSum。 利用two pointers 特性， 如果temp_sum 比target 小的话，
// 说明我们需要更大的sum，所以要让left++以便得到更大的sum。
// 如果temp_sum 比target 大的话，我们就需要更小的sum。如果相等的话，
// 直接return 就可以了。因为都相等了，那么差值就等于0，不会有差值再小的了。
var threeSumClosest = function(nums, target) {
  if (nums.length <= 3) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
      result += nums[i]
    }
    return result
  }
  nums.sort()
  let sum = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1
    let r = nums.length - 1

    while (l < r) {
      let current = nums[i] + nums[l] + nums[r]

      if (Math.abs(target - current) < Math.abs(target - sum)) {
        sum = current
        if (sum == target) return sum
      }
      if (current < target) {
        // meaning need larger sum
        l++
      } else {
        // meaning temp_sum == target, this is the closestSum
        r--
      }
    }
  }
  return sum
}
