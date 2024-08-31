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
var swapPairs = function(head) {
  const templHead = {
    next:head,
  };

  let current = templHead;
  // 核心思想：next 和 next.next 存在，则需要调换，于是调换后 current 应该指向它当前指向节点的下一个节点。即：current.next = current.next.next。
  // 接下来的当前节点应该指向节点应该指向被调换节点，即：current.next.next = tmp0; 最后被调换到后面的节点应该连接剩余没有遍历到的节点。
  while(current.next && current.next.next) {
    const tmp0 = current.next;
    const tmp1 = current.next.next.next;
    
    current.next = current.next.next;
    current.next.next = tmp0;
    current.next.next.next = tmp1;

    current = current.next.next;
   
  }

  return templHead.next;
};