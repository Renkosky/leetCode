/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorder(arr, root) {
  if (!root) return
  if (root.left) {
    inorder(arr, root.left)
  }
  arr.push(root.val)
  if (root.right) {
    inorder(arr, root.right)
  }
}
var inorderTraversal = function(root) {
  let arr = []
  inorder(arr, root)
  return arr
}

//前序遍历先访问根节点
function inorder(arr, root) {
  if (!root) return
  arr.push(root.val)
  if (root.left) {
    inorder(arr, root.left)
  }
  if (root.right) {
    inorder(arr, root.right)
  }
}
