#使用递归

  这道理对题目的理解花费了很长的时间,入参的 [2,3,4]在javascript中表达的是这样一个形式。

`
  var l1 = new ListNode(2),
      l1.next = new ListNode(3),
      l1.next.next = new ListNode(4)
`

  我是没有找到的办法通过循环来拿到返回的链表中间元素的指针，故使用递归。