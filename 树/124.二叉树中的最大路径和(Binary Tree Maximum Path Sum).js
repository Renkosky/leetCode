var maxPathSum = function(root) {
  var max = 0

  max(root)
  return max
}
function max(root) {
  if (root === null) {
    return root
  }
  let left = max(root.left)
  let right = max(root.right)
  let currSum = Math.max(
    Math.max(left + root.val, right + root.val),
    root.val
  )
  let currMax = Math.max(currSum, left + right + root.val)
  max = Math.max(currMax, max)
  return currSum
}
// 思路
// 首先我们分析一下对于指定某个节点为根时，最大的路径和有可能是哪些情况。第一种是左子树的路径加上当前节点，第二种是右子树的路径加上当前节点，
// 第三种是左右子树的路径加上当前节点（相当于一条横跨当前节点的路径），第四种是只有自己的路径。乍一看似乎以此为条件进行自下而上递归就行了，
// 然而这四种情况只是用来计算以当前节点根的最大路径，如果当前节点上面还有节点，那它的父节点是不能累加第三种情况的。所以我们要计算两个最大值，
// 一个是当前节点下最大路径和，另一个是如果要连接父节点时最大的路径和。我们用前者更新全局最大量，用后者返回递归值就行了。
