var treeDepth = function(root) {
  if (root === null) return 0
  let leftDepth = maxDepth(root.left)
  let rightDepth = maxDepth(root.right)
  return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1
}
var isBalanced = function(root) {
  if (root === null) return true
  let left = treeDepth(root.left)
  let right = treeDepth(root.right)
  let diff = left - right
  if (Math.abs(diff) !== 1) {
    return false
  }
  return isBalanced(root.left) && isBalanced(root.right)
}
