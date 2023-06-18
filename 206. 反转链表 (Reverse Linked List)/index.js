/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null; // 不能是 undefined，否则会报错
  let curr = head;
  while(curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr =  next
  }
  return prev; // 注意这里
};