// 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
var addTwoNumbers = function(l1, l2) {
  var sum = l1.val + l2.val
  var lFirst = new ListNode(sum % 10)
  var carry = sum >= 10 ? 1 : 0
  var lPrev = lFirst
  l1 = l1.next
  l2 = l2.next
  while (l1 !== null || l2 !== null) {
    var v1 = l1 === null ? 0 : l1.val
    var v2 = l2 === null ? 0 : l2.val
    sum = v1 + v2 + carry
    var l = new ListNode(sum % 10)
    carry = sum >= 10 ? 1 : 0
    lPrev.next = l
    lPrev = l
    if (l1 !== null) l1 = l1.next
    if (l2 !== null) l2 = l2.next
  }
  if (carry > 0) {
    l = new ListNode(1)
    lPrev.next = l
  }
  return lFirst
}
