//将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} pHead1
 * @param {ListNode} pHead2
 * @return {ListNode}
 */
var mergeTwoLists = function(pHead1, pHead2) {
  var headnode = new ListNode()
  if (l1 == null) return l2
  if (l2 == null) return l1
  if (l1.val < l2.val) {
    headnode = l1
    l1 = l1.next
  } else {
    headnode = l2
    l2 = l2.next
  }
  var nodelist = headnode

  while (l1 != null && l2 != null) {
    //等价于 while( l1 &&l2)
    if (l1.val < l2.val) {
      headnode.next = l1
      l1 = l1.next
    } else {
      headnode.next = l2
      l2 = l2.next
    }
    headnode = headnode.next
  }
  //如果l1遍历完就去遍历l2
  if (l1) headnode.next = l1
  else headnode.next = l2
  return nodelist
}
