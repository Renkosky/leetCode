/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
    2
   / \
  1   3
输出: true
示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。
 * 
 * 
 * 
 * 
 * 
 */
var isValidBST = function(root) {
  var flag = true

  var validate = function(node, min, max) {
    if (flag && node) {
      if (node.left) {
        if (max) {
          node.left.val < node.val && node.left.val > max
            ? validate(node.left, node.val, max)
            : (flag = false)
        } else {
          node.left.val < node.val
            ? validate(node.left, node.val, max)
            : (flag = false)
        }
      }

      if (node.right) {
        if (min) {
          node.right.val > node.val && node.right.val < min
            ? validate(node.right, min, node.val)
            : (flag = false)
        } else {
          node.right.val > node.val
            ? validate(node.right, min, node.val)
            : (flag = false)
        }
      }
    }
  }
  validate(root, null, null)

  return flag
}
