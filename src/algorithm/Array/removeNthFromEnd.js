/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const templHead = {
    next:head
  };

  /**
   * 核心思路：倒数第 N 个节点，可以使用两个快慢指针，快指针先遍历链表 N 步，然后在开始同时遍历慢指针，这样两个指针之间的间距就是 N 个节点，当快指针指向空的时候就说明慢指针已经
   * 指向倒数第 N 个节点了。这里注意点事需要记住第 N 个指针的前一个指针，否则删除后无法连接起来。
    */
  let fast  = templHead;
  let slow  = templHead;
  let prev = templHead;
   

  while(n>0 && fast) {
   
    fast = fast.next;
    n-=1;
  }
    
  while(fast) {
    fast = fast.next;
    prev = slow;
    slow = slow.next; 
  }
  prev.next = slow.next;

  return templHead.next;
};