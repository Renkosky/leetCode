var merge = function(nums1, m, nums2, n) {
  var result = []
  var i = 0
  var j = 0
  while (1) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1.shift())
      i++
    } else if (nums1[i] >= nums2[j]) {
      result.push(nums2.shift())
      j++
    } else if (i === m && j < n) {
      result.push(...nums2)
      break
    } else if (j === n && i < m) {
      result.push(...nums1)
      break
    }
  }

  console.log(result)

  return result
}
var merge = function(nums1, m, nums2, n) {
  for (var i = 0; i < n; i++) {
    nums1[m] = nums2[i]

    m++
  }

  nums1.sort(function(a, b) {
    return a - b
  })
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
