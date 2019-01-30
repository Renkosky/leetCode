var removeDuplicates = function(nums) {
  let number = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[number]) {
      number++
      nums[number] = nums[i]
    }
  }

  return ++number
}
