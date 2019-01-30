var removeElements = function(head, val) {
  while (head !== null && head.val === val) {
    head = head.next
  }
  if (head === null) return head
  let node = head

  while (node.next !== null) {
    if (node.next.val === val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }
  return head
}
