//     给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

// 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
//哈希查找
const twoSum = (nums, target) => {
  const tmp = {}
  for (let i = 0; i < nums.length; i++) {
    if (tmp[nums[i]]) tmp[nums[i]].push(i)
    else tmp[nums[i]] = [i]
  }
  for (let i = 0; i < nums.length; i++) {
    if (tmp[target - nums[i]]) {
      if (target - nums[i] === nums[i]) {
        if (tmp[nums[i]].length > 1) return [tmp[nums[i]][0], tmp[nums[i]][1]]
        else continue
      } else return [i, tmp[target - nums[i]][0]]
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9))

// var twoSum = function (nums, target) {
//   var len = nums.length
//   for (var i = 0; i < nums.length; i++) {
//     if (i === nums.length - 1) return
//     for (var j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// };
