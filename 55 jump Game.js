// 其实这题最好的解法不是DP，而是贪婪算法Greedy Algorithm，因为我们并不是很关心每一个位置上的剩余步数，我们只希望知道能否到达末尾，
// 也就是说我们只对最远能到达的位置感兴趣，所以我们维护一个变量reach，表示最远能到达的位置，初始化为0。
// 遍历数组中每一个数字，如果当前坐标大于reach或者reach已经抵达最后一个位置则跳出循环，
// 否则就更新reach的值为其和i + nums[i]中的较大值，其中i + nums[i]表示当前位置能到达的最大位置，代码如下：
var canJump = function(nums) {
  let len = nums.length
  let reach = 0
  for (let i = 0; i < len; i++) {
    if (i > reach || reach >= len - 1) {
      break
    }
    reach = Math.max(reach, i + nums[i])
  }
  return reach >= len - 1
}
