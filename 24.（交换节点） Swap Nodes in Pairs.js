// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 示例:

// 给定 1->2->3->4, 你应该返回 2->1->4->3.
// 说明:

// 你的算法只能使用常数的额外空间。
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
var swapPairs = function(head) {
  if (!head || !head.next) return head //空链和一个元素的链直接返回
  let l = head //定义需要交换的左右节点
  let r = l.next
  let p = new swapPairs()
  l.next = r.next //交换第一二个节点
  r.next = l
  head = r //首节点赋值为第二个节点
  p = l //p赋值为第一对交换成功的右节点
  while (l.next && l.next.next) {
    //如果剩余节点为0或1则返回head，否则进入循环
    l = l.next //转换到下一节点对
    r = l.next
    l.next = r.next //交换节点l，r
    r.next = l
    p.next = r
    p = l
  }
  return head
}
