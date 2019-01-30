/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  let level = [root]
  const result = []
  while (level.length) {
    const nextLevel = [],
      arr = [] //每一层节点的数组
    level.forEach(node => {
      //当前level保存left和right
      arr.push(node.val)
      if (node.left) nextLevel.push(node.left)
      if (node.right) nextLevel.push(node.right)
    })
    result.push(arr)
    level = nextLevel //下一个左或者右节点
  }
  return result
}
