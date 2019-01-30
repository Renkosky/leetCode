/**
 * 此题是有序数组转二叉搜索树的进阶。可以查看我之前的博客：https://blog.csdn.net/weixin_36769175/article/details/81331267
 * 依旧是相同的思路，但有所变化。
 * 链表的中间值查找通过快慢指针实现。快慢指针即两个指针同时查找，慢指针一次移一个，快指针一次移两个。快指针遍历完时，慢指针恰好到链表中部。（注意！判断循环的条件有两个，当前快指针不为空，当前快指针.next也不能为空）
 * 接下来的问题，也是我被卡主的地方。就是在获取root.left时，如何限制链表只遍历到中部。解决办法就是在函数的形参中引入tail，即给出tail，限制链表在遍历到tail出现时结束遍历。
 * 参考博客：https://blog.csdn.net/m0_37316917/article/details/79995668
 */
var sortedListToBST = function(head) {
  return childListToBST(head, null)
}

var childListToBST = function(head, tail) {
  if (head === tail) {
    return null
  } else if (head.next === tail) {
    return new TreeNode(head.val)
  } else {
    var slow = head
    var quick = head
    //快慢指针，查找到链表的中间值
    while (quick !== tail && quick.next !== tail) {
      slow = slow.next
      quick = quick.next.next
    }

    var root = new TreeNode(slow.val)
    root.left = childListToBST(head, slow)
    root.right = childListToBST(slow.next, tail) //注意right的终结不是null而是tail
    return root
  }
}
